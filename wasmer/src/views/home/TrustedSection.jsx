import React from "react";

import { Box, Container, Typography, Button, Grid, useTheme, useMediaQuery } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

import vercel from '../../assets/images/Group 186.png';


const TrustedSection = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    
    return (
        <Box sx={{ 
            display: "flex", 
            flexDirection: "column", 
            justifyContent: "center", 
            alignItems: "center", 
            p: { xs: 2, sm: 3, md: 4 }, 
            backgroundColor: '#d9e4ff3b' 
        }}>
            <Typography variant="body1" sx={{ textAlign: "center", fontWeight: "bold", mb: 1 }}>
                We are trusted by the best
            </Typography>
            <Typography 
                variant={isMobile ? "body1" : "h6"} 
                sx={{ textAlign: "center", my: 2 }} 
                className="secondary-color"
            >
                {isMobile ? "This programming tool makes it easier for apps to work anywhere" : 
                    "\"This programming tool makes it easier for apps to work anywhere\""}
            </Typography>
            <Box component="img" src={vercel} sx={{ mb: 4, maxWidth: '100%', height: 'auto' }} />

            <Grid item md={6} sx={{
                width: { xs: '95%', sm: '80%', md: '60%' },
                backgroundColor: 'black',
                marginTop: '40px',
                padding: { xs: '30px 20px', sm: '40px 30px', md: '60px 40px' },
                borderRadius: '15px',
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                alignItems: 'center',
                boxShadow: "-10px -10px 30px rgb(240 233 144 / 60%), 10px -10px 30px rgb(162 255 151 / 40%), -10px 10px 30px rgb(255 44 91 / 50%), 10px 10px 30px rgba(100, 200, 255, 0.6)",
                height: { xs: 'auto', sm: 'auto', md: '200px' },
                justifyContent: 'space-between',
                gap: { xs: 3, sm: 2 }
            }}>
                <Box>
                    <Typography variant={isMobile ? "h6" : "h5"} color="white">Truly universal, runs everywhere & fast as native. </Typography>
                    <Typography variant="body1" className='secondary-color' sx={{ padding: '10px 0' }}>See more info about Runtime</Typography>
                </Box>
                <Button variant="contained" sx={{ 
                    backgroundColor: 'white', 
                    borderRadius: '50%', 
                    height: { xs: '50px', md: '60px' }, 
                    width: { xs: '50px', md: '60px' },
                    minWidth: { xs: '50px', md: '60px' },
                    alignSelf: { xs: 'flex-end', sm: 'center' }
                }}>
                    <ArrowOutwardIcon sx={{ color: 'black' }} />
                </Button>
            </Grid>
        </Box>
    );
};

export default TrustedSection;
