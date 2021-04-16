import axios from 'axios';


export default axios.create({
    baseURL: 'https://nerdme-online-mobile-store-default-rtdb.firebaseio.com',
    // timeout: 1000,
    headers: { 'Content-Type': 'application/json' }
});
