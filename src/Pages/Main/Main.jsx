import React from 'react'
import css from './Main.module.css'

export const Main = () => {
  return (<div className={css.div}>
    <h1 className={css.title}>Welcome to your contact list!</h1>
    <h2 className={css.miniTitle}>Here you never lose your contacts because of your dog or creepy sister. Lets go!</h2>
    </div>
  )
}
