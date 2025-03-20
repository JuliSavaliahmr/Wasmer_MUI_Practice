import { Box, Typography, Button } from '@mui/material'
import React from 'react'

const Codebox = () => {
    return (
        <>
            <Box
                sx={{
                    height: '336px',
                    width: '504px',
                    backgroundColor: 'black',
                    borderRadius: '12px',
                    boxShadow: "-10px -10px 30px rgb(240 233 144 / 60%), 10px -10px 30px rgb(162 255 151 / 40%), -10px 10px 30px rgb(255 44 91 / 50%), 10px 10px 30px rgba(100, 200, 255, 0.6)",
                    position: {sm:'none',xs:'none',md:'absolute'},
                    zIndex: '999',
                    left: '36%',
                    display:{xs:'block',md:'block'},
                    top: '27%',
                    mx:{xs:'auto',md:'auto' , lg:'0'}

                }}
            >
                <Box
                    sx={{
                        background: 'linear-gradient(180deg, #0F0518 48%, #666 135%)', borderRadius: '12px',
                        width: '504px',
                        height: '75px',
                        padding: '16px'
                    }}
                >
                    <Typography variant="body1" color="initial" sx={{ fontSize: '16px', color: '#9e9ea5' }}>Install</Typography>
                    <Typography variant="body1" color="initial" sx={{ fontSize: '16px', color: '#FBFBFC' }}>$ curl https://get.wasmer.io -sSfL | sh</Typography>
                </Box>
                <Box sx={{ padding: '16px', height: '198px', width: '504px', borderRadius: '12px', background: 'linear-gradient(180deg, #0F0518 54%, #666 135%)', mt: '7px' }}>
                    <Typography variant="body1" color="initial" sx={{ fontSize: '16px', color: '#9e9ea5' }}>Run</Typography>
                    <Typography variant="body1" color="initial" sx={{ fontSize: '16px', color: '#FBFBFC' }}>
                        $ wasmer run python/python -- -c ' <font color="green">for x in <br></br>range(5)print(f'x{ } square:{ }')</font>
                    </Typography>
                    <Button variant="text" sx={{color:'white' , border:'1px solid gray',width:'136px',height:'36px',borderRadius:'18px',mt:'60px'}}>
                        Run Online
                    </Button>
                </Box>
                <Box sx={{paddingLeft:'16px',paddingTop:'16px'}}>
                <Typography variant="body1" color="initial" sx={{ fontSize: '16px', color: '#9e9ea5' }}>Running Python <sup>v</sup> in CLI </Typography>

                </Box>
            </Box>
        </>
    )
}

export default Codebox
