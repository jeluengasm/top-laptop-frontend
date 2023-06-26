import API from '../api'

export const logout = () => {
  return API().post('/user/logout')
}
