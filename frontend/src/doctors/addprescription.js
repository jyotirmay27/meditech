import React, { useState, useContext } from "react";
import Form from "react-bootstrap/Form";
import { useHistory } from 'react-router-dom';
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Table from "react-bootstrap/Table";

import {AuthContext} from '../shared/util/AuthContext';
import { useHttpClient } from '../shared/hooks/useHttpClient';
import { Footer } from '../shared/components/UIElements/Footer';
const DateInputer = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
        />
    );
};

function InputingPers() {
    const auth = useContext(AuthContext);
    const history = useHistory();
    const { isLoading, error, sendRequest, clearError } = useHttpClient();

    const onFormSubmit =async e => {
  
      e.preventDefault();

      var patname = document.getElementById('patname'). value;
      var patID = document.getElementById('patID').value;
      var docID =document.getElementById('docID').value;
      var hospitalname = document.getElementById('hospitalname'). value;
      var date = document.getElementById('date').value;
      var note =document.getElementById('note').value;
      var age =document.getElementById('age').value;
      var meds=[];
      var doze=[];
      for(let i = 1; i<5; i++)
      {
          let m= 'm'+i;
          let d='d'+i;
          meds.push(document.getElementById(m).value);
          doze.push(document.getElementById(d). value);
      }
      try {
        const responseData = await sendRequest(
          'http://localhost:5000/api/places/prescription',
          'POST',
          JSON.stringify({
            patID:patID,
            patname: patname,
            date:date,
            docID: docID,
            hospitalname:hospitalname,
            note:note,
            age:age,
            meds:meds,
            doze:doze
          }),
          {
            'Content-Type': 'application/json'
          }
        );
        history.push('/');
       /* document.getElementById('patname'). value="";
            document.getElementById('patID').value="";
        document.getElementById('docID').value="";
        document.getElementById('hospitalname'). value="";
        document.getElementById('date').value="";
      document.getElementById('note').value="";
       document.getElementById('age').value="";
       document.getElementById('m1').value="";
       document.getElementById('m2').value="";
       document.getElementById('m3').value="";
       document.getElementById('m4').value="";
       document.getElementById('d1').value="";
       document.getElementById('d2').value="";
       document.getElementById('d3').value="";
       document.getElementById('d4').value="";*/
        }catch (err) {}
   
    }
    return (
        <>
            <Row>
                <Col sm={3}> </Col>
                <Col sm={6}>
                    <Card
                        style={{
                            width: "100%",
                            height: "100%",
                            backgroundColor: "teal",
                        }}
                    >
                        <Card.Title
                            style={{
                                color: "white",
                                fontSize: "70px",
                                textAlign: "center",
                            }}
                        >
                            PRESCRIPTION FORM
                        </Card.Title>
                    </Card>
                </Col>
                <Col sm={3}> </Col>
            </Row>
            <Card
                style={{
                    width: "100%",
                    height: "100%",
                    padding: "20px",
                    marginTop: "20px",
                }}
            >
                <Form onSubmit={onFormSubmit}>
                    <Form.Row>
                        <Col sm={7}>
                            Patient Full Name
                            <br />
                            <InputGroup>
                                <InputGroup.Text>
                                    <i class="fas fa-user"></i>
                                </InputGroup.Text>
                                <Form.Control id="patname" placeholder="Username" />
                            </InputGroup>
                        </Col>
                        <Col sm={1}> </Col>
                        <Col sm={4}>
                            Patient's ID
                            <InputGroup>
                                <InputGroup.Text>
                                    <i class="fas fa-hashtag"></i>
                                </InputGroup.Text>
                                <Form.Control id="patID" placeholder="Username" />
                            </InputGroup>
                        </Col>
                    </Form.Row>
                    <br></br>
                    <Form.Row>
                        <Col sm={4}>
                            Doctor ID
                            <br />
                            <InputGroup>
                                <InputGroup.Text>
                                    <i className="fas fa-user-md"></i>
                                </InputGroup.Text>
                                <Form.Control id="docID" placeholder="Username" />
                            </InputGroup>
                        </Col>
                        <Col sm={1}> </Col>
                        <Col sm={7}>
                            Hospital Name
                            <InputGroup>
                                <InputGroup.Text>
                                    <i class="fas fa-hospital"></i>
                                </InputGroup.Text>
                                <Form.Control id="hospitalname" placeholder="Hospital Name if any" />
                            </InputGroup>
                        </Col>
                    </Form.Row>
                    <br></br>
                    <Form.Row>
                        <Col sm={3}>
                            Date of Diagnosis
                            <br />
                            <InputGroup>
                                <InputGroup.Text>
                                    <i className="fas fa-calendar-plus"></i>
                                </InputGroup.Text>
                                <Form.Control id="date" />
                            </InputGroup>
                        </Col>
                        {/* <Col sm={2}></Col> */}
                        <Col sm={1}>
                            Age
                            <br />
                            <InputGroup>
                                <InputGroup.Text>
                                    <i className="fas fa-calendar"></i>
                                </InputGroup.Text>
                                <Form.Control id="age" placeholder="Age" />
                            </InputGroup>
                        </Col>
                    </Form.Row>
                    <br></br>
                    <Button variant="success" >Add Row</Button>

                    <br></br>
                    <Form.Row style={{ marginTop: "10px" }}>
                        <Table striped bordered hover size="sm">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th style={{ textAlign: "center" }}>
                                        Medicine Name
                                    </th>
                                    <th style={{ textAlign: "center" }}>
                                        Doze
                                    </th>
                                    <th> </th>
                                </tr>
                            </thead>
                            <tbody>  
                            <tr>
        <td>1</td>
        <td>
            <Form.Control id="m1" placeholder="Medicine" />
        </td>
        <td>
            <Form.Control id="d1" placeholder="Times per Day X Number of Days" />
        </td>
 
    </tr>
    <tr>
        <td>2</td>
        <td>
            <Form.Control id="m2" placeholder="Medicine" />
        </td>
        <td>
            <Form.Control id="d2" placeholder="Times per Day X Number of Days" />
        </td>
 
    </tr>
    <tr>
        <td>3</td>
        <td>
            <Form.Control id="m3" placeholder="Medicine" />
        </td>
        <td>
            <Form.Control id="d3" placeholder="Times per Day X Number of Days" />
        </td>
 
    </tr>
    <tr>
        <td>4</td>
        <td>
            <Form.Control id="m4" placeholder="Medicine" />
        </td>
        <td>
            <Form.Control id="d4" placeholder="Times per Day X Number of Days" />
        </td>
 
    </tr>
                            </tbody>
                        </Table>
                    </Form.Row>
                    <Form.Row>
                        <Col sm={11}>
                            Note for Patient
                            <br />
                            <InputGroup>
                                <InputGroup.Text>
                                    <i class="far fa-sticky-note"></i>
                                </InputGroup.Text>
                                <Form.Control id="note" placeholder="Note (If Any)" />
                            </InputGroup>
                        </Col>
                    </Form.Row>
                    <br></br>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Card>
            
        </>
    );
}

export default InputingPers;