import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Box, IconButton } from '@mui/material';
import { IoIosMenu } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [links] = useState([
    { path: '/home', name: 'Dashboard' },
    { path: '/Pricelist', name: 'Price List' },
    { path: '/Comparison', name: 'Comparison' },
    { path: '/transactions', name: 'Transactions' },
    { path: '/profitanalysis', name: 'Profit Analysis' },
    { path: '/reports', name: 'Reports' },
    { path: '/settings', name: 'Settings' },
  ]);

  return (
    <AppBar position="static" sx={{backgroundColor:"#4B4F9A"}}>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <IoIosMenu />
        </IconButton>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Dashboard
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          {links.map((link) => (
            <Typography
              key={link.name}
              sx={{ cursor: 'pointer' }}
              onClick={() => navigate(link.path)}
            >
              {link.name}
            </Typography>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
