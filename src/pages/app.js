import React, {Fragment} from "react"
import { Router } from "@reach/router"

import Login from '../components/Login'
import  {Dashboard, Register, PrivateRoute} from "../components"


const App = () => {
    return (
        <Fragment>
            <Router>
                <PrivateRoute path="/app/gym-dashboard" component={Dashboard} />
                <Login path="/app/login" />
                <Register path="/app/register" />
            </Router>
        </Fragment>
    )
};
export default App
