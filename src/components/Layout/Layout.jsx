import { Navigation } from 'components/Navigation/Navigation'
import { UserMenu } from 'components/UserMenu/UserMenu'
import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import css from './Layout.module.css'

export const Layout = () => {

    const authToken = useSelector(state => state.auth.token)

    return (
    <div>
    <header className={css.header}>
        <Navigation />
        {authToken && <UserMenu />}
    </header>
    <Outlet />
    </div>
    )
}
