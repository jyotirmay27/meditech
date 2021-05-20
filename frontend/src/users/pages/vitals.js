import React, {useContext} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';
import "../../css/Allergy.css";
import Jumbotron from 'react-bootstrap/Jumbotron';
import { useHttpClient } from '../../shared/hooks/useHttpClient';
import {AuthContext} from '../../shared/util/AuthContext';

const Vitals = () => {
  const auth = useContext(AuthContext);
  const history = useHistory();
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const placeSubmitHandler=async event =>{
     event.preventDefault();
     var date = document.getElementById('date'). value;
     var pulse = document.getElementById('pulse').value;
     var sugar = document.getElementById('sugar'). value;
     var BP = document.getElementById('BP').value;
    try {
        await sendRequest(
            'http://localhost:5000/api/places/vitals',
            'POST', 
            JSON.stringify({
               sugar:sugar, 
               BP: BP,
               pulse:pulse,
               date: date,
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
      <h1 className="Heading"> Vitals</h1>{" "}
  </div>
  <Jumbotron className="container" bg-dark>
      <Form className="form-signin" onSubmit={placeSubmitHandler}>
          <Form.Group controlId="formGroupheart">
              <Form.Label className="AllergyFormTextLabel">
                  Date
              </Form.Label>
              <Form.Control
                  type="text"
                  id="date"
                  placeholder="Date"
                  className="AllergyFormText"
              />
          </Form.Group>
          <Form.Group controlId="formGroupBP">
              <Form.Label className="AllergyFormTextLabel">
                  Blood Pressure
              </Form.Label>
              <Form.Control
                  type="text"
                  id="BP"
                  placeholder="Blood Pressure"
                  className="AllergyFormText"
              />
          </Form.Group>
          <Form.Group controlId="formGroupsugar">
              <Form.Label className="AllergyFormTextLabel">
                  Sugar
              </Form.Label>
              <Form.Control
                  type="text"
                  id="sugar"
                  placeholder="Sugar"
                  className="AllergyFormText"
              />
          </Form.Group>
          <Form.Group controlId="formGroupSystol">
              <Form.Label className="AllergyFormTextLabel">
                  Heart Rate
              </Form.Label>
              <Form.Control
                  type="text"
                  id="pulse"
                  placeholder="Heart Rate"
                  className="AllergyFormText"
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

export default Vitals;