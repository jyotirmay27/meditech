import React from 'react';

import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { CardDeck, CardGroup } from "react-bootstrap";
import VitalCard from './vitalCard';
import Chart from '../../shared/components/UIElements/Chart';

 
const VitalList = props =>{
    if( props.items.length === 0)
    {    console.log(props.items.length);
        console.log(props.items);
        return (
        <div className=" place-list centre">
            <Card>
                <h2> No Vitals Found.</h2>
                
            </Card>
        </div>
        );
    }
    console.log(props.items.length);
    console.log(props.items);
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

var sugar=[]
var BP=[];
var pulse=[];
for ( let j=0; j<1; j++)
{
    sugar.push(props.items[j].sugar);
    BP.push(props.items[j].BP);
    pulse.push(props.items[j].pulse);

}
sugar.push("Sugar");
BP.push("BP");
pulse.push("Pulse");
    return(
    <CardDeck>
          <Card
                style={{
                    width: "24rem",
                    height: "24rem",
                    marginLeft: "0.8rem",
                    marginRight: "0.8rem",
                    marginTop: "0.8rem",
                }}
            >
   
    <Chart
   points={sugar}
    />
    </Card>
    <Card
                style={{
                    width: "24rem",
                    height: "24rem",
                    marginLeft: "0.8rem",
                    marginRight: "0.8rem",
                    marginTop: "0.8rem",
                }}
            >
   

   
    <Chart
   points={pulse}
    />
    </Card>
    </CardDeck> 

    );
};
 export default VitalList;