import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/'
});