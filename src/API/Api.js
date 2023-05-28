import axios from 'axios'
const instance = axios.create({
    baseURL : 'https://053d-2001-448a-4041-1255-51ea-a47a-1e7c-754a.ngrok-free.app/api',
})

export default instance