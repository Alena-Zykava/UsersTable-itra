import React, { FC, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

import { Link } from 'react-router-dom';
import {registration} from '../../utilities/service'

const SingUp: FC = () => {

    const [userData, setUserData] = useState({
        userName: '',
        email: '',
        password:''
    });
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    const [isError, setIsError] = useState(false);
    const history = useHistory();

    const { userName, password, email } = userData;

    const handleSubmit = (e: any) => {        
        e.preventDefault();
        
        const today = new Date().toLocaleDateString();
        registration({
            userName,
            password,
            email,
            dataRegistration: today,
            lastLoginData: today,
            status: true
        }).then((res) => {
            setIsError(false);
            console.log("Успешно", isError);
            history.push('/');
        }).catch(() => {
            console.log("ошибка", isError);
            alert("ошибка регистрации");
            setIsError(true);
        })
        
    }

    const handleChange = (e: { target: { name: string, value: string } }) => {
        setUserData((s) => {
            return {
                ...s,
                [e.target.name]: e.target.value
            }
        });        
    }

    return (
        <Container>
            <Row>                
                <Col sm={4}>
                    <Form>
                    <Form.Group >
                            <Form.Label>Your name</Form.Label>
                            <Form.Control
                                name='userName'
                                placeholder="Your name"
                                value={userName}
                                onChange={handleChange} />
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                name='email'
                                type="email"
                                placeholder="Enter email"
                                value={email}
                                onChange={handleChange}/>
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
                        <Button variant="primary" type="submit" onClick={handleSubmit}>
                            Sing Up
                        </Button>
                        <Form.Text className="text-muted">
                            Do you have an account? 
                            <Link to="/login"> Log In</Link>
                        </Form.Text>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default SingUp;