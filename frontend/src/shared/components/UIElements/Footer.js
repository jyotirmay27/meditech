import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { CardDeck } from "react-bootstrap";

export const Footer = () => {
    return (
        <div>
            <Card style={{ padding: "10px", backgroundColor: "#011631" }}>
                <CardDeck style={{ padding: "20px" }}>
                    <Card
                        style={{
                            padding: "10px",
                            backgroundColor: "#011631",
                            color: "White",
                            textAlign: "center",
                            fontSize: "3rem",
                            fontFamily: "Bahnschrift SemiBold",
                        }}
                    >
                        MediTech
                    </Card>
                    <Card
                        style={{
                            padding: "10px",
                            backgroundColor: "#011631",
                            textAlign: "center",
                            color: "White",
                        }}
                    >
                        <h4>Our Team</h4> {/* <small> */}
                        <Card.Footer>
                            <Row>
                                <Col sm={6}>Jyotirmay Jain</Col>
                                <Col sm={6}>Parth Mittal</Col>
                            </Row>
                            <Row>
                                <Col sm={6}>Abhinav Goel</Col>
                                <Col sm={6}>Varnika Hotwani</Col>
                            </Row>
                        </Card.Footer>
                        {/* </small> */}
                    </Card>
                </CardDeck>
            </Card>
        </div>
    );
};
