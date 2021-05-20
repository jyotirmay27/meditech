import React, {useContext} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';
import "../../css/Allergy.css";
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
  <div className="BGGradeAllergy">
  <div className="TopMarginAllergy"></div>

  <div className="box" id="heading">
      <h1 className="Heading"> Allergy Form</h1>{" "}
  </div>
  <Jumbotron className="container" bg-dark>
      <Form className="form-signin" onSubmit={placeSubmitHandler}>
          <Form.Group controlId="formGroupheart">
              <Form.Label className="AllergyFormTextLabel">
                  Allergy From
              </Form.Label>
              <Form.Control
                  type="text"
                  id="AF"
                  placeholder="Allergy From"
                  className="AllergyFormText"
              />
          </Form.Group>
          <Form.Group controlId="formGroupBP">
              <Form.Label className="AllergyFormTextLabel">
                  Allergy Reaction
              </Form.Label>
              <Form.Control
                  type="text"
                  id="AR"
                  className="AllergyFormText"
                  placeholder="Allergy Reaction"
              />
          </Form.Group>
          <br />
          <Button
              variant="primary"
              type="submit"
              className="AllergyButton"
          >
              Submit
          </Button>
      </Form>
  </Jumbotron>
</div>
);
};

export default Allergy;