import React from 'react';
import { AppBar, Toolbar } from '@mui/material';
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
