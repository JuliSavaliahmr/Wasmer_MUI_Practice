import React from 'react'
import { Container, Stack, Box, Grid, Typography, Button, IconButton, Divider } from '@mui/material'
import StarIcon from '@mui/icons-material/Star';  
import GitHubIcon from '@mui/icons-material/GitHub';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
const Banner = () => {
  return (
    <>
      {/* Hero section */}
      <Stack sx={{ padding: "60px 0" }}>
        <Typography variant='h3' sx={{textAlign:'center', width: {xs:"90%",sm:'70%',md:"60%" ,lg:'50%',xl:'30%'}, mx: 'auto', fontWeight: "800" , fontSize : {xs:'20px' , sm:'30px' , md:'50px'} }}>
          Run, Publish & Deploy any code – anywhere
        </Typography>

        <Grid container spacing={3} sx={{ paddingTop: "60px", position: "relative" , zIndex:'9999'}} alignItems="center" justifyContent="center">
          {/* circle vector  */}
          <Box component='img' src='/public/Rectangle 40562.png' position='absolute' sx={{zIndex:'-1' , left:'8%' ,top:'2%', opacity:'0.2'}}></Box>
          <Box component='img' src='/public/Rectangle 40563.png' position='absolute' sx={{zIndex:'-1' , right:'8%' ,top:'37%', opacity:'0.2'}}></Box>
          {/* Code Box */}
          <Box
            sx={{
              position: "absolute",
              left: "50%",
              top:'10%',
              transform: "translateX(-50%)",
              height:{xs:'60%',md:'500px'},
              width:{xs:'60%',md:'718px'},
              boxShadow: "-10px -10px 30px rgb(240 233 144 / 60%), 10px -10px 30px rgb(162 255 151 / 40%), -10px 10px 30px rgb(255 44 91 / 50%), 10px 10px 30px rgba(100, 200, 255, 0.6)",
              borderRadius: "10px", 
              zIndex:'999 '
            }}
          >
            <Box
              component="img"
              src="/public/Code box.png"
              sx={{
                width: "100%",
                backgroundColor:'#21192a',
                borderRadius:'10px',
                height: "100%",
                display: "block",
              }}
            />
          </Box>
          {/* row 1 */}
          <Grid item xs={12} md={4} sx={{display:{xs:'none',sm:'none',md:'block'}, padding: "0" }}>
            <Box component="img" src="/public/Frame1.png" width={'100%'} />
          </Grid>
          <Grid item xs={12} md={4} sx={{display:{xs:'none',sm:'none',md:'block'}, textAlign: "center", padding: '0' }}>
            <Box component="img" src="/public/Frame3.png" width={'100%'} />
          </Grid>
          <Grid item xs={12} md={4} sx={{display:{xs:'none',sm:'none',md:'block'}, textAlign: 'right', padding: '0' }}>
            <Box component="img" src="/public/Frame1.png" width={'100%'} />
          </Grid>

          {/* row 2 */}
          <Grid item xs={12} md={4} sx={{display:{xs:'none',sm:'none',md:'block'}, padding: "0" }}>
            <Box component="img" src="/public/Frame4.png" width={'100%'} />
          </Grid>
          <Grid item xs={12} md={4} sx={{display:{xs:'none',sm:'none',md:'block'}, textAlign: "center", padding: '0' }}>
            <Box component="img" src="/public/Frame4.png" width={'100%'} />
          </Grid>
          <Grid item xs={12} md={4} sx={{display:{xs:'none',sm:'none',md:'block'}, textAlign: 'right', padding: '0' }}>
            <Box component="img" src="/public/Frame6.png" width={'100%'} />
          </Grid>

          {/* row 3 */}
          <Grid item xs={12} md={4} sx={{display:{xs:'none',sm:'none',md:'block'}, padding: "0" }}>
            <Box component="img" src="/public/Frame2.png" width={'100%'} />
          </Grid>
          <Grid item xs={12} md={4} sx={{display:{xs:'none',sm:'none',md:'block'}, textAlign: "center", padding: '0' }}>
            <Box component="img" src="/public/Frame4.png" width={'100%'} />
          </Grid>
          <Grid item xs={12} md={4} sx={{display:{xs:'none',sm:'none',md:'block'}, textAlign: 'right', padding: '0' }}>
            <Box component="img" src="/public/Frame3.png" width={'100%'} />
          </Grid>
          
          <Stack paddingTop='100px'>
            <Typography variant='subtitle1' sx={{width:'57%' , textAlign:'center' , mx:'auto' , lineHeight:'1.8'}} className='secondary-color'>Serve sandboxed WebAssembly apps anywhere through a single runtime and do in days what others do in months.</Typography>
            <Typography variant="subtitle2" color="initial" sx={{fontWeight:'700' , display:'inline-block' ,mx:'auto', padding:'20px 0'}}>Reach for the stars, we do too.</Typography>
            <Stack direction='row' spacing={1} alignItems='center' justifyContent='center'>
              <IconButton sx={{border:'1px solid gray',borderRadius:'25px'}}>
                  <Typography variant="body1" className='secondary-color' padding='0' margin='0'>15,000</Typography>
                  <StarIcon color='warning'></StarIcon>
                  <Divider orientation='vertical' flexItem sx={{padding:'0 5px'}}></Divider>
                  <GitHubIcon sx={{paddingLeft:'5px',color:'black'}}></GitHubIcon>
                  <ArrowOutwardIcon sx={{paddingLeft:'5px',color:'black'}} fontSize='5px'></ArrowOutwardIcon>
              </IconButton>
            </Stack>
          </Stack>
        </Grid> 
      </Stack>
      <Typography variant="h4" sx={{ fontWeight: "bold", textAlign: "center" , lineHeight:'1.8' , padding:'60px 0'}}>
      Create apps that 
      <Box
        component="span"
        sx={{
          display: "inline-flex",
          alignItems: "center",
          backgroundColor: "black",
          color: "white",
          padding: "5px 12px",
          borderRadius: "20px",
          mx: 1,
          fontSize: "18px",
          fontWeight: "bold",
        }}
      >
        <Box component="img" src="/public/Group2.png" sx={{ height: "16px", mr: 1 }} /> 
        Run <ArrowOutwardIcon sx={{ fontSize: "16px", ml: 1 }} />
      </Box>
      everywhere.
      <br />
      <Box
        component="span"
        sx={{
          display: "inline-flex",
          alignItems: "center",
          backgroundColor: "black",
          color: "white",
          padding: "5px 12px",
          borderRadius: "20px",
          mx: 1,
          fontSize: "18px",
          fontWeight: "bold",
        }}
      >
        <Box component="img" src="/public/Group3.png" sx={{ height: "18px", mr: 1 }} /> 
        Publish <ArrowOutwardIcon sx={{ fontSize: "16px", ml: 1 }} />
      </Box>
      and share with the community
      <br />
      and
      <Box
        component="span"
        sx={{
          display: "inline-flex",
          alignItems: "center",
          backgroundColor: "black",
          color: "white",
          padding: "5px 12px",
          borderRadius: "20px",
          mx: 1,
          fontSize: "18px",
          fontWeight: "bold",
        }}
      >
        <Box component="img" src="/public/Group1.png" sx={{ height: "18px", mr: 1 }} /> 
        Deploy <ArrowOutwardIcon sx={{ fontSize: "16px", ml: 1 }} />
      </Box>
      to the edge, globally.
    </Typography>
    </>
  )
}

export default Banner 
