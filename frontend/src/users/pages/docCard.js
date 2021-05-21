import React from "react";
import Card from "react-bootstrap/Card";
import Akira from "../../jj.jpg";
import "../../css/DoctorListCard.css";

const DocCard = (props) => {
    return (
        <div>
            <Card border="info" className="DoctorListCards">
                <br />
                <font className="DoctorIcon">
                    <i className="fas fa-user-md fa-9x"></i>
                </font>
                <Card.Body>
                    <Card.Title style={{ fontSize: "1rem", color: "#195a65" }}>
                        {props.doctor}
                    </Card.Title>
                </Card.Body>
            </Card>
        </div>
    );
};

export default DocCard;