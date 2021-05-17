import React from "react";
import './styles.css';
import { Card, Button, Form} from "react-bootstrap";
import ImageTest from "../../jj.jpg";
function Signup() {
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
          <Form className="form-signin">
            <Form.Group controlId="formBasicFName">
              <Form.Control  type="text" placeholder="First name" />
            </Form.Group>
            <Form.Group controlId="formBasicLName">
              
              <Form.Control type="text"  placeholder="Last name" />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
             
              <Form.Control type="email" placeholder="Email" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              
              <Form.Control type="password" placeholder="Password" />
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
