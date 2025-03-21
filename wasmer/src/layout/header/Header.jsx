import React, { useState, useEffect } from "react";
import {
  AppBar, Toolbar, Typography, IconButton, Button, TextField,
  InputAdornment, Box, Stack, Container, Drawer, List, ListItem, ListItemText, Avatar, Divider
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import GitHubIcon from "@mui/icons-material/GitHub";
import DiscordIcon from "@mui/icons-material/SportsEsports";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import CloseIcon from "@mui/icons-material/Close";
import Logo from "../../assets/images/Logo.png";

const productItems = [
  { title: "API", desc: "Developer tools", icon: "🔧" },
  { title: "Marketplace", desc: "Discover apps", icon: "🛍️" }
];

const Header = () => {
  const [bgColor, setBgColor] = useState("transparent");
  const [textColor, setTextColor] = useState("gray");
  const [shadow, setShadow] = useState("none");
  const [position, setPosition] = useState("sticky");
  const [openDrawer, setOpenDrawer] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setBgColor("white");
        setTextColor("black");
        setShadow("0px 4px 10px rgba(0, 0, 0, 0.1)");
        setPosition("fixed");
      } else {
        setBgColor("transparent");
        setTextColor("#00000080");
        setShadow("none");
        setPosition("sticky");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDrawer = (open) => () => {
    setOpenDrawer(open);
  };

  return (
    <>
      <AppBar
        position={position}
        elevation={bgColor === "white" ? 4 : 0}
        sx={{
          px: 2,
          top: 0,
          width: "100%",
          backgroundColor: bgColor,
          transition: "background-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease",
          boxShadow: shadow,
          zIndex: 1000
        }}
      >
        <Container>
          <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", height: "76px" }}>
            {/* Logo */}
            <Box component="img" src={Logo} alt="Logo" sx={{ height: { xs: 30, sm: 34, md: 36 } }} />

            {/* Search Bar (Hidden on Mobile) */}
            <TextField
              placeholder="Search packages, users or apps"
              size="small"
              sx={{
                width: 287,
                backgroundColor: "#0F05180D",
                borderRadius: 2,
                outline: "none",
                "& fieldset": { border: "none" },
                display: { xs: "none", md: "flex" }
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />

            {/* Navigation Links */}
            <Stack direction="row" spacing={3} sx={{ display: { xs: "none", md: "flex" } }}>
              {["Products", "Developers", "Explore", "Blog"].map((item, index) => (
                <Typography key={index} variant="body1" sx={{ cursor: "pointer", color: textColor, "&:hover": { color: "black" } }}>
                  {item}
                </Typography>
              ))}
            </Stack>

            {/* Icons & Sign-in Button */}
            <Stack direction="row" spacing={1} alignItems="center">
              <IconButton sx={{ display: { xs: "none", sm: "flex" }, color: "black", border: "1px solid gray", borderRadius: "56px" }}>
                <GitHubIcon sx={{ fontSize: "20px", pr: "5px" }} />
                <Typography variant="caption">16k+</Typography>
              </IconButton>
              <IconButton sx={{ display: { xs: "none", sm: "flex" }, color: "black", border: "1px solid gray", borderRadius: "56px" }}>
                <DiscordIcon sx={{ fontSize: "20px" }} />
              </IconButton>

              {/* Sign In */}
              <Button variant="outlined" sx={{ color: "black", textTransform: "none", borderRadius: "56px", minWidth: { xs: "88px" }, border: "1px solid gray", "&:hover": { backgroundColor: "#8080802b" } }}>
                Sign in
              </Button>

              {/* Mobile Menu Icon */}
              <IconButton onClick={toggleDrawer(true)} sx={{ display: { xs: "flex", md: "none" } }}>
                <MenuOpenIcon sx={{ fontSize: "27px" }} />
              </IconButton>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Drawer Menu */}
      <Drawer anchor="right" open={openDrawer} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 250, p: 2 }}>
          {/* Close Button */}
          <IconButton onClick={toggleDrawer(false)} sx={{ display: "flex", justifyContent: "flex-end" }}>
            <CloseIcon />
          </IconButton>

          {/* Search Bar (For Mobile) */}
          <TextField
            placeholder="Search packages, users or apps"
            size="small"
            fullWidth
            sx={{
              backgroundColor: "#f4f4f4",
              borderRadius: 2,
              outline: "none",
              "& fieldset": { border: "none" },
              my: 2
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />

          {/* Navigation Links */}
          <List>
            {["Products", "Developers", "Explore", "Blog"].map((item, index) => (
              <ListItem button key={index} onClick={toggleDrawer(false)}>
                <ListItemText primary={item} />
              </ListItem>
            ))}
          </List>

          <Divider sx={{ my: 2 }} />

          {/* Product Items */}
          {productItems.map((item, index) => (
            <Box key={index} sx={{ display: "flex", alignItems: "center", gap: 2, mb: 1 }}>
              <Avatar sx={{ bgcolor: "#000" }}>{item.icon}</Avatar>
              <Box>
                <Typography fontWeight="bold">{item.title}</Typography>
                <Typography variant="caption" color="gray">
                  {item.desc}
                </Typography>
              </Box>
            </Box>
          ))}

          <Divider sx={{ my: 2 }} />

          {/* Icons & Sign-in Button (For Mobile) */}
          <Stack direction="row" spacing={1} alignItems="center">
            <IconButton sx={{ color: "black", border: "1px solid gray", borderRadius: "56px" }}>
              <GitHubIcon sx={{ fontSize: "20px", pr: "5px" }} />
            </IconButton>
            <IconButton sx={{ color: "black", border: "1px solid gray", borderRadius: "56px" }}>
              <DiscordIcon sx={{ fontSize: "20px" }} />
            </IconButton>
            <Button variant="outlined" fullWidth sx={{ color: "black", borderRadius: "56px", border: "1px solid gray" }}>
              Sign in
            </Button>
          </Stack>
        </Box>
      </Drawer>
    </>
  );
};

export default Header;
