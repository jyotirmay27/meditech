import React from "react";
import Card from "react-bootstrap/Card";
import Akira from "../../jj.jpg";

 const AllergyCard = props => {
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
                    <Card.Title>Allergy</Card.Title>
                    <Card.Text>
                       Substance: {props.from}
                        Reaction:{props.reaction}
                     

                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default AllergyCard;