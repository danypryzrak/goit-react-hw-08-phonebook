import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom'

export const PublickRoute = ({children}) => {
    const authToken = useSelector(state => state.auth.token)
    if (authToken) {
        return <Navigate to='/contacts'/>
    }
    return children
};