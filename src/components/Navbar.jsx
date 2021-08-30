import React, { Component } from 'react'
import "../styles/Navbar.css"
import { Link, withRouter } from 'react-router-dom'

import Search from './Search'

export default class Navbar extends Component {
    render() {
        const SearchWithRouter = withRouter(Search)
        return (
            <div className="navbar__container">
                    <Link className="link" to="/"><img width="128px"  src="./images/logo.png" alt="logo" /></Link>
                    <SearchWithRouter />
                    <Link to="/login" className="link">Login</Link>
            </div>
        )
    }
}
