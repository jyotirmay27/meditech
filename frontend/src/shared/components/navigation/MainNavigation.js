import React, { useState,useContext } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import { AuthContext} from '../../util/AuthContext';
import {NavLink , Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
const MainNavigation = () => {
  const auth = useContext(AuthContext);
  const history = useHistory();
  const routeChange = () =>{ 
    let path = `/login`; 
    history.push(path);
  }
    return(
        <Navbar sticky="top" bg="dark" variant="dark">
  <Navbar.Brand href="/home">MediTech</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
    {auth.isLoggedIn && auth.isDoctor && (<NavLink style={{ color: "white", textDecoration:"none",padding: "0.5rem"}} to="/addprescription" >Add Prescription</NavLink>)}
    {auth.isLoggedIn && !auth.isDoctor &&( <Link style={{ color: "white", textDecoration:"none",padding: "0.5rem"}} to="/vitals">Add Vitals</Link>)}
    {auth.isLoggedIn && !auth.isDoctor &&( <NavLink style={{ color: "white", textDecoration:"none",padding: "0.5rem"}} to="/doctors">Find Doctors</NavLink>)}
    {auth.isLoggedIn && !auth.isDoctor &&( <NavLink style={{ color: "white", textDecoration:"none", padding: "0.5rem"}} to="/allergy">Add Your Allergies</NavLink>)}
    </Nav>
    {auth.isLoggedIn &&  !auth.isDoctor &&(<Button onClick={auth.logout} variant="warning">Logout</Button>)}
    {auth.isLoggedIn && auth.isDoctor &&(<Button onClick={auth.doctorlogout} variant="warning">Logout</Button>)}
    {!auth.isLoggedIn  &&(<Button onClick={routeChange}  variant="warning">Login</Button>)}
  </Navbar.Collapse>
</Navbar>
     
    );

};
 
export default MainNavigation;