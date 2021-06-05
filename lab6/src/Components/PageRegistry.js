import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import {Container,Form,Button,Col} from 'react-bootstrap';
import {registryUser} from './Firebase.js'
import './../Styles/PageLogin.css';
import { useHistory } from "react-router-dom";



export default function PageRegistry(props){
    const [password,setPassword] = useState("");
    const [password2,setPassword2] = useState("");
    const [email,setEmail] = useState("");
    const [message,setMessage] = useState("");
    let history = useHistory();
    const checkPassword = () =>{
        if(password !== password2){
            setMessage("Passwords are not the same!");
            return false;
        }
        return true;
    }
    const registry = () =>{
        if(checkPassword()){
            registryUser(email,password).then(x=>{
                console.log(x);
                history.push("/login");
            })
            .catch(error =>
                setMessage(error.message));
        }
    }
    return(
        <Container>
        <div className="PageLogin">
        <Col sm={{ span: 10, offset: 1 }}>
        <Form>
        <Form.Group controlId="formBasicEmail" sm={8}>
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" onChange={(e)=> setEmail(e.target.value)} placeholder="Enter email" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword" sm={8}>
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" onChange={(e)=> setPassword(e.target.value)} placeholder="Password" />
        </Form.Group>
        <Form.Group controlId="formBasicRepeatPassword" sm={8}>
            <Form.Label>Repeat Password</Form.Label>
            <Form.Control type="password" onChange={(e)=> setPassword2(e.target.value)} placeholder="Repeat Password" />
        </Form.Group>
        <p>{message}</p>
        <Button variant="success" onClick={() =>registry()}>
            Registry
        </Button>
        </Form>
        </Col>
        </div>
    </Container>
    )
}