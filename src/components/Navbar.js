import React from 'react';
import { AppBar, Toolbar } from '@mui/material';
import logo from '../assets/Swimify_Livetiming.png';

function Navbar() {
  return (
    <>
      <AppBar
        position="static"
        sx={{
          backgroundColor: 'white',
        }}
      >
        <Toolbar
          sx={{
            height: '80px',
            marginLeft: '2rem',
          }}
        >
          <img src={logo} alt="Swimify Logo" height="55px" />
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
