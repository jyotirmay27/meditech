import React from 'react';

import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { CardDeck, CardGroup } from "react-bootstrap";
import DocCard from './docCard';



const DocList = props =>{
    if( props.items.length === 0)
    {
        return (
        <div className=" place-list centre">
            <Card>
                <h2> No Doctors Found.</h2>
                
            </Card>
        </div>
        );
    }
    return(
    <CardDeck>
    {props.items.map( med=> (
    <DocCard 
    doctor={med.doctor}
    
    />))}
    </CardDeck> 

    );
};
 export default DocList;