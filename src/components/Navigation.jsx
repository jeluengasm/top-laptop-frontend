import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getUserProfile } from '../api/auth/login'
import './headers.css'

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
      <main>
        <header className="p-3 bg-dark text-white">
          <div className="container">
            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a href="/home" className="navbar-brand"><h2>Top Laptops 4U</h2></a>
              <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                <li>
                  <a href="/home" className="nav-link px-2 text-secondary">
                    Home
                  </a>
                </li>
                {profile &&
                  <li>
                    <a href="/dashboard-manager" className="nav-link px-2 text-white">
                        Dashboards manager
                    </a>
                  </li>
                }
                {profile &&
                  <li>
                    <a href="/dashboard-viewer" className="nav-link px-2 text-white">
                      Dashboards viewer
                    </a>
                  </li>
                }
                <li>
                  <a href="/laptops" className="nav-link px-2 text-white">
                    TOP Laptops
                  </a>
                </li>
              </ul>
              {profile &&
                <div className="text-end">
                  <span>Welcome, {profile.name}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                </div>
              }
              {!profile &&
                <div className="text-end">
                  <a href="/login" class="log-button">Log in</a>
                </div>
              }
              {profile &&
                <div className="text-end">
                  <a href="/logout" class="log-button">Log out</a>
                </div>
              }
            </div>
          </div>
        </header>
      </main>
    </div>
  )
}
