import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './vitals.css';
import Jumbotron from 'react-bootstrap/Jumbotron';


const Vitals = () => {
return (
    <Jumbotron className="container" bg-dark >
<Form className="form-signin">
  <Form.Group controlId="formGroupheart">
    <Form.Label>Heart Rate</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>
  <Form.Group controlId="formGroupBP">
    <Form.Label>Blooad Pressure</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formGroupsugar">
    <Form.Label>Sugar</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formGroupSystol">
    <Form.Label>Systol</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
</Jumbotron>
);
};

export default Vitals;