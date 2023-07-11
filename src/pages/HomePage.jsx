import { useEffect, useState } from 'react'
import { getUserProfile } from '../api/auth/login'
import styles from './styles/HomePage.module.css'

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
    <div className={styles.home}>
      <br />
      <div
        class={`d-flex justify-content-center align-items-center col-md-12 ${styles['main-container']}`}
      >
        <h1 class="display-4 fw-normal">WELCOME{profile?', ' + profile.name:''}!</h1>
        <p class="lead fw-normal">Find your perfect laptop match!</p>
      </div>
    </div>
  )
}
