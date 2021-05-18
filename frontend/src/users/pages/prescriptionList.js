import React from 'react';

import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { CardDeck, CardGroup } from "react-bootstrap";
import PrescriptionCard from './prescriptionCard';



const PrescriptionList = props =>{
    if( props.items.length === 0)
    {
        return (
        <div className=" place-list centre">
            <Card>
                <h2> No Prescriptions Found.</h2>
                
            </Card>
        </div>
        );
    }
    return(
    <CardDeck>
    {props.items.map( pres=> (
    <PrescriptionCard
    id={pres.id}
    doctor={pres.doctor}
    patient={pres.patient}
    date={pres.date}
    meds ={pres.meds}
    age ={pres.age}
    name ={pres.name}
    
    />))}
    </CardDeck> 

    );
};
 export default PrescriptionList;