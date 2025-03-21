import { Box, Typography, Button } from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import React from 'react'

const Codebox = () => {
    return (
        <>
            <Box
                sx={{
                    height: { xs: '280px', sm: '300px', md: '336px' },  
                    width: { xs: '90%', sm: '62%', md: '56%',lg:'32%' },  
                    backgroundColor: 'black',
                    my: { xs: '37px', sm: '56px', md: '0' },  
                    borderRadius: '12px',
                    boxShadow: "-10px -10px 30px rgb(240 233 144 / 60%), 10px -10px 30px rgb(162 255 151 / 40%), -10px 10px 30px rgb(255 44 91 / 50%), 10px 10px 30px rgba(100, 200, 255, 0.6)",
                    position: { xs: 'relative', md: 'absolute' },  
                    zIndex: '999',
                    left: { md: '24%', lg: "34%", xl: '34%' ,xxl:'34%'},  
                    display: 'block',
                    top: { md: '33%' },  
                    mx: 'auto'  
                }}
            >
                <Box
                    sx={{
                        background: 'linear-gradient(180deg, #0F0518 48%, #666 157%)',
                        borderRadius: '12px',
                        width: '100%',  
                        height: '75px',
                        padding: '16px',
                        textAlign:'justify'
                    }}
                >
                    <Typography variant="body1" sx={{ fontSize: { xs: '11px', md: '17px' }, color: '#9e9ea5' }}>Install</Typography>
                    <Typography variant="body1" sx={{ fontSize: { xs: '11px', md: '17px' }, color: '#FBFBFC' }}>
                        $ curl https://get.wasmer.io -sSfL | sh
                    </Typography>
                </Box>

                {/* Middle Section */}
                <Box sx={{ padding: '16px', height: { xs: '160px', md: '198px' }, width: '100%', borderRadius: '12px', background: 'linear-gradient(180deg, #0F0518 54%, #666 135%)', mt: '7px' ,textAlign:'justify'}}>
                    <Typography variant="body1" sx={{ fontSize: { xs: '11px', md: '17px' }, color: '#9e9ea5' }}>Run</Typography>
                    <Typography variant="body1" sx={{ fontSize: { xs: '11px', md: '17px' }, color: '#FBFBFC' }}>
                        $ wasmer run python/python -- -c ' <font color="green">for x in <br></br>range(5)print(f'x{ } square:{ }')</font>
                    </Typography>

                    {/* Run Button */}
                    <Button
                        variant="text"
                        sx={{
                            color: 'white',
                            border: '1px solid gray',
                            width: { xs: '120px', sm: '136px' },
                            height: { xs: '47px', sm: '36px' },
                            borderRadius: '18px',
                            mt: { xs: '32px', md: '60px' }
                        }}
                    >
                        Run Online
                    </Button>
                </Box>

                {/* Footer */}
                <Box sx={{ paddingLeft: '16px', paddingTop: {xs:'10px',sm:'16px',} ,textAlign:'justify'}}>
                    <Typography variant="body1" sx={{ fontSize: { xs: '11px', md: '17px' }, color: '#9e9ea5' }}>
                        Running Python <KeyboardArrowDownIcon sx={{ fontSize: { xs: '13px', md: '17px' }}}/> in CLI <KeyboardArrowDownIcon sx={{ fontSize: { xs: '13px', md: '17px' }}}/>
                    </Typography>
                </Box>
            </Box>
        </>
    )
}

export default Codebox;
