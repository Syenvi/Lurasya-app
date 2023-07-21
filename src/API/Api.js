import axios from 'axios'
const instance = axios.create({
    baseURL : 'https://lurasyah.muhammadiyahexpo.com/api',
})

export default instance
