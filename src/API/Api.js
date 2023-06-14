import axios from 'axios'
const instance = axios.create({
    baseURL : 'https://ccba-180-254-89-214.ngrok-free.app/api',
})

export default instance