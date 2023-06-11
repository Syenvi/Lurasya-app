import axios from 'axios'
const instance = axios.create({
    baseURL : 'https://917f-2001-448a-4044-21cf-a93-a517-75a8-b508.ngrok-free.app/api',
})

export default instance