import React, { FC, useEffect, useState, MouseEvent } from 'react';
import { Container, Row, Col, Table, Form } from 'react-bootstrap';

import UserItems from '../UserItems';
import Toolbar from '../Toolbar';
import { deleteUser, getUsers, updateUser } from '../../utilities/service';
import { IUser } from '../../models/User';

function getUsersData(setState: any) {
    getUsers().then((res) => {
        const data = res.data.map((user: IUser) => {
            return {
                ...user,
                checked: false
            }
        });
         setState(data);
    })
}

const UsersTable: FC = () => {
    const [allChecked, setAllChecked] = useState(false);
    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        getUsersData(setUsers);
    }, [])
    
    const getChangeUsersName = () => users.filter((user) => user.checked === true)
        .map(({ userName }) => {
            return userName;
        })

    const onDeleteUser = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const usersName = getChangeUsersName();
        deleteUser({ usersName }).then((res) => {
            getUsersData(setUsers);
        })
    }

    const onBlockUser = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const usersName = getChangeUsersName();
        console.log(usersName);
        updateUser( {usersName} ).then((res) => {            
            getUsersData(setUsers);
        })
    }

    const handlerCheckbox = () => {
        setAllChecked((s) => !s)
    }

    return (
        <Container className='p-3'>
            <Toolbar onDeleteUser={onDeleteUser} onBlockUser={ onBlockUser }/>
            <Row>
                <Col>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>
                                    <Form.Check
                                        checked={allChecked}
                                        onChange={handlerCheckbox} />
                                </th>
                                <th>#</th>
                                <th>Username</th>
                                <th>Email</th>
                                <th>Data registration</th>
                                <th>Last login date</th>
                                <th>Status</th>
                            </tr>
                        </thead>                        
                        <UserItems
                            users={users}
                            allChecked={allChecked}
                            />
                    </Table>
                </Col>
            </Row>
        </Container>        
    )
}

export default UsersTable;