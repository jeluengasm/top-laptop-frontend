import { useForm } from 'react-hook-form'
import { login } from '../api/auth/login'

export function LoginPage() {
  async function fetchLogin({email, password}) {
    await login({ email, password})
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
    <div>
      <div>
        <h1> Log in </h1>
      </div>
      <div>
        <form onSubmit={onSubmit}>
          <div>
          <label htmlFor="email">
            Email
          </label>
          <input
            type="text"
            name="email"
            {...register('email', { required: true })}
          />
          </div>
          <div>
          <label htmlFor="password">
            Password
          </label>
          <input
            type="password"
            name="password"
            {...register('password', { required: true })}
          />
          </div>
          <div>
            <input type="submit" value="Login" />
          </div>
        </form>
      </div>
    </div>
  )
}
