import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { CardDeck } from "react-bootstrap";
import "./css/Footer.css";

export const Footer = () => { 
    return (
        <div className="FooterBody">
            <Row>
                <Col sm={1}> </Col>
                <Col sm={5}>
                    <font className="FooterMissionHeading"> Our Mission </font>
                    <hr className="Mission" />
                    
                    <font className="FooterMissionText">
                        {" "}
                        Everybody wants to remain healthy and keep track of their health, yet nobody wants to do the cumbersome task of managing the records. We have come to your rescue. We have the account of all the doctors, your complete medical history, and your daily vitals depicted as interactive graphs so that tracking your health is now a child's play.
                    </font>
                    <br/>
                    <br/>
                </Col>
                <Col sm={2}></Col>
                <Col sm={3}>
                    <font className="FooterTeamHeading"> Team CodeKar </font>
                    <hr className="Team" />
                    
                    <font className="FooterTeamText">
                        Jyotirmay Jain
                        <br />
                        Parth Mittal
                        <br />
                        Abhinav Goel
                        <br />
                        Varnika Hotwani
                        {/* <Row>
                            <Col sm={6}>Jyotirmay Jain</Col>
                            <Col sm={6}>Parth Mittal</Col>
                        </Row>
                        <Row>
                            <Col sm={6}>Abhinav Goel</Col>
                            <Col sm={6}>Varnika Hotwani</Col>
                        </Row> */}
                    </font>
                </Col>
                <Col sm={1}> </Col>
            </Row>
        </div>
    );
};
