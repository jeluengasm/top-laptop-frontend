import { useEffect } from 'react'
import { logout } from '../api/auth/logout'

export function LogoutPage() {
  useEffect(() => {
    async function fetchLogout() {
      await logout().finally(() => {
        localStorage.removeItem('token')
        localStorage.removeItem('user_id')
        window.location.href = '/'
      })
    }
    fetchLogout()
  })
  return (
    <div> Logout user... </div>
  )
}
