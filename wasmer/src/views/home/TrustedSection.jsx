import React from "react";

import { Box, Container, Typography, Button, Grid } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

import vercel from '../../assets/images/Group 186.png';


const TrustedSection = () => {
    return (
        <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", p: 4, backgroundColor: '#d9e4ff3b' }}>
            <Typography variant="body1" sx={{ textAlign: "center", fontWeight: "bold", mb: 1 }}>
                We are trusted by the best
            </Typography>
            <Typography variant="h6" sx={{ textAlign: "center", my: 2 }} className="secondary-color">
                "This programming tool makes it easier for apps to <br />work anywhere"
            </Typography>
            <Box component="img" src={vercel} sx={{ mb: 4 }} />

            <Grid item md={6} sx={{width:'60%', backgroundColor: 'black',marginTop:'40px', padding: '60px 40px', borderRadius: '15px', display: 'flex', alignItems: 'center', boxShadow: "-10px -10px 30px rgb(240 233 144 / 60%), 10px -10px 30px rgb(162 255 151 / 40%), -10px 10px 30px rgb(255 44 91 / 50%), 10px 10px 30px rgba(100, 200, 255, 0.6)",height:'200px', justifyContent: 'space-between' }}>
                <Box>
                    <Typography variant="h5" color="white">Truly universal, runs everywhere & fast as native. </Typography>
                    <Typography variant="body1" className='secondary-color' sx={{ padding: '10px 0' }}>See more info about Runtime</Typography>
                </Box>
                <Button variant="contained" sx={{ backgroundColor: 'white', borderRadius: '50%', height: '60px', width: '60px' }}>
                    <ArrowOutwardIcon sx={{ color: 'black' }} />
                </Button>
            </Grid>
        </Box>
    );
};

export default TrustedSection;
