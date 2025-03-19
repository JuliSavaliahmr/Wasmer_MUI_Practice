import React from 'react'

import { Stack, Box, Container, Typography, Button ,Grid} from '@mui/material'

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
            <Stack sx={{ padding: '152px 0' }} >
                <Blackbtns img1={runimg} name1='RunTime' ></Blackbtns>
                <Container>
                    <Typography variant="h3" textAlign='center' sx={{ paddingY: '24px', fontWeight: '800' }} color="initial">Run the world </Typography>
                    <Typography variant="h6" sx={{ textAlign: 'center', width: '60%', mx: 'auto' }} className='secondary-color'>Using a binary for each platform and chip is the past. Rise above with lightweight containerized apps that simply run everywhere.</Typography>
                    {/* box green-gradient */}
                    <Box sx={{ display: "flex", gap: 2 , justifyContent:'center' , padding:'60px 0 16px 0',zIndex:3,position:'relative'}}>
                        <Box component="img" src={c1} sx={{ width:42, height: 42}} />
                        <Box component="img" src={c2} sx={{ width:42, height: 42}} />
                        <Box component="img" src={c3} sx={{ width:42, height: 42}} />
                        <Box component="img" src={c4} sx={{ width:42, height: 42}} />
                        <Box component="img" src={c5} sx={{ width:42, height: 42}} />
                        <Box component="img" src={c6} sx={{ width:42, height: 42}} />
                    </Box>
                    <Typography variant="subtitle1" sx={{textAlign:'center' , color:'white' , paddingBottom:'30px',fontSize:'22px',zIndex:3,position:'relative'
                    }} color="initial">Supports almost every programming language</Typography>
                    <Blackbox title="Truly universal, runs everywhere & fast as native." subtitle='See more info about Runtime' img={v1}></Blackbox>
                    <Typography variant="h6" className='secondary-color' sx={{textAlign:'center' , padding:'64px 0 0 0',width:'40%',fontWeight:'500',lineHeight:'140%',mx:'auto'}}>“This programming tool makes it easier for apps to work anywhere”</Typography>
                    <Box component='img' src={vercel} sx={{mx:'auto' , display:'block',padding:'40px 0'}}></Box>
                </Container>
            </Stack>
        </>
    )
}

export default RunTheWorld