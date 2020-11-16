import { Container, Typography } from '@material-ui/core'
import React from 'react'

const Landing = (props) => {
    return (
        <Container maxWidth="md">
            <Typography
                style={{ color: 'white', marginTop: '5vh', fontSize: '6rem' }}
            >
                Jacob Lynch
            </Typography>
            <Typography style={{ color: 'white', fontSize: '1.5rem' }}>
                Full-Stack Web Developer
            </Typography>
        </Container>
    )
}

export default Landing
