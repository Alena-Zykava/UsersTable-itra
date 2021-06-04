import React, { FC } from 'react';
import { Container, Row, Col, Table, Form } from 'react-bootstrap';

import UserItems from '../UserItems';

const UsersTable: FC = () => {
    return (
        <Container className='p-3'>
            <Row>
                <Col>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>
                                    <Form.Check />
                                </th>
                                <th>#</th>
                                <th>Username</th>
                                <th>Email</th>
                                <th>Data registration</th>
                                <th>Last login date</th>
                                <th>Status</th>
                            </tr>
                        </thead>                        
                        <UserItems/>                        
                    </Table>
                </Col>
            </Row>
        </Container>        
    )
}

export default UsersTable;