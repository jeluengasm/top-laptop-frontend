import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getUserProfile } from '../api/auth/login'

export function Navigation() {
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
      <Link to="/home" title="Return to home page" logged={profile.toString()}> <h1>Top Laptop </h1> </Link>
      {profile && <span>Welcome, {profile.name}</span> }
      <nav>
        {profile && <Link to="/dashboard-manager"> Dashboards manager </Link>}
        {profile && <Link to="/dashboard-viewer"> Dashboards viewer </Link>}
        <Link to="/laptops"> Top Laptops manager </Link>
        {!profile && <Link to="/login"> Log in </Link>}
        {profile && <Link to="/logout"> Log out </Link>}
      </nav>
    </div>
  )
}
