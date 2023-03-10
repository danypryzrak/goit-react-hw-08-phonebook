import React from 'react'
import { useSelector } from 'react-redux'
import { StyledUl, StyledNavLink } from './Navigation.styled'

export const Navigation = () => {

    const authToken = useSelector(state => state.auth.token)

    return (
        <nav>
            <StyledUl>
            <li>
                <StyledNavLink to="/">Home</StyledNavLink>
            </li>
                
            {authToken ? <li>
                <StyledNavLink to="contacts">Contacts</StyledNavLink>
                </li> : <li>
                <span><StyledNavLink to='/registration'>Registrate</StyledNavLink>/<StyledNavLink to='/logIn'>Login</StyledNavLink></span>
            </li>
            }
            {/* <li>
                <StyledNavLink to="contacts">Contacts</StyledNavLink>
            </li> */}
            {/* <li>
                <span><StyledNavLink to='/registration'>Registrate</StyledNavLink>/<StyledNavLink to='/logIn'>Login</StyledNavLink></span>
            </li> */}
            </StyledUl>
        </nav>
    )
}
