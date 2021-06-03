import './App.css';
import PizzaNavbar from './Components/PizzaNavbar.js';
import PizzaMenu from './Components/PizzaMenu.js';
import PageLogin from './Components/PageLogin.js';
import PizzaCart from './Components/PizzaCart.js';
import PageRegistry from './Components/PageRegistry.js';
import UserHistory from './Components/UserHistory.js';
import React, {useEffect, useState} from "react";
import {Row,Container,Col,Navbar, Nav, Button} from 'react-bootstrap';
import {Route,HashRouter,Redirect} from "react-router-dom";
import useSessionStorageState from "./Components/State.js"
import style from "./App.css";

function App() 
{
  const [user,setUser] = useState(null);
      return (
      <div className="App"> 
      <HashRouter>
        <PizzaNavbar user={user} setUser={setUser}></PizzaNavbar>
        <Route exact path="/menu">
          <PizzaMenu/>
        </Route>
        <Route exact path="/user">
          <UserHistory/>
        </Route>
        <Route exact path="/login">
          <PageLogin setUser={setUser}/>
        </Route>
        <Route exact path="/registry">
          <PageRegistry/>
        </Route>
        <Route exact path="/cart">
          <PizzaCart/>
        </Route>
      </HashRouter>
      </div>
    );
}
export default  App