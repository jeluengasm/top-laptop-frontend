import axios from 'axios'

export const logout = () => {
  const headers = {
    'Content-Type': 'application/json'
  }
  headers.Authorization = localStorage.getItem('token')
  return axios.post(
    'http://localhost:8000/api/user/logout',
    {},
    { headers: headers }
    )
}
