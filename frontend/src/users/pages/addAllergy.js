import React, {useContext} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';
import './vitals.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { useHttpClient } from '../../shared/hooks/useHttpClient';
import {AuthContext} from '../../shared/util/AuthContext';

const Allergy = () => {
  const auth = useContext(AuthContext);
  const history = useHistory();
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const placeSubmitHandler=async event =>{
     event.preventDefault();
     var from = document.getElementById('AF'). value;
     var reaction = document.getElementById('AR').value;

    try {
        await sendRequest(
            'http://localhost:5000/api/users/allergy',
            'POST', 
            JSON.stringify({
              from: from,
              reaction:reaction,
               creator: auth.userId
            }),
     { 'Content-Type': 'application/json' }
     );
     history.push('/');
  }catch(err){}
  };



return (
    <Jumbotron className="container" bg-dark >
<Form className="form-signin" onSubmit = { placeSubmitHandler}>
  <Form.Group controlId="formGroupheart">
    <Form.Label>Allergy From</Form.Label>
    <Form.Control type="text" id="AF" placeholder="Allergy From" />
  </Form.Group>
  <Form.Group controlId="formGroupBP">
    <Form.Label>Allergy Reaction</Form.Label>
    <Form.Control type="text" id="AR" placeholder="Allergy Reaction" />
  </Form.Group>

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
</Jumbotron>
);
};

export default Allergy;