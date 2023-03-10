import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logOutThunk } from 'redux/auth/authThunk'

export const UserMenu = () => {
  
  const {name} = useSelector(state => state.auth.user)
  const dispatch = useDispatch()
  const onLogOut = () => dispatch(logOutThunk());

  return (
  <div>
      <p>Hello, {name}</p>
  <button onClick={onLogOut}>Logout</button>
  </div>
  )
}
