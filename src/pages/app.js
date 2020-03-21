import React, {Fragment} from "react"
import { Router } from "@reach/router"

import {LeftBar, Login, Register, PrivateRoute} from "../components"


const App = () => {
    return (
        <Fragment>
            <Router>
                <PrivateRoute path="/app/profile" component={LeftBar} />
                <Login path="/app/login" />
                <Register path="/app/register" />
            </Router>
        </Fragment>
    )
};
export default App
