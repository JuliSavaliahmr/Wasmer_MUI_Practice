import React, { useState } from "react";

import { AppBar, Toolbar, Typography, IconButton, Button, TextField, InputAdornment, Box, Stack, Container, Popper, Paper, Avatar } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import GitHubIcon from "@mui/icons-material/GitHub";
import DiscordIcon from "@mui/icons-material/SportsEsports";
import StorageIcon from "@mui/icons-material/Storage";
import CloudQueueIcon from "@mui/icons-material/CloudQueue";
import LayersIcon from "@mui/icons-material/Layers";
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import {motion} from 'framer-motion';

import Logo from '../../assets/images/Logo.png';

const Header = () => {
  const productItems = [
    { icon: <StorageIcon />, title: "Runtime", desc: "Run any code anywhere" },
    { icon: <CloudQueueIcon />, title: "Registry", desc: "Create, publish, collaborate" },
    { icon: <LayersIcon />, title: "Stack", desc: "Deploy to the clouds" },
  ];

  const [anchorEl, setAnchorEl] = useState(null);

  const handleHover = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" color="transparent" elevation={0} sx={{ px: 2 }}>
      <Container sx={{ borderBottom: "0px" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" , height:'76px' }}>
          {/* Logo */}
          <Box component="img" src={Logo} alt="Logo" sx={{ height: 36 }} />

          {/* Search Bar */}
          <TextField
            placeholder="Search packages, users or apps"
            size="small"
            sx={{ width: 287, backgroundColor: "#0F05180D", borderRadius: 2 , outline:'none',  "& fieldset": { border: "none" },display:{xs:'none',sm:'none',md:'flex'
            }}}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />

          {/* Navigation Links */}
          <Stack direction="row" spacing={5} sx={{ justifyContent: "center" ,display:{xs:'none' , sm:'none' , md:'none' ,lg:'flex'
          } }}>
            {/* Products Menu */}
            <Box onMouseEnter={handleHover} onMouseLeave={handleClose}>
              <Typography variant="body1" sx={{ cursor: "pointer", color: "gray", "&:hover": { color: "black" } }}>
                Products
              </Typography>

              {/* Popper Dropdown Products */}
              {anchorEl && (
                <Popper open={Boolean(anchorEl)} anchorEl={anchorEl} placement="bottom-start" sx={{position:'absolute',zIndex:'2'
                }} disablePortal>
                  <motion.div
                    initial={{ opacity: 0, y: -10 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    exit={{ opacity: 0, y: -10 }} 
                    transition={{ duration: 0.2 }}
                  >
                    <Paper sx={{ p: 2, borderRadius: 2, boxShadow: 3, width: 220 }}>
                      {productItems.map((item, index) => (
                        <Box key={index} sx={{ display: "flex", alignItems: "center", gap: 2, mb: 1 }}>
                          <Avatar sx={{ bgcolor: "#000" }}>{item.icon}</Avatar>
                          <Box>
                            <Typography fontWeight="bold">{item.title}</Typography>
                            <Typography variant="caption" color="gray">{item.desc}</Typography>
                          </Box>
                        </Box>
                      ))}
                    </Paper>
                  </motion.div>
                </Popper>
              )}
            </Box>

            <Typography variant="body1" sx={{ cursor: "pointer", color: "gray", "&:hover": { color: "black" } }}>
              Developers
            </Typography>
            <Typography variant="body1" sx={{ cursor: "pointer", color: "gray", "&:hover": { color: "black" } }}>
              Explore
            </Typography>
            <Typography variant="body1" sx={{ cursor: "pointer", color: "gray", "&:hover": { color: "black" } }}>
              Blog
            </Typography>
          </Stack>
       

          {/* Icons & Sign-in Button */}
          <Stack direction="row" spacing={1} alignItems="center">
            <IconButton color="inherit" sx={{ border: "1px solid gray", borderRadius: "56px", px: 1 }}>
              <GitHubIcon sx={{ fontSize: "20px", pr: "5px" }} />
              <Typography variant="caption">16k+</Typography>
            </IconButton>
            <IconButton color="inherit" sx={{ border: "1px solid gray", borderRadius: "56px" }}>
              <DiscordIcon sx={{ fontSize: "20px" }} />
            </IconButton>
            <Button variant="outlined" color="dark" sx={{ textTransform: "none", borderRadius: "56px", border: "1px solid gray",transition:'all 0.5s' ,'&:hover':{
              backgroundColor: '#8080802b',
            }}}>
              Sign in
            </Button>
            <Box sx={{display:{xs:'block',sm:'block',md:'block',lg:'none'}}}> 
            <MenuOpenIcon sx={{fontSize:'27px'}}></MenuOpenIcon>
          </Box>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
