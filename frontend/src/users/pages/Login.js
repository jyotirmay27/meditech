import React, {useState , useReducer ,useContext} from "react";
import { Card, Button,Form, Row, Col} from "react-bootstrap";
import ImageTest from "../../jj.jpg";
import { AuthContext } from '../../shared/util/AuthContext';
import { useHttpClient } from '../../shared/hooks/useHttpClient';
import { Link } from 'react-router-dom';
import InputGroup from "react-bootstrap/InputGroup";
import "../../css/Login.css";
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import { useHistory } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';
const Login =() =>{
  const auth = useContext(AuthContext);
  const history = useHistory();

  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const onFormSubmit =async e => {
    e.preventDefault();
    var email = document.getElementById('em'). value;
    var password = document.getElementById('pass').value;
    try {
      const responseData = await sendRequest(
        'http://localhost:5000/api/users/login',
        'POST',
        JSON.stringify({
          email: email,
          password: password
        }),
        {
          'Content-Type': 'application/json'
        }
      );
      auth.login(responseData.user.email, responseData.token);
    document.getElementById('em'). value="";
    document.getElementById('pass'). value="";
  }catch (err) {
   
  }
};
const routeChange= () =>{ 

                history.push('/');
              };
if(error)
{
  return (
  <Alert style={{ margin:"0px", zIndex:"100" ,marginLeft:"auto", marginRight:"auto"}}  variant="danger">
   <Alert.Heading>Login Error</Alert.Heading>
   <p>
     {error}
   </p>
   <hr />
   <div className="d-flex justify-content-end">
     <Button onClick={routeChange} variant="outline-danger">
       Try again
     </Button>
   </div>
 </Alert>)
}


  return (
    <React.Fragment>
      
    <div className="BGGrad">
    <Row className="TopMargin"></Row>
    <Card
        // className="cont"
        bg="light"
        className="MainCard"
    >
        <br />
        <br />
        <br />
        <font color="#6e7582">
            <i className="fas fa-hospital-user fa-8x"></i>
        </font>
        <br />
      <Card.Body>
        <Card.Title className="heading"><h1 className="CardTitleFont">Log In</h1></Card.Title>
        <Card.Text>
          <Form className="form-signin" onSubmit={onFormSubmit}>
            <Form.Group controlId="formBasicEmail">
            <InputGroup className="mb-3">
                                    <InputGroup.Prepend>
                                        <InputGroup.Text id="basic-addon1">
                                            <i class="far fa-envelope"></i>
                                        </InputGroup.Text>
                                    </InputGroup.Prepend>
              <Form.Control type="email" id="em" placeholder="Email" className="FormStyle" />
              </InputGroup>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
            <InputGroup className="mb-3">
                                    <InputGroup.Prepend>
                                        <InputGroup.Text id="basic-addon1">
                                            <i class="fas fa-key"></i>
                                        </InputGroup.Text>
                                    </InputGroup.Prepend>
              <Form.Control type="password" id="pass" placeholder="Password" className="FormStyle" />
              </InputGroup>
              <br></br>
              
              <Row>
                                    <Col sm={4}>
                                        <Link
                                            to="/signup"
                                            className="LinkStyle"
                                        >
                                            
                                            New Users?
                                        </Link>
                                    </Col>
                                    <Col sm={3} style={{ textAlign: "center" }}>
                                        <Link
                                            to="/doctor/login"
                                            className="LinkStyle"
                                        >
                                            
                                            Doctor?
                                        </Link>
                                    </Col>
                                    <Col sm={5} className="right">
                                        <Link to="" className="LinkStyle">
                                            
                                            Forgot Password?
                                        </Link>
                                    </Col>
                                </Row>
            </Form.Group>
            <Button  style={{
                        backgroundColor: "#43bfc7",
                       fontFamily: "Montserrat, sans-serif",
                       fontWeight: "600",
                                }} className="button1"  type="submit">Log In</Button>
          </Form>
        </Card.Text>
      </Card.Body>
      </Card>
    </div>
    </React.Fragment>

    
  );
}

export default Login;
