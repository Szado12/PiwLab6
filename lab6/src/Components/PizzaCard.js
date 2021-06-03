import React from 'react';
import ReactDOM from 'react-dom';
import {Container, Col,Image,Button} from 'react-bootstrap';
import style from './../Styles/PizzaCard.css';
export default function PageLogin(props){
    const addPizzaToOrder = () =>{
        //session storage
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