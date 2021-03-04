import React from 'react';

import { useHistory } from 'react-router-dom';

import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import { Code as CodeIcon, Info as InfoIcon } from '@material-ui/icons';

function DrawerMenu({ isOpen, onClose }) {
  const history = useHistory();

  return (
    <Drawer anchor="left" open={isOpen} onClose={onClose}>
      <List>
        <ListItem
          button
          key="code/decode"
          onClick={() => {
            onClose();
            history.push('/');
          }}>
          <ListItemIcon>
            <CodeIcon />
          </ListItemIcon>
          <ListItemText primary="Codificar / Decodificar" />
        </ListItem>
        <ListItem
          button
          key="about"
          onClick={() => {
            onClose();
            history.push('/about');
          }}>
          <ListItemIcon>
            <InfoIcon />
          </ListItemIcon>
          <ListItemText primary="Sobre" />
        </ListItem>
      </List>
    </Drawer>
  );
}

export default DrawerMenu;
