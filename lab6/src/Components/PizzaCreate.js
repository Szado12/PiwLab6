import React,{useState,useEffect} from 'react';
import ReactDOM from 'react-dom';
import {Button,Table,Image,Container} from 'react-bootstrap';
import './../Styles/PizzaCreate.css';
import draw from './../Images/pizzadraw.png';
import {getIngredients} from './Firebase.js';
import { CheckBox } from '@material-ui/icons';
export default function PizzaCreate(){
    
    const [ingredients,setIngredients] = useState([]);
    let [price,setPrice] = useState(20);
    const getPizzaIngredients= async() =>{
        let a = [];
        await getIngredients().then(x=>{
            x.forEach(y =>{
                a.push({data: y.data(),key: y.id,checked: false});
            })
        }).then(() =>setIngredients(a));

    }
    const addIngredient = async(id) =>{
        let newIngredients = ingredients.map((item)=>{
            if(item.key === id){
                const updatedItem ={
                    ...item,
                    checked: !item.checked
                };
                return updatedItem;
            }
            return item;
        });
        setIngredients(newIngredients);
        let sum=20;
        newIngredients.forEach(x=>{
            if(x.checked)
                sum+=x.data.price;
        });
        setPrice(sum);
    
    }
    const Add=()=>{
        let x = sessionStorage.getItem("order");
        if(x==null){
            sessionStorage.setItem("order",JSON.stringify([{name: "Created Pizza", price: price, id: 1}]))
        }
        else{
            x = JSON.parse(x);
            x.push({name: "Created Pizza", price: price, id: 1});
            sessionStorage.setItem("order",JSON.stringify(x));
        }
    }
    useEffect(()=>getPizzaIngredients(),[]);
    return(
        <Container >
            <div className="PizzaCreate">
            <h1>Create your own pizza</h1>
            <Image src={draw} fluid/>
            
            <Table striped bordered hover>
            <thead>
                <tr>
                <th>Select</th>
                <th>Ingredient</th>
                <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {ingredients.map(x=><tr key={x.key}><td><input type="checkbox" onChange={() =>addIngredient(x.key)} className="myCheckbox"/></td><td>{x.data.name}</td><td>{(x.data.price*1).toFixed(2)}</td></tr>)}
                <tr><th colSpan="2">Price:</th><th>{(price*1).toFixed(2)}</th></tr>
            </tbody>
            </Table>
            
            <Button variant="success" onClick={()=>Add()}>Order now!</Button>
            </div>
        </Container> 
    )
    }

