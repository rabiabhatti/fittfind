import React, {Fragment} from "react"
import { Router } from "@reach/router"

import {LeftBar} from "../components"
import Login from "../components/login"
import PrivateRoute from "../components/privateRoute"


const App = () => {
    return (
        <Fragment>
            <Router>
                <PrivateRoute path="/app/profile" component={LeftBar} />
                <Login path="/app/login" />
            </Router>
        </Fragment>
    )
};
export default App
