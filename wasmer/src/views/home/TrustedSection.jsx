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
            backgroundColor: '#d9e4ff3b',
            pt: '88px'
        }}>
            <Typography variant="body1" sx={{ textAlign: "center", fontWeight: "bold", m: '0', fontSize: { xs: '0.9rem', md: '22px' } }}>
                We are trusted by the best
            </Typography>
            <Typography
                variant={isMobile ? "body1" : "h6"}
                sx={{ textAlign: "center", py: '24px', fontSize: { xs: '0.9rem', md: '22px' } }}
                className="secondary-color"
            >
                "This programming tool makes it easier for apps to <br></br> work anywhere"
            </Typography>
            <Box
                component="img"
                src={vercel}
                sx={{
                    mx: "auto",
                    display: "block",
                    padding: { xs: "30px 0", md: "24px 0" },
                    width: { xs: "20%", sm: "15%", md: "auto" }
                }}
            />
            <Grid item md={6} sx={{
                width: { xs: '95%', sm: '80%', md: '1071px' },
                backgroundColor: 'black',
                position: 'relative',
                marginTop: '40px',
                padding: { xs: '30px 20px', sm: '40px 30px', md: '60px 60px 151px 60px' },
                borderRadius: '15px',
                flexDirection: { xs: 'column', sm: 'row' },
                alignItems: 'center',
                boxShadow: "-10px -10px 30px rgb(240 233 144 / 60%), 10px -10px 30px rgb(162 255 151 / 40%), -10px 10px 30px rgb(255 44 91 / 50%), 10px 10px 30px rgba(100, 200, 255, 0.6)",
                height: { xs: 'auto', sm: 'auto', md: '368px' },
                justifyContent: 'space-between',
                gap: { xs: 3, sm: 2 }
            }}>
                <Box>
                    <Typography variant={isMobile ? "h6" : "h5"} sx={{ fontSize: { xs: '32px', md: '48px', fontWeight: '600' } }} color="white">Get Started </Typography>
                    <Typography variant="body1" className='secondary-color' sx={{ padding: '10px 0', fontSize: { xs: '0.9rem', md: '22px' } }}>Discover a new paradigm of software development. Create your first package, send it running straight from the shell and deploy it to the edge, globally.</Typography>
                </Box>
                <Button variant="contained" sx={{
                    backgroundColor: 'white',
                    position: 'absolute',
                    left: '90%',
                    bottom: "41px",
                    borderRadius: '50%',
                    display:{xs:'none',sm:'none',md:'block'},
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
