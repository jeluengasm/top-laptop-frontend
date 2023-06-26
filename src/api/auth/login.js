import API from '../api'

export const login = ({email, password}) => {
  return API().post('user/login', { email, password })
}

export const getUserProfile = () => {
  return API().get('user/profile')
}
