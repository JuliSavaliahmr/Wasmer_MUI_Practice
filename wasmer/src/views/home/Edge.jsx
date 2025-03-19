import React from 'react'

import { Stack, Box, Container, Typography, Button, Grid } from '@mui/material'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

import Blackbox from '../../Components/blackbox/Blackbox';
import Blackbtns from '../../Components/blackbtns/Blackbtns';

import deployimg from '../../assets/images/vectors/Group1.png';
import vercel from '../../assets/images/Group 186.png';
import GROUP from '../../assets/images/GROUP.png';

const Edge = () => {
    return (
        <>
            <Stack sx={{ padding: '100px 0' }} >
                <Blackbtns img1={deployimg} name1='Edge'></Blackbtns>
                <Container>
                    <Typography variant="h3" textAlign='center' sx={{ paddingY: '40px', fontWeight: '800', display: 'flex', alignItems: 'center', justifyContent: 'center' }} color="initial">
                        Above the clouds</Typography>
                    <Typography variant="h6" sx={{ textAlign: 'center', width: '60%', mx: 'auto' }} className='secondary-color'>Get the scalability of serverless and the reusability of cloud. Deploy to the edge, save your users time and yourself money. </Typography>
                </Container>

                {/* box green-gradient */}
                <Box component='img' src={GROUP} sx={{width:'50%',mx:'auto',padding:'40px ',zIndex:'3'}}></Box>
                <Container>
                    <Blackbox title='Faster, cheaper & indefinitely scalable' subtitle='See more info about Edge' shadow='10px -107px 239px 71px #b6b9ff'></Blackbox>
                    <Typography variant="h6" className='secondary-color' sx={{ textAlign: 'center', padding: '70px 0 0 0' }}>“This programming tool makes it easier for apps to work anywhere”</Typography>
                    <Box component='img' src={vercel} sx={{ mx: 'auto', display: 'block', padding: '40px 0' }}></Box>
                </Container>
            </Stack >
        </>
    )
}

export default Edge;