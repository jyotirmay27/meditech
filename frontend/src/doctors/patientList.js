import React from 'react';

import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { CardDeck, CardGroup } from "react-bootstrap";
import PatientCard from './patientCard';



const PatientList = props =>{
    if( props.items.length === 0 )
    {
        return (
        <div className=" place-list centre">
            <Card>
                <h2> No Patients Found.</h2>
                
            </Card>
        </div>
        );
    }
    
    return(
    <CardDeck>
    {props.items.map( med=> (
    <PatientCard 
    patients={med.patient}
    
    />))}
    </CardDeck> 

    );
};
 export default PatientList;