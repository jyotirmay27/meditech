import React, {useEffect,useContext, useState} from 'react';
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import ImageTest from "../../jj.jpg";
import Badge from "react-bootstrap/Badge";
import { useParams } from 'react-router-dom';
import { useHttpClient } from '../../shared/hooks/useHttpClient';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import { AuthContext } from '../../shared/util/AuthContext';
import "../../css/PresDisplay.css";

export const Hello = () => {
    const auth = useContext(AuthContext);
    const { isLoading, error, sendRequest, clearError } = useHttpClient();
    
    const [ loadedpres, setLoadedPres] = useState();
    const userId= auth.userId;
    const presID=useParams().presID;
    useEffect(()=> {
      const fetchPlaces = async() =>{
        try{
          const responseData = await sendRequest(
          `http://localhost:5000/api/places/users/${userId}/prescription/${presID}`
          );
          setLoadedPres(responseData.prescription);
        }
        catch(err)
        {}
      };
        fetchPlaces();
      
    }, [sendRequest, userId, presID]);
    
    
    return (
        <React.Fragment>
            <ErrorModal error={error} onClear={clearError} />
            {isLoading && (<div className="center">  <LoadingSpinner  /></div>)}
            {!isLoading &&loadedpres &&
        <div className="PresShowBG">
            <Row className="TopMargin"></Row>
            <Row style={{ maxWidth: "98%", marginLeft: "1%" }}>
                <Col sm={5}>
                    <Card
                        style={{
                            width: "100%",
                            height: "100%",

                        }}
                    >
                        <Card.Body>
                        <br />
                                <br />
                                <font className="ProfilingCardTextUser">
                                    <i className="fas fa-user fa-9x"></i>
                                </font>
                                {/* <Image
                                    src={ImageTest}
                                    className="CardImage"
                                    roundedCircle
                                /> */}
                                <br />
                                <br />
                                <br />
                                <font className="ProfilingCardText">
                                    <i class="fas fa-user-injured fa-2x"> </i>{" "}
                                </font>
                                &nbsp;&nbsp;
                                <h2
                                    className="ProfilingCardText"
                                    style={{ display: "inline" }}
                                >
                                Patient Name :
                            </h2>
                            <h2 style={{ display: "inline" }}>
                                 {loadedpres.patname}</h2>
                            <br />
                            <br />
                            <p
                                    style={{ fontSize: "20px" }}
                                    className="ProfilingCardText"
                                >
                                    <b>
                                        {" "}
                                        <i className="fas fa-hashtag"></i> Age :
                                    </b>{" "}
                                     {loadedpres.age}
                                <br />
                                <b>
                                        {" "}
                                        <i className="fas fa-user-md"></i>{" "}
                                        Doctor :
                                    </b>{" "}
                                {loadedpres.docID}
                                <br />
                                <b>
                                    {" "}
                                    <i className="fas fa-hospital"></i> Hospital
                                    Name :
                                </b>{" "}
                                {loadedpres.hospitalname}
                                <br />
                                <b>
                                    <i className="fas fa-calendar-alt"></i>{" "}
                                    Prescription Date :
                                </b>{" "}
                                {loadedpres.date}
                                <br />
                                <b>
                                    {" "}
                                    <i className="fas fa-info-circle"></i> 
                                    Note :
                                </b>{" "}
                                <Badge variant="info">{loadedpres.note}</Badge>
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
                            className="ProfilingCard"
                        >
                            <font className="ProfilingCardText">
                                <i class="fas fa-prescription fa-7x"></i>
                            </font>
                            <br />
                            <Row>
                                <Col sm={1}></Col>
                                <Col sm={11} className="PrescriptionText">
                        {loadedpres.meds[0]} : {loadedpres.doze[0]}
                        <br />
                        {loadedpres.meds[1]} : {loadedpres.doze[1]}
                        <br />
                        {loadedpres.meds[2]} : {loadedpres.doze[2]}
                        <br />
                        {loadedpres.meds[3]} : {loadedpres.doze[3]}
                        <br />
                        <br />
                        </Col>
                            </Row>  
                    </Card>
                </Col>
            </Row>
        </div>}
        </React.Fragment>
    );
};
