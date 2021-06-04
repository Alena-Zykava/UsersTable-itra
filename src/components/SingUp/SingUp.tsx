import React, { FC } from 'react';

import {Form, Button, Container, Row, Col } from 'react-bootstrap';

const SingUp: FC = () => {
    return (
        <Container>
            <Row>
                <Col sm={4}>
                    <Form>
                    <Form.Group >
                            <Form.Label>Your name</Form.Label>
                            <Form.Control placeholder="Your name" />
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Sing Up
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default SingUp;