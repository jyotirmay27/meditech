import React from "react";
import Card from "react-bootstrap/Card";
import Akira from "../../jj.jpg";
import { Link } from 'react-router-dom';
 const PrescriptionCard = props => {
    return (
        <div>
            <Link to={`/prescriptions/${props.id}` }>
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
            </Link>
        </div>
    );
};

export default PrescriptionCard;