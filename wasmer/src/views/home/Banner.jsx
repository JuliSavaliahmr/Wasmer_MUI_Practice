import React from 'react'
import { Container, Stack, Box, Grid, Typography, Button, IconButton, Divider, Paper } from '@mui/material'
import StarIcon from '@mui/icons-material/Star';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

import Blackbtns from '../../Components/blackbtns/Blackbtns';
import Codebox from '../../Components/codebox/Codebox';


import vector1 from '../../assets/images/vectors/Rectangle 40562.png'
import vector2 from '../../assets/images/vectors/Rectangle 40563.png'
import runimg from '../../assets/images/vectors/Group2.png'
import publishimg from '../../assets/images/vectors/Group3.png'
import deployimg from '../../assets/images/vectors/Group1.png'
import Backicons from '../../Components/backicons/Backicons';



const Banner = () => {
 

  return (
    <>
      {/* Hero Section */}
      <Stack sx={{ padding: { xs: "40px 0", sm: "60px 0", md: "88px 0" }, position: "relative" }}>
        <Typography
          variant='h3'
          sx={{
            textAlign: 'center',
            width: { xs: "90%", sm: '70%', md: "60%", lg: '50%', xl: '32%' },
            mx: 'auto',
            fontWeight: "800",
            fontSize: { xs: '20px', sm: '30px', md: '52px' },
            lineHeight: '140%',
          }}
        >
          Run, Publish & Deploy any code – anywhere
        </Typography>

        {/* Background Elements */}
        <Box component='img' src={vector1} sx={{ position: 'absolute', zIndex: '1', left: { xs: '5%', sm: '10%', md: '18%' }, top: '27%', opacity: '0.2', display: { xs: 'none', md: 'block' } }} />
        <Box component='img' src={vector2} sx={{ position: 'absolute', zIndex: '1', right: { xs: '3%', sm: '5%', md: '7%' }, top: '21%', opacity: '0.1', display: { xs: 'none', md: 'block' } }} />

        {/* Code Box
        <Codebox /> */}

        {/* Background Icons */}
        <Backicons/>


        {/* info */}
        <Stack paddingTop={{ xs: '20px', md: '64px' }} alignItems="center">
          <Typography
            variant='h6'
            sx={{
              width: { xs: '90%', sm: '80%', md: '65%' },
              textAlign: 'center',
              mx: 'auto',
              lineHeight: '140%',
              fontSize: { xs: '16px', sm: '18px', md: '22px' }
            }}
            className='secondary-color'
          >
            Serve sandboxed WebAssembly apps anywhere through a single <br></br>runtime and do in days what others do in months.
          </Typography>

          <Typography
            variant="subtitle1"
            sx={{
              fontWeight: '600',
              paddingTop: { xs: '24px', md: '48px' },
              paddingBottom: { xs: '8px', md: '16px' },
              fontSize: { xs: '18px', md: '22px' },
              lineHeight: '140%'
            }}
          >
            Reach for the stars, we do too.
          </Typography>

          <Stack
            direction='row'
            spacing={1}
            alignItems='center'
            justifyContent='space-between'
          >
            <IconButton
              sx={{
                border: '1px solid gray',
                borderRadius: '25px',
                width: { xs: '180px', sm: '221px' },
                height: { xs: '44px', sm: '54px' },
                px: { xs: '16px', sm: '24px' },
                justifyContent: 'space-between'
              }}
            >
              <Typography
                variant="body1"
                className='secondary-color'
                sx={{ fontSize: { xs: '16px', sm: '22px' } }}
              >
                15,000
              </Typography>
              <StarIcon sx={{ color: '#ffd600' }} />
              <Divider orientation='vertical' flexItem sx={{ padding: '0 5px' }} />
              <GitHubIcon sx={{ paddingLeft: '5px', color: 'black' }} />
              <ArrowOutwardIcon sx={{ paddingLeft: '5px', color: 'black' }} fontSize='small' />
            </IconButton>
          </Stack>
        </Stack>
      </Stack>

      <Typography
        variant="h3"
        sx={{
          fontWeight: "500",
          textAlign: "center",
          lineHeight: '148%',
          padding: { xs: '30px 0', md: '58px 0' },
          fontSize: { xs: '20px', sm: '24px', md: 'h3.fontSize' }
        }}
      >
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
