import { useEffect } from 'react'
import { logout } from '../api/auth/logout'

export function LogoutPage() {
  useEffect(() => {
    async function fetchLogout() {
      await logout().finally(() => {
        localStorage.removeItem('token')
        localStorage.removeItem('userId')
        window.location.href = '/'
      })
    }
    fetchLogout()
  }, [])
  return (
    <div>
      <h1>Logout</h1>
    </div>
  )
}
