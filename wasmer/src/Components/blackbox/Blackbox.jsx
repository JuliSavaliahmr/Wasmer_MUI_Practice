import React from 'react';
import { Grid, Box, Typography, Button } from '@mui/material';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

const Blackbox = ({ title, subtitle, shadow, img, shadows }) => {
    return (
        <>
            {shadow ? (
                <Grid
                    item
                    md={4}
                    sx={{
                        maxWidth: { xs: '90%', sm: '85%', md: '804px' },
                        height: { xs: 'auto', sm: 'auto', md: '133px' },
                        backgroundColor: 'black',
                        margin: 'auto',
                        padding: { xs: '20px', sm: '24px', md: '0px 40px' },
                        borderRadius: '15px',
                        display: 'flex',
                        flexDirection: { xs: 'column', sm: 'row', md: 'row' },
                        alignItems: 'center',
                        textAlign: { xs: 'left!important', sm: 'left', md: 'left' },
                        boxShadow: shadow,
                        justifyContent: { xs: 'center', sm: 'center', md: 'space-between' },
                        gap: { xs: 2, sm: 2, md: 0 }
                    }}
                >
                    <Box sx={{marginRight:'auto!important'}}>
                        <Typography 
                            variant="h5" 
                            color="white" 
                            sx={{ 
                                fontSize: { xs: '16px', sm: '18px', md: '20px', lg: '28px' },
                                fontWeight: 'bold',   textAlign: { xs: 'left', sm: 'left', md: 'left' },
                            }}
                        >
                            {title}
                        </Typography>
                        <Typography 
                            variant="body1" 
                            className="secondary-color" 
                            sx={{ 
                                padding: '10px 0',
                                fontSize: { xs: '12px', sm: '14px', md: '16px' } 
                            }}
                        >
                            {subtitle}
                        </Typography>
                    </Box>
                    <Button 
                        variant="contained" 
                        sx={{ 
                            backgroundColor: 'white', 
                            borderRadius: '50%', 
                            minWidth: { xs: 'auto', sm: 'auto', md: '64px' }, 
                            height: { xs: '45px', sm: '50px', md: '60px' }, 
                            width: { xs: '45px', sm: '50px', md: '60px' }, 
                            position: 'relative',
                            marginLeft: { xs: 'auto', sm: 'auto', md: '0px' },
                            zIndex: 2,
                            '&:hover .btn-icon': { color: 'white' },
                            '&::after': {
                                content: '""',
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '0%',
                                height: '100%',
                                backgroundColor: 'black',
                                transition: 'all 0.5s ease-in-out',
                                borderRadius: '50%',
                                zIndex: 1,
                            },
                            '&:hover::after': { width: '100%' }
                        }}
                    >
                        <ArrowOutwardIcon sx={{ color: 'black', zIndex: 3, fontSize: { xs: '18px', sm: '20px', md: '24px' } }} className='btn-icon' />
                    </Button>
                </Grid>
            ) : (
                <Grid
                    item
                    md={4}
                    sx={{
                           maxWidth: { xs: '90%', sm: '85%', md: '804px' },
                        height: { xs: 'auto', sm: 'auto', md: '133px' },
                        backgroundColor: 'black',
                        margin: 'auto',
                        padding: { xs: '20px', sm: '24px', md: '0px 40px' },
                        borderRadius: '15px',
                        display: 'flex',
                        flexDirection: { xs: 'column', sm: 'row', md: 'row' },
                        alignItems: 'center',
                        textAlign: { xs: 'left', sm: 'left', md: 'left' },
                        justifyContent: { xs: 'center', sm: 'center', md: 'space-between' },
                        position: 'relative',
                        boxShadow: shadows,
                        zIndex: 2,
                        gap: { xs: 2, sm: 2, md: 0 }
                    }}
                >
                    <Box sx={{marginRight:'auto!important'}}>
                        <Typography 
                            variant="h5" 
                            color="white" 
                            sx={{ 
                                fontSize: { xs: '16px', sm: '18px', md: '20px', lg: '28px' },
                                fontWeight: 'bold'
                            }}
                        >
                            {title}
                        </Typography>
                        <Typography 
                            variant="body1" 
                            className="secondary-color" 
                            sx={{ 
                                padding: '10px 0',
                                fontSize: { xs: '12px', sm: '14px', md: '16px' } 
                            }}
                        >
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
                    <Button 
                        variant="contained" 
                        sx={{
                            backgroundColor: 'white', 
                            borderRadius: '50%', 
                            minWidth: { xs: 'auto', sm: 'auto', md: '64px' }, 
                            height: { xs: '45px', sm: '50px', md: '60px' }, 
                            width: { xs: '45px', sm: '50px', md: '60px' }, 
                            position: 'relative',
                            marginLeft: { xs: 'auto', sm: 'auto', md: '0px' }, 
                            zIndex: 2,
                            '&:hover .btn-icon': { color: 'white' },
                            '&::after': {
                                content: '""',
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '0%',
                                height: '100%',
                                backgroundColor: 'black',
                                transition: 'all 0.5s ease-in-out',
                                borderRadius: '50%',
                                zIndex: 1,
                            },
                            '&:hover::after': { width: '100%' }
                        }}
                    >
                        <ArrowOutwardIcon sx={{ color: 'black', zIndex: 3, fontSize: { xs: '18px', sm: '20px', md: '24px' } }} className='btn-icon' />
                    </Button>
                </Grid>
            )}
        </>
    );
};

export default Blackbox;
