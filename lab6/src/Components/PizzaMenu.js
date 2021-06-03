import React,{useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import {Container, Row} from 'react-bootstrap';
import style from './../Styles/Menu.css';
import PizzaCard from './PizzaCard.js';
import {getPizzas} from './Firebase.js';
export default function PizzaMenu(props){
    const [pizzas,setPizzas] = useState([]);
    const GetPizzasToRender = async() =>{
        let a = [];
        await getPizzas().then(x=>{
            x.forEach(y =>{
                a.push({data: y.data(),key: y.id});
            })
        });
        setPizzas(a);
    }
    const  pizzasRendered = pizzas.map(x=> <PizzaCard data={x.data} key={x.key}/>);
    console.log(pizzasRendered);
    useEffect(() =>{GetPizzasToRender()}, []);
    return(
        <Container >
            <div className="PizzaMenu">
            <Row>
                {pizzasRendered}
            </Row>
            </div>
        </Container>
        
    )
}
