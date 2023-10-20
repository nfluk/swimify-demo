import React from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  InputBase,
  CssBaseline,
} from '@mui/material';
import { Search } from '@mui/icons-material';
import logo from '../assets/Swimify_Livetiming.png';

function Navbar() {
  return (
    <>
      <AppBar position="static">
        <Toolbar sx={{ backgroundColor: 'white' }}>
          <img src={logo} alt="Swimify Logo" height="50px" />
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
