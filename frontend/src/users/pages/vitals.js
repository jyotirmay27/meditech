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
     var BPS = document.getElementById('BPS').value;
     var BPD = document.getElementById('BPD').value;
     var temperature = document.getElementById('temperature').value;
     var weight = document.getElementById('weight').value;
     var height = document.getElementById('height').value;
    try {
        await sendRequest(
            'http://localhost:5000/api/places/vitals',
            'POST', 
            JSON.stringify({
               sugar:sugar, 
               BPS: BPS,
               BPD:BPD,
               pulse:pulse,
               temperature: temperature,
               date: date,
               weight:weight,
               height:height,
               creator: auth.userId
            }),
     { 'Content-Type': 'application/json' }
     );
     history.push('/');
  }catch(err){}
  };



return (
  <div  className="BGGradeAllergy" style={{ minHeight:"160vh"}}>
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
                  Blood Pressure Diastolic
              </Form.Label>
              <Form.Control
                  type="text"
                  id="BPD"
                  placeholder="Blood Pressure Diastolic"
                  className="AllergyFormText"
              />
              </Form.Group>
               <Form.Group controlId="formGroupBP2">
              <Form.Label className="AllergyFormTextLabel">
                  Blood Pressure Systolic
              </Form.Label>
              <Form.Control
                  type="text"
                  id="BPS"
                  placeholder="Blood Pressure Systolic"
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
          <Form.Group controlId="formGroupTemperature">
              <Form.Label className="AllergyFormTextLabel">
                  Temperature
              </Form.Label>
              <Form.Control
                  type="text"
                  id="temperature"
                  placeholder="Temperature"
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
          <Form.Group controlId="formGroupWeight">
              <Form.Label className="AllergyFormTextLabel">
                  Weight
              </Form.Label>
              <Form.Control
                  type="text"
                  id="weight"
                  placeholder="Weight"
                  className="AllergyFormText"
              />
              </Form.Group>
              <Form.Group controlId="formGroupHeight">
              <Form.Label className="AllergyFormTextLabel">
                  Height
              </Form.Label>
              <Form.Control
                  type="text"
                  id="height"
                  placeholder="Height"
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