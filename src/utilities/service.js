import { httpUsersTable } from './http-common';

export const getUsers = (userName) => httpUsersTable.get(`/users?userName=${userName}`);

export const registration = (params) => httpUsersTable.post('/registration', params);

export const deleteUser = (params) => httpUsersTable.post('/delete', params);

export const updateUser = (params) => httpUsersTable.post('/update', params);

export const loginUser = (params) => httpUsersTable.post('/login', params);

