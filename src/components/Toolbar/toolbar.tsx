import React, { FC } from 'react';
import Button from 'react-bootstrap/Button';
import { Container, Row, Col } from 'react-bootstrap';

import { Link } from 'react-router-dom';

import './Toolbar.scss';

const Toolbar: FC = () => {
    return (
        <Container className='p-3'>
            <Row className='d-flex justify-content-between'>
                <Col sm={3} className='d-flex justify-content-between'>
                    <Button variant='success'>
                        <i className='bi bi-unlock-fill'></i>
                    </Button>
                    <Button variant='warning'>
                        <i className='bi bi-lock-fill'></i>
                    </Button>
                    <Button variant='danger'>
                        <i className='bi bi-trash-fill'></i>
                    </Button>
                </Col>
                <Col sm={3} className='d-flex justify-content-between'>
                    <Link to='/login'>
                        <Button variant='outline-primary'>
                            Log in
                        </Button>
                    </Link>
                    <Link to='/singup'>
                        <Button >
                            Sing up
                        </Button>
                    </Link>      
                </Col>
            </Row>
        </Container>        
    )
}

export default Toolbar;