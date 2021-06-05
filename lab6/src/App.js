import './App.css';
import PizzaNavbar from './Components/PizzaNavbar.js';
import PizzaMenu from './Components/PizzaMenu.js';
import PageLogin from './Components/PageLogin.js';
import PizzaCart from './Components/PizzaCart.js';
import PizzaCreate from './Components/PizzaCreate.js';
import PageRegistry from './Components/PageRegistry.js';
import UserHistory from './Components/UserHistory.js';
import React, {useState} from "react";
import {Route,HashRouter,Redirect} from "react-router-dom";

function App() 
{
  const [user,setUser] = useState(JSON.parse(sessionStorage.getItem('user')));
      return (
      <div className="App"> 
      <HashRouter>
        <PizzaNavbar user={user} setUser={setUser}></PizzaNavbar>
        <Route exact path="/menu">
          <PizzaMenu/>
        </Route>
        <Route
            path='/user'
            render={() =>
              user != null ? (
                <UserHistory />
              ) : (
                <Redirect to='/login' />
              )
            }
          />
        <Route exact path="/login">
          <PageLogin setUser={setUser}/>
        </Route>
        <Route exact path="/registry">
          <PageRegistry/>
        </Route>
        <Route
            path='/cart'
            render={() =>
              user != null ? (
                <PizzaCart />
              ) : (
                <Redirect to='/login' />
              )
            }
          />
          <Route
            path='/create'
            render={() =>
              user != null ? (
                <PizzaCreate />
              ) : (
                <Redirect to='/login' />
              )
            }
          />
      </HashRouter>
      </div>
    );
}
export default  App