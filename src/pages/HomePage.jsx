import { useEffect, useState } from 'react'
import { getUserProfile } from '../api/auth/login'

export function HomePage() {
  const [profile, setProfile] = useState([])

  useEffect(() => {
    async function getProfile() {
      await getUserProfile()
        .then((result) => {
          setProfile(result.data)
        })
        .catch((err) => {
          setProfile(false)
          if (
            window.location.pathname !== '/login'
              && window.location.pathname !== '/logout'
              && window.location.pathname !== '/home'
              && window.location.pathname !== '/laptops') {
            window.location.href = '/login'
          }
        })
    }
    getProfile()
  }, [])
  return (
    <div>
      <br />
      <div class="align-text-middle"><h1>Welcome. {profile?'Navigate over the menu to continue.':'Please, log in to continue.'}</h1></div>

    </div>
  )
}
