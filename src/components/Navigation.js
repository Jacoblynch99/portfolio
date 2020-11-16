import React from 'react'

import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { Link } from 'react-router-dom'

const Navigation = (props) => {
    return (
        <Toolbar
            style={{
                display: 'flex',
                fontWeight: 'bold',
                fontSize: 20,
                justifyContent: 'center',
                textDecoration: 'none',
            }}
        >
            <Link style={{ color: 'white', textDecoration: 'none' }} to="/">
                Home
            </Link>
            <Link
                style={{
                    color: 'white',
                    marginLeft: '5vw',
                    textDecoration: 'none',
                }}
                to="/about"
            >
                About
            </Link>
            <Link
                style={{
                    color: 'white',
                    marginLeft: '5vw',
                    textDecoration: 'none',
                }}
                to="/projects"
            >
                Projects
            </Link>
        </Toolbar>
    )
}

export default Navigation
