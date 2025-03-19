import React from 'react'

import { Stack, Box, Container, Typography, Button, Grid } from '@mui/material'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import DownloadIcon from '@mui/icons-material/Download';

import Blackbox from '../../Components/blackbox/Blackbox';
import Blackbtns from '../../Components/blackbtns/Blackbtns';

import registryimg from '../../assets/images/vectors/Group3.png';
import vercel from '../../assets/images/Group 186.png';
import brand1 from '../../assets/images/brand1.png';
import brand2 from '../../assets/images/brand2.png';
import brand3 from '../../assets/images/brand3.png';


const Registry = () => {

    const card = [
        {
            id: 1,
            img: brand1,
            title: 'SpiderMonkey is Mozilla’s JavaScript and WebAssembly Engine, used in Firefox, Servo and various other projects.',
            likes: <FavoriteBorderIcon className='secondary-color'></FavoriteBorderIcon>,
            likescount: '514',
            downloads: <DownloadIcon className='secondary-color' ></DownloadIcon>,
            downloadscount: '1.5M',
        },
        {
            id: 2,
            img: brand2,
            title: 'SQLite is a C-language library that implements a small, fast, self-contained, high-reliability, full-featured, SQL database engine',
            likes: <FavoriteBorderIcon className='secondary-color'></FavoriteBorderIcon>,
            likescount: '514',
            downloads: <DownloadIcon className='secondary-color' ></DownloadIcon>,
            downloadscount: '1.5M',
        },
        {
            id: 3,
            img: brand3,
            title: 'cowsay is a program that generates ASCII pictures of a cow with a message',
            likes: <FavoriteBorderIcon className='secondary-color'></FavoriteBorderIcon>,
            likescount: '514',
            downloads: <DownloadIcon className='secondary-color' ></DownloadIcon>,
            downloadscount: '1.5M',
        },
    ]

    return (
        <>
            <Stack sx={{ padding: '56px 0' }} >
                <Blackbtns name1='Registry' img1={registryimg}></Blackbtns>
                <Container>
                    <Typography variant="h3" textAlign='center' sx={{ paddingY: '40px', fontWeight: '800', display: 'flex', alignItems: 'center', justifyContent: 'center' }} color="initial">
                        <Box component='span' sx={{ mr: '20px', borderRadius: '50%', border: '3px solid #ff3f60', backgroundColor: 'white', height: '50px', width: '50px', display: 'inline-block', position: 'relative', "&::after": { position: 'absolute', content: '""', borderRadius: '50%', backgroundColor: '#ff3f60', height: '35px', width: '35px', display: 'inline-block', left: '11%', top: '11%' } }}>
                        </Box>
                        Unbound collaboration</Typography>
                    <Typography variant="h6" sx={{ textAlign: 'center', width: '60%', mx: 'auto' }} className='secondary-color'>Packages are limited by their languages no more. Collaborate across stacks, leverage all and contribute your own.</Typography>
                </Container>

                {/* box green-gradient */}
                <Grid container sx={{ zIndex: '3', padding: '80px 0', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                    {
                        card.map((c) => (
                            <Grid item md={c.id===2 ? 4 : 3} sx={{ backgroundColor: 'white', borderRadius: '15px', padding: c.id===1? '30px 10px 30px 0' : '30px 50px' , border: '1px solid gray' }}>
                                <Box component='img' src={c.img}></Box>
                                <Typography variant="subtitle2" color="initial" sx={{ padding: '10px 0' }}>{c.title}</Typography>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <Typography variant="body1" className='secondary-color' sx={{ display: 'flex', alignItems: 'center', paddingRight: '20px' }}>
                                        {c.likes}
                                        <Typography component='span' className='secondary-color'>{c.likescount}</Typography>
                                    </Typography>
                                    <Typography variant="body1" className='secondary-color' sx={{ display: 'flex', alignItems: 'center' }}>
                                        {c.downloads}
                                        <Typography component='span' className='secondary-color'>{c.downloadscount}</Typography>
                                    </Typography>
                                </Box>
                            </Grid>
                        ))
                    }
                </Grid>
                <Container>
                    <Blackbox title='All languages, fully containerized & collaborative' subtitle='See more info about Registry' shadow=' 0px -50px 100px -20px #ff9999,0px -30px 80px -10px #f7934d, 0px -20px 60px -5px #ffd562'></Blackbox>
                    <Typography variant="h6" className='secondary-color' sx={{ textAlign: 'center', padding: '70px 0 0 0' }}>“This programming tool makes it easier for apps to work anywhere”</Typography>
                    <Box component='img' src={vercel} sx={{ mx: 'auto', display: 'block', padding: '40px 0' }}></Box>
                </Container>
            </Stack >
        </>
    )
}

export default Registry;