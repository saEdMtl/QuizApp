import React from 'react';

//Material UI
import { Container, Grid, Typography } from '@mui/material';

const IntroductionSection = () => {
    return (
        <div>
            <Container maxWidth="lg">
                <Grid container>
                    <Grid item xs={12} textAlign="center">
                        <Typography component="h3" variant='h3' mt={6} className='welcome' sx={{ fontSize: { lg: "48px", md: "40px", sm: "34px", xs: "26px" } }}>Welcome to saEd Quiz !!</Typography>
                        <Typography component="h5" variant='h5' mt={3} sx={{ color: "#3A4A55", fontFamily: "Franklin Gothic Medium", fontSize: { lg: "24px", md: "22px", sm: "18px", xs: "14px" } }}>In this website you can test your information  in different categories.</Typography>
                        <Typography component="p" variant='p' mt={2} sx={{ color: "#F0B643", fontSize: { lg: "20px", md: "18px", sm: "16px", xs: "12px" }, fontFamily: "Franklin Gothic Medium" }}>Choose a category and start :)</Typography>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default IntroductionSection;