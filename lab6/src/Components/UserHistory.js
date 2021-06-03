import React,{useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import {Button,Table,Container} from 'react-bootstrap';
import style from './../Styles/PizzaCart.css';
import {getUserHistory} from './Firebase.js';
export default function UserHistory(){
    const [history,setHistory] = useState([]);
    const getHistory= async() =>{
        let user = JSON.parse(sessionStorage.getItem('user'));
        let tempHistory = [];
        await getUserHistory(user).then(doc=>{
            doc.forEach(row=>{
                tempHistory.push(row.data());
            })
        });
        setHistory(tempHistory)
    }
    useEffect(()=>getHistory(),[]);
    return(
            <Container >
                <div className="PizzaCart">
                <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>Order</th>
                    <th>Price</th>
                    <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
                </Table>
                
                </div>
            </Container> 
        )
}
