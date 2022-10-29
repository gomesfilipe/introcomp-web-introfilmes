import axios from 'axios'

// const baseURL = process.env.API_URL_BASE
// const port = process.env.API_PORT

const baseURL = 'http://localhost'
const port = 8000

export const api = axios.create({
  baseURL: `${baseURL}:${port}`
})
