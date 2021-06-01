import './App.css';
import PizzaNavbar from './Components/PizzaNavbar.js';
import PizzaMenu from './Components/PizzaMenu.js';
import React, {useEffect, useState} from "react";
import {Row,Container,Col,Navbar, Nav, Button} from 'react-bootstrap';
import {v4 as uuidv4 } from "uuid";
import {Route,HashRouter} from "react-router-dom";
import style from "./App.css";

function App() 
{
      return (
      <div className="App"> 
      <HashRouter>
        <PizzaNavbar></PizzaNavbar>
        <Route exact path="/home">
          <PizzaMenu/>
        </Route>

      </HashRouter>
      </div>
    );
}
export default  App