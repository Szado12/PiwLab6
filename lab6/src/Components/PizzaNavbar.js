import React from 'react';
import ReactDOM from 'react-dom';
import {Navbar,Nav} from 'react-bootstrap';
import logo from './../Images/logo.png';
import {auth} from './Firebase.js';
import { useHistory } from "react-router-dom";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
export default function PizzaNavbar(props){
    let history = useHistory();
    const Logout = async() =>{
        await auth.signOut().then(
            props.setUser(null),
            sessionStorage.removeItem("user"),
            history.push("/menu")
        )
    }
    if(props.user===null)
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
                <Nav.Link href="#menu">Menu</Nav.Link>
                </Nav>
                <Nav className="ml-auto">
                <Nav.Link href="#user">
                
                </Nav.Link>
                <Nav.Link href="#login">Login</Nav.Link>
                <Nav.Link href="#registry">Registry</Nav.Link>
                </Nav>
        </Navbar>
        
        )
    else{
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
                <Nav.Link href="#menu">Menu</Nav.Link>
                <Nav.Link href="#create">Create</Nav.Link>
                </Nav>
                <Nav className="ml-auto">
                <Nav.Link href="#cart"><ShoppingCartIcon/></Nav.Link>
                <Nav.Link href="#user">{props.user.email}</Nav.Link>
                <Nav.Link onClick={() => Logout()}>Logout</Nav.Link>
                </Nav>
        </Navbar>
        )
    }
}