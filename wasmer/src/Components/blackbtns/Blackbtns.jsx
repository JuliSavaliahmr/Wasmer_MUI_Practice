import React from 'react';
import { Box } from '@mui/material';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { createTheme, ThemeProvider } from "@mui/material/styles";

const Blackbtns = ({ img, name, img1, name1 }) => {
    const theme = createTheme({
        typography: {
            fontFamily: "'Gilroy', sans-serif", 
        },
    });

    return (
        <ThemeProvider theme={theme}>
            {img && name && (
                <Box
                    component="button"
                    sx={{
                        display: "inline-flex",
                        alignItems: "center",
                        backgroundColor: "black",
                        color: "white",
                        mx: '22px',
                        justifyContent: 'center',
                        border: '0',
                        height:  {xs:'46px',md:'54px'},
                        padding:'10px 20px',
                        borderRadius: "56px",
                        fontSize: { xs: "22px", sm: "22px", md: "24px" }, 
                        fontWeight: "bold",
                        cursor: "pointer",
                        fontFamily: "'Azeret Mono', monospace", 
                        my: { xs: '12px!important', md: '0' }
                    }}
                >
                    <Box component="img" src={img} sx={{ height: "32px", mr: 1 }} /> 
                    {name}
                    <ArrowOutwardIcon sx={{ fontSize: "20px", ml: 1 }} />
                </Box>
            )}

            {img1 && name1 && (
                <Box
                    component="span"
                    sx={{
                        display: "inline-flex",
                        alignItems: "center",
                        backgroundColor: "black",
                        color: "white",
                        textAlign: 'center',
                        borderRadius: "56px",
                        justifyContent: 'center',
                        width: '206px',
                        height: '54px',
                        mx: 'auto',
                        fontSize: { xs: "22px", sm: "22px", md: "24px" }, 
                        fontWeight: "bold",
                        fontFamily: "'Azeret Mono', monospace", 
                        position: 'relative',
                        "&::after": {
                            content: '""',
                            position: 'absolute',
                            bottom: '61px',
                            left: '50%',
                            transform: "rotate(180deg)",
                            height: '112px',
                            width: '2px',
                            background: "linear-gradient(180deg, rgba(15, 5, 24, 0.2) 0%, rgba(15, 5, 24, 0) 100%)",
                        }
                    }}
                >
                    <Box component="img" src={img1} sx={{ height: "32px", mr: 1 }} /> 
                    {name1}
                </Box>
            )}
        </ThemeProvider>
    );
};

export default Blackbtns;
