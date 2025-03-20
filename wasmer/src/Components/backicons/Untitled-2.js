// import React from 'react';
// import { Grid, Box, Paper, Typography, useMediaQuery } from '@mui/material';

// import f1 from '../../assets/images/home/f1.png';
// import f3 from '../../assets/images/home/f3.png';
// import f6 from '../../assets/images/home/6.png';
// import f7 from '../../assets/images/home/7.png';
// import f403 from '../../assets/images/home/403.png';
// import f402 from '../../assets/images/home/402.png';
// import f401 from '../../assets/images/home/401.png';
// import f411 from '../../assets/images/home/411.png';
// import f410 from '../../assets/images/home/410.png';
// import f49 from '../../assets/images/home/49.png';
// import f44 from '../../assets/images/home/44.png';
// import f48 from '../../assets/images/home/48.png';
// import f43 from '../../assets/images/home/43.png';
// import f42 from '../../assets/images/home/42.png';
// import f45 from '../../assets/images/home/45.png';
// import f4 from '../../assets/images/home/4.png';
// import f5 from '../../assets/images/home/5.png';
// import f9 from '../../assets/images/home/9.png';
// import f51 from '../../assets/images/home/f51.png';
// import f52 from '../../assets/images/home/f52.png';
// import f53 from '../../assets/images/home/f53.png';
// import Codebox from '../codebox/Codebox';

// const leftColumnItems = [
//     [{ name: 'J!' }, { icon: f3, name: 'Python' }, { icon: f1, name: 'Tantivy' }, { icon: f403, name: 'Tantivy' }],
//     [{ name: 'ay' }, { icon: f411, name: 'Java' }, { icon: f3, name: 'Python' }, { icon: f44, name: 'Tantivy' }],
//     [{ icon: f6, name: 'PHP' }, { icon: f7, name: 'QuickJs' }, { icon: f42, name: 'Cosway' }]
// ];

// const rightColumnItems = [
//     [f402, f401, f411, f410, f49, f48],
//     [f43, f42, f45, f4, f5],
//     [f9, f51, f53, f52, f42]
// ];

// const Backicons = () => {
//     const isMobile = useMediaQuery('(max-width: 600px)');
//     const isTablet = useMediaQuery('(max-width: 960px)');

//     const renderLeftColumn = (rowIndex) => (
//         <Grid
//             item
//             xs={12}
//             md={5}
//             container
//             spacing={2}
//             justifyContent="space-around"
//             sx={{
//                 display: isTablet ? 'none' : 'flex' 
//             }}
//         >
//             {leftColumnItems[rowIndex].map((item, index) => (
//                 <Grid item key={index} sx={{marginLeft : (index === 0 && (rowIndex === 0 || rowIndex === 1) ? { marginLeft: "-84px" } : {})}}>
//                     <Paper
//                         elevation={2}
//                         sx={{
//                             display: 'flex',
//                             alignItems: 'center',
//                             justifyContent: 'space-around',
//                             width: {md:'100px',lg:'120px'
//                             },
//                             height: '64px',
//                             borderRadius: '12px',
//                             backgroundColor: '#F8F9FA',
//                             padding: '8px',
                            
//                         }}
//                     >
//                         <Box
//                             component="img"
//                             src={item.icon}
//                             alt={item.name}
//                             sx={{
//                                 width: '40px',
//                                 height: '40px',
//                                 marginRight: '8px',
//                             }}
//                         />
//                         <Typography variant="body2" sx={{ fontWeight: 600, color: '#333', fontSize: '14px' }}>
//                             {item.name}
//                         </Typography>
//                     </Paper>
//                 </Grid>
//             ))}
//         </Grid>
//     );

//     const renderRightColumn = (rowIndex) => (
//         <Grid
//             item
//             xs={12}
//             md={4.3}
//             container
//             spacing={2}
//             justifyContent="space-around"
//             sx={{
//                 display: isTablet ? 'none' : 'flex',
//                 marginRight:rowIndex===0 ? '-50px' : '0'
//             }}
           
//         >
//             {rightColumnItems[rowIndex].map((icon, index) => (
//                 <Grid item key={index}>
//                     <Paper
//                         elevation={2}
//                         sx={{
//                             display: 'flex',
//                             alignItems: 'center',
//                             justifyContent: 'center',
//                             width: '54px',
//                             height: '54px',
//                             borderRadius: '12px',
//                             backgroundColor: '#F8F9FA',
//                             padding: '8px',
//                         }}
//                     >
//                         <Box component="img" src={icon} alt="Icon" sx={{ width: '32px', height: '32px' }} />
//                     </Paper>
//                 </Grid>
//             ))}
//         </Grid>
//     );

//     const renderRow = (rowIndex) => (
//         <Grid
//             container
//             item
//             xs={12}
//             spacing={2}
//             justifyContent="space-between"
//             sx={{
//                 marginBottom: '24px',
//                 display: isTablet ? 'none' : 'flex' 
//             }}
//         >
//             {renderLeftColumn(rowIndex)}
//             {renderRightColumn(rowIndex)}
//         </Grid>
//     );

//     return (
//         <Grid container spacing={4} justifyContent="center" sx={{ paddingTop: '64px',zIndex:'9' ,overflow:'hidden'}}>
//             {renderRow(0)}
//             {renderRow(1)}
//             {renderRow(2)}

//             <Grid
//                 item
//                 xs={12}
//                 sx={{
//                     display: 'block',
//                     justifyContent: 'center',
//                     marginTop: '20px',
//                 }}
//             >
//                 <Codebox />
//             </Grid>
//         </Grid>
//     );
// };
{/* <Box sx={{display: 'flex', gap: '32px', alignItems: 'center'}}>
icon1
icon2
icon3 
etc....

pachi aena par j codebox che a posititon thi set kari devani ane a codeboc ni niche game te maja aave e icon muki devana km k a to show thase ny uper codebox aavshe et   
</Box> */}
// export default Backicons;
