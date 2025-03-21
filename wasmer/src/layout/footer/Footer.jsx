import React from 'react';
import { Box, Container, Typography, useTheme, useMediaQuery } from '@mui/material';

import Logo from '../../assets/images/Logo.png';
import ficons from '../../assets/images/ficons.png';

const Footer = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm')); 

    return (
        <>
            <Container 
                sx={{
                    display: "flex",
                    flexDirection: isMobile ? "column" : "row",
                    justifyContent: isMobile ? "start" : "space-between",
                    alignItems: isMobile ? "center" : "flex-start",
                    textAlign: isMobile ? "center" : "left",
                    py: { xs: '40px', sm: '60px', md: '100px' },
                    width: "80%",
                    color: "#444",
                }}
            >
                <Box sx={{ mb: isMobile ? 4 : 0 }}>
                    <Box 
                        component='img' 
                        src={Logo} 
                        sx={{ width: { xs: '120px', sm: '140px', md: 'auto' } }} 
                    />
                    <Typography 
                        variant="subtitle1" 
                        sx={{ py: '10px', fontSize: { xs: '0.9rem', sm: '1rem' } }}
                    >
                        Making software <br /> universally accessible
                    </Typography>
                    <Box 
                        component='img' 
                        src={ficons} 
                        sx={{ width: { xs: '100px', sm: '120px', md: 'auto' } }} 
                    />
                </Box>

                {/* Right Sections - Links */}
                <Box sx={{ display: "flex", flexDirection: isMobile ? "column" : "row", gap: isMobile ? 3 : 8 }}>
                    {/* Explore */}
                    <Box>
                        <Typography variant="h6" fontWeight="bold" sx={{ color: 'black' }}>Explore</Typography>
                        <Typography variant="body2" sx={{ py: '5px', fontSize: { xs: '0.9rem', sm: '1rem' } }}>Packages</Typography>
                        <Typography variant="body2" sx={{ fontSize: { xs: '0.9rem', sm: '1rem' } }}>Blog</Typography>
                    </Box>

                    {/* Products */}
                    <Box>
                        <Typography variant="h6" fontWeight="bold" sx={{ color: 'black' }}>Products</Typography>
                        <Typography variant="body2" sx={{ py: '5px', fontSize: { xs: '0.9rem', sm: '1rem' } }}>Run</Typography>
                        <Typography variant="body2" sx={{ py: '5px', fontSize: { xs: '0.9rem', sm: '1rem' } }}>Publish</Typography>
                        <Typography variant="body2" sx={{ fontSize: { xs: '0.9rem', sm: '1rem' } }}>Deploy</Typography>
                    </Box>

                    {/* Developers */}
                    <Box>
                        <Typography variant="h6" fontWeight="bold" sx={{ color: 'black' }}>Developers</Typography>
                        <Typography variant="body2" sx={{ py: '5px', fontSize: { xs: '0.9rem', sm: '1rem' } }}>Documentation</Typography>
                        <Typography variant="body2" sx={{ py: '5px', fontSize: { xs: '0.9rem', sm: '1rem' } }}>Runtime</Typography>
                        <Typography variant="body2" sx={{ fontSize: { xs: '0.9rem', sm: '1rem' } }}>Registry</Typography>
                    </Box>
                </Box>
            </Container>

            <Box sx={{
                borderTop: '1px solid gray',
                py: '20px',
                textAlign: "center",
            }}>
                <Container sx={{ 
                    display: "flex", 
                    flexDirection: isMobile ? "column" : "row",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: isMobile ? 1 : 2 
                }}>
                    <Typography variant="body2" sx={{ color: 'gray', fontSize: { xs: '0.8rem', sm: '1rem' } }}>Imprints</Typography>
                    <Typography variant="body2" sx={{ color: 'gray', fontSize: { xs: '0.8rem', sm: '1rem' } }}>Privacy</Typography>
                    <Typography variant="body2" sx={{ color: 'gray', fontSize: { xs: '0.8rem', sm: '1rem' } }}>Terms</Typography>
                </Container>
            </Box>
        </>
    );
};

export default Footer;
