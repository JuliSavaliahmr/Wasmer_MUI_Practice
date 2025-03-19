import React from 'react'
import { Container, Stack, Box, Grid, Typography, Button, IconButton, Divider } from '@mui/material'
import StarIcon from '@mui/icons-material/Star';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

import Blackbtns from '../../Components/blackbtns/Blackbtns';

import codebox from '../../assets/images/home/Code box.png'
import vector1 from '../../assets/images/vectors/Rectangle 40562.png'
import vector2 from '../../assets/images/vectors/Rectangle 40563.png'
import runimg from '../../assets/images/vectors/Group2.png'
import publishimg from '../../assets/images/vectors/Group3.png'
import deployimg from '../../assets/images/vectors/Group1.png'

import p1 from '../../assets/images/home/p1.png'
import p2 from '../../assets/images/home/p2.png'
import p3 from '../../assets/images/home/p3.png'
import p4 from '../../assets/images/home/p4.png'
import p5 from '../../assets/images/home/p5.png'
import p6 from '../../assets/images/home/p6.png'
import p7 from '../../assets/images/home/p7.png'
import p8 from '../../assets/images/home/p8.png'
import p10 from '../../assets/images/home/p10.png'
import p11 from '../../assets/images/home/p11.png'
import p12 from '../../assets/images/home/p12.png'
import p13 from '../../assets/images/home/p13.png'
import p14 from '../../assets/images/home/p14.png'
import p15 from '../../assets/images/home/p15.png'
import p16 from '../../assets/images/home/p16.png'
import p17 from '../../assets/images/home/p17.png'
import p18 from '../../assets/images/home/p18.png'
import p19 from '../../assets/images/home/p19.png'
import p20 from '../../assets/images/home/p20.png'
import p21 from '../../assets/images/home/p21.png'
import p22 from '../../assets/images/home/p22.png'
import p23 from '../../assets/images/home/p23.png'
import p25 from '../../assets/images/home/p25.png'
import p26 from '../../assets/images/home/p26.png'
import p27 from '../../assets/images/home/p27.png'
import p28 from '../../assets/images/home/p28.png'

const Banner = () => {
  const products = [
    p28, p15, p26, p25, p22, p23, p21, p20, p19, 
    p11, p12, p13, p14, p15, p16,  p19, p20, 
    p21, p22, p23, p25, p26, p27,p3,p17,p12,p5,p7,p8,p10,p2,p1,p4,p6,p22,p18
  ];

  return (
    <>
      {/* Hero Section */}
      <Stack sx={{ padding: "88px 0", position: "relative" }}>
        <Typography
          variant='h3'
          sx={{
            textAlign: 'center',
            width: { xs: "90%", sm: '70%', md: "60%", lg: '50%', xl: '31%' },
            mx: 'auto',
            fontWeight: "800",
            fontSize: { xs: '20px', sm: '30px', md: '52px' },
            lineHeight: '140%',
          }}
        >
          Run, Publish & Deploy any code – anywhere
        </Typography>

        {/* Background Elements */}
        <Box component='img' src={vector1} sx={{ position: 'absolute', zIndex: '1', left: '18%', top: '27%', opacity: '0.2' }} />
        <Box component='img' src={vector2} sx={{ position: 'absolute', zIndex: '1', right: '7%', top: '21%', opacity: '0.1' }} />

        {/* Code Box */}
        <Box
          sx={{
            position: "absolute",
            left: "50%",
            top: '30%',
            transform: "translateX(-50%)",
            height: { xs: '60%', md: '336px' },
            width: { xs: '60%', md: '504px' },
            boxShadow: "-10px -10px 30px rgb(240 233 144 / 60%), 10px -10px 30px rgb(162 255 151 / 40%), -10px 10px 30px rgb(255 44 91 / 50%), 10px 10px 30px rgba(100, 200, 255, 0.6)",
            borderRadius: "10px",
            zIndex: 999,
          }}
        >
          <Box
            component="img"
            src={codebox}
            sx={{
              width: "100%",
              backgroundColor: '#21192a',
              borderRadius: '10px',
              height: "100%",
              display: "block",
            }}
          />
        </Box>

        {/* Background Icons */}
        <Grid  container spacing={2} sx={{ paddingTop: "64px", width: "100%" ,zIndex:'2'}}>
          {products.map((icon, index) => (
            <Grid 
              item
              xs={1}
              sm={1}
              md={1}
              key={index}
              sx={{ display: 'flex', justifyContent: 'center' ,height:'124px',width:'145px',padding:'0!important' }}
            >
              <Box
                component="img"
                src={icon}
                sx={{
                  width: '100%',
                  height: '100%',
                }}
              />
            </Grid>
          ))}
        </Grid>

        {/* Subtitle & Buttons */}
        <Stack paddingTop='64px' alignItems="center">
          <Typography variant='h6' sx={{ width: '42%', textAlign: 'center', mx: 'auto', lineHeight: '140%' ,fontSize:'22px'}} className='secondary-color'>
            Serve sandboxed WebAssembly apps anywhere through a single runtime and do in days what others do in months.
          </Typography>
          <Typography variant="subtitle1" sx={{ fontWeight: '600', paddingTop:'48px',paddingBottom:'16px',fontSize:'22px',lineHeight:'140%' }}>
            Reach for the stars, we do too.
          </Typography>
          <Stack direction='row' spacing={1} alignItems='center' justifyContent='space-between' >
            <IconButton sx={{ border: '1px solid gray', borderRadius: '25px',width:'221px' , height:'54px',px:'24px' ,justifyContent:'space-between'}}>
              <Typography variant="body1" className='secondary-color'sx={{fontSize:'22px'}}>15,000</Typography>
              <StarIcon sx={{color:'#ffd600'}} />
              <Divider orientation='vertical' flexItem sx={{ padding: '0 5px' }} />
              <GitHubIcon sx={{ paddingLeft: '5px', color: 'black' }} />
              <ArrowOutwardIcon sx={{ paddingLeft: '5px', color: 'black' }} fontSize='small' />
            </IconButton>
          </Stack>
        </Stack>
      </Stack>

      <Typography variant="h3" sx={{ fontWeight: "500", textAlign: "center", lineHeight: '148%', padding: '58px 0' }}>
        Create apps that
        <Blackbtns img={runimg} name="Run" />
        everywhere.
        <br />
        <Blackbtns img={publishimg} name="Publish" />
        and share with the community
        <br />
        and
        <Blackbtns img={deployimg} name="Deploy" />
        to the edge, globally.
      </Typography>
    </>
  )
}

export default Banner;
