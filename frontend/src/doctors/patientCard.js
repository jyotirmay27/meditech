import React from "react";
import Card from "react-bootstrap/Card";
import Akira from "../jj.jpg";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import "../css/DoctorListCard.css";

const PatientCard = (props) => {
    const history = useHistory();
    const routeChange2 = () => {
        let path = `/allergy/${props.patients}`;
        history.push(path);
    };
    const routeChange = () => {
        let path = `/patients/${props.patients}`;
        history.push(path);
    };
    return (
        <div>
            <Card border="info" className="DoctorListCards">
                <br />
                <font className="DoctorIcon">
                    <i className="fas fa-user-injured fa-9x"></i>
                </font>
                <Card.Body>
                    <Card.Title style={{ fontSize: "2rem", color: "#195a65" }}>
                        {props.patients}
                    </Card.Title>
                    <Button onClick={routeChange} variant="outline-success">
                        Vitals
                    </Button>{" "}
                    <Button onClick={routeChange2} variant="outline-success">
                        {" "}
                        Allergy
                    </Button>{" "}
                </Card.Body>
            </Card>
        </div>
    );
};

export default PatientCard;