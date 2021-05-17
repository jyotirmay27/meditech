import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import ImageTest from "../../jj.jpg";
import Badge from "react-bootstrap/Badge";


export const Hello = () => {
    return (
        <div>
            <Row>
                <Col sm={5}>
                    <Card
                        style={{
                            width: "100%",
                            height: "100%",
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 10,
                            },
                            shadowOpacity: 0.12,
                            shadowRadius: 60,
                        }}
                    >
                        <Card.Body>
                            <Image
                                src={ImageTest}
                                style={{
                                    // alignItems: "center",
                                    textAlign: "center",
                                    height: "20vw",
                                    width: "20vw",
                                    marginLeft: "auto",
                                    marginTop: "0.5rem",
                                    marginRight: "auto",
                                }}
                                roundedCircle
                            />
                            <br />
                            <i class="fas fa-user fa-2x"> </i>{" "}
                            &nbsp;&nbsp;&nbsp;
                            <h4 style={{ display: "inline" }}>
                                Patient Name :
                            </h4>
                            <h2 style={{ display: "inline" }}> Alpha Beta</h2>
                            <br />
                            <br />
                            <p style={{ fontSize: "12px" }}>
                                Age : 69
                                <br />
                                Gender : Gamma
                                <br />
                                Height : 120m
                                <br />
                                Weight : 69Kg
                            </p>
                            <p style={{ fontSize: "20px" }}>
                                <b>
                                    {" "}
                                    <i className="fas fa-user-md"></i> Doctor
                                    Name :
                                </b>{" "}
                                Jyotirmay Jain
                                <br />
                                <b>
                                    {" "}
                                    <i className="fas fa-hospital"></i> Hospital
                                    Name :
                                </b>{" "}
                                Jyotirmay Hub of Tratment and Pleasure
                                <br />
                                <b>
                                    <i className="fas fa-calendar-alt"></i>{" "}
                                    Prescription Date :
                                </b>{" "}
                                16/9/2021
                                <br />
                                <b>
                                    {" "}
                                    <i className="fas fa-info"></i> Prescription
                                    Status :
                                </b>{" "}
                                <Badge variant="danger">Due</Badge>
                            </p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={7}>
                    <Card
                        style={{
                            width: "100%",
                            height: "100%",
                            padding: "10px",
                        }}
                    >
                        <i class="fas fa-prescription fa-7x"></i>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};
