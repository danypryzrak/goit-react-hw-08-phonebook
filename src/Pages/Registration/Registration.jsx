import React from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { signUpThunk } from 'redux/auth/authThunk'
import css from './Registration.module.css'

export const Registartion = () => {

  const dispatch = useDispatch()

  function handleSubmit(ev) {
    ev.preventDefault()
    const newUser = {
      name: ev.target.name.value,
      email: ev.target.email.value,
      password: ev.target.password.value
    }
    dispatch(signUpThunk(newUser))
  }


  return (<>
  <div className={css.div}>
      <Link className={css.linkMain} to='/'>Main</Link>
  </div>
      <form onSubmit={handleSubmit} className={css.form}>
        <h2>Time to join us, I'm seriosly friend!</h2>
        <label>
          Here, I need you're name
          <input type="text" name='name' />
        </label>
        <label>
          Here you're email
          <input type="email" name='email' />
        </label>
        <label>
          Here passwort 
          <input type="text" name='password' />  
          it will be our secret
      </label>
      <button className={css.button} type='submit' >Registrate</button>
      <span>If you already have a membership <Link to='/logIn' className={css.link}>Log In</Link></span>
      </form>
    
    </>
)
}
