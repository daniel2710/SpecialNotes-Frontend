import axios from 'axios'

export const baseURL = axios.create({
	baseURL: process.env.NEXT_PUBLIC_API_URL
})