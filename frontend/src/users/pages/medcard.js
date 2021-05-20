import React from "react";
import Card from "react-bootstrap/Card";
import Akira from "../../jj.jpg";

 const MedCard = props => {
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
                        {props.doctor},
                        {props.patient},
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

export default MedCard;