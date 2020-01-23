import React from "react"
import { Link } from "gatsby"

// import replaceable from '../images/replaceable.png'
import  '../styles/footer.css'

const Footer = () => (
    <footer>
        <div>
            <p>
                <span>Sign up </span>
                to get the latest on sales, <br/> new releases and more...
            </p>
            <p>Your email</p>
            <Link to={'/newsletter'}>
                get notified
            </Link>
        </div>
        <div>
            // write your stuff here
        </div>
    </footer>
);

export { Footer }
