import React from 'react';

import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { CardDeck, CardGroup } from "react-bootstrap";
import VitalCard from './vitalCard';


 
const VitalList = props =>{
    if( props.items.length === 0)
    {
        return (
        <div className=" place-list centre">
            <Card>
                <h2> No Vitals Found.</h2>
                
            </Card>
        </div>
        );
    }
    if(props.items.length.length >=7)
{
    props.items.length=props.items.length.slice(Math.max(props.items.length.length - 7, 0))
}
if(props.items.length.length ===6)
{
    props.items.length=props.items.length.slice(Math.max(props.items.length.length - 6, 0))
}
if(props.items.length.length ===5)
{
    props.items.length=props.items.length.slice(Math.max(props.items.length.length - 5, 0))
}
if(props.items.length.length ===4)
{
    props.items.length=props.items.length.slice(Math.max(props.items.length.length - 4, 0))
}
if(props.items.length.length ===3)
{
    props.items.length=props.items.length.slice(Math.max(props.items.length.length - 3, 0))
}

if(props.items.length.length ===2)
{
    props.items.length=props.items.length.slice(Math.max(props.items.length.length - 2, 0))
}
if(props.items.length.length ===1)
{
    props.items.length=props.items.length.slice(Math.max(props.items.length.length - 1, 0))
}

    return(
    <CardDeck>
    {props.items.map( v=> (
    <VitalCard
    id={v.id}
    sugar={v.sugar}
    BP={v.BP}
    date={v.date}
    pulse ={v.pulse}
    creator ={v.creator}
    
    />))}
    </CardDeck> 

    );
};
 export default VitalList;