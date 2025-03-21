// import React from 'react'

// import { Stack, Box, Container, Typography, Button, Grid } from '@mui/material'

// import Blackbox from '../../Components/blackbox/Blackbox';
// import Blackbtns from '../../Components/blackbtns/Blackbtns';

// import runimg from '../../assets/images/vectors/Group2.png'
// import c11 from '../../assets/images/c11.png'
// import c2 from '../../assets/images/c2.png'
// import c3 from '../../assets/images/c 3.png'
// import c4 from '../../assets/images/c4.png'
// import c5 from '../../assets/images/c5.png'
// import c6 from '../../assets/images/c6.png'
// import vercel from '../../assets/images/Group 186.png'
// import v1 from '../../assets/images/vectors/V1.png'


// const RunTheWorld = () => {
//     return (
//         <>
//             <Stack sx={{ padding: { xs: '120px 0', md: '152px 0', lg: '152px 0' } }} >
//                 <Blackbtns img1={runimg} name1='RunTime' ></Blackbtns>
//                 <Container>
//                     <Typography variant="h3" textAlign='center' sx={{ padding: { xs: '20px 0 16px 0', md: '24px 0 16px 0' }, fontWeight: '600', lineHeight:'140%',fontSize: { xs: '36px', sm: '2.2rem', md: '48px' } }} color="initial">Run the world </Typography>
//                     <Typography variant="h6" sx={{ textAlign: 'center', width: { xs: '90%', sm: '80%', md: '70%', lg: '60%' }, mx: 'auto', fontSize: { xs: '0.9rem', sm: '1rem', md: '22px' }, fontWeight: '500', }} className='secondary-color'>Using a binary for each platform and chip is the past. Rise above with lightweight containerized apps that simply run everywhere.</Typography>
                    
//                     <Box sx={{ display: "flex", flexWrap: 'wrap', gap: { xs: 1, sm: 1.5, md: 2 }, justifyContent:'center', padding:{ xs: '56px 0 12px 0', md: '55px 0 16px 0' }, zIndex:3, position:'relative',alignItems:'center'}}>
//                         <Box component="img" src={c5} sx={{ width: { xs: 32, sm: 36, md: 42 }, height: { xs: 32, sm: 36, md: 32 } }} />
//                         <Box component="img" src={c2} sx={{ width: { xs: 32, sm: 36, md: 42 }, height: { xs: 32, sm: 36, md: 42 } }} />
//                         <Box component="img" src={c3} sx={{ width: { xs: 32, sm: 36, md: 42 }, height: { xs: 32, sm: 36, md: 42 } }} />
//                         <Box component="img" src={c6} sx={{ width: { xs: 32, sm: 36, md: 42 }, height: { xs: 32, sm: 36, md: 42 } }} />
//                         <Box component="img" src={c11} sx={{ width: { xs: 32, sm: 36, md: 42 }, height: { xs: 32, sm: 36, md: 42 } }} />
//                         <Box component="img" src={c4} sx={{ width: { xs: 32, sm: 36, md: 42 }, height: { xs: 32, sm: 36, md: 42 } }} />
//                     </Box>
//                     <Typography variant="subtitle1" sx={{textAlign:'center', color:'white', paddingBottom:{ xs: '20px', md: '16px' }, fontSize:{ xs: '16px', sm: '18px', md: '22px' }, zIndex:3, position:'relative'}} color="initial">Supports almost every programming language</Typography>
//                     <Blackbox title="Truly universal, runs everywhere & fast as native." subtitle='See more info about Runtime' img={v1} shadows={'14px -68px 106px 53px #89ad89'}></Blackbox>
//                     <Typography variant="h6" className='secondary-color' sx={{textAlign:'center', padding:{ xs: '40px 0 0 0', md: '64px 0 0 0' }, width:{ xs: '80%', sm: '60%', md: '50%', lg: '45%' }, fontWeight:'500', lineHeight:'140%', mx:'auto', fontSize: { xs: '0.9rem', sm: '1rem', md: '22px' }}}>"This programming tool makes it easier for apps to work anywhere"</Typography>
//                     <Box component='img' src={vercel} sx={{mx:'auto', display:'block', padding:{ xs: '30px 0', md: '24px 0' }, width: { xs: '20%', sm: '30%', md: 'auto' }}}></Box>
//                 </Container>
//             </Stack>
//         </>
//     )
// }

// export default RunTheWorld
import React from 'react';
import { Stack, Box, Container, Typography } from '@mui/material';

import Blackbox from '../../Components/blackbox/Blackbox';
import Blackbtns from '../../Components/blackbtns/Blackbtns';

import runimg from '../../assets/images/vectors/Group2.png';
import c11 from '../../assets/images/c11.png';
import c2 from '../../assets/images/c2.png';
import c3 from '../../assets/images/c 3.png';
import c4 from '../../assets/images/c4.png';
import c5 from '../../assets/images/c5.png';
import c6 from '../../assets/images/c6.png';
import vercel from '../../assets/images/Group 186.png';
import v1 from '../../assets/images/vectors/V1.png';

const RunTheWorld = () => {
    return (
        <Stack sx={{ padding: { xs: '120px 0', md: '152px 0' } }}>
            <Blackbtns img1={runimg} name1="RunTime" />

            <Container>
                <Typography 
                    variant="h3" 
                    textAlign="center" 
                    sx={{ 
                        padding: { xs: '20px 0 16px 0', md: '24px 0 16px 0' }, 
                        fontWeight: '600', 
                        lineHeight: '140%', 
                        fontSize: { xs: '36px', sm: '2.2rem', md: '48px' } 
                    }} 
                >
                    Run the world
                </Typography>

                <Typography 
                    variant="h6" 
                    sx={{ 
                        textAlign: 'center', 
                        width: { xs: '90%', sm: '80%', md: '70%', lg: '60%' }, 
                        mx: 'auto', 
                        fontSize: { xs: '0.9rem', sm: '1rem', md: '22px' }, 
                        fontWeight: '500' 
                    }} 
                    className="secondary-color"
                >
                    Using a binary for each platform and chip is the past. 
                    Rise above with lightweight containerized apps that simply run everywhere.
                </Typography>

                {/* Icons Responsive Layout */}
                <Box 
                    sx={{ 
                        display: "flex", 
                        flexWrap: "wrap", 
                        gap: { xs: 2, sm: 2, md: 2 }, 
                        justifyContent: "center", 
                        padding: { xs: '56px 0 12px 0', md: '55px 0 16px 0' }, 
                        zIndex: 3, 
                        position: "relative", 
                        alignItems: "center", 
                        flexDirection: { xs: "column", sm: "column", md: "row" } 
                    }}
                >
                    {/* First two images on top for xs & sm */}
                    <Box 
                        sx={{ 
                            display: "flex", 
                            justifyContent: "center", 
                            gap: { xs: 2, sm: 3 }, 
                            flexWrap: "wrap" 
                        }}
                    >
                        <Box component="img" src={c5} sx={{ width: { xs: 40, sm: 44, md: 42 }, height: { xs: 40, sm: 44, md: 42 } }} />
                        <Box component="img" src={c2} sx={{ width: { xs: 40, sm: 44, md: 42 }, height: { xs: 40, sm: 44, md: 42 } }} />
                    </Box>

                    {/* Remaining images below for xs & sm */}
                    <Box 
                        sx={{ 
                            display: "flex", 
                            justifyContent: "center", 
                            gap: { xs: 2, sm: 3 }, 
                            flexWrap: "wrap", 
                            mt: { xs: 1, sm: 2, md: 0 } 
                        }}
                    >
                        <Box component="img" src={c3} sx={{ width: { xs: 40, sm: 44, md: 42 }, height: { xs: 40, sm: 44, md: 42 } }} />
                        <Box component="img" src={c6} sx={{ width: { xs: 40, sm: 44, md: 42 }, height: { xs: 40, sm: 44, md: 42 } }} />
                        <Box component="img" src={c11} sx={{ width: { xs: 40, sm: 44, md: 42 }, height: { xs: 40, sm: 44, md: 42 } }} />
                        <Box component="img" src={c4} sx={{ width: { xs: 40, sm: 44, md: 42 }, height: { xs: 40, sm: 44, md: 42 } }} />
                    </Box>
                </Box>

                <Typography 
                    variant="subtitle1" 
                    sx={{ 
                        textAlign: 'center', 
                        color: 'white', 
                        paddingBottom: { xs: '20px', md: '16px' }, 
                        fontSize: { xs: '16px', sm: '18px', md: '22px' }, 
                        zIndex: 3, 
                        position: 'relative' 
                    }}
                >
                    Supports almost every programming language
                </Typography>

                <Blackbox 
                    title="Truly universal, runs everywhere & fast as native." 
                    subtitle="See more info about Runtime" 
                    img={v1} 
                    shadows="14px -68px 106px 53px #89ad89"
                />

                <Typography 
                    variant="h6" 
                    className="secondary-color" 
                    sx={{ 
                        textAlign: "center", 
                        padding: { xs: "40px 0 0 0", md: "64px 0 0 0" }, 
                        width: { xs: "100%", sm: "60%", md: "50%", lg: "45%" }, 
                        fontWeight: "500", 
                        lineHeight: "140%", 
                        mx: "auto", 
                        fontSize: { xs: "17px", sm: "1rem", md: "22px" } 
                    }}
                >
                    "This programming tool makes it easier for apps to work anywhere"
                </Typography>

                <Box 
                    component="img" 
                    src={vercel} 
                    sx={{ 
                        mx: "auto", 
                        display: "block", 
                        padding: { xs: "30px 0", md: "24px 0" }, 
                        width: { xs: "35%", sm: "15%", md: "auto" } 
                    }} 
                />
            </Container>
        </Stack>
    );
}

export default RunTheWorld;
