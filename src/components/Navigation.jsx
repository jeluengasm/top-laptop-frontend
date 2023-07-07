import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getUserProfile } from '../api/auth/login'
import './laptops/styles/ButtonGraphic.module.css';

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
      <nav class="navbar navbar-expand-lg bg-light navbar-light">
        <div class="container-fluid">
          <a class="navbar-brand"><Link to="/home" title="Return to home page" logged={profile.toString()}>Top Laptops 4U </Link></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarColor03">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page">{profile && <Link to="/dashboard-manager"> Dashboards manager </Link>}</a>
              </li>
              <li class="nav-item">
                <a class="nav-link">{profile && <Link to="/dashboard-viewer"> Dashboards viewer </Link>}</a>
              </li>
              <li class="nav-item">
                <a class="nav-link"><Link to="/laptops"> Top Laptops manager </Link></a>
              </li>
            </ul>
            <div class="d-flex">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <p class="nav-link">{profile && <span>Welcome, {profile.name}</span> }</p>
                </li>
                <li class="nav-item">
                  <a class="nav-link">{profile && <Link to="/logout"> Log out </Link>}</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link">{!profile && <Link to="/login"> Log in </Link>}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
