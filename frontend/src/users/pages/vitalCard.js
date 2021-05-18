import React from "react";
import Card from "react-bootstrap/Card";
import Akira from "../../jj.jpg";

 const VitalCard = props => {
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
                       Date: {props.date},
                        Patient:{props.creator},
                        <ul>
                             <li key={props.sugar}>
                             {props.sugar}
                           </li>
                           <li key={props.BP}>
                             {props.BP}
                           </li>
                           <li key={props.pulse}>
                             {props.pulse}
                           </li>
                        </ul>

                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default VitalCard;