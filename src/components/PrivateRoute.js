import React, { Component } from "react"
import { navigate } from "gatsby"
import { useSelector, shallowEqual } from "react-redux";

const PrivateRoute = ({ component: Component, location, ...rest }) => {
    const { user } = useSelector(state => ({
        user: state.auth.user
    }), shallowEqual);

    if (!user && location.pathname !== `/app/login`) {
         navigate("/app/login");
        return null
    }
    return <Component {...rest} />
};

export {PrivateRoute}
