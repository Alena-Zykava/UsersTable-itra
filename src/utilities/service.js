import { httpUsersTable } from './http-common';

export const getUsers = () => httpUsersTable.get('/users');

export const registration = (params) => httpUsersTable.post('/registration', params);

export const deleteUser = (params) => httpUsersTable.post('/delete', params);

export const updateUser = ( params ) => httpUsersTable.post('/update', params);

