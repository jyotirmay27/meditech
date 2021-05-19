import React from "react";
import Card from "react-bootstrap/Card";
import Akira from "../jj.jpg";
import Chart from '../shared/components/UIElements/Chart';
 const VitalCard = props => {
    return (
        <div>
            <Card
                style={{
                    width: "24rem",
                    marginLeft: "0.8rem",
                    marginRight: "0.8rem",
                    marginTop: "0.8rem",
                }}
            >
                
                
                    <Chart />
                
            </Card>
            <Card
                style={{
                    width: "24rem",
                    marginLeft: "0.8rem",
                    marginRight: "0.8rem",
                    marginTop: "0.8rem",
                }}
            >
                
                
                    <Chart />
                
            </Card>

           
        </div>
    );
};

export default VitalCard;