import React from 'react';
import { Grid, Box, Typography, Button } from '@mui/material';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

const Blackbox = ({ title, subtitle, shadow, img ,shadows}) => {
    return (
        <>
            {shadow ? (

                <Grid
                    item
                    md={4}
                    sx={{
                        maxWidth: '804px',
                        height: '133px',
                        backgroundColor: 'black',
                        margin: 'auto',
                        padding: '0px 40px',
                        borderRadius: '15px',
                        display: 'flex',
                        alignItems: 'center',
                        boxShadow: shadow,
                        justifyContent: 'space-between'
                    }}
                >
                    <Box>
                        <Typography variant="h5" color="white" sx={{ fontSize: {xs:'15px',sm:'18px' ,md:'20px',lg:'28px' }}}>
                            {title}
                        </Typography>
                        <Typography variant="body1" className="secondary-color" sx={{ padding: '10px 0' }}>
                            {subtitle}
                        </Typography>
                    </Box>
                    <Button variant="contained" sx={{ backgroundColor: 'white', borderRadius: '50%', height: '60px', width: '60px' , position: 'relative',zIndex:'2',  '&:hover .btn-icon': {
                            color:'white' 
                        }, '&::after': {
                            content: '""',
                            position: 'absolute',
                            top: '0',
                            left: '0',
                            width: '0%',
                            height: '100%',
                            backgroundColor: 'black',
                            transition: 'all 0.5s ease-in-out',
                            borderRadius:'50%',
                            zIndex: '1', 
                        }, 
                        '&:hover::after': {
                            width: '100%', 
                        },}}>
                        <ArrowOutwardIcon sx={{ color: 'black' ,zIndex:'3'}} className='btn-icon'  />
                    </Button>
                </Grid>
            ) : (
                <Grid
                    item
                    md={4}
                    sx={{
                        maxWidth: '804px',
                        height: '133px',
                        backgroundColor: 'black',
                        margin: 'auto',
                        padding: '0px 40px',
                        borderRadius: '15px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        position: 'relative',
                        boxShadow: shadows,
                        zIndex: '2'
                    }}
                >
                    <Box>
                        <Typography variant="h5" color="white" sx={{ fontSize: {xs:'15px',sm:'18px' ,md:'20px',lg:'28px' }}}>
                            {title}
                        </Typography>
                        <Typography variant="body1" className="secondary-color" sx={{ padding: '10px 0' }}>
                            {subtitle}
                        </Typography>
                    </Box>
                    {img && (
                        <Box
                            component="img"
                            src={img}
                            sx={{
                                position: 'absolute',
                                top: '-100%',
                                left: 0,
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                zIndex: 1
                            }}
                        />
                    )}
                    <Button variant="contained" sx={{
                        backgroundColor: 'white', borderRadius: '50%', height: '60px', width: '60px', position: 'relative',zIndex:'2',  '&:hover .btn-icon': {
                            color:'white' 
                        }, '&::after': {
                            content: '""',
                            position: 'absolute',
                            top: '0',
                            left: '0',
                            width: '0%',
                            height: '100%',
                            backgroundColor: 'black',
                            transition: 'all 0.5s ease-in-out',
                            borderRadius:'50%',
                            zIndex: '1', 
                        }, 
                        '&:hover::after': {
                            width: '100%', 
                        },
                       
                    }}>
                        <ArrowOutwardIcon sx={{ color: 'black' ,zIndex:'3'}} className='btn-icon' />
                    </Button>
                </Grid>
            )}
        </>
    );
};

export default Blackbox;
