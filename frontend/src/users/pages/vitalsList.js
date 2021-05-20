import React from 'react';

import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { CardDeck, CardGroup } from "react-bootstrap";
import VitalCard from './vitalCard';
import Chart from '../../shared/components/UIElements/Chart';

 
const VitalList = props =>{
    var sugar=[]
var BP=[];
var pulse=[];

        for( let i =0 ; i<7;i++)
        {
        if(props.items.length === i)
        { 
            for(let j=0; j<7-i; j++ )
            {
                sugar.push("90");
                BP.push("90");
                pulse.push("90");
            }  
            for(let k=0; k<i; k++)
            {
                sugar.push(props.items[k].sugar);
                BP.push(props.items[k].BP);
                pulse.push(props.items[k].pulse);

            }  
        }
    }
    if(props.items.length.length >=7)
    {
        props.items.length=props.items.length.slice(Math.max(props.items.length.length - 7, 0))
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