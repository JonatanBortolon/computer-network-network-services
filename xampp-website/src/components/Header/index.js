import React, { useState } from 'react';

import { useLocation } from 'react-router-dom';

import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import { Menu as MenuIcon, AccountCircle } from '@material-ui/icons';

import DrawerMenu from '../DrawerMenu';

function Header({ style: classes }) {
  const location = useLocation();
  const [drawer, toggleDrawer] = useState(false);

  return (
    <AppBar position="static">
      <DrawerMenu isOpen={drawer} onClose={() => toggleDrawer(false)} />
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
          onClick={() => toggleDrawer(true)}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          {location.pathname === '/about' ? 'Sobre' : 'Codificar / Decodificar'}
        </Typography>
        <IconButton
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          color="inherit">
          <AccountCircle />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
