import React from "react";
import Card from "react-bootstrap/Card";
import Akira from "../../jj.jpg";

 const docCard = props => {
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
                    <Card.Title>{props.doctor}</Card.Title>
 
                </Card.Body>
            </Card>
        </div>
    );
};

export default docCard;