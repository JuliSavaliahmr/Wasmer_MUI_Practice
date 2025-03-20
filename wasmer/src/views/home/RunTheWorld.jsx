import React from 'react'

import { Stack, Box, Container, Typography, Button, Grid } from '@mui/material'

import Blackbox from '../../Components/blackbox/Blackbox';
import Blackbtns from '../../Components/blackbtns/Blackbtns';

import runimg from '../../assets/images/vectors/Group2.png'
import c1 from '../../assets/images/c1.png'
import c2 from '../../assets/images/c2.png'
import c3 from '../../assets/images/c 3.png'
import c4 from '../../assets/images/c4.png'
import c5 from '../../assets/images/c5.png'
import c6 from '../../assets/images/c6.png'
import vercel from '../../assets/images/Group 186.png'
import v1 from '../../assets/images/vectors/V1.png'


const RunTheWorld = () => {
    return (
        <>
            <Stack sx={{ padding: { xs: '80px 0', md: '120px 0', lg: '120px 0' } }} >
                <Blackbtns img1={runimg} name1='RunTime' ></Blackbtns>
                <Container>
                    <Typography variant="h3" textAlign='center' sx={{ paddingY: { xs: '16px', md: '24px' }, fontWeight: '800', fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.8rem' } }} color="initial">Run the world </Typography>
                    <Typography variant="h6" sx={{ textAlign: 'center', width: { xs: '90%', sm: '80%', md: '70%', lg: '60%' }, mx: 'auto', fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' } }} className='secondary-color'>Using a binary for each platform and chip is the past. Rise above with lightweight containerized apps that simply run everywhere.</Typography>
                    
                    <Box sx={{ display: "flex", flexWrap: 'wrap', gap: { xs: 1, sm: 1.5, md: 2 }, justifyContent:'center', padding:{ xs: '40px 0 12px 0', md: '60px 0 16px 0' }, zIndex:3, position:'relative'}}>
                        <Box component="img" src={c5} sx={{ width: { xs: 32, sm: 36, md: 42 }, height: { xs: 32, sm: 36, md: 42 } }} />
                        <Box component="img" src={c2} sx={{ width: { xs: 32, sm: 36, md: 42 }, height: { xs: 32, sm: 36, md: 42 } }} />
                        <Box component="img" src={c3} sx={{ width: { xs: 32, sm: 36, md: 42 }, height: { xs: 32, sm: 36, md: 42 } }} />
                        <Box component="img" src={c6} sx={{ width: { xs: 32, sm: 36, md: 42 }, height: { xs: 32, sm: 36, md: 42 } }} />
                        <Box component="img" src={c1} sx={{ width: { xs: 32, sm: 36, md: 42 }, height: { xs: 32, sm: 36, md: 42 } }} />
                        <Box component="img" src={c4} sx={{ width: { xs: 32, sm: 36, md: 42 }, height: { xs: 32, sm: 36, md: 42 } }} />
                    </Box>
                    <Typography variant="subtitle1" sx={{textAlign:'center', color:'white', paddingBottom:{ xs: '20px', md: '30px' }, fontSize:{ xs: '16px', sm: '18px', md: '22px' }, zIndex:3, position:'relative'}} color="initial">Supports almost every programming language</Typography>
                    <Blackbox title="Truly universal, runs everywhere & fast as native." subtitle='See more info about Runtime' img={v1} shadows={'14px -68px 106px 53px #208b20'}></Blackbox>
                    <Typography variant="h6" className='secondary-color' sx={{textAlign:'center', padding:{ xs: '40px 0 0 0', md: '64px 0 0 0' }, width:{ xs: '80%', sm: '60%', md: '50%', lg: '40%' }, fontWeight:'500', lineHeight:'140%', mx:'auto', fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' }}}>"This programming tool makes it easier for apps to work anywhere"</Typography>
                    <Box component='img' src={vercel} sx={{mx:'auto', display:'block', padding:{ xs: '30px 0', md: '40px 0' }, width: { xs: '70%', sm: '50%', md: 'auto' }}}></Box>
                </Container>
            </Stack>
        </>
    )
}

export default RunTheWorld