import React from "react";
import Card from "react-bootstrap/Card";
import Akira from "../../jj.jpg";
import "../../css/DoctorListCard.css";


const MedCard = (props) => {
    return (
        <div>
            <Card border="info" className="DoctorListCards">
                <br />
                <font className="DoctorIcon">
                    <i className="fas fa-pills fa-9x"></i>
                </font>
                <Card.Body>
                    <Card.Title style={{ fontSize: "2rem", color: "#195a65" }}>
                        {props.date}
                    </Card.Title>
                    <Card.Text>
                        Doctor: {props.doctor}
                        <br />
                        Patient: {props.patient}
                        Meds:
                        <ul>
                            {props.meds.map((number) => (
                                <li key={props.id}>{number}</li>
                            ))}
                        </ul>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default MedCard;