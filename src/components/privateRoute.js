import React, { Component } from "react"
import { navigate } from "gatsby"

const PrivateRoute = ({ component: Component, location, ...rest }) => {
    const token = localStorage.getItem('token');
    if (token === '' && location.pathname !== `/app/login`) {
         navigate("/app/login");
        return null
    }
    return <Component {...rest} />
}
export default PrivateRoute
