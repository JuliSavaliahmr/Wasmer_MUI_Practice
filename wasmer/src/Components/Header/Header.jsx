import React, { useState } from "react";
import { AppBar, Toolbar, Typography, IconButton, Button, TextField, InputAdornment, Box, Stack, Container, Popper, Paper, Avatar } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import GitHubIcon from "@mui/icons-material/GitHub";
import DiscordIcon from "@mui/icons-material/SportsEsports";
import Logo from '../../../public/Logo.png'
import StorageIcon from "@mui/icons-material/Storage";
import CloudQueueIcon from "@mui/icons-material/CloudQueue";
import LayersIcon from "@mui/icons-material/Layers";
import {motion} from 'framer-motion';
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
        <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          {/* Logo */}
          <Box component="img" src={Logo} alt="Logo" sx={{ height: 32 }} />

          {/* Search Bar */}
          <TextField
            variant="outlined"
            placeholder="Search packages, users or apps"
            size="small"
            sx={{ width: 250, backgroundColor: "#f5f5f5", borderRadius: 2 }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />

          {/* Navigation Links */}
          <Stack direction="row" spacing={5} sx={{ justifyContent: "center" }}>
            {/* Products Menu */}
            <Box onMouseEnter={handleHover} onMouseLeave={handleClose}>
              <Typography variant="body2" sx={{ cursor: "pointer", color: "gray", "&:hover": { color: "black" } }}>
                Products
              </Typography>

              {/* Popper Dropdown Products */}
              {anchorEl && (
                <Popper open={Boolean(anchorEl)} anchorEl={anchorEl} placement="bottom-start" disablePortal>
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

            <Typography variant="body2" sx={{ cursor: "pointer", color: "gray", "&:hover": { color: "black" } }}>
              Developers
            </Typography>
            <Typography variant="body2" sx={{ cursor: "pointer", color: "gray", "&:hover": { color: "black" } }}>
              Explore
            </Typography>
            <Typography variant="body2" sx={{ cursor: "pointer", color: "gray", "&:hover": { color: "black" } }}>
              Blog
            </Typography>
          </Stack>

          {/* Icons & Sign-in Button */}
          <Stack direction="row" spacing={1} alignItems="center">
            <IconButton color="inherit" sx={{ border: "1px solid gray", borderRadius: "28px", px: 1 }}>
              <GitHubIcon sx={{ fontSize: "20px", pr: "5px" }} />
              <Typography variant="caption">16k+</Typography>
            </IconButton>
            <IconButton color="inherit" sx={{ border: "1px solid gray", borderRadius: "28px" }}>
              <DiscordIcon sx={{ fontSize: "20px" }} />
            </IconButton>
            <Button variant="outlined" color="dark" sx={{ textTransform: "none", borderRadius: "20px", border: "1px solid gray" }}>
              Sign in
            </Button>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
