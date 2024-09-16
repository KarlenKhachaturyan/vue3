import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://fakestoreapi.com',
    withCredentials: false,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    }
})

export default {
    getEvents() {
        return apiClient.get('/products?limit=3')
    },
    getEvent(id) {
        return apiClient.get('/products/' + id)
    }
}