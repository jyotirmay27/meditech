import React from "react";
import Card from "react-bootstrap/Card";
import Akira from "../jj.jpg";
import { Link } from 'react-router-dom';
 const PatientCard = props => {
    return (
        <div>
            <Link to={`/patient/${props.patients}` }>
            <Card
                style={{
                    width: "18rem",
                    marginLeft: "0.8rem",
                    marginRight: "0.8rem",
                    marginTop: "0.8rem",
                }}
            >
                <Card.Img variant="top" src={Akira} />
                <Card.Body>
                    <Card.Title>{props.patients}</Card.Title>
 
                </Card.Body>
            </Card>
            </Link>
        </div>
    );
};
 
export default PatientCard;