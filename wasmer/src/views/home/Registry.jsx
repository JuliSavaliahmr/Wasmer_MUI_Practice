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
            title: 'SpiderMonkey is Mozillas JavaScript and WebAssembly Engine, used in Firefox, Servo and various other projects.',
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
            <Stack sx={{ padding: { xs: '30px 0', md: '0px 0' } }}>
                <Blackbtns name1='Registry' img1={registryimg}></Blackbtns>
                <Container>
                    <Typography variant="h3" textAlign='center' sx={{ 
                        paddingY: { xs: '20px', md: '40px' }, 
                        fontWeight: '800', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        fontSize: { xs: '1.8rem', md: '2.4rem' }
                    }} color="initial">
                        <Box component='span' sx={{ 
                            mr: { xs: '10px', md: '20px' }, 
                            borderRadius: '50%', 
                            border: '3px solid #ff3f60', 
                            backgroundColor: 'white', 
                            height: { xs: '40px', md: '50px' }, 
                            width: { xs: '40px', md: '50px' }, 
                            display: 'inline-block', 
                            position: 'relative', 
                            "&::after": { 
                                position: 'absolute', 
                                content: '""', 
                                borderRadius: '50%', 
                                backgroundColor: '#ff3f60', 
                                height: { xs: '28px', md: '35px' }, 
                                width: { xs: '28px', md: '35px' }, 
                                display: 'inline-block', 
                                left: '11%', 
                                top: '11%' 
                            } 
                        }}>
                        </Box>
                        Unbound collaboration
                    </Typography>
                    <Typography variant="h6" sx={{ 
                        textAlign: 'center', 
                        width: { xs: '90%', sm: '75%', md: '60%' }, 
                        mx: 'auto',
                        fontSize: { xs: '1rem', md: '1.25rem' }
                    }} className='secondary-color'>
                        Packages are limited by their languages no more. Collaborate across stacks, leverage all and contribute your own.
                    </Typography>
                </Container>

                <Grid container sx={{ 
                    zIndex: '3', 
                    padding: { xs: '40px 0', md: '80px 0' }, 
                    display: 'flex', 
                    flexWrap: 'wrap', 
                    justifyContent: { xs: 'center', md: 'space-between' },
                    gap: { xs: 2, sm: 2, md: 2 } 
                }}>
                    {
                        card.map((c) => (
                            <Grid item xs={10} sm={3.2} key={c.id} sx={{ 
                                backgroundColor: 'white', 
                                width:'496px',
                                borderRadius: c.id === 1  ? '0px 15px 15px 0px' : c.id === 3 ? '15px 0px 0px 15px': '15px', 
                                padding: { xs: '20px', sm: '25px', md: c.id===1 ? '30px 10px 30px 0' : '30px 50px' }, 
                                border: '1px solid gray',
                                margin: { xs: '10px 0', md: 0 }
                            }}>
                                <Box component='img' src={c.img} sx={{ maxWidth: '100%', height: 'auto' }}></Box>
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
                    <Typography variant="h6" className='secondary-color' sx={{ 
                        textAlign: 'center', 
                        padding: { xs: '40px 0 0 0', md: '70px 0 0 0' },
                        fontSize: { xs: '0.9rem', md: '1.25rem' }
                    }}>
                        "This programming tool makes it easier for apps to work anywhere"
                    </Typography>
                    <Box component='img' src={vercel} sx={{ 
                        mx: 'auto', 
                        display: 'block', 
                        padding: { xs: '20px 0', md: '40px 0' },
                        maxWidth: '100%', 
                        height: 'auto' 
                    }}></Box>
                </Container>
            </Stack>
        </>
    )
}

export default Registry;