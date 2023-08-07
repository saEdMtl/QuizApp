import React, { useEffect, useState } from 'react';

//Material UI
import { Container, Grid, Typography } from '@mui/material';

//Redux
import { fetchQuestions } from '../../features/questions/questionsSlice';
import { useDispatch } from "react-redux"

//Assets
import quiz from "../../images/quiz.jpg"

//React-router-dom
import { Link, useParams } from 'react-router-dom';

const PreQuiz = () => {

    const params = useParams();
    const [category, setCategory] = useState();
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(fetchQuestions(params.id))

        if (params.id == 27) setCategory("animals");
        if (params.id == 31) setCategory("animes");
        if (params.id == 25) setCategory("art");
        if (params.id == 16) setCategory("boardgames");
        if (params.id == 10) setCategory("books");
        if (params.id == 32) setCategory("cartoons");
        if (params.id == 26) setCategory("celebrities");
        if (params.id == 29) setCategory("comics");
        if (params.id == 18) setCategory("computers");
        if (params.id == 11) setCategory("films");
        if (params.id == 30) setCategory("gadgets");
        if (params.id == 9) setCategory("generalknowlege");
        if (params.id == 22) setCategory("geography");
        if (params.id == 23) setCategory("history");
        if (params.id == 19) setCategory("maths");
        if (params.id == 12) setCategory("music");
        if (params.id == 20) setCategory("mythology");
        if (params.id == 17) setCategory("nature");
        if (params.id == 24) setCategory("politic");
        if (params.id == 21) setCategory("sports");
        if (params.id == 13) setCategory("teathre");
        if (params.id == 14) setCategory("tv");
        if (params.id == 28) setCategory("vehicles");
        if (params.id == 15) setCategory("videogames");

    }, [])

    return (
        <div>
            <Container maxWidth="lg" style={{ marginTop: "40px" }} >
                <Grid container>
                    <Grid item sm={7} mt={4}>
                        <Typography component='h3' variant='h3' mt={4} sx={{ fontFamily: "Franklin Gothic Medium", fontSize: { lg: "36px", md: "28px", sm: "22px", xs: "20px" }, color: "#B94D38" }}>{`The category that you choose is ${category}.`}</Typography>
                        <Typography component='h4' variant='h4' mt={4} sx={{ fontFamily: "Franklin Gothic Medium", fontSize: { lg: "28px", md: "24px", sm: "18px", xs: "18px" }, color: "#3A4A55" }}>If you're ready , press start.</Typography>
                        <Typography component='h5' variant='h5' mt={4} mb={6} sx={{ fontFamily: "Franklin Gothic Medium", fontSize: { lg: "24px", md: "20px", sm: "15px", xs: "16px" }, color: "#F0B643" }}>Goodluck</Typography>
                        <Link style={{ padding: "20px", backgroundColor: "#F0B643", color: "#B94D38", borderRadius: "5px", fontFamily: "Franklin Gothic Medium", fontSize: "20px" }} to="/quiz">Start</Link>
                    </Grid>
                    <Grid item xs={12} sm={5} sx={{ display: { xs: "none", sm: "block" } }}>
                        <img src={quiz} style={{ width: "100%", height: "400px" }} />
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default PreQuiz;