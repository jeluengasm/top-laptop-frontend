import { useForm } from 'react-hook-form'
import { login } from '../api/auth/login'
import styles from './styles/LoginPage.module.css'

export function LoginPage() {
  async function fetchLogin({ email, password }) {
    await login({ email, password })
      .then((result) => {
        localStorage.setItem('token', result.data.token)
        localStorage.setItem('userId', result.data.user.id)
        window.location.href = '/'
      })
      .catch((err) => {
        localStorage.removeItem('token')
        localStorage.removeItem('userId')
      })
  }

  const { register, handleSubmit } = useForm()

  const onSubmit = handleSubmit(data => {
    fetchLogin(data)
  })

  return (
    <div className={styles.signin}>
      <link href="https://getbootstrap.com/docs/5.0/dist/css/bootstrap.min.css" rel="stylesheet" />
      <main className={styles["form-signin"]}>
        <form onSubmit={onSubmit}>
          <h1 className="h3 mb-3 fw-normal">Please, type your credentials</h1>

          <div className="form-floating">
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" {...register('email', { required: true })}/>
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" {...register('password', { required: true })}/>
            <label htmlFor="floatingPassword">Password</label>
          </div>

          <button className="w-100 btn btn-lg btn-primary" type="submit">Log in</button>
        </form>
      </main>
    </div>
  )
}
