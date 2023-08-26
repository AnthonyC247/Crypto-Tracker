import {AppBar, Container, Select, Toolbar, Typography } from "@material-ui/core"; 
import React from 'react'

const useStyles = makeStyles(() => ({
    title: {
        flex: 1,
        color: "black",
        fontFamily: "Open Sans",
        fontWeight: "bold",
        cursor: "pointer",
    }
}))

const Header = () => {

    const classes = useStyles()
    return (
        <AppBar color="primary" position="static">
            <Container>
                <Toolbar> 
                    <Typography className={classes.title}>CRYPTO-TRACKER</Typography>

                    <Select variant='outlined' style={{
                        width: 100,
                        height: 40,
                        marginRight: 20,

                    }}>
                        <MenuItem value={"USD"}>USD</MenuItem>
                        <MenuItem> value={"EUR"}EUR</MenuItem>
                    </Select>
                </Toolbar>
            </Container>
        <AppBar>
    );
};

export default Header;