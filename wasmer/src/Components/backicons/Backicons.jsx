import React from 'react';
import { Grid, Box, Paper, Typography, useTheme, useMediaQuery } from '@mui/material';

import f1 from '../../assets/images/home/f1.png';
import f3 from '../../assets/images/home/f3.png';
import f6 from '../../assets/images/home/6.png';
import f7 from '../../assets/images/home/7.png';
import f403 from '../../assets/images/home/403.png';
import f402 from '../../assets/images/home/402.png';
import f401 from '../../assets/images/home/401.png';
import f411 from '../../assets/images/home/411.png';
import f410 from '../../assets/images/home/410.png';
import f49 from '../../assets/images/home/49.png';
import f44 from '../../assets/images/home/44.png';
import f48 from '../../assets/images/home/48.png';
import f43 from '../../assets/images/home/43.png';
import f42 from '../../assets/images/home/42.png';
import f45 from '../../assets/images/home/45.png';
import f4 from '../../assets/images/home/4.png';
import f5 from '../../assets/images/home/5.png';
import f9 from '../../assets/images/home/9.png';
import f51 from '../../assets/images/home/f51.png';
import f52 from '../../assets/images/home/f52.png';
import f53 from '../../assets/images/home/f53.png';
import Codebox from '../codebox/Codebox';
import { lightGreen } from '@mui/material/colors';
import { Visibility } from '@mui/icons-material';

const rows = [
    {
        items: [
            { type: 'named', name: 'Tantivy', icon: f403 ,display:{lg:'none',xl:'flex'}},
            { type: 'named', name: 'J!', marginLeft: {md:'-93px',lg:'-93px',xl:'0'} },
            { type: 'named', name: 'Python', icon: f3 },
            { type: 'named', name: 'Tantivy', icon: f1 },
            { type: 'named', name: 'Tantivy', icon: f403 },
            { type: 'icon', icon: f402 },
            { type: 'icon', icon: f402 },
            { type: 'icon', icon: f402 },
            { type: 'icon', icon: f402 },
            { type: 'icon', icon: f401 },
            { type: 'icon', icon: f411 },
            { type: 'icon', icon: f410 },
            { type: 'icon', icon: f49 },
            { type: 'icon', icon: f48, marginRight: '-50px' }
        ]
    },
    {
        items: [
            { type: 'named', name: 'Tantivy', icon: f42 ,display:{lg:'none',xl:'flex'}},
            { type: 'named', name: 'ay',  marginLeft: {md:'-193px',lg:'-193px',xl:'0'}  },
            { type: 'named', name: 'Java', icon: f411 },
            { type: 'named', name: 'Python', icon: f3 },
            { type: 'named', name: 'Tantivy', icon: f44 },
            { type: 'icon', icon: f43 },
            { type: 'icon', icon: f43 },
            { type: 'icon', icon: f401 },
            { type: 'icon', icon: f7 },
            { type: 'icon', icon: f43 },
            { type: 'icon', icon: f42 },
            { type: 'icon', icon: f45 },
            { type: 'icon', icon: f4 },
            { type: 'icon', icon: f5, marginRight: '-7%' }
        ]
    },
    {
        items: [
            { type: 'named', name: 'Python', icon: f3 ,display:{lg:'none',xl:'flex'}},
            { type: 'icon', icon: f51 ,display:{lg:'none',xl:'flex'}},
            { type: 'named', name: 'PHP', icon: f6 },
            { type: 'named', name: 'Quick JS', icon: f7 },
            { type: 'named', name: 'Cosway', icon: f42 },
            { type: 'icon', icon: f9 },
            { type: 'icon', icon: f51 },
            { type: 'icon', icon: f410 },
            { type: 'icon', icon: f410 },
            { type: 'icon', icon: f9 },
            { type: 'icon', icon: f51 },
            { type: 'icon', icon: f53 },
            { type: 'icon', icon: f52 },
            { type: 'icon', icon: f42 }
        ]
    }
];

const getJustifyContent = (item, index, rowIndex) => {
    if (item.type === 'icon') return 'center';
    const isFirstOrLastInFirstTwoRows = rowIndex < 2 && (index === 0 || index === rows[rowIndex].items.length - 1);
    return isFirstOrLastInFirstTwoRows ? 'flex-end' : 'space-around';
};

const Backicons = () => {

    return (
        <>
        <Grid 
            container 
            spacing={4} 
            sx={{ 
                paddingTop: '64px',
                position: 'relative',
                justifyContent: 'start',
                overflowx: 'hidden',
                display:{xs:'none',sm:'none',md:'flex'},
                zIndex:'1'
            }}
        >
            {rows.map((row, rowIndex) => (
                <Grid 
                    container 
                    item 
                    key={rowIndex}
                    sx={{
                        justifyContent: 'center',
                        gap: '32px',
                        flexWrap:"nowrap!important",

                    }}
                >
                    {row.items.map((item, index) => (
                        <Box
                            key={index}
                            sx={{
                                marginLeft: item.marginLeft || 0,
                                marginRight: item.marginRight || 0,
                                display:item.display || 'flex',
                            }}
                        >
                            <Paper
                                elevation={2}
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: getJustifyContent(item, index, rowIndex),
                                    width: item.type === 'named' ? '142px' : '64px',
                                    height: '64px',
                                    borderRadius: '12px',
                                    backgroundColor: '#F8F9FA',
                                    padding: item.type === 'named' ? '8px 16px' : '8px',
                                    gap: '8px',
                                }}
                            >
                                {item.icon && (
                                    <Box
                                        component="img"
                                        src={item.icon}
                                        alt={item.name || 'icon'}
                                        sx={{ 
                                            width: '32px',
                                            height: '32px',
                                            objectFit: 'contain'
                                        }}
                                    />
                                )}
                                {item.type === 'named' && (
                                    <Typography 
                                        variant="body2" 
                                        sx={{ 
                                            fontWeight: 600,
                                            color: '#333',
                                            fontSize: '14px'
                                        }}
                                    >
                                        {item.name}
                                    </Typography>
                                )}
                            </Paper>
                        </Box>
                    ))}
                </Grid>
            ))}
        </Grid>
            <Codebox sx={{ }} />
            </>
    );
};

export default Backicons;