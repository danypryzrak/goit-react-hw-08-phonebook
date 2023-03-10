import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom'


export const PrivateRoute = ({children}) => {
    const authToken = useSelector(state => state.auth.token)
    if (!authToken) {
        return <Navigate to='/logIn'/>
    }
    return children
};