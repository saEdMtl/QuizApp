import React from 'react';

//Material UI
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import QuizIcon from '@mui/icons-material/Quiz';
import { Container } from '@mui/material';

const Navbar = () => {
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" sx={{ borderRadius: "5px", backgroundColor: "#F0B643" }}>
                    <Toolbar variant="dense" sx={{ height: "70px" }}>
                        <Container maxWidth="lg" sx={{ display: "flex", alignItems: "center" }}>
                            <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                                <QuizIcon />
                            </IconButton>
                            <Typography variant="h6" color="inherit" component="div" sx={{ fontFamily: "Franklin Gothic Medium" }}>
                                saEd Quiz
                            </Typography>
                        </Container>
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    );
};

export default Navbar;


