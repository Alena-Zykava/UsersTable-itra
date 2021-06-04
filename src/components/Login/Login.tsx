import React, { FC } from 'react';
import {Form, Button, Container, Row, Col } from 'react-bootstrap';
  
const Login: FC = () => {
    return (
        <Container>
            <Row>
                <Col sm={4}>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Log in
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
        
    )
}

export default Login;