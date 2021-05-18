import React from 'react';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import image from '../../jj.jpg';
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Row from "react-bootstrap/Row";
import ImageTest from "../../jj.jpg";
import { CardDeck, CardGroup } from "react-bootstrap";
import { IndividualCard } from "./IndividualCard";
import UserMeds from './usermeds';
import UserPrescription from './userPrescription';
import UserVitals from './userVitals';
import UserAllergy  from './userAllergy';
import { Link } from 'react-router-dom';

let items = [];
for (let i = 0; i < 20; i++) {
    items.push(<IndividualCard />);
}

const Profile = () => {
   
    return (  
        <div
            style={{
                marginLeft: "2rem",
                marginRight: "1rem",
                marginTop: "1rem",
            }}
        >
            <Row  md={12} sm={0}>
                <Col
                    sm={3}
                    style={{
                        borderRight: "1px solid rgba(0, 0, 0, 0.5)",
                    }}
                >
                    <Card style={{ width: "100%" }}>
                        <Image
                            variant="top"
                            src={ImageTest}
                            style={{
                                height: "20vw",
                                width: "20vw",
                                marginLeft: "auto",
                                marginTop: "0.5rem",
                                marginRight: "auto",
                            }}
                            roundedCircle
                        />
                        <Card.Body>
                            <Card.Title>Name</Card.Title>
                            <Card.Text>All Important Information</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={9}
                 style={{
                    borderRight: "1px solid rgba(0, 0, 0, 0.5)",
                }}>
                    <Tabs
                        defaultActiveKey="home"
                        id="uncontrolled-tab-example"
                    >
                        <Tab eventKey="home" title="Vitals">
                            
                            <div>
                                <UserVitals />
                            </div>
                            
                        </Tab>
                        <Tab eventKey="profile" title="Prescriptions">
                        <div>
                                <UserPrescription />
                            </div>
                        </Tab>
                        <Tab eventKey="allergy" title="Allergy">
                        <div>
                               <UserAllergy  />
                            </div>
                        </Tab>
                        <Tab eventKey="docs" title="Your Doctors">
                        <div>
                                <UserAllergy  />
                            </div>
                        </Tab>
                        <Tab eventKey="contact" title="Medications">
                        <div>
                               <UserMeds />
                            </div>
                        </Tab>
                    </Tabs>
                </Col>
            </Row>
        </div>
    );
};

export default Profile;