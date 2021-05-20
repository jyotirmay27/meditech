import React,{ useEffect, useState,useContext } from "react";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import { AuthContext } from '../../shared/util/AuthContext';
import { useHttpClient } from '../../shared/hooks/useHttpClient';
import { useHistory } from 'react-router-dom';
import image from '../../jj.jpg';
const DoctorCard = props => {
    const auth = useContext(AuthContext);
    const { isLoading, error, sendRequest, clearError } = useHttpClient();
    const [loadedDoctors, setLoadedDoctors] = useState();
    const userId= auth.userId;
    const history = useHistory();
    
    const addDoc = async ()=>{
         
              try {
                const responseData = await sendRequest(
                    `http://localhost:5000/api/users/doctor/${props.email}`,
                    'POST',
                    JSON.stringify({
                      doctor:props.email,
                      patient:userId
                    }),
                    {
                      'Content-Type': 'application/json'
                    }
                  );
                setLoadedDoctors(responseData.doctors);
                history.push('/doctors');
              } catch (err) {
        console.log(err);
              }
            };
        
    return (
        <div>
            <Card
                border="info"
                style={{
                    width: "17rem",
                    marginLeft: "0.8rem",
                    marginRight: "0.8rem",
                    marginTop: "0.8rem",
                    alignContent: "center",
                    textAlign: "center",
                }}
            >
                <Image
                    variant="top"
                    src={image}
                    alt="Hello"
                    style={{
                        marginLeft: "5%",
                        marginRight: "5%",
                        marginTop: "5%",
                    }}
                    width="90%"
                    roundedCircle
                />
                <Card.Body>
                    <Card.Title style={{ fontSize: "2rem", color: "#195a65" }}>
                        {props.name}
                    </Card.Title>
                    <font style={{ fontSize: ".8rem" }}>
                        {props.email}
                    </font>
                    <br></br>
                    <br></br>
                    <Button variant="primary" onClick={addDoc}>
                        Add to <b>Your Doctor</b>
                    </Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default DoctorCard;