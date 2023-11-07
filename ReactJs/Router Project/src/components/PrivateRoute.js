import React from 'react'
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({isLoggedIn, children}) => {
   
  if(isLoggedIn){
    return children; //what if we use {children}
  }else{
    return <Navigate to="/login" />
  }
}

export default PrivateRoute