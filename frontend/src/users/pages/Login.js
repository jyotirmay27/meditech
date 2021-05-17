import React, {useState , useReducer ,useContext} from "react";
import { Card, Button, Form} from "react-bootstrap";
import ImageTest from "../../jj.jpg";
import { AuthContext } from '../../shared/util/AuthContext';

import { Link } from 'react-router-dom';




const Login =() =>{
  const auth = useContext(AuthContext);

  const onFormSubmit = e => {

    e.preventDefault();
    var email = document.getElementById('em'). value;
    var password = document.getElementById('pass').value;
   
         var formDataObj = {
           email: email,
           password:password
         };
    console.log(formDataObj);
    auth.login();
    document.getElementById('em'). value="";
    document.getElementById('pass'). value="";
  }
  return (
    <div>
      <Card className="cont" bg="light" style={{}}>
      <Card.Img style={{
        alignItems:"center",
        height: "15vw",
        width: "15vw",
        marginLeft: "auto",
        marginTop: "0.5rem",
        marginRight: "auto",}}
       variant="top" src={ImageTest} alt="logo" />
      <Card.Body>
        <Card.Title className="heading"><h1>Log in</h1></Card.Title>
        <Card.Text>
          <Form className="form-signin" onSubmit={onFormSubmit}>
            <Form.Group controlId="formBasicEmail">
              
              <Form.Control type="email" id="em" placeholder="Email" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              
              <Form.Control type="password" id="pass" placeholder="Password" />
              <br></br>
              <a href="#"> New Users? </a>
            <a href="#" >&nbsp;&nbsp; Forgot Password? </a>
            </Form.Group>
            <Button className="button1" variant="primary" type="submit">Sign in</Button>
          </Form>
        </Card.Text>
      </Card.Body>
      </Card>
    </div>
  );
}

export default Login;
