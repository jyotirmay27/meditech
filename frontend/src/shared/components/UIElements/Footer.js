import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { CardDeck } from "react-bootstrap";

export const Footer = () => {
    return (
        <div
        style={{
            backgroundColor: "#011631",
            textAlign: "center",
            padding: "20px",
            position: "fixed",
            left: "0",
            bottom: "0",
            height: "60px",
            width: "100%",
            color: "White",
        }}
    >
        <h3>CodeKar</h3>
    </div>
    );
};
