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
                            <h2 style={{ display: "inline" }}> {loadedpres.patname}</h2>
                            <br />
                            <br />
                            <p style={{ fontSize: "12px" }}>
                                Age : {loadedpres.age}
                                <br />
                            </p>
                            <p style={{ fontSize: "20px" }}>
                                <b>
                                    {" "}
                                    <i className="fas fa-user-md"></i> Doctor
                                     :
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
                                    <i className="fas fa-info"></i> 
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
                    >
                        {loadedpres.meds[0]} : {loadedpres.doze[0]}
                        {loadedpres.meds[1]} : {loadedpres.doze[1]}
                        {loadedpres.meds[2]} : {loadedpres.doze[2]}
                        {loadedpres.meds[3]} : {loadedpres.doze[3]}
                        <i class="fas fa-prescription fa-7x"></i>
                    </Card>
                </Col>
            </Row>
        </div>}
        </React.Fragment>
    );
};
