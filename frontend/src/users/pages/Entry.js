import React from "react";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

export const Entry = (props) => {
    return (
        <div>
            <Card
                border="info"
                style={{
                    width: "17rem",
                    marginLeft: "0.8rem",
                    marginRight: "0.8rem",
                    marginTop: "0.8rem",
                    alignContent: "center",
                    textAlign: "center",
                }}
            >
                <Image
                    variant="top"
                    src={props.Imagelink}
                    alt="Hello"
                    style={{
                        marginLeft: "5%",
                        marginRight: "5%",
                        marginTop: "5%",
                    }}
                    width="90%"
                    roundedCircle
                />
                <Card.Body>
                    <Card.Title style={{ fontSize: "2rem", color: "#195a65" }}>
                        {props.Name}
                    </Card.Title>
                    <font style={{ fontSize: ".8rem" }}>
                        {props.Speciality}
                        <br></br>
                        {"{"}
                        {props.Degree}
                        {"}"}
                        <br></br>
                    </font>
                    <font style={{ fontSize: "1rem" }}>{props.Hospital}</font>
                    <br></br>
                    <br></br>
                    <Button variant="primary">
                        Add to <b>Your Doctor</b>
                    </Button>
                </Card.Body>
            </Card>
        </div>
    );
};
