import React from 'react'
import { Navigate } from 'react-router-dom'
import Layout from '../layout'
const GuardedRoute = ({
  component: Component,
  auth,
  userRole,
  roles,
  ...rest
}) => {
  return auth ? (
    <>
      <Layout />
      <Component />
    </>
  ) : (
    <Navigate to='/login' />
  )
}

export default GuardedRoute
