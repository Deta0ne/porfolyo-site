import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant="h6"
          component={RouterLink}
          to="/"
          sx={{ flexGrow: 1 }}
        >
          Kişisel Site
        </Typography>
        <Button color="inherit" component={RouterLink} to="/projects">
          Projelerim
        </Button>
        <Button color="inherit" component={RouterLink} to="/skills">
          Yeteneklerim
        </Button>
        <Button color="inherit" component={RouterLink} to="/experience">
          Deneyimlerim
        </Button>
        <Button color="inherit" component={RouterLink} to="/contact">
          İletişim
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
