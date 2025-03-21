import React from 'react'

import { Stack, Box, Container, Typography, Button, Grid, useMediaQuery, useTheme } from '@mui/material'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import FlightIcon from "@mui/icons-material/Flight";
import WhatshotIcon from "@mui/icons-material/Whatshot"

import Blackbox from '../../Components/blackbox/Blackbox';
import Blackbtns from '../../Components/blackbtns/Blackbtns';

import deployimg from '../../assets/images/vectors/Group1.png';
import vercel from '../../assets/images/Group 186.png';
import GROUP from '../../assets/images/GROUP.png';
import v2 from '../../assets/images/vectors/v2.png';

const Edge = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <>
            <Stack sx={{ padding: { xs: '50px 0', md: '160px 0 48px 0' } }} >
                <Blackbtns img1={deployimg} name1='Edge'></Blackbtns>

                <Container>
                    <Typography
                        variant={isMobile ? "h4" : "h3"}
                        textAlign='center'
                        sx={{
                            py: { xs: '20px', md: '24px 0 16px 0!important' },
                            fontWeight: '800',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                        color="initial"
                    >
                        Above the clouds
                    </Typography>
                    <Typography
                        variant={isMobile ? "body1" : "h6"}
                        sx={{
                            textAlign: 'center', fontSize: { xs: '0.9rem', md: '22px' },
                            width: { xs: '100%', sm: '80%', md: '60%' },
                            mx: 'auto'
                        }}
                        className='secondary-color'
                    >
                        Get the scalability of serverless and the reusability of cloud. Deploy to the edge, save your users time and yourself money.
                    </Typography>
                </Container>

                <Box
                    component='img'
                    src={GROUP}
                    sx={{
                        width: { xs: '90%', sm: '70%', md: '826px' },
                        mx: 'auto',
                        mt: '50px',
                        zIndex: '3'
                    }}
                />
                <Box
                    sx={{
                        color: "white",
                        padding: "10px 20px",
                        display: "flex",
                        justifyContent: "center",
                        zIndex: '999',
                        padding: '0 0 32px 0'
                    }}
                >
                    <Stack direction="row" spacing={5} alignItems="center">
                        <Stack direction="row" spacing={1} alignItems="center">
                            <FlightIcon sx={{ fontSize: 32 }} />
                            <Typography variant="body1" sx={{ fontSize: { xs: '0.9rem', md: '22px' }, fontWeight: '600' }}>Infinite scalability</Typography>
                        </Stack>
                        <Stack direction="row" spacing={1} alignItems="center">
                            <WhatshotIcon sx={{ fontSize: 32 }} />
                            <Typography variant="body1" sx={{ fontSize: { xs: '0.9rem', md: '22px' }, fontWeight: '600' }}>Instant cold starts</Typography>
                        </Stack>
                    </Stack>
                </Box>
                <Container>
                    <Blackbox title='Faster, cheaper & indefinitely scalable' subtitle='See more info about Edge' img={v2} shadows={'23px -136px 1272px #7309ff'}></Blackbox>
                    <Typography
                        variant={isMobile ? "body1" : "h6"}
                        className='secondary-color'
                        sx={{
                            textAlign: 'center',
                            padding: { xs: '40px 0 0 0', md: '70px 0 0 0' },
                            px: { xs: 2, md: 0 }, fontSize: { xs: '0.9rem', md: '22px' }, width: { xs: '80%', sm: '60%', md: '50%', lg: '45%' }, mx: 'auto'
                        }}
                    >
                        "This programming tool makes it easier for apps to work anywhere"
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
                </Container>
            </Stack >
        </>
    )
}

export default Edge;