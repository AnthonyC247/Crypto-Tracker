import {AppBar, Container, Toolbar, Typography } from "@material-ui/core"; 
import React from 'react'

const Header = () => {
    return (
        <AppBar color="primary" position="static">
            <Container>
                <Toolbar> 
                    <Typography>CRYPTO-TRACKER</Typography>
                </Toolbar>
            </Container>
        <AppBar>
    );
};

export default Header;