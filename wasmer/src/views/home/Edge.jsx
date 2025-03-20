import React from 'react'

import { Stack, Box, Container, Typography, Button, Grid, useMediaQuery, useTheme } from '@mui/material'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

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
            <Stack sx={{ padding: { xs: '50px 0', md: '120px 0' } }} >
                <Blackbtns img1={deployimg} name1='Edge'></Blackbtns>

                <Container>
                    <Typography 
                        variant={isMobile ? "h4" : "h3"} 
                        textAlign='center' 
                        sx={{ 
                            paddingY: { xs: '20px', md: '40px' }, 
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
                            textAlign: 'center', 
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
                        width: { xs: '90%', sm: '70%', md: '50%' },
                        mx: 'auto',
                        padding: { xs: '20px', md: '40px' },
                        zIndex: '3'
                    }}
                />
                
                <Container>
                    <Blackbox  title='Faster, cheaper & indefinitely scalable' subtitle='See more info about Edge' img={v2} shadows={'2px -159px 251px purple'}></Blackbox>
                    <Typography 
                        variant={isMobile ? "body1" : "h6"} 
                        className='secondary-color' 
                        sx={{ 
                            textAlign: 'center', 
                            padding: { xs: '40px 0 0 0', md: '70px 0 0 0' },
                            px: { xs: 2, md: 0 }
                        }}
                    >
                        "This programming tool makes it easier for apps to work anywhere"
                    </Typography>
                    <Box 
                        component='img' 
                        src={vercel} 
                        sx={{ 
                            mx: 'auto', 
                            display: 'block', 
                            padding: { xs: '20px 0', md: '40px 0' },
                            width: { xs: '80%', sm: 'auto' }
                        }}
                    />
                </Container>
            </Stack >
        </>
    )
}

export default Edge;