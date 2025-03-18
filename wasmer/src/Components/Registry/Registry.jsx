import { Stack, Box, Container, Typography, Button, Grid } from '@mui/material'
import React from 'react'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import DownloadIcon from '@mui/icons-material/Download';
const Registry = () => {
    return (
        <>
            <Stack sx={{ padding: '100px 0' }} >
                <Box
                    component="span" md={4} position='relative'
                    sx={{
                        display: "inline-flex",
                        alignItems: "center",
                        backgroundColor: "black",
                        color: "white",
                        padding: "15px 12px",
                        textAlign: 'center',
                        borderRadius: "25px",
                        justifyContent: 'center',
                        width: '9%',
                        mx: 'auto',
                        fontSize: "18px",
                        fontWeight: "bold",
                        "&::after": {
                            content: '""',
                            position: 'absolute',
                            bottom: '0',
                            left: '50%',
                            transform: "rotate(180deg)",
                            height: '244px',
                            width: '5px',
                            background: "linear-gradient(180deg, rgba(15, 5, 24, 0.2) 0%, rgba(15, 5, 24, 0) 100%)",
                        }
                    }}
                >
                    <Box component="img" src="/public/Group3.png" sx={{ height: "20px", mr: 1 }} />
                    Registry
                </Box>
                <Container>
                    <Typography variant="h3" textAlign='center' sx={{ paddingY: '40px', fontWeight: '800', display: 'flex', alignItems: 'center', justifyContent: 'center' }} color="initial">
                        <Box component='span' sx={{ mr: '20px', borderRadius: '50%', border: '3px solid #ff3f60', backgroundColor: 'white', height: '50px', width: '50px', display: 'inline-block', position: 'relative', "&::after": { position: 'absolute', content: '""', borderRadius: '50%', backgroundColor: '#ff3f60', height: '35px', width: '35px', display: 'inline-block', left: '11%', top: '11%' } }}>
                        </Box>
                        Unbound collaboration</Typography>
                    <Typography variant="h6" sx={{ textAlign: 'center', width: '60%', mx: 'auto' }} className='secondary-color'>Packages are limited by their languages no more. Collaborate across stacks, leverage all and contribute your own.</Typography>
                </Container>

                {/* box green-gradient */}
                <Grid container sx={{zIndex:'3', padding: '80px 0', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                    <Grid item md={3} sx={{ backgroundColor: 'white', borderRadius: '15px', padding: '30px 10px 30px 0', border: '1px solid gray' }}>
                        <Box component='img' src='/public/brand1.png'></Box>
                        <Typography variant="subtitle2" color="initial" sx={{ padding: '10px 0' }}>SpiderMonkey is Mozilla’s JavaScript and WebAssembly Engine, used in Firefox, Servo and various other projects.</Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Typography variant="body1" className='secondary-color' sx={{ display: 'flex', alignItems: 'center', paddingRight: '20px' }}>
                                <FavoriteBorderIcon className='secondary-color' />
                                <Typography component='span' className='secondary-color'>514</Typography>
                            </Typography>
                            <Typography variant="body1" className='secondary-color' sx={{ display: 'flex', alignItems: 'center' }}>
                                <DownloadIcon className='secondary-color' />
                                <Typography component='span' className='secondary-color'>514</Typography>
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item md={4} sx={{ backgroundColor: 'white', borderRadius: '15px', padding: '30px 40px', border: '1px solid gray' }}>
                        <Box component='img' src='/public/brand2.png'></Box>
                        <Typography variant="subtitle2" color="initial" sx={{ padding: '10px 0' }}>SpiderMonkey is Mozilla’s JavaScript and WebAssembly Engine, used in Firefox, Servo and various other projects.</Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Typography variant="body1" className='secondary-color' sx={{ display: 'flex', alignItems: 'center', paddingRight: '20px' }}>
                                <FavoriteBorderIcon className='secondary-color' />
                                <Typography component='span' className='secondary-color'>514</Typography>
                            </Typography>
                            <Typography variant="body1" className='secondary-color' sx={{ display: 'flex', alignItems: 'center' }}>
                                <DownloadIcon className='secondary-color' />
                                <Typography component='span' className='secondary-color'>514</Typography>
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item md={3} sx={{ backgroundColor: 'white', borderRadius: '15px', padding: '30px 40px', border: '1px solid gray' }}>
                        <Box component='img' src='/public/brand3.png'></Box>
                        <Typography variant="subtitle2" color="initial" sx={{ padding: '10px 0' }}>SpiderMonkey is Mozilla’s JavaScript and WebAssembly Engine, used in Firefox, Servo and various other projects.</Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Typography variant="body1" className='secondary-color' sx={{ display: 'flex', alignItems: 'center', paddingRight: '20px' }}>
                                <FavoriteBorderIcon className='secondary-color' />
                                <Typography component='span' className='secondary-color'>514</Typography>
                            </Typography>
                            <Typography variant="body1" className='secondary-color' sx={{ display: 'flex', alignItems: 'center' }}>
                                <DownloadIcon className='secondary-color' />
                                <Typography component='span' className='secondary-color'>514</Typography>
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
                <Container>
                    <Grid item md={4} sx={{
                        backgroundColor: 'black',margin:'auto',maxWidth:'65%', padding: '60px 40px', borderRadius: '15px', display: 'flex', alignItems: 'center', position: 'relative', justifyContent: 'space-between', "&::after": {
                            content: "''", position: 'absolute', top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            borderRadius: 'inherit',
                            boxShadow:'11px -105px 203px #eded66, 154px -135px 203px #ff2c8d, -14px -135px 203px #ff8302cf',
                            zIndex: 1
                        }
                    }
                    } >
                        <Box>
                            <Typography variant="h5" color="white">Truly universal, runs everywhere & fast as native. </Typography>
                            <Typography variant="body1" className='secondary-color' sx={{ padding: '10px 0' }}>See more info about Runtime</Typography>
                        </Box>
                        <Button variant="contained" sx={{ backgroundColor: 'white', borderRadius: '50%', height: '60px', width: '60px' }}>
                            <ArrowOutwardIcon sx={{ color: 'black' }} />
                        </Button>
                    </Grid>
                    <Typography variant="h6" className='secondary-color' sx={{ textAlign: 'center', padding: '70px 0 0 0' }}>“This programming tool makes it easier for apps to work anywhere”</Typography>
                    <Box component='img' src='/public/Group 186.png' sx={{ mx: 'auto', display: 'block', padding: '40px 0' }}></Box>
                </Container>
            </Stack >
        </>
    )
}

export default Registry;