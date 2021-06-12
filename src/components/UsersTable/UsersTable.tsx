import React, { FC, useEffect, useState, MouseEvent, Dispatch, SetStateAction } from 'react';
import { Container, Row, Col, Table, Form } from 'react-bootstrap';

import UserItems from '../UserItems';
import Toolbar from '../Toolbar';
import { deleteUser, getUsers, updateUser } from '../../utilities/service';
import { IUser } from '../../models/User';
import PersonAccount from '../PersonAccount';
//import { AuthContext } from '../../context/AuthContext';

const getUsersData = (setUsers: Dispatch<SetStateAction<IUser[]>> ) => {
    
    getUsers().then((res) => {
        const data = res.data.map((user: IUser) => {
            return {
                ...user,
                checked: false
            }
        });
        setUsers(data);
    }).catch(() => {
       
    })
}

const UsersTable: FC = () => {
    const [allChecked, setAllChecked] = useState(false);
    const [users, setUsers] = useState<IUser[]>([]);
    //const auth = useContext(AuthContext);
    //const { token } = auth;    
   
    useEffect(() => {
        getUsersData(setUsers)
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
            <Row className='p-3 d-flex justify-content-between'>
                <Toolbar onDeleteUser={onDeleteUser} onBlockUser={onBlockUser} />
                <PersonAccount />
            </Row>            
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