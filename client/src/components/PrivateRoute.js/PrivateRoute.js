import React from 'react'
import { Navigate, Outlet} from 'react-router-dom'

function PrivateRoute(){

    const admin=JSON.parse(localStorage.getItem('admin'));

  return (
    admin?.Admin ? <Outlet/> : <Navigate to="/login"/>
  )
}

export default PrivateRoute;
