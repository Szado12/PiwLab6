import React from 'react';
import ReactDOM from 'react-dom';
import {Container,Form,Button,Col,Row} from 'react-bootstrap';
import style from './../Styles/PageLogin.css';
import image from './../Images/4ser_adobespark.jpg'
export default function PizzaCard(props){
    return(
        <Container>
        <div className="PageLogin">
        <Col sm={{ span: 10, offset: 1 }}>
        <Form>
        <Form.Group controlId="formBasicEmail" sm={8}>
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword" sm={8}>
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="success" type="submit">
            Submit
        </Button>
        </Form>
        </Col>
        </div>
    </Container>
    )
}