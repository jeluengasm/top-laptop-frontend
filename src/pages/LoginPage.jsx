import { useForm } from 'react-hook-form'
import { login } from '../api/auth/login'

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
    <div class="d-flex justify-content-center">
      <br />
      <div class="card text-dark bg-light mb-3 w-50 p-3" >
        <div class="card-header">Log in</div>
        <div class="card-body">
          <h5 class="card-title">Please, type your credentials</h5>
          <br />
          <div>
            <form onSubmit={onSubmit}>
              <div class="mb-3">
                <label class="form-label">Email address</label>
                <input
                  type="email"
                  class="form-control" aria-describedby="emailHelp"
                  {...register('email', { required: true })}
                />
                <div id="emailHelp" class="form-text">Never share your email.</div>
              </div>
              <div class="mb-3">
                <label class="form-label">Password</label>
                <input
                  type="password"
                  class="form-control"
                  {...register('password', { required: true })}
                  />
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
