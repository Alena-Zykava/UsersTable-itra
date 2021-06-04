import React, {FC} from 'react';

import Form from 'react-bootstrap/Form';

interface IUserState {
    user: {
        id: number,
        userName: string,
        email: string,
        dataRegistration: string,
        lastData: string,
        status: string
    }
}

const UserItem: FC<IUserState> = ({user}) => {
    console.log(user);
    return (
        <tr>
            <td>
                <Form.Check/>
            </td>
            <td>{ user.id }</td>
            <td>{ user.userName }</td>
            <td>{ user.email }</td>
            <td>{ user.dataRegistration }</td>
            <td>{ user.lastData }</td>
            <td>{ user.status }</td>
        </tr>                
    )
}

export default UserItem;