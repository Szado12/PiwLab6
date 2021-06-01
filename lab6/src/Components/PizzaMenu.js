import React from 'react';
import ReactDOM from 'react-dom';
import {Container, Row} from 'react-bootstrap';
import style from './../Styles/Menu.css'
import PizzaCard from './PizzaCard.js'
export default function PizzaMenu(props){
    return(
        <Container >
            <div className="PizzaMenu">
            <Row>
                <PizzaCard></PizzaCard>
                <PizzaCard></PizzaCard>
                <PizzaCard></PizzaCard>
                <PizzaCard></PizzaCard>
                <PizzaCard></PizzaCard>
            </Row>
            </div>
        </Container>
        
    )
}