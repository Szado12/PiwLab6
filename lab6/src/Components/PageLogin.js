import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import {Container,Form,Button,Col,Row} from 'react-bootstrap';
import style from './../Styles/PageLogin.css';
import {login} from './Firebase.js'
export default function PageLogin(props){
    const [password,setPassword] = useState("");
    const [email,setEmail] = useState("");
    const [message,setMessage] = useState("");

    const loginUser = () =>{
        login(email,password).then(x=>{
            console.log(x);
        })
        .catch(error =>
            setMessage(error.message));
    }
    return(
        <Container>
            <div className="PageLogin">
                <Col sm={{ span: 10, offset: 1 }}>
                <Form>
                <Form.Group controlId="formBasicEmail" sm={8}>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email"  onChange={(e)=> setEmail(e.target.value)} placeholder="Enter email" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword" sm={8}>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password"  onChange={(e)=> setPassword(e.target.value)} placeholder="Password" />
                </Form.Group>
                <p>{message}</p>
                <Button variant="success" onClick={() => loginUser()}>
                    Login
                </Button>
                </Form>
                </Col>
            </div>
        </Container>
    )
}