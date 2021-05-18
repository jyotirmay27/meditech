import React from "react";
import Card from "react-bootstrap/Card";
import Akira from "../../jj.jpg";

 const PrescriptionCard = props => {
    return (
        <div>
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
                    <Card.Title>{props.date}</Card.Title>
                    <Card.Text>
                       Doctor: {props.doctor}
                        Patient:{props.name}
                        <ul>
                        {props.meds.map( number=> (
                             <li key={props.id}>
                             {number}
                           </li>))}
                        </ul>

                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default PrescriptionCard;