import axios from 'axios'

const BASE_URL = 'http://localhost:5000/api'
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOTkzOGVmNzgyZDhkZWE3NDQ5MTU4ZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNzU3NTQ0OCwiZXhwIjoxNjM3ODM0NjQ4fQ.ll0aLulG2jDXAzho5ERNkC_ItOj8oCoiuD7y8wOnvEM'

export const publicRequest = axios.create({
 baseURL: BASE_URL
})

export const userRequest = axios.create({
 baseURL: BASE_URL,
 header:{token:`Bearer ${TOKEN}`}
})
