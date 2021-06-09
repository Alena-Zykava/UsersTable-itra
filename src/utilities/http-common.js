import axios from 'axios';

export const httpUsersTable = axios.create({
  baseURL: 'http://localhost:5000/auth/',
  headers: {
    'Content-type': 'application/json'
  }
});