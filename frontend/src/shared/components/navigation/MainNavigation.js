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
import "../../../css/MainNav.css";
const MainNavigation = () => {
  const auth = useContext(AuthContext);
  const history = useHistory();
  const routeChange = () =>{ 
    let path = `/login`; 
    history.push(path);
  }
    return(
        <Navbar sticky="top" bg="dark" variant="dark" className="BGGrade">
  <Navbar.Brand className="MediTechLogo" href="/home">MediTech</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto"></Nav>
    <Nav>
    {auth.isLoggedIn && auth.isDoctor && (<NavLink className="NavbarLinks" to="/addprescription">
                            <i class="fas fa-prescription"> </i>
                            {"   "}
                            Add Prescription
                        </NavLink>)}
    {auth.isLoggedIn && !auth.isDoctor &&( <Link className="NavbarLinks" to="/vitals">
                            <i class="fas fa-heartbeat"></i>
                            {"   "}
                            Add Vitals
                        </Link>)}
    {auth.isLoggedIn && !auth.isDoctor &&(<NavLink className="NavbarLinks" to="/doctors">
                            <i class="fas fa-user-md"></i>
                            {"   "}
                            Find Doctors
                        </NavLink>)}
    {auth.isLoggedIn && !auth.isDoctor &&(<NavLink className="NavbarLinks" to="/allergy">
                            <i class="fas fa-capsules"></i>
                            {"   "}
                            Add Your Allergies
                        </NavLink>)}
    </Nav>
    {auth.isLoggedIn &&  !auth.isDoctor &&(<Button onClick={auth.logout} variant="warning">Logout</Button>)}
    {auth.isLoggedIn && auth.isDoctor &&(<Button onClick={auth.doctorlogout} variant="warning">Logout</Button>)}
    {!auth.isLoggedIn  &&(<Button onClick={routeChange}  variant="warning">Login</Button>)}
  </Navbar.Collapse>
</Navbar>
     
    );

};
 
export default MainNavigation;