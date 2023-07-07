import React from 'react';
import { useForm } from 'react-hook-form'
import { login } from '../api/auth/login'
import styles from './styles/LoginPage.module.css'

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
    <div className={styles.signin}>
      <link href="https://getbootstrap.com/docs/5.0/dist/css/bootstrap.min.css" rel="stylesheet"></link>
      <main className={styles["form-signin"]}>
        <h1 className={styles.welcome}><strong>Welcome to Top Laptops 4u!</strong></h1>
        <form onSubmit={onSubmit}>
          <h1 className="h3 mb-3 fw-normal">Please log in</h1>

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
    // <div>
    //   <div>
    //     <h1> Log in </h1>
    //   </div>
    //   <div>
    //     <form onSubmit={onSubmit}>
    //       <div>
    //       <label htmlFor="email">
    //         Email
    //       </label>
    //       <input
    //         type="text"
    //         name="email"
    //         {...register('email', { required: true })}
    //       />
    //       </div>
    //       <div>
    //       <label htmlFor="password">
    //         Password
    //       </label>
    //       <input
    //         type="password"
    //         name="password"
    //         {...register('password', { required: true })}
    //       />
    //       </div>
    //       <div>
    //         <input type="submit" value="Login" />
    //       </div>
    //     </form>
    //   </div>
    // </div>
  )
}
