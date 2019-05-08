import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-shop-react.firebaseio.com/'
});

export default instance;