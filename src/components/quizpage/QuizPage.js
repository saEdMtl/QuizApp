import React, { useEffect, useState } from 'react';

//Redux
import { useSelector } from "react-redux"

//Assets
import loading from "../../images/loading.gif"

//Material UI
import { Container, Grid, Box, Typography } from '@mui/material';

//React-router-dom
import { Link } from "react-router-dom"

const QuizPage = () => {

    const questions = useSelector(state => state.questions);

    const [questionNumber, setQuestionNumber] = useState(0);
    const [answer1, setAnswer1] = useState("");
    const [answer2, setAnswer2] = useState("");
    const [answer3, setAnswer3] = useState("");
    const [answer4, setAnswer4] = useState("");
    const [answer5, setAnswer5] = useState("");
    const [answer6, setAnswer6] = useState("");
    const [answer7, setAnswer7] = useState("");
    const [answer8, setAnswer8] = useState("");
    const [answer9, setAnswer9] = useState("");
    const [answer10, setAnswer10] = useState("");
    const [score, setScore] = useState(0)
    const [showScore, setShowScore] = useState(false);

    const answer = (option) => {
        if (questionNumber == 0) setAnswer1(option);
        if (questionNumber == 1) setAnswer2(option);
        if (questionNumber == 2) setAnswer3(option);
        if (questionNumber == 3) setAnswer4(option);
        if (questionNumber == 4) setAnswer5(option);
        if (questionNumber == 5) setAnswer6(option);
        if (questionNumber == 6) setAnswer7(option);
        if (questionNumber == 7) setAnswer8(option);
        if (questionNumber == 8) setAnswer9(option);
        if (questionNumber == 9) setAnswer10(option);

        if (questionNumber < 9)
            setQuestionNumber(PervQuestionNumber => PervQuestionNumber + 1)

    }

    const confirm = () => {

        if (answer1 === questions.questions[0].correct_answer)
            setScore(PervScore => PervScore + 1)
        if (answer2 === questions.questions[1].correct_answer)
            setScore(PervScore => PervScore + 1)
        if (answer3 === questions.questions[2].correct_answer)
            setScore(PervScore => PervScore + 1)
        if (answer4 === questions.questions[3].correct_answer)
            setScore(PervScore => PervScore + 1)
        if (answer5 === questions.questions[4].correct_answer)
            setScore(PervScore => PervScore + 1)
        if (answer6 === questions.questions[5].correct_answer)
            setScore(PervScore => PervScore + 1)
        if (answer7 === questions.questions[6].correct_answer)
            setScore(PervScore => PervScore + 1)
        if (answer8 === questions.questions[7].correct_answer)
            setScore(PervScore => PervScore + 1)
        if (answer9 === questions.questions[8].correct_answer)
            setScore(PervScore => PervScore + 1)
        if (answer10 === questions.questions[9].correct_answer)
            setScore(PervScore => PervScore + 1)

        setShowScore(true)
    }

    useEffect(() => { console.log(showScore) }, [showScore])

    if (questions.loading) return <div style={{ width: "100%", height: "100px", display: "flex", alignItems: "center", justifyContent: "center", marginTop: "50px" }}><img src={loading} alt='loading' style={{ width: "10%", height: "100%" }} /></div>

    if (questions.error) return <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: "20px" }}><h3 style={{ color: "#B94D38", fontFamily: "Franklin Gothic Medium", fontSize: "24px" }}>Somthing went wrong ...</h3></div>

    if (questions.questions)

        return (
            <div>
                <Container maxWidth="lg">
                    <Grid container>
                        <Grid item xs={12} className={showScore ? "hiddenn" : ""}>
                            <Box component='div' sx={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", marginTop: "20px" }}>
                                <Typography component='h4' variant='h4' mt={4} sx={{ color: "#B94D38", fontFamily: "Franklin Gothic Medium", fontSize: { lg: "26px", md: "22px", sm: "20px", xs: "18px" }, marginBottom: "0" }}>Question {questionNumber + 1}</Typography>
                                <Typography component='h4' variant='h4' mt={4} sx={{ color: "#F0B643", fontFamily: "Franklin Gothic Medium", fontSize: {lg:"22px", md: "18px", sm: "16px", xs: "14px"} }}>{questions.questions[questionNumber].question}</Typography>
                                <Box component='div' sx={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", marginTop: "10px" }}>
                                    {
                                        (((questions.questions[questionNumber].incorrect_answers).concat(questions.questions[questionNumber].correct_answer)).sort()).map(option => <Box component='div' key={option}><button type='button' className='options' onClick={() => answer(option)}>{option}</button></Box>)
                                    }
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} mt={5} mb={5} className={showScore ? "hiddenn" : ""}>
                            <Box component='div' sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "40px" }}>
                                {questionNumber == 0 && <button className='buttons' disabled>Perv question</button>}
                                {questionNumber > 0 && <button className='buttons' onClick={() => setQuestionNumber(PervQuestionNumber => PervQuestionNumber - 1)}>Perv question</button>}
                                {questionNumber < 9 && <button className='buttons' onClick={() => setQuestionNumber(PervQuestionNumber => PervQuestionNumber + 1)}>Next question</button>}
                                {questionNumber == 9 && <button className='buttons' onClick={confirm}>Confirm</button>}
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid container >
                        <Grid item xs={12} className={showScore ? "show" : "hiddenn"} mt={6}>
                            {score <= 4 && <Box component='div'><Typography component='h5' variant='h5' sx={{ color: "#B94D38", fontFamily: "Franklin Gothic Medium", fontSize: "30px", marginBottom: "0" }}>It was awful.</Typography></Box>}
                            {score < 8 && score > 4 && <Box component='div'><Typography component='h5' variant='h5' sx={{ color: "#B94D38", fontFamily: "Franklin Gothic Medium", fontSize: "30px", marginBottom: "0" }}>It was good.</Typography></Box>}
                            {score >= 8 && <Box component='div'><Typography component='h5' variant='h5' sx={{ color: "#B94D38", fontFamily: "Franklin Gothic Medium", fontSize: "30px", marginBottom: "0" }}>It was great.</Typography></Box>}
                            <Typography component='h4' variant='h4' mt={4} sx={{ color: "#F0B643", fontFamily: "Franklin Gothic Medium", fontSize: "26px", marginBottom: "50px" }}>Your final score is : {score}/10</Typography>
                            <Link to="/" style={{ padding: "14px", backgroundColor: "#F0B643", color: "#B94D38", borderRadius: "5px", fontFamily: "Franklin Gothic Medium", fontSize: "16px" }}>Back to homepage</Link>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        );
};

export default QuizPage;