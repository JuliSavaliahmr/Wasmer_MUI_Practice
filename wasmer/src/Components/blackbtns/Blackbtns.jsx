import React from 'react';
import { Box } from '@mui/material';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

const Blackbtns = ({ img, name, img1, name1 }) => {
    return (
        <>
            {
                img && name && (
                    <Box
                        component="button"
                        sx={{
                            display: "inline-flex",
                            alignItems: "center",
                            backgroundColor: "black",
                            color: "white",
                            padding: "5px 24px",
                            width: '171px',
                            justifyContent: 'center',
                            border: '0',
                            height: '54px',
                            borderRadius: "56px",
                            mx: 1,
                            fontSize: "24px",
                            fontWeight: "bold",
                            cursor: "pointer",
                        }}
                    >
                        <Box component="img" src={img} sx={{ height: "32px", mr: 1 }} />
                        {name}
                        <ArrowOutwardIcon sx={{ fontSize: "20px", ml: 1 }} />
                    </Box>
                )
            }

            {
                img1 && name1 && (
                    <Box
                        component="span" md={4} position='relative'
                        sx={{
                            display: "inline-flex",
                            alignItems: "center",
                            backgroundColor: "black",
                            color: "white",
                            padding: "15px 12px",
                            textAlign: 'center',
                            borderRadius: "56px",
                            justifyContent: 'center',
                            width: '206px',
                            height:'54px',
                            mx: 'auto',
                            fontSize: "18px",
                            fontWeight: "bold",
                            "&::after": {
                                content: '""',
                                position: 'absolute',
                                bottom: '54px',
                                left: '50%',
                                transform: "rotate(180deg)",
                                height: '112px',
                                width: '2px',
                                background: "linear-gradient(180deg, rgba(15, 5, 24, 0.2) 0%, rgba(15, 5, 24, 0) 100%)",
                            }
                        }}
                    >
                        <Box component="img" src={img1} sx={{ height: "18px", mr: 1 }} />
                        {name1}
                    </Box>
                )
            }
        </>
    );
};

export default Blackbtns;
