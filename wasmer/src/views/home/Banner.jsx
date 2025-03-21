import React from 'react'
import { Container, Stack, Box, Typography, Button, IconButton, Divider } from '@mui/material'
import StarIcon from '@mui/icons-material/Star';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

import Blackbtns from '../../Components/blackbtns/Blackbtns';
import Backicons from '../../Components/backicons/Backicons';

import vector1 from '../../assets/images/vectors/Rectangle 40562.png'
import vector2 from '../../assets/images/vectors/Rectangle 40563.png'
import runimg from '../../assets/images/vectors/Group2.png'
import publishimg from '../../assets/images/vectors/Group3.png'
import deployimg from '../../assets/images/vectors/Group1.png'

const Banner = () => {
  return (
    <>
      {/* Hero Section */}
      <Stack
        sx={{
          padding: { xs: "40px 16px", sm: "60px 24px", md: "88px 0" },
          position: "relative",
          overflowX: 'hidden',
          textAlign: "center"
        }}
      >
        <Typography
          variant='h3'
          sx={{
            width: { xs: "100%", sm: '80%', md: "60%", lg: '50%', xl: '34%' },
            mx: 'auto',
            fontWeight: "800",
            fontSize: { xs: '36px', sm: '30px', md: '52px' },
            paddingBottom: { xs: '40px', md: '64px' },
            lineHeight: '140%',
          }}
        >
          Run, Publish & Deploy any code – anywhere
        </Typography>

        {/* Background Elements (Hidden on Smaller Screens) */}
        <Box component='img' src={vector1} sx={{ position: 'absolute', zIndex: '1', left: '10%', top: '27%', opacity: '0.2', display: { xs: 'none', md: 'block' } }} />
        <Box component='img' src={vector2} sx={{ position: 'absolute', zIndex: '1', right: '7%', top: '21%', opacity: '0.1', display: { xs: 'none', md: 'block' } }} />

        {/* Background Icons */}
        <Backicons />

        {/* Description Section */}
        <Stack paddingTop={{ xs: '20px', md: '104px' }} alignItems="center">
          <Typography
            variant='h6'
            sx={{
              width: { xs: '100%', sm: '90%', md: '65%' },
              textAlign: 'center',
              mx: 'auto',
              lineHeight: '140%',
              fontSize: { xs: '17px', sm: '18px', md: '22px' },
            }}
            className='secondary-color'
          >
            Serve sandboxed WebAssembly apps anywhere through a single <br />
            runtime and do in days what others do in months.
          </Typography>

          <Typography
            variant="subtitle1"
            sx={{
              fontWeight: '600',
              paddingTop: { xs: '24px', md: '48px' },
              paddingBottom: { xs: '8px', md: '16px' },
              fontSize: { xs: '18px', md: '22px' },
              lineHeight: '140%',
            }}
          >
            Reach for the stars, we do too.
          </Typography>

          {/* GitHub Stats Button */}
          <Stack direction='row' spacing={1} alignItems='center' justifyContent='center'>
            <IconButton
              sx={{
                border: '1px solid gray',
                borderRadius: '25px',
                width: { xs: '180px', sm: '221px' },
                height: { xs: '44px', sm: '54px' },
                px: { xs: '16px', sm: '24px' },
                justifyContent: 'space-between',
              }}
            >
              <Typography variant="body1" sx={{ fontSize: { xs: '16px', sm: '22px' } }} className='secondary-color'>
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
          fontWeight: "600",
          wordSpacing: '4px',
          textAlign: "center",
          lineHeight: '148%',
          padding: { xs: '60px 16px 0', md: '58px 0 0' },
          fontSize: { xs: '32px', sm: '32px', md: '32px',lg:'48px' }
        }}
      >
        Create apps that <Blackbtns img={runimg} name="Run" sx={{display:{xs:'block' , md:'flex'},}}/> everywhere.
        <br />
        <Blackbtns img={publishimg} name="Publish" /> and share with the community
        <br />
         <Blackbtns img={deployimg} name="Deploy" /> to the edge, globally.
      </Typography>
    </>
  )
}

export default Banner;
