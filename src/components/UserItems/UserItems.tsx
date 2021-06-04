import React, { FC } from 'react';

import UserItem from '../UserItem';
import { usernames } from '../../constants/Usernames';

const UserItems: FC = () => {
    
    const userItems = usernames.map((user) =>
        <UserItem key={user.id} user={user} />)

    return (
        <tbody>
            { userItems }
        </tbody>
    )
}

export default UserItems;