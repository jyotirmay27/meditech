import React from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import MedicalBG from "./Meditech.png";
import PageBG from "./Meditech.png";
import Row from "react-bootstrap/Row";
import { Footer } from "./Footer";
import Image from "react-bootstrap/Image";
import DoctorFP from "./DoctorFP.jpeg";
import DatebaseFP from "./DatabaseFP.jpeg";
import "./css/FrontPage.css";
import Animation from "./Animation";
import Fade from "react-reveal/Fade";
import { Carousel } from "react-bootstrap";

export const FrontPage = () => {
    return (
        <div className="FPMainDiv">
            <div style={{ minHeight: "80vh" }}>
                <div className="carousel">
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 imgcarousel"
                                src={PageBG}
                                alt="First slide"
                                
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 imgcarousel"
                                src={PageBG}
                                alt="Second slide"
                                
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 imgcarousel"
                                src={PageBG}
                                alt="Third slide"
                                
                            />
                        </Carousel.Item>
                    </Carousel>
                </div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <Card className="FPMainCard">
                    {/* <h1>Hello</h1> */}
                    <Row>
                        <Col
                            sm={4}
                            style={{
                                textAlign: "center",
                            }}
                        >
                            <Fade left>
                                <div className="FPNumberingCards">
                                    <br />
                                    <i
                                        className="fas fa-hospital fa-3x"
                                        id="icon"
                                    ></i>
                                    <h3 className="FPIconText">
                                        <br />
                                        <Animation numbering={1000} />
                                        Hospitals registered
                                    </h3>
                                </div>
                            </Fade>
                        </Col>
                        <Col
                            sm={4}
                            style={{
                                textAlign: "center",
                                alignItems: "center",
                            }}
                        >
                            <Fade top>
                                <div className="FPNumberingCards">
                                    <br />
                                    <i
                                        className="fas fa-user fa-3x"
                                        id="icon"
                                    ></i>
                                    <h3 className="FPIconText">
                                        <br />
                                        <Animation numbering={1000000} />
                                        Patients registered
                                    </h3>
                                </div>
                            </Fade>
                        </Col>
                        <Col
                            sm={4}
                            style={{
                                textAlign: "center",
                                alignItems: "center",
                            }}
                        >
                            <Fade right>
                                <div className="FPNumberingCards">
                                    <br />
                                    <i
                                        className="fas fa-user-md fa-3x"
                                        id="icon"
                                    ></i>
                                    <h3 className="FPIconText">
                                        <br />
                                        <Animation numbering={1000} />
                                        Doctors registered
                                    </h3>
                                </div>
                            </Fade>
                        </Col>
                    </Row>

                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                </Card>

                <div className="FPAboutUs">
                    <Row>
                        <Col sm={4}>
                            <Fade left>
                                <Image
                                    src={DoctorFP}
                                    fluid
                                    rounded
                                    className="FPAboutUsImage"
                                />
                            </Fade>
                        </Col>
                        <Col sm={1}></Col>
                        <Col sm={7}>
                            <Fade right cascade>
                                <font className="FPAboutUsHeading">
                                    CODEKAR
                                </font>
                                <hr className="AboutUs" />
                                <font className="FPAboutUsText">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Inventore voluptatum ea
                                    aliquid provident, pariatur cum dolor
                                    consequatur molestiae doloribus ut ad,
                                    quaerat distinctio sunt optio itaque amet
                                    asperiores neque voluptatem?
                                </font>
                            </Fade>
                        </Col>
                    </Row>
                </div>

                <div className="FPFeatures">
                    <div className="FPFeaturesHeading">Our Features</div>
                    <hr className="Features" />

                    <div className="FPFeaturesCard">
                        <Row>
                            <Col sm={4} className="FPFeaturesColumm">
                            
                                <Fade left>
                                    
                                    <i
                                        className="fas fa-heartbeat fa-3x"
                                        id="iconFeatures"
                                    ></i>
                                </Fade>
                                <br />
                                <br />
                                <Fade right cascade>
                                    <font className="FPFeaturesText">
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Quisquam, minus quae.
                                        Sint reprehenderit provident assumenda
                                        mollitia voluptatem impedit itaque ullam
                                        aut quaerat cupiditate dolore
                                        necessitatibus veritatis id, quasi
                                        fugiat adipisci.
                                    </font>
                                    <br/>
                                    <br/>
                                    <br/>
                                </Fade>
                                
                            </Col>
                            <Col sm={4} className="FPFeaturesColumm">
                                <Fade top>
                                    <i
                                        className="fas fa-bacteria fa-3x"
                                        id="iconFeatures"
                                    ></i>
                                </Fade>
                                <br />
                                <br />
                                
                                <Fade right cascade>
                                    <font className="FPFeaturesText">
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Quisquam, minus quae.
                                        Sint reprehenderit provident assumenda
                                        mollitia voluptatem impedit itaque ullam
                                        aut quaerat cupiditate dolore
                                        necessitatibus veritatis id, quasi
                                        fugiat adipisci.
                                    </font>
                                    <br/>
                                    <br/>
                                    <br/>
                                </Fade>
                            </Col>
                            <Col sm={4} className="FPFeaturesColumm">
                                <Fade right>
                                    <i
                                        className="fas fa-prescription fa-3x"
                                        id="iconFeatures"
                                    ></i>
                                </Fade>
                                <br />
                                <br />
                                
                                <Fade right cascade>
                                    <font className="FPFeaturesText">
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Quisquam, minus quae.
                                        Sint reprehenderit provident assumenda
                                        mollitia voluptatem impedit itaque ullam
                                        aut quaerat cupiditate dolore
                                        necessitatibus veritatis id, quasi
                                        fugiat adipisci.
                                    </font>
                                </Fade>
                            </Col>
                        </Row>
                        <div style={{ height: "4rem" }}></div>
                        <Row>
                            <Col sm={4} className="FPFeaturesColumm">
                                <Fade left>
                                    <i
                                        className="fas fa-stethoscope fa-3x"
                                        id="iconFeatures"
                                    ></i>
                                </Fade>
                                <br />
                                <br />
                                <Fade right cascade>
                                    <font className="FPFeaturesText">
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Quisquam, minus quae.
                                        Sint reprehenderit provident assumenda
                                        mollitia voluptatem impedit itaque ullam
                                        aut quaerat cupiditate dolore
                                        necessitatibus veritatis id, quasi
                                        fugiat adipisci.
                                    </font>
                                    <br/>
                                    <br/>
                                    <br />
                                </Fade>
                            </Col>
                            <Col sm={4} className="FPFeaturesColumm">
                                <Fade bottom>
                                    <i
                                        className="fas fa-file-medical fa-3x"
                                        id="iconFeatures"
                                    ></i>
                                </Fade>
                                <br />
                                <br />
                                
                                <Fade right cascade>
                                    <font className="FPFeaturesText">
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Quisquam, minus quae.
                                        Sint reprehenderit provident assumenda
                                        mollitia voluptatem impedit itaque ullam
                                        aut quaerat cupiditate dolore
                                        necessitatibus veritatis id, quasi
                                        fugiat adipisci.
                                    </font>
                                    <br/>
                                    <br/>
                                    <br/>
                                </Fade>
                            </Col>
                            <Col sm={4} className="FPFeaturesColumm">
                                <Fade right>
                                    <i
                                        className="fas fa-search fa-3x"
                                        id="iconFeatures"
                                    ></i>
                                </Fade>
                                <br />
                                <br />
                                <Fade right cascade>
                                    <font className="FPFeaturesText">
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Quisquam, minus quae.
                                        Sint reprehenderit provident assumenda
                                        mollitia voluptatem impedit itaque ullam
                                        aut quaerat cupiditate dolore
                                        necessitatibus veritatis id, quasi
                                        fugiat adipisci.
                                    </font>
                                </Fade>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        </div>
    );
};
