import React from 'react';
import { AppBar, Toolbar, Typography, Switch, Box } from '@mui/material';


export default function Navbar(props) {
  return (
    <AppBar position="static" color={props.mode === 'light' ? 'primary' : 'default'}>
      <Toolbar>
        

        <Typography variant="h4" component="div" sx={{ flexGrow: 1, fontStyle : "serif", fontWeight : "bold " }}>
          {props.title}
        </Typography>

        <Box display="flex" alignItems="center">
          <Typography variant="body1" sx={{ mr: 1 }}>
            Dark Mode
          </Typography>
          <Switch checked={props.mode === 'dark'} onChange={props.toggleMode} />
        </Box>
      </Toolbar>
    </AppBar>
  );
}
