import axios from 'axios';

axios.defaults.baseURL = 'https://webdev-api.loftschool.com';

const token = localStorage.getItem('token');
console.log(token);

axios.defaults.headers.common['Authorization'] = 'Bearer ${token}';

export default axios;