import React,{useState , useReducer ,useContext} from "react";
import './styles.css';
import { Card, Button, Form} from "react-bootstrap";
import ImageTest from "../../jj.jpg";
import { AuthContext } from '../../shared/util/AuthContext';
import { useHttpClient } from '../../shared/hooks/useHttpClient';

function Signup() {


  const auth = useContext(AuthContext);
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

      auth.login(responseData.user.email);
      document.getElementById('em'). value="";
      document.getElementById('pass'). value="";
      document.getElementById('name'). value="";
    } catch (err) {}
 
  }

  return (
    <div>
      <Card className="cont"  style={{}}>
      <Card.Img  style={{
        alignItems:"center",
        height: "15vw",
        width: "15vw",
        marginLeft: "auto",
        marginTop: "0.5rem",
        marginRight: "auto",}}
      variant="top" src={ImageTest} alt="logo" />
      <Card.Body>
        <Card.Title className="heading"><h2>Sign Up</h2></Card.Title>
        <Card.Text>
          <Form className="form-signin" onSubmit={onFormSubmit}>
            <Form.Group controlId="formBasicFName">
              <Form.Control  type="text" id="name" placeholder="Name" />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
             
              <Form.Control type="email" id="em" placeholder="Email" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              
              <Form.Control type="password" id="pass" placeholder="Password" />
            </Form.Group>
            <Button className="button1" variant="primary" type="submit">Submit</Button>
          </Form>
        </Card.Text>
      </Card.Body>
      </Card>
    </div>
  );
}

export default Signup;
