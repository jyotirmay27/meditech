import React from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import MedicalBG from "./Meditech.png";
import PageBG from "./Meditech.png";
import PageBG2 from "./Meditech FP Final-01.png";
import PageBG3 from "./Meditech FP Final-2-01.png";
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
                                src={PageBG2}
                                alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 imgcarousel"
                                src={PageBG3}
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
                            <Fade right>
                                <font className="FPAboutUsHeading">
                                    CODEKAR
                                </font>
                                <hr className="AboutUs" />
                                <p className="FPAboutUsText">
                                    We are a team of four tech enthusiasts
                                    striving to solve the problems of the world
                                    and benefit the society. We want to put
                                    technology to its best use to make people's
                                    lives easier and the earth a better place to
                                    live.
                                </p>
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
                                <Fade right>
                                    <font className="FPFeaturesText">
                                        We have a system to monitor your daily
                                        vitals like blood pressure, blood sugar
                                        levels, height, weight, and heart rate
                                        through which you have a good idea of
                                        your current health at all times. Vitals
                                        are present as interactive graphs to you
                                        and your doctor, so your health is
                                        always in check.
                                    </font>
                                    <br />
                                    <br />
                                    <br />
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

                                <Fade right>
                                    <font className="FPFeaturesText">
                                        Now no need to remember all your
                                        allergies as we have the data handy for
                                        you. We maintain a database of your
                                        allergies which will help you remain
                                        cautious of the potential dangers.
                                        Moreover, your allergies are visible to
                                        the doctor as well, so he can prescribe
                                        medicines accordingly.
                                    </font>
                                    <br />
                                    <br />
                                    <br />
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

                                <Fade right>
                                    <font className="FPFeaturesText">
                                        We save all of your previous
                                        prescriptions to our electronic medical
                                        record system, so now you don't have to
                                        carry them to the doctor. These are
                                        always easily accessible to you and your
                                        doctor which helps in a good diagnosis
                                        of any problem you may have. It also
                                        helps to keep track of the required
                                        medicine dosage.
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
                                <Fade right>
                                    <font className="FPFeaturesText">
                                        We save all of your doctors under a
                                        separate section, so you don't have to
                                        search them in the ocean of doctors.
                                        With this feature, it is easy to find
                                        them and get their details to contact
                                        them whenever required.
                                    </font>
                                    <br />
                                    <br />
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

                                <Fade right>
                                    <font className="FPFeaturesText">
                                        Using this platform, you can easily book
                                        an appointment with any doctor with just
                                        a click from the comfort of your home.
                                    </font>
                                    <br />
                                    <br />
                                    <br />
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
                                <Fade right>
                                    <font className="FPFeaturesText">
                                        You can search for your complete medical
                                        history, all prescriptions, vitals,
                                        allergies, and doctors from our database
                                        with great ease. Everything is now at
                                        your fingertips, making your life easier
                                        and more organized.
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
