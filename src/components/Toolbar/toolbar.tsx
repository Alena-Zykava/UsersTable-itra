import React, { FC } from 'react';
import { Button, Col } from 'react-bootstrap';

interface IToolbar{
    onDeleteUser: (e: any) => void,
    onBlockUser: (e: any) => void
}

const Toolbar: FC<IToolbar> = ({ onDeleteUser, onBlockUser }) => {
    

    return (
        // <Container className='p-3'>
            // <Row className='d-flex justify-content-between'>
                <Col sm={3} className='d-flex justify-content-between'>
                    <Button variant='success'>
                        <i className='bi bi-unlock-fill'></i>
                    </Button>
                    <Button variant='warning' onClick={onBlockUser}>
                        <i className='bi bi-lock-fill'></i>
                    </Button>
                    <Button variant='danger' onClick={onDeleteUser}>
                        <i className='bi bi-trash-fill'></i>
                    </Button>
                </Col>                
            // </Row>
        // </Container>        
    )
}

export default Toolbar;