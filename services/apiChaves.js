import axios from "axios";

const apiChaves = axios.create({
    baseURL: 'https://my-json-server.typicode.com/orionteles/chavo',
})

export default apiChaves