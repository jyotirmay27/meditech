import React from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

import MedicalBG from "./MedicalBG.jpeg";
import PageBG from "./PageBG.jpeg";
import Row from "react-bootstrap/Row";
import { Footer } from "./shared/components/UIElements/Footer";
import Image from "react-bootstrap/Image";
import DoctorFP from "./DoctorFP.jpeg";
import DatebaseFP from "./DatabaseFP.jpeg";

export const FrontPage = () => {
    return (
        <div style={{ backgroundImage: `url(${PageBG})` }}>
            
            <Col
                style={{
                    backgroundImage: `url(${MedicalBG})`,
                    backgroundRepeat: "no-repeat",
                    height: "25rem",
                    backgroundSize: "100%",
                    textAlign: "center",
                }}
            >
                <br />
                <br />
                <br />
                <br />
                <br />
                <p
                    style={{
                        color: "white",
                        fontSize: "5rem",
                        fontFamily: "Bahnschrift SemiBold",
                    }}
                >
                    MEDTECH
                </p>
                <p
                    style={{
                        color: "white",
                        fontSize: "30px",
                        fontFamily: "URW Chancery L, cursive",
                    }}
                >
                    A Storehouse of all your Medical problems
                </p>
            </Col>

            <Card
                style={{
                    width: "90%",
                    height: "100%",
                    padding: "25px",
                    marginLeft: "5%",
                    marginRight: "5%",
                    marginBottom: "15px",
                    borderColor: "white",
                }}
            >
                {/* <i className="fas fa-hospital"></i>Hello */}
                <Row>
                    <Col sm={1}> </Col>
                    <Col sm={3} style={{ textAlign: "center" }}>
                        <Card style={{ padding: "1rem" }}>
                            <i className="fas fa-hospital fa-5x"></i>
                            <h3
                                style={{ fontFamily: "Lucida Sans Typewriter" }}
                            >
                                1,000+ Hospitals registered
                            </h3>
                        </Card>
                    </Col>
                    <Col sm={4} style={{ textAlign: "center" }}>
                        <Card style={{ padding: "1rem" }}>
                            <i className="fas fa-user fa-5x"></i>
                            <h3
                                style={{ fontFamily: "Lucida Sans Typewriter" }}
                            >
                                1,000,000+ Patients registered
                            </h3>
                        </Card>
                    </Col>
                    <Col sm={3} style={{ textAlign: "center" }}>
                        <Card style={{ padding: "1rem" }}>
                            <i className="fas fa-user-md fa-5x"></i>
                            <h3
                                style={{ fontFamily: "Lucida Sans Typewriter" }}
                            >
                                1,000+ Doctors registered
                            </h3>
                        </Card>
                    </Col>
                    <Col sm={1}> </Col>
                </Row>
                <Card style={{ margin: "1rem", padding: "1rem" }}>
                    <Row>
                        <Col sm={5}>
                            <Image src={DoctorFP} fluid rounded />
                        </Col>
                        <Col sm={1}></Col>
                        <Col sm={6}>Some Information about our Project</Col>
                    </Row>
                </Card>
                <Card style={{ margin: "1rem", padding: "1rem" }}>
                    <Row>
                        <Col sm={6}>
                            Some More Information about our Project
                        </Col>
                        <Col sm={1}></Col>
                        <Col sm={5}>
                            <Image src={DatebaseFP} fluid rounded />{" "}
                        </Col>
                    </Row>
                </Card>
            </Card>
            
        </div>
    );
};
