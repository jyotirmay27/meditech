import React from 'react';

import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Row,CardColumns, CardDeck, CardGroup } from "react-bootstrap";
import VitalCard from './vitalCard';
import Chart from '../../shared/components/UIElements/Chart';
import "../../css/DoctorListCard.css";
 
const VitalList = props =>{
    var sugar=[]
var BPS=[];
var BPD=[];
var temperature=[];
var weight=[];
var height=[];
var pulse=[];

        for( let i =0 ; i<7;i++)
        {
        if(props.items.length === i)
        { 
            for(let j=0; j<7-i; j++ )
            {
                sugar.push("100");
                BPS.push("120");
                BPD.push("80");
                temperature.push("37");
                height.push("0");
                weight.push("0");
                pulse.push("80");
            }  
            for(let k=0; k<i; k++)
            {
                sugar.push(props.items[k].sugar);
                BPS.push(props.items[k].BPS);
                BPD.push(props.items[k].BPD);
                temperature.push(props.items[k].temperature);
                height.push(props.items[k].height);
                weight.push(props.items[k].weight);
                pulse.push(props.items[k].pulse);

            }  
        }
    }
    if(props.items.length.length >=7)
    {
        props.items.length=props.items.length.slice(Math.max(props.items.length.length - 7, 0))
    }







sugar.push("Sugar");
BPS.push("Blood Pressure Systolic");
 BPD.push("Blood Pressure Diastolic");
 temperature.push("Temperature");
height.push("Height");
weight.push("Weight");
pulse.push("Pulse");
                sugar.push(100);
                BPS.push(120);
                BPD.push(80);
                temperature.push(37);
                height.push(0);
                weight.push(0);
                pulse.push(80);
    return(
        
        <>
        <Row>
            <Col sm={6}
            >
                <Card style={{
                    
                        width: "90%",
                        height: "24rem",
                       marginLeft: "0.8rem",
                       marginRight: "0.8rem",
                        marginTop: "0.8rem",
                       
                        

                    }}>
                    <Chart  points={sugar} />
                </Card>
            </Col>
            <Col sm={6}>
                <Card
                    style={{
                        width: "90%",
                        height: "24rem",
                        marginLeft: "0.8rem",
                        marginRight: "0.8rem",
                        marginTop: "0.8rem",
                    }}
                >
                    <Chart points={pulse} />
                </Card>
            </Col>
        </Row>
        <Row>
            <Col sm={6}>
                <Card
                    style={{
                        width: "90%",
                        height: "24rem",
                        marginLeft: "0.8rem",
                        marginRight: "0.8rem",
                        marginTop: "0.8rem",
                    }}
                >
                    <Chart points={BPS} />
                </Card>
            </Col>
            <Col sm={6}>
                <Card
                    style={{
                        width: "90%",
                        height: "24rem",
                        marginLeft: "0.8rem",
                        marginRight: "0.8rem",
                        marginTop: "0.8rem",
                    }}
                >
                    <Chart points={BPD} />
                </Card>
            </Col>
        </Row>
        <Row>
            <Col sm={6}>
                <Card
                    style={{
                        width: "90%",
                        height: "24rem",
                        marginLeft: "0.8rem",
                        marginRight: "0.8rem",
                        marginTop: "0.8rem",
                    }}
                >
                    <Chart points={temperature} />
                </Card>
            </Col>
            <Col sm={6}>
                <Card
                    style={{
                        width: "90%",
                        height: "24rem",
                        marginLeft: "0.8rem",
                        marginRight: "0.8rem",
                        marginTop: "0.8rem",
                    }}
                >
                    <Chart points={height} />
                </Card>
            </Col>
        </Row>
        <Row>
            <Col sm={6}>
                <Card
                    style={{
                        width: "90%",
                        height: "24rem",
                        marginLeft: "0.8rem",
                        marginRight: "0.8rem",
                        marginTop: "0.8rem",
                    }}
                >
                    <Chart points={weight} />
                </Card>
            </Col>
        </Row>
    </>
    );
};
 export default VitalList;