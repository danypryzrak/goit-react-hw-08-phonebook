import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { logInThunk } from 'redux/auth/authThunk'
import css from './Login.module.css'

export const Login = () => {

  const dispatch = useDispatch()

  function handleSubmit(ev) {
    ev.preventDefault()
    const loginData = {
      email: ev.target.email.value,
      password: ev.target.password.value
    }
    dispatch(logInThunk(loginData))
  }

  return (
    <>
      <div className={css.div}>
        <Link className={css.linkMain} to='/'>Main</Link>
        </div>
      <form onSubmit={handleSubmit} className={css.form}>
        <h2>I miss you so much!</h2>
        <div>
          <h3>Remind me your email please</h3>
          <input type="email" name='email' />
        </div>
        <div>
          <h3>I hope you didnt forget you're password</h3>
          <input type="text" name='password' />
          </div>
        <button className={css.button} type='submit'>Login</button>
        <Link className={css.link} to='/registration'>Registration</Link>
      </form>
    </>
  )
}
