import axios from 'axios';

export function getUsers() {
  return axios.get('http://localhost:8001/users');
}