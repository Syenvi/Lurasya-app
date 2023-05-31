import axios from 'axios'
const instance = axios.create({
    baseURL : 'https://d98b-2001-448a-4045-4e78-4d64-9d5f-dc12-f8d5.ngrok-free.app/api',
})

export default instance