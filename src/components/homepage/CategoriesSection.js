import React, { useEffect, useState } from 'react';

//Css
import "../../styles/styles.css"

//Assets
import sport from "../../images/sport.jpg"
import anime from "../../images/anime.jpg"
import art from "../../images/art.jpg"
import boardgame from "../../images/boardgame.jpg"
import celebrity from "../../images/celebrity.jpg"
import book from "../../images/book.jpg"
import cartoon from "../../images/cartoon.jpg"
import comic from "../../images/comic.jpg"
import computer from "../../images/computer.jpg"
import film from "../../images/film.jpg"
import gadget from "../../images/gadget.jpg"
import generalknowlege from "../../images/generalknowlege.jpg"
import geography from "../../images/geography.jpg"
import history from "../../images/history.jpg"
import math from "../../images/math.jpg"
import music from "../../images/music.jpg"
import mythology from "../../images/mythology.jpg"
import nature from "../../images/nature.jpg"
import politic from "../../images/politic.jpg"
import theatre from "../../images/theatre.jpg"
import tv from "../../images/tv.jpg"
import videogame from "../../images/videogame.jpg"
import vehicle from "../../images/vehicle.jpg"
import animal from "../../images/animal.jpg"

//Material UI
import { Container, Grid, Box, Typography } from '@mui/material';

//React-router-dom
import { useNavigate } from 'react-router-dom';

const CategoriesSection = () => {

    const [selectedCategory, setSelectedCategory] = useState("");
    const [transformCategoryToNumber, setTransformCategoryToNumber] = useState("");
    let navigate = useNavigate();

    const clickHandler = (e) => {
        setSelectedCategory(e.target.getAttribute("name"))
        console.log(selectedCategory, transformCategoryToNumber)
    }

    useEffect(() => {

        if (selectedCategory === "animals") setTransformCategoryToNumber("27");
        if (selectedCategory === "animes") setTransformCategoryToNumber("31");
        if (selectedCategory === "art") setTransformCategoryToNumber("25");
        if (selectedCategory === "boardgames") setTransformCategoryToNumber("16");
        if (selectedCategory === "books") setTransformCategoryToNumber("10");
        if (selectedCategory === "cartoons") setTransformCategoryToNumber("32");
        if (selectedCategory === "celebrities") setTransformCategoryToNumber("26");
        if (selectedCategory === "comics") setTransformCategoryToNumber("29");
        if (selectedCategory === "computers") setTransformCategoryToNumber("18");
        if (selectedCategory === "films") setTransformCategoryToNumber("11");
        if (selectedCategory === "gadgets") setTransformCategoryToNumber("30");
        if (selectedCategory === "generalknowlege") setTransformCategoryToNumber("9");
        if (selectedCategory === "geography") setTransformCategoryToNumber("22");
        if (selectedCategory === "history") setTransformCategoryToNumber("23");
        if (selectedCategory === "maths") setTransformCategoryToNumber("19");
        if (selectedCategory === "musics") setTransformCategoryToNumber("12");
        if (selectedCategory === "mythology") setTransformCategoryToNumber("20");
        if (selectedCategory === "nature") setTransformCategoryToNumber("17");
        if (selectedCategory === "politics") setTransformCategoryToNumber("24");
        if (selectedCategory === "sports") setTransformCategoryToNumber("21");
        if (selectedCategory === "teathre") setTransformCategoryToNumber("13");
        if (selectedCategory === "tv") setTransformCategoryToNumber("14");
        if (selectedCategory === "vehicles") setTransformCategoryToNumber("28");
        if (selectedCategory === "videogames") setTransformCategoryToNumber("15");

    }, [selectedCategory])

    useEffect(() => {
        navigate(`/${transformCategoryToNumber}`);
    }, [transformCategoryToNumber])

    return (
        <div style={{ marginTop: "50px", marginBottom: "50px" }}>
            <Container maxWidth="lg" >
                <Grid container spacing={2}>
                    <Grid item md={3} sm={6} xs={6}>
                        <Box component="div" sx={{ backgroundImage: `url(${animal})` }} className='category'>
                            <Typography component="p" variant='p' sx={{ fontSize: { xs: "18px", sm: "24px" } }}>Animals</Typography>
                        </Box>
                        <Box component="div" className='overlay' name="animals" onClick={clickHandler} ></Box>
                    </Grid>
                    <Grid item md={3} sm={6} xs={6} onClick={clickHandler}>
                        <Box component="div" sx={{ backgroundImage: `url(${anime})` }} className='category'>
                            <Typography component="p" variant='p' sx={{ fontSize: { xs: "18px", sm: "24px" } }}>Animes</Typography>
                        </Box>
                        <Box component="div" className='overlay' name="animes"></Box>
                    </Grid>
                    <Grid item md={3} sm={6} xs={6} onClick={clickHandler}>
                        <Box component="div" sx={{ backgroundImage: `url(${art})` }} className='category'>
                            <Typography component="p" variant='p' sx={{ fontSize: { xs: "18px", sm: "24px" } }}>Art</Typography>
                        </Box>
                        <Box component="div" className='overlay' name="art"></Box>
                    </Grid>
                    <Grid item md={3} sm={6} xs={6} onClick={clickHandler}>
                        <Box component="div" sx={{ backgroundImage: `url(${boardgame})` }} className='category'>
                            <Typography component="p" variant='p' sx={{ fontSize: { xs: "18px", sm: "24px" } }}>boardgames</Typography>
                        </Box>
                        <Box component="div" className='overlay' name="boardgames"></Box>
                    </Grid>
                    <Grid item md={3} sm={6} xs={6} onClick={clickHandler}>
                        <Box component="div" sx={{ backgroundImage: `url(${book})` }} className='category'>
                            <Typography component="p" variant='p' sx={{ fontSize: { xs: "18px", sm: "24px" } }}>Books</Typography>
                        </Box>
                        <Box component="div" className='overlay' name="books"></Box>
                    </Grid>
                    <Grid item md={3} sm={6} xs={6} onClick={clickHandler}>
                        <Box component="div" sx={{ backgroundImage: `url(${cartoon})` }} className='category'>
                            <Typography component="p" variant='p' sx={{ fontSize: { xs: "18px", sm: "24px" } }}>Cartoons</Typography>
                        </Box>
                        <Box component="div" className='overlay' name="cartoons"></Box>
                    </Grid>
                    <Grid item md={3} sm={6} xs={6} onClick={clickHandler}>
                        <Box component="div" sx={{ backgroundImage: `url(${celebrity})` }} className='category'>
                            <Typography component="p" variant='p' sx={{ fontSize: { xs: "18px", sm: "24px" } }}>Celebrities</Typography>
                        </Box>
                        <Box component="div" className='overlay' name="celebrities"></Box>
                    </Grid>
                    <Grid item md={3} sm={6} xs={6} onClick={clickHandler}>
                        <Box component="div" sx={{ backgroundImage: `url(${comic})` }} className='category'>
                            <Typography component="p" variant='p' sx={{ fontSize: { xs: "18px", sm: "24px" } }}>Comics</Typography>
                        </Box>
                        <Box component="div" className='overlay' name="comics"></Box>
                    </Grid>
                    <Grid item md={3} sm={6} xs={6} onClick={clickHandler}>
                        <Box component="div" sx={{ backgroundImage: `url(${computer})` }} className='category'>
                            <Typography component="p" variant='p' sx={{ fontSize: { xs: "18px", sm: "24px" } }}>Computers</Typography>
                        </Box>
                        <Box component="div" className='overlay' name="computers"></Box>
                    </Grid>
                    <Grid item md={3} sm={6} xs={6} onClick={clickHandler}>
                        <Box component="div" sx={{ backgroundImage: `url(${film})` }} className='category'>
                            <Typography component="p" variant='p' sx={{ fontSize: { xs: "18px", sm: "24px" } }}>Films</Typography>
                        </Box>
                        <Box component="div" className='overlay' name="films"></Box>
                    </Grid>
                    <Grid item md={3} sm={6} xs={6} onClick={clickHandler}>
                        <Box component="div" sx={{ backgroundImage: `url(${gadget})` }} className='category'>
                            <Typography component="p" variant='p' sx={{ fontSize: { xs: "18px", sm: "24px" } }}>Gadgets</Typography>
                        </Box>
                        <Box component="div" className='overlay' name="gadgets"></Box>
                    </Grid>
                    <Grid item md={3} sm={6} xs={6} onClick={clickHandler}>
                        <Box component="div" sx={{ backgroundImage: `url(${generalknowlege})` }} className='category'>
                            <Typography component="p" variant='p' sx={{ fontSize: { xs: "16px", sm: "24px" } }}>General knowlege</Typography>
                        </Box>
                        <Box component="div" className='overlay' name="generalknowlege"></Box>
                    </Grid>
                    <Grid item md={3} sm={6} xs={6} onClick={clickHandler}>
                        <Box component="div" sx={{ backgroundImage: `url(${geography})` }} className='category'>
                            <Typography component="p" variant='p' sx={{ fontSize: { xs: "18px", sm: "24px" } }}>Geography</Typography>
                        </Box>
                        <Box component="div" className='overlay' name="geography"></Box>
                    </Grid>
                    <Grid item md={3} sm={6} xs={6} onClick={clickHandler}>
                        <Box component="div" sx={{ backgroundImage: `url(${history})` }} className='category'>
                            <Typography component="p" variant='p' sx={{ fontSize: { xs: "18px", sm: "24px" } }}>History</Typography>
                        </Box>
                        <Box component="div" className='overlay' name="history"></Box>
                    </Grid>
                    <Grid item md={3} sm={6} xs={6} onClick={clickHandler}>
                        <Box component="div" sx={{ backgroundImage: `url(${math})` }} className='category'>
                            <Typography component="p" variant='p' sx={{ fontSize: { xs: "18px", sm: "24px" } }}>Maths</Typography>
                        </Box>
                        <Box component="div" className='overlay' name="maths"></Box>
                    </Grid>
                    <Grid item md={3} sm={6} xs={6} onClick={clickHandler}>
                        <Box component="div" sx={{ backgroundImage: `url(${music})` }} className='category'>
                            <Typography component="p" variant='p' sx={{ fontSize: { xs: "18px", sm: "24px" } }}>Musics</Typography>
                        </Box>
                        <Box component="div" className='overlay' name="musics"></Box>
                    </Grid>
                    <Grid item md={3} sm={6} xs={6} onClick={clickHandler}>
                        <Box component="div" sx={{ backgroundImage: `url(${mythology})` }} className='category'>
                            <Typography component="p" variant='p' sx={{ fontSize: { xs: "18px", sm: "24px" } }}>Mythology</Typography>
                        </Box>
                        <Box component="div" className='overlay' name="mythology"></Box>
                    </Grid>
                    <Grid item md={3} sm={6} xs={6} onClick={clickHandler}>
                        <Box component="div" sx={{ backgroundImage: `url(${nature})` }} className='category'>
                            <Typography component="p" variant='p' sx={{ fontSize: { xs: "18px", sm: "24px" } }}>Nature</Typography>
                        </Box>
                        <Box component="div" className='overlay' name="nature"></Box>
                    </Grid>
                    <Grid item md={3} sm={6} xs={6} onClick={clickHandler}>
                        <Box component="div" sx={{ backgroundImage: `url(${politic})` }} className='category'>
                            <Typography component="p" variant='p' sx={{ fontSize: { xs: "18px", sm: "24px" } }}>politics</Typography>
                        </Box>
                        <Box component="div" className='overlay' name="politics"></Box>
                    </Grid>
                    <Grid item md={3} sm={6} xs={6} onClick={clickHandler}>
                        <Box component="div" sx={{ backgroundImage: `url(${sport})` }} className='category'>
                            <Typography component="p" variant='p' sx={{ fontSize: { xs: "18px", sm: "24px" } }}>Sports</Typography>
                        </Box>
                        <Box component="div" className='overlay' name="sports"></Box>
                    </Grid>
                    <Grid item md={3} sm={6} xs={6} onClick={clickHandler}>
                        <Box component="div" sx={{ backgroundImage: `url(${theatre})` }} className='category'>
                            <Typography component="p" variant='p' sx={{ fontSize: { xs: "18px", sm: "24px" } }}>Theatre</Typography>
                        </Box>
                        <Box component="div" className='overlay' name="theatre"></Box>
                    </Grid>
                    <Grid item md={3} sm={6} xs={6} onClick={clickHandler}>
                        <Box component="div" sx={{ backgroundImage: `url(${tv})` }} className='category'>
                            <Typography component="p" variant='p' sx={{ fontSize: { xs: "18px", sm: "24px" } }}>Tv</Typography>
                        </Box>
                        <Box component="div" className='overlay' name="tv"></Box>
                    </Grid>
                    <Grid item md={3} sm={6} xs={6} onClick={clickHandler}>
                        <Box component="div" sx={{ backgroundImage: `url(${vehicle})` }} className='category'>
                            <Typography component="p" variant='p' sx={{ fontSize: { xs: "18px", sm: "24px" } }}>Vehicles</Typography>
                        </Box>
                        <Box component="div" className='overlay' name="vehicles"></Box>
                    </Grid>
                    <Grid item md={3} sm={6} xs={6} onClick={clickHandler}>
                        <Box component="div" sx={{ backgroundImage: `url(${videogame})` }} className='category'>
                            <Typography component="p" variant='p' sx={{ fontSize: { xs: "18px", sm: "24px" } }}>Video games</Typography>
                        </Box>
                        <Box component="div" className='overlay' name="videogames"></Box>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default CategoriesSection;

