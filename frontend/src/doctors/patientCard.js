import React from "react";
import Card from "react-bootstrap/Card";
import Akira from "../jj.jpg";
import Button from 'react-bootstrap/Button';
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';
 const PatientCard = props => {
    const history = useHistory();
    const routeChange2 = () =>{ 
        let path = `/allergy/${props.patients}`; 
        history.push(path);
      }
    const routeChange = () =>{ 
        let path = `/patients/${props.patients}`; 
        history.push(path);
      }
    return (
        <div>
           
            <Card
                style={{
                    width: "18rem",
                    marginLeft: "0.8rem",
                    marginRight: "0.8rem",
                    marginTop: "0.8rem",
                }}
            >
                <Card.Img variant="top" src={Akira} />
                <Card.Body>
                    <Card.Title>{props.patients}</Card.Title>
                    <Button  onClick={routeChange}  variant="outline-success">Vitals</Button>{' '} 
                <Button onClick={routeChange2}  variant="outline-success">  Allergy</Button>{' '}
                </Card.Body>
                
            </Card>
            
        </div>
    );
};
 
export default PatientCard;