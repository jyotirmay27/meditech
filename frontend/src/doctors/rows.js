import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

var x;
var y;

const Rows = props =>{
     x= document.getElementById('m1').value;
     y= document.getElementById('d1').value;
    return (
   
    <tr>
        <td>{props.no+1}</td>
        <td>
            <Form.Control id="m1" placeholder="Medicine" />
        </td>
        <td>
            <Form.Control id="d1" placeholder="Times per Day X Number of Days" />
        </td>
 
    </tr>


    );

    };
    export {x,y};
    export default Rows;