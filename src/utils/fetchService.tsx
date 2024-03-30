import axios from 'axios';

const fetchApi = axios.create({
  // baseURL: 'https://ctsandbox.innohub.app/',
  baseURL: 'https://66059d542ca9478ea180c4b3.mockapi.io/api/v1/',
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
    // 'Authorization': 'Bearer '
  },
});

export default fetchApi;
