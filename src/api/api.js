import axios from 'axios'

export default (url = import.meta.env.VITE_API_BASEURL) => {
  const headers = {
    'Content-Type': 'application/json'
  }
  if (localStorage.token) headers.Authorization = `Token ${localStorage.token}`
  return axios.create({
    baseURL: url,
    headers
  })
}
