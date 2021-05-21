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
import SideDrawer from './SideDrawer';
import Backdrop from '../UIElements/Backdrop';
import "../../../css/MainNav.css";
const MainNavigation = () => {
  const auth = useContext(AuthContext);
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const openDrawerHandler = () => {
    setDrawerIsOpen(true);
  };

  const closeDrawerHandler = () => {
    setDrawerIsOpen(false);
  };
  const history = useHistory();
  const routeChange = () =>{ 
    let path = `/login`; 
    history.push(path);
  }
    return(
      <React.Fragment>
      {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}
      <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
        <nav className="main-navigation__drawer-nav">
        
        <ul className="nav-links">
          
                        <li>
    {auth.isLoggedIn && !auth.isDoctor &&( <NavLink className="NavbarLinks" to="/vitals">
                            <i class="fas fa-heartbeat"></i>
                            
                            Add Vitals
                        </NavLink>)}
                        </li>
                        <li>
    {auth.isLoggedIn && !auth.isDoctor &&(<NavLink className="NavbarLinks" to="/doctors">
                            <i class="fas fa-user-md"></i>
                            
                            Find Doctors
                        </NavLink>)}
                        </li>
                        <li>
    {auth.isLoggedIn && !auth.isDoctor &&(<NavLink className="NavbarLinks" to="/allergy">
                            <i class="fas fa-bacteria"></i>
                            {"   "}
                            Add Your Allergies
                        </NavLink>)}
                        </li>
                        <li>
        {auth.isLoggedIn && auth.isDoctor && (<NavLink className="NavbarLinks" to="/addprescription">
                            <i class="fas fa-prescription"> </i>
                           
                            Add Prescription
                        </NavLink>)}
                        </li>
      {auth.isLoggedIn && !auth.isDoctor && (
        <li>
          <button onClick={auth.logout}>LOGOUT</button>
        </li>
      )}
       {auth.isLoggedIn && auth.isDoctor && (
        <li>
          <button onClick={auth.doctorlogout}>LOGOUT</button>
        </li>
      )}
       {!auth.isLoggedIn && (
        <li>
          <button onClick={routeChange}>LOGIN</button>
        </li>
      )}
    </ul>

  
        </nav>
      </SideDrawer>
        <Navbar sticky="top" bg="dark" variant="dark" className="BGGrade">
  <Navbar.Brand className="MediTechLogo" href="/home">MediTech</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto"></Nav>
    <button
          className="main-navigation__menu-btn"
          onClick={openDrawerHandler}
        >
          <span />
          <span />
          <span />
        </button>
    <Nav className="main-navigation__header-nav">
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
                            <i class="fas fa-bacteria"></i>
                            {"   "}
                            Add Your Allergies
                        </NavLink>)}
                        {auth.isLoggedIn &&  !auth.isDoctor &&(<Button  onClick={auth.logout} variant="warning">Logout</Button>)}
    {auth.isLoggedIn && auth.isDoctor &&(<Button onClick={auth.doctorlogout} variant="warning">Logout</Button>)}
    {!auth.isLoggedIn  &&(<Button onClick={routeChange}  variant="warning">Login</Button>)}
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
</React.Fragment>
    );

};
 
export default MainNavigation;