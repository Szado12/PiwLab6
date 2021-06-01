import React from 'react';
import ReactDOM from 'react-dom';
import {Container, Col,Image,Button} from 'react-bootstrap';
import style from './../Styles/PizzaCard.css';
import image from './../Images/4ser_adobespark.jpg'
export default function PageLogin(props){
    return(
        <Col sm={12} md={6}>
            <div className="PizzaCard">
                <h2>Pizza</h2>
                <Image src={image} fluid ></Image>
                <p>opis opis opis</p>
                <Button>Order</Button>
            </div>
        </Col>
    )
}