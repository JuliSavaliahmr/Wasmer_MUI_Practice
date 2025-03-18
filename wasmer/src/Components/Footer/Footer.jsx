import React from 'react';
import { Box, Container, Typography } from '@mui/material';

const Footer = () => {
    return (
        <>
            <Container sx={{ display: "flex", justifyContent: "space-between", py:'100px', width: "80%", color: "#444", }}>
            <Box>
                <Box component='img' src='/public/Logo.png'></Box>
                <Typography variant="subtitle1" sx={{ display: 'block', py: '10px' }}>Making software <br />universally accessible</Typography>
            </Box>
            <Box>
                <Typography variant="h6" fontWeight="bold" sx={{ color: 'black' }}>Explore</Typography>
                <Typography variant="body2" sx={{ py: '10px' }}>Packages</Typography>
                <Typography variant="body2">Blog</Typography>
            </Box>
            <Box>
                <Typography variant="h6" fontWeight="bold" sx={{ color: 'black' }}>Products</Typography>
                <Typography variant="body2" >Run</Typography>
                <Typography variant="body2" sx={{ py: '10px' }}>Publish</Typography>
                <Typography variant="body2">Deploy</Typography>
            </Box>
            <Box>
                <Typography variant="h6" fontWeight="bold" sx={{ color: 'black' }}>Developers</Typography>
                <Typography variant="body2">Documentation</Typography>
                <Typography variant="body2" sx={{ py: '10px' }}>Runtime</Typography>
                <Typography variant="body2">Registry</Typography>
            </Box>
        </Container>
        <Box sx={{borderTop:'1px solid gray',py:'30px'}}>
            <Container sx={{display:'flex'
            }}>
            <Typography variant="body2" sx={{color:'gray' , px:'10px'}}>Imprints</Typography>
            <Typography variant="body2" sx={{color:'gray' , px:'10px'}}>Privacy</Typography>
            <Typography variant="body2" sx={{color:'gray' , px:'10px'}}>Terms</Typography>
            </Container>
        </Box>
        </>
    );
};

export default Footer;
