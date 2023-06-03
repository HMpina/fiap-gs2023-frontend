import axios from "axios";
 
const api = axios.create({
    baseURL: 'https://fiap-globalsolut2023-backend.herokuapp.com/'
})
 
export default api;