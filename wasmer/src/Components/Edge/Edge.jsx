import { Stack, Box, Container, Typography, Button, Grid } from '@mui/material'
import React from 'react'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import DownloadIcon from '@mui/icons-material/Download';
const Edge = () => {
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
                    <Box component="img" src="/public/Group1.png" sx={{ height: "20px", mr: 1 }} />
                    Edge
                </Box>
                <Container>
                    <Typography variant="h3" textAlign='center' sx={{ paddingY: '40px', fontWeight: '800', display: 'flex', alignItems: 'center', justifyContent: 'center' }} color="initial">
                        Above the clouds</Typography>
                    <Typography variant="h6" sx={{ textAlign: 'center', width: '60%', mx: 'auto' }} className='secondary-color'>Get the scalability of serverless and the reusability of cloud. Deploy to the edge, save your users time and yourself money. </Typography>
                </Container>

                {/* box green-gradient */}
                <Box component='img' src='/public/GROUP.png' sx={{width:'50%',mx:'auto',padding:'40px ',zIndex:'3'}}></Box>
                <Container>
                    <Grid item md={4} sx={{
                        backgroundColor: 'black',margin:'auto',maxWidth:'65%', padding: '60px 40px', borderRadius: '15px', display: 'flex', alignItems: 'center', position: 'relative', justifyContent: 'space-between', "&::after": {
                            content: "''", position: 'absolute', top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            borderRadius: 'inherit',
                            boxShadow:'11px -105px 203px #fffff2, 154px -135px 203px #7d2cff, -14px -135px 203px #fff8f1cf',
                            zIndex: 2
                        }
                    }
                    } >
                        <Box>
                            <Typography variant="h5" color="white">Faster, cheaper & indefinitely scalable. </Typography>
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

export default Edge;