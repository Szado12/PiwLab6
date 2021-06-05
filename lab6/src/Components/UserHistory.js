import React,{useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import {Table,Container} from 'react-bootstrap';
import './../Styles/PizzaCart.css';
import {getUserHistory} from './Firebase.js';
export default function UserHistory(){
    const [history,setHistory] = useState([]);
    const getHistory= async() =>{
        let user = JSON.parse(sessionStorage.getItem('user'));
        let tempHistory = [];
        await getUserHistory(user).then(doc=>{
            doc.forEach(row=>{
                tempHistory.push({data:row.data(),key: row.id});
            })
        });
        setHistory(tempHistory);
    }
    
    const render = history.map(x=><tr key={x.key}><td>{x.data.date}</td><td>{x.data.order.map(y=>y.name + "\n")}</td><td>{x.data.price} PLN</td></tr>)
    useEffect(()=>getHistory(),[]);
    return(
            <Container >
                <div className="PizzaCart">
                <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>Date</th>
                    <th>Order</th>
                    <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {render}
                </tbody>
                </Table>
                
                </div>
            </Container> 
        )
}