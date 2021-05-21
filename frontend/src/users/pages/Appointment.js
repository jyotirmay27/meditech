import React, { useContext, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import { useHistory } from "react-router-dom";
import "./vitals.css";
import Jumbotron from "react-bootstrap/Jumbotron";
import { useHttpClient } from "../../shared/hooks/useHttpClient";
import { AuthContext } from "../../shared/util/AuthContext";
import { useParams } from "react-router-dom";

import "../../css/Allergy.css";
const Appointment = () => {
    const auth = useContext(AuthContext);
    const history = useHistory();
    const docId = useParams().docID;
    const { isLoading, error, sendRequest, clearError } = useHttpClient();
    const [show, setShow] = useState(false);

    const placeSubmitHandler = async (event) => {
        event.preventDefault();
        var date = document.getElementById("date").value;
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var docEmail = docId;
        try {
            await sendRequest(
                "http://localhost:5000/api/users/appointment",
                "POST",
                JSON.stringify({
                    date: date,
                    name: name,
                    patEmail: email,
                    docEmail: docEmail,
                }),
                { "Content-Type": "application/json" }
            );
            setShow(true);
            document.getElementById("date").value = "";
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
        } catch (err) {}
    };

    const routeChange = () => {
        setShow(false);
        history.push("/home");
    };

    return (
        <React.Fragment>
            <Alert
                style={{
                    margin: "0px",
                    marginLeft: "auto",
                    marginRight: "auto",
                }}
                show={show}
                variant="success"
            >
                <Alert.Heading>How's it going?!</Alert.Heading>
                <p>
                    The Appointment Mail has been sent to the Doctor, Wait for
                    his/her revert.
                </p>
                <hr />
                <div className="d-flex justify-content-end">
                    <Button onClick={routeChange} variant="outline-success">
                        Head back to home
                    </Button>
                </div>
            </Alert>
            <div className="BGGradeAllergy">
                <div className="TopMarginAllergy"></div>

                <div className="box" id="heading">
                    <h1 className="Heading"> Appointment Form</h1>{" "}
                </div>
                <Jumbotron className="container" bg-dark>
                    <Form className="form-signin" onSubmit={placeSubmitHandler}>
                        <Form.Group controlId="formGroupheart">
                            <Form.Label className="AllergyFormTextLabel">
                                Patient Name
                            </Form.Label>
                            <Form.Control
                                type="text"
                                id="name"
                                placeholder="Patient Name"
                                className="AllergyFormText"
                            />
                        </Form.Group>
                        <Form.Group controlId="formGroupBP">
                            <Form.Label className="AllergyFormTextLabel">
                                Patient Email ID
                            </Form.Label>
                            <Form.Control
                                type="email"
                                id="email"
                                placeholder="Patient Email ID"
                                className="AllergyFormText"
                            />
                        </Form.Group>
                        <Form.Group controlId="formGroupsugar">
                            <Form.Label className="AllergyFormTextLabel">
                                Date
                            </Form.Label>
                            <Form.Control
                                type="text"
                                id="date"
                                placeholder="Date (DD/MM/YYYY)"
                                className="AllergyFormText"
                            />
                        </Form.Group>

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
        </React.Fragment>
    );
};

export default Appointment;
