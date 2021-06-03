import React,{useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import {Button,Table,Container} from 'react-bootstrap';
import style from './../Styles/PizzaCart.css';
import {getUserHistory} from './Firebase.js';
export default function UserHistory(){

    const getHistory= () =>{
        getUserHistory().then(x=>{
            console.log(x);
        }
        )
    }
    useEffect(()=>getHistory(),[]);
    
    return(
            <Container >
                <div className="PizzaCart">
                <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>Pizza</th>
                    <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
                </Table>
                
                </div>
            </Container> 
        )
}
