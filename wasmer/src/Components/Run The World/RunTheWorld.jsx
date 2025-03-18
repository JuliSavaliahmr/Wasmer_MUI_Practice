import { Stack, Box, Container, Typography, Button ,Grid} from '@mui/material'
import React from 'react'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

const RunTheWorld = () => {
    return (
        <>
            <Stack sx={{ padding: '160px 0' }} >
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
                    <Box component="img" src="/public/Group2.png" sx={{ height: "18px", mr: 1 }} />
                    RunTime
                </Box>
                <Container>
                    <Typography variant="h3" textAlign='center' sx={{ paddingY: '40px', fontWeight: '800' }} color="initial">Run the world </Typography>
                    <Typography variant="h6" sx={{ textAlign: 'center', width: '60%', mx: 'auto' }} className='secondary-color'>Using a binary for each platform and chip is the past. Rise above with lightweight containerized apps that simply run everywhere.</Typography>
                    {/* box green-gradient */}
                    <Box sx={{ display: "flex", gap: 2 , justifyContent:'center' , padding:'60px 0'}}>
                        <Box component="img" src="/public/c1.png" sx={{ width:70, height: 70}} />
                        <Box component="img" src="/public/c2.png" sx={{ width:70, height: 70}} />
                        <Box component="img" src="/public/c 3.png" sx={{ width:70, height: 70}} />
                        <Box component="img" src="/public/c4.png" sx={{ width:70, height: 70}} />
                        <Box component="img" src="/public/c5.png" sx={{ width:70, height: 70}} />
                        <Box component="img" src="/public/c6.png" sx={{ width:70, height: 70}} />
                    </Box>
                    <Typography variant="subtitle1" sx={{textAlign:'center' , color:'white' , paddingBottom:'30px'}} color="initial">Supports almost every programming language</Typography>
                    <Grid item md={4} sx={{maxWidth:'65%',backgroundColor:'black' ,margin:'auto', padding:'60px 40px' , borderRadius:'15px',display:'flex', alignItems:'center', boxShadow:'10px -107px 239px 71px #81b381',justifyContent:'space-between'}}>
                        <Box>
                        <Typography variant="h5" color="white">Truly universal, runs everywhere & fast as native. </Typography>
                        <Typography variant="body1" className='secondary-color' sx={{padding:'10px 0'}}>See more info about Runtime</Typography>
                        </Box>
                        <Button variant="contained" sx={{backgroundColor:'white',borderRadius:'50%',height:'60px',width:'60px'}}>
                          <ArrowOutwardIcon sx={{color:'black'}}/>
                        </Button>
                    </Grid>
                    <Typography variant="h6" className='secondary-color' sx={{textAlign:'center' , padding:'70px 0 0 0'}}>“This programming tool makes it easier for apps to work anywhere”</Typography>
                    <Box component='img' src='/public/Group 186.png' sx={{mx:'auto' , display:'block',padding:'40px 0'}}></Box>
                </Container>
            </Stack>
        </>
    )
}

export default RunTheWorld