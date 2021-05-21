import React,{useState , useReducer ,useContext} from "react";
import './styles.css';
import { Card, Button, Form,Row, InputGroup} from "react-bootstrap";
import ImageTest from "../../jj.jpg";
import { AuthContext } from '../../shared/util/AuthContext';
import { useHttpClient } from '../../shared/hooks/useHttpClient';
import { useHistory } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';
function Signup() {


  const auth = useContext(AuthContext);
  const history = useHistory();
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const onFormSubmit =async e => {

    e.preventDefault();
    var email = document.getElementById('em'). value;
    var password = document.getElementById('pass').value;
    var name =document.getElementById('name').value;
    try {
      const responseData = await sendRequest(
        'http://localhost:5000/api/users/signup',
        'POST',
        JSON.stringify({
          name: name,
           email: email,
           password:password
        }),
        {
          'Content-Type': 'application/json'
        }
      );

      auth.login(responseData.user.email,responseData.token);
      document.getElementById('em'). value="";
      document.getElementById('pass'). value="";
      document.getElementById('name'). value="";
    } catch (err) {}
 
  }
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
        <Card.Title className="heading"><h2 className="CardTitleFont">Sign Up</h2></Card.Title>
        <Card.Text>
          <Form className="form-signin" onSubmit={onFormSubmit}>
            <Form.Group controlId="formBasicFName">
            <InputGroup className="mb-3">
                                    <InputGroup.Prepend>
                                        <InputGroup.Text id="basic-addon1">
                                            <i class="fas fa-user"></i>
                                        </InputGroup.Text>
                                    </InputGroup.Prepend>
              <Form.Control  type="text" id="name" placeholder="Name" className="FormStyle" />
              </InputGroup>
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
                                <InputGroup className="mb-3">
                                    <InputGroup.Prepend>
                                        <InputGroup.Text id="basic-addon1">
                                            <i className="fas fa-envelope"></i>
                                        </InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <Form.Control
                                        type="email"
                                        id="em"
                                        placeholder="Email"
                                        className="FormStyle"
                                    />
                                </InputGroup>
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <InputGroup className="mb-3">
                                    <InputGroup.Prepend>
                                        <InputGroup.Text id="basic-addon1">
                                            <i class="fas fa-key"></i>
                                        </InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <Form.Control
                                        type="password"
                                        id="pass"
                                        placeholder="Password"
                                        className="FormStyle"
                                    />
                                </InputGroup>
                            </Form.Group>
            <Button   className="button1"
                                variant="primary"
                                type="submit"
                                style={{
                                    backgroundColor: "#43bfc7",
                                    fontFamily: "Montserrat, sans-serif",
                                    fontWeight: "600",
                                }}>Submit</Button>
          </Form>
        </Card.Text>
      </Card.Body>
      </Card>
    </div>
  );
}

export default Signup;
