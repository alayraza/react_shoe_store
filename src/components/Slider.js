import React from 'react'
import { CssBaseline, Container } from '@material-ui/core'

export const Slider = () => {
    return (
        <div style={{background:'#ffff'}}>
            <React.Fragment>
                <CssBaseline />
                <Container maxWidth="sm">
                    <img alt="shoe image" src={require("../images/shoes1.gif")}/>
                </Container>
            </React.Fragment>
        </div>
    )
}
