import React from 'react';

import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { CardDeck, CardGroup } from "react-bootstrap";
import AllergyCard from './allergycard';



const AllergyList = props =>{
    if( props.items.length === 0)
    {
        console.log(props.items.length);
        console.log(props.items);
        return (
        <div className=" place-list centre">
            <Card>
                <h2> No Allergy Found.</h2>
                
            </Card>
        </div>
        );
    }
    console.log(props.items.length);
        console.log(props.items);
    return(
    <CardDeck>
    {props.items.map( v=> (
    <AllergyCard
    id={v.id}
    from={v.from}
    reaction={v.reaction}
    creator ={v.creator}
    />))}
    </CardDeck> 

    );
};
 export default AllergyList;