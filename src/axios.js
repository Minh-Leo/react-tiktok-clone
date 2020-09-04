import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://video-app-backend-0009.herokuapp.com/',
});

export default instance;
