import React, { FC, useContext, useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

import { Link } from 'react-router-dom';

import { AuthContext } from '../../context/AuthContext';
import { loginUser } from '../../utilities/service';
  
const Login: FC = () => {

    const [userData, setUserData] = useState({
        userName: '',
        password:''
    });
    const { userName, password } = userData;
    const auth = useContext(AuthContext);

    const handleChange = (e: { target: { name: string, value: string } }) => {
        setUserData((s) => {
            return {
                ...s,
                [e.target.name]: e.target.value
            }
        });
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        loginUser({ userName, password }).then((res) => {
            const data = res.data;
            auth.login(data.token, data.userId, data.userName);
        })
    };

    return (
        <Container>
            <Row>
                <Col sm={4}>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Your name</Form.Label>
                            <Form.Control
                                name='userName'
                                type="text"
                                placeholder="Your name"
                                value={userName}
                                onChange={handleChange} />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                name='password'
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={handleChange}/>
                        </Form.Group>
                        <Button
                            variant="primary"
                            type="submit"
                            onClick={handleSubmit}>
                            Log in
                        </Button>
                        <Form.Text className="text-muted">
                            Don't you have an account? 
                            <Link to="/singup"> Sing Up</Link>
                        </Form.Text>
                    </Form>
                </Col>
            </Row>
        </Container>
        
    )
}

export default Login;