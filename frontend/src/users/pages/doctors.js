import React from 'react';
import JJ from "../../jj.jpg";
import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";
import DoctorCard from './DoctorCard';


const DocList = props => {
    if(props.items.length === 0){ 
        console.log(props.items.length);
    console.log(props.items);
        return(
         <Card className="center">
             <h2> NO Doctors FOUND </h2>
         </Card>
        );
    }
    console.log(props.items.length);
    console.log(props.items);
    return(  
        <CardDeck style={{
            margin: "0.6rem",
            marginBottom: "0px",
            paddingBottom: "0.7rem",
        }}>
    { props.items.map( doc => (
         <DoctorCard  
        id={doc.id} 
        image= {JJ} 
        name={doc.name} 
        email={doc.email} />
    ))

    }
    </CardDeck>
);
    
    
};

export default DocList;