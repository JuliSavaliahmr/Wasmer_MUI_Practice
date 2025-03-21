import React from 'react';
import { Stack, Box, Container, Typography, Grid } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import DownloadIcon from '@mui/icons-material/Download';

// Swiper imports
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import Blackbox from '../../Components/blackbox/Blackbox';
import Blackbtns from '../../Components/blackbtns/Blackbtns';

import registryimg from '../../assets/images/vectors/Group3.png';
import vercel from '../../assets/images/Group 186.png';
import brand1 from '../../assets/images/brand1.png';
import brand2 from '../../assets/images/brand2.png';
import brand3 from '../../assets/images/brand3.png';

const cardData = [
    {
        id: 1,
        img: brand1,
        title: 'SpiderMonkey is Mozilla’s JavaScript and WebAssembly Engine, used in Firefox, Servo, and various other projects.',
        likes: '574',
        downloads: '574',
    },
    {
        id: 2,
        img: brand2,
        title: 'SQLite is a C-language library that implements a small, fast, self-contained, high-reliability, full-featured SQL database engine.',
        likes: '574',
        downloads: '574',
    },
    {
        id: 3,
        img: brand3,
        title: 'Cowsay is a program that generates ASCII pictures of a cow with a message.',
        likes: '574',
        downloads: '574',
    },
];

const Registry = () => {
    return (
        <>
            <Stack sx={{ padding: { xs: '30px 0', md: '0px 0' }, zIndex: '8!important' }}>
                <Blackbtns name1='Registry' img1={registryimg} />

                <Container>
                    <Typography variant="h3" textAlign='center' sx={{
                        paddingY: { xs: '20px', md: '16px' },
                        fontWeight: '800',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: { xs: '1.8rem', md: '2.4rem' }
                    }}>
                        <Box component='span' sx={{
                            mr: { xs: '10px', md: '22px' },
                            borderRadius: '50%',
                            border: '3px solid #ff3f60',
                            backgroundColor: 'white',
                            height: { xs: '40px', md: '60px' },
                            width: { xs: '40px', md: '60px' },
                            display: { xs: 'none', sm: 'block' },
                            position: 'relative',
                            "&::after": {
                                position: 'absolute',
                                content: '""',
                                borderRadius: '50%',
                                backgroundColor: '#ff3f60',
                                height: { xs: '28px', md: '38px' },
                                width: { xs: '28px', md: '38px' },
                                left: { sm: '9%', md: '15%' },
                                top: { sm: '9%', md: '15%' },
                            }
                        }} />
                        Unbound Collaboration
                    </Typography>

                    <Typography variant="h6" sx={{
                        textAlign: 'center',
                        width: { xs: '90%', sm: '75%', md: '62%' },
                        mx: 'auto',
                        fontSize: { xs: '1rem', md: '22px' }
                    }} className='secondary-color'>
                        Packages are limited by their languages no more. Collaborate across stacks, leverage all, and contribute your own.
                    </Typography>
                </Container>

                {/* Swiper for xs and sm */}
                <Box sx={{ display: { xs: 'block', md: 'none' }, px: 2, zIndex: '8!important' }}>
                    <Swiper
                        spaceBetween={20}
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                    >
                        {cardData.map((card) => (
                            <SwiperSlide key={card.id}>
                                <Box sx={{
                                    backgroundColor: 'white',
                                    borderRadius: '15px',
                                    padding: '20px',
                                    border: '1px solid #b7b7b766',
                                    textAlign: 'left',
                                    width: { xs: '100%', sm: '65%' }, // 65% width for sm
                                    mx: { xs: '0', sm: 'auto' }, // Centering on sm
                                    my: { xs: '15px', sm: '17px' }
                                }}>
                                    <Box component="img" src={card.img} sx={{ maxWidth: '100%', height: 'auto' }} />
                                    <Typography variant="subtitle2" sx={{ padding: '10px 0' }}>
                                        {card.title}
                                    </Typography>
                                    <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
                                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                            <FavoriteBorderIcon className='secondary-color' />
                                            <Typography component="span" className="secondary-color">{card.likes}</Typography>
                                        </Box>
                                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                            <DownloadIcon className='secondary-color' />
                                            <Typography component="span" className="secondary-color">{card.downloads}</Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </Box>

                {/* Grid for md and above */}
                <Grid
                    container
                    sx={{
                        display: { xs: 'none', md: 'flex' },
                        justifyContent: { md: 'center', xl: 'space-between' },
                        gap: '32px',
                        padding: { md: '64px 0 32px 0' }
                    }}
                >
                    {cardData.map((card) => (
                        <Grid item key={card.id} sx={{
                            backgroundColor: 'white',
                            width: '496px',
                            borderRadius: '15px',
                            padding: '32px',
                            border: '1px solid #b7b7b766',
                            zIndex:'8'
                        }}>
                            <Box component="img" src={card.img} sx={{ maxWidth: '100%', height: 'auto' }} />
                            <Typography variant="subtitle2" sx={{ padding: '10px 0' }}>
                                {card.title}
                            </Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <FavoriteBorderIcon className='secondary-color' />
                                    <Typography component="span" className="secondary-color">{card.likes}</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <DownloadIcon className='secondary-color' />
                                    <Typography component="span" className="secondary-color">{card.downloads}</Typography>
                                </Box>
                            </Box>
                        </Grid>
                    ))}
                </Grid>

                <Container>
                    <Blackbox title='All languages, fully containerized & collaborative' subtitle='See more info about Registry' shadow='0px -50px 100px -20px #ff9999,0px -30px 80px -10px #f7934d, 0px -20px 60px -5px #ffd562' />
                    <Typography variant="h6" className='secondary-color' sx={{
                        textAlign: 'center',
                        padding: { xs: '40px 0 0 0', md: '64px 0 0 0' },
                        width: { xs: '80%', sm: '60%', md: '50%', lg: '45%' },
                        mx: 'auto',
                        fontSize: { xs: '0.9rem', md: '22px' }
                    }}>
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
            </Stack>
        </>
    );
};

export default Registry;
