import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID f102f9205c15017f070c533db30efcae6ac24c1ee57968216a4244eda1165e8b'
    }
});
