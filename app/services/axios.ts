import axios from 'axios'

export const baseURL = axios.create({
	baseURL: 'https://specialnotesback.onrender.com',
	withCredentials: true
})