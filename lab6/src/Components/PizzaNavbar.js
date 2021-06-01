import React from 'react';
import ReactDOM from 'react-dom';
import {Navbar,Nav,Form,Button,FormControl} from 'react-bootstrap';
import logo from './../Images/logo.png'
export default function PizzaNavbar(props){
    return(
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#menu">
            <img
                src={logo}
                width="60"
                height="50"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
            />
            </Navbar.Brand>
            <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
            <Nav className="ml-auto">
            <Nav.Link href="#login">Login</Nav.Link>
            <Nav.Link href="#registry">Registry</Nav.Link>
            </Nav>
        </Navbar>
        
    )
}