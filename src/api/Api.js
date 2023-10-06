import axios from 'axios'

export const Api = axios.create({
    baseURL: "https://test-deplotment.onrender.com"
})