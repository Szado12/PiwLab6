import React from 'react';
import ReactDOM from 'react-dom';
import {Container, Col,Image,Button} from 'react-bootstrap';
import style from './../Styles/PizzaCard.css';
export default function PageLogin(props){
    const addPizzaToOrder = () =>{
        let x = sessionStorage.getItem("order");
        console.log(x,typeof(x));
        if(x==null){
            sessionStorage.setItem("order",JSON.stringify([{name: props.data.name, price: props.data.price, id: props.id}]))
        }
        else{
            x = JSON.parse(x);
            x.push({name: props.data.name, price: props.data.price, id: props.id});
            sessionStorage.setItem("order",JSON.stringify(x));
        }
    }
    return(
        <Col sm={12} md={6}>
            <div className="PizzaCard">
                <h2>{props.data.name}</h2>
                <Image src={props.data.url} fluid ></Image>
                <p><b>Ingredients:</b>{props.data.ingredients}</p>
                <p>{props.data.price}</p>
                <Button variant="success" onClick={() => addPizzaToOrder()} >Order</Button>
            </div>
        </Col>
    )
}