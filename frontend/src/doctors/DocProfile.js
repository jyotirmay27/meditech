import React,{useContext} from 'react';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import image from '../jj.jpg';
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Row from "react-bootstrap/Row";
import ImageTest from "../jj.jpg";
import { CardDeck, CardGroup } from "react-bootstrap";
import DocPatients from './docPatients';
import DocPrescription from './docPrescription';
import { AuthContext } from '../shared/util/AuthContext';

import { Link } from 'react-router-dom';
import "../css/Profile.css";



const DocProfile = () => {
    const auth = useContext(AuthContext);
    return (  
        <div className="BGGradProfile">
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
                    <Card className="ProfileCard">
                       
                       <br />
                        <br />
                        <font className="ProfiledCardText">
                            <i class="fas fa-user fa-9x"> </i>{" "}
                        </font>

                        <br />
                        <br />
                        <Card.Body>
                        <Card.Text className="ProfileCardTextInfo">{auth.userId}</Card.Text>
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
                        style={{
                            fontFamily: "Montserrat, sans-serif",
                            fontWeight: "600",
                            color: "red",
                        }}
                    >
                        <Tab eventKey="home" title="Prescriptions">
                            
                            <div>
                                <DocPrescription />
                            </div>
                            
                        </Tab>
                        <Tab eventKey="profile" title="Patients">
                        <div>
                                <DocPatients />
                            </div>
                        </Tab>
                    </Tabs>
                </Col>
            </Row>
            </div>{" "}
        </div>
    );
};

export default DocProfile;