import React from 'react';

import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { CardDeck, CardGroup } from "react-bootstrap";
import MedCard from './medcard';



const MedList = props =>{
    if( props.items.length === 0)
    {
        return (
        <div className=" place-list centre">
            <Card>
                <h2> No Medicines Found.</h2>
                
            </Card>
        </div>
        );
    }
    return(
    <CardDeck>
    {props.items.map( med=> (
    <MedCard
    id={med.id}
    doctor={med.docID}
    patient={med.patID}
    date={med.date}
    meds ={med.meds}
    
    />))}
    </CardDeck> 

    );
};
 export default MedList;