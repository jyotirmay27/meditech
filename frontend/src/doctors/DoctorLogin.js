import React, {useState , useReducer ,useContext} from "react";
import { Card, Button, Form} from "react-bootstrap";
import ImageTest from "../jj.jpg";
import { AuthContext } from '../shared/util/AuthContext';
import { useHttpClient } from '../shared/hooks/useHttpClient';
import { Link } from 'react-router-dom';




const DoctorLogin =() =>{
  const auth = useContext(AuthContext);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const onFormSubmit =async e => {
    e.preventDefault();
    var email = document.getElementById('em'). value;
    var password = document.getElementById('pass').value;
    try {
      const responseData = await sendRequest(
        'http://localhost:5000/api/doctors/login',
        'POST',
        JSON.stringify({
          email: email,
          password: password
        }),
        {
          'Content-Type': 'application/json'
        }
      );
      auth.doctorlogin(responseData.doctors.email,responseData.token);
    document.getElementById('em'). value="";
    document.getElementById('pass'). value="";
  }catch (err) {}
};



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
        <Card.Title className="heading"><h1>Doctors Log in</h1></Card.Title>
        <Card.Text>
          <Form className="form-signin" onSubmit={onFormSubmit}>
            <Form.Group controlId="formBasicEmail">
              
              <Form.Control type="email" id="em" placeholder="Email" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              
              <Form.Control type="password" id="pass" placeholder="Password" />
              <br></br>
              <Link to='/doctor/signup'> New Doctor? </Link>
              <Link to='/login'> Patient? </Link>
              <Link to=''> Forgot Password? </Link>
            </Form.Group>
            <Button className="button1" variant="primary" type="submit">Sign in</Button>
          </Form>
        </Card.Text>
      </Card.Body>
      </Card>
    </div>

    
  );
}

export default DoctorLogin;