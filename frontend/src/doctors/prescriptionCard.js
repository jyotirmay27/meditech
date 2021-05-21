import React from "react";
import Card from "react-bootstrap/Card";
import Akira from "../jj.jpg";
import { Link } from "react-router-dom";
import "../css/DoctorListCard.css";

const PrescriptionCard = (props) => {
    return (
        <div>
            <Link to={`/prescriptions/${props.id}`}>
                <Card border="info" className="DoctorListCards">
                    <br />
                    <font className="DoctorIcon">
                        <i className="fas fa-prescription fa-9x"></i>
                    </font>
                    <Card.Body>
                        <Card.Title
                            style={{ fontSize: "2rem", color: "#195a65" }}
                        >
                            {props.date}
                        </Card.Title>
                        <Card.Text>
                            Doctor: {props.doctor}
                            <br></br>
                            Patient:{props.patient}
                            <ul>
                                {props.meds.map((number) => (
                                    <li key={props.id}>{number}</li>
                                ))}
                            </ul>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Link>
        </div>
    );
};

export default PrescriptionCard;