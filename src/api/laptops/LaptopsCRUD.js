import API from '../api'

export const getAllLaptops = () => {
  return API().get('laptops')
    .catch((error) => {
      alert(error.response.statusText)
    })
}
