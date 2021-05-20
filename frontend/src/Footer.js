import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { CardDeck } from "react-bootstrap";

export const Footer = () => {
    return (
        <Card
            style={{
                padding: "10px",
                backgroundColor: "#011631",
                width: "99.75%",
            }}
        >
            <CardDeck style={{ padding: "0px" }}>
                <Card
                    style={{
                        padding: "10px",
                        backgroundColor: "#011631",
                        color: "White",
                        textAlign: "center",
                        fontSize: "3rem",
                        fontFamily: "Bahnschrift SemiBold",
                        width: "30%",
                    }}
                >
                    CodeKar
                </Card>
                <Card
                    style={{
                        padding: "0px",
                        backgroundColor: "#011631",
                        textAlign: "center",
                        color: "White",
                        width: "30%",
                    }}
                >
                    <h4>Our Team</h4> {/* <small> */}
                    <Card.Footer>
                        <Row>
                            <Col sm={5}>Jyotirmay Jain</Col>
                            <Col sm={5}>Parth Mittal</Col>
                        </Row>
                        <Row>
                            <Col sm={5}>Abhinav Goel</Col>
                            <Col sm={5}>Varnika Hotwani</Col>
                        </Row>
                    </Card.Footer>
                    {/* </small> */}
                </Card>
            </CardDeck>
        </Card>
    );
};
