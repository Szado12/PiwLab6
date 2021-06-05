import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import {Button,Table,Container} from 'react-bootstrap';
import './../Styles/PizzaCart.css';
import {sendOrder} from './Firebase.js';
export default function PizzaCart(props){

    const [order,setOrder] = useState(JSON.parse(sessionStorage.getItem("order")));

    const removePizzaFromOrder = (id) =>{
        let x = order.filter((item)=> item.id !== id);
        setOrder(x);
        sessionStorage.setItem("order",JSON.stringify(x));
    }
    const send = () =>{
        let price = order.reduce((total, currentValue) => total = total + currentValue.price,0).toFixed(2);
        let orderMin = order.map(x => {return {id: x.id, name: x.name}});
        let user = JSON.parse(sessionStorage.getItem("user"));
        sendOrder(user, orderMin, price).then(
            sessionStorage.removeItem("order"),
            setOrder([])
        );
    }
    if(order===null || order.length <= 0)
    {
        return(
            <Container >
                <div className="PizzaCart">
                    No pizzas ordered :(
                </div>
            </Container>   
        )
    }
    else
    {
        let cart = order.map(x => 
        <tr key={x.id}>
            <td>{x.name}</td>
            <td>{x.price}</td>
            <td>
            <Button variant="danger" onClick={() => {removePizzaFromOrder(x.id)}}>X</Button>
            </td>
        </tr>
        );
        let price = order.reduce((total, currentValue) => total = total + currentValue.price,0).toFixed(2);
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
                    {cart}
                    <tr>
                    <td>Price</td>
                    <td>{price}</td>
                    </tr>
                </tbody>
                </Table>
                
                <Button variant="success" onClick={()=> send()}>Order now!</Button>
                </div>
            </Container> 
        )
    }
}
