import axios from 'axios'

const api = axios.create({
    baseURL: "https://63640c0a8a3337d9a2f009b2.mockapi.io/api/ecommerce/"
   });

   export default api;