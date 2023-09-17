import { AppBar, Box, CssBaseline, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography, useTheme } from '@mui/material'
import { Menu } from '@mui/icons-material'
import React, { useState } from 'react'

const navBarValues = [
  {
    name : 'Home'
  },
  {
    name : 'About'
  }
]

const Navbar = (props) => {
  const theme = useTheme();
  const {window} = props;
  const [mobileOpen, setMobileOpen] = useState(false);


  return (
    <>
      <CssBaseline />
      <AppBar 
        position='fixed'
        sx={{
          width : {sm : `calc(100% - 250)`},
          //display : { lg : 'none' },
          ml : 250,
        }}
      >
        <Toolbar

        >
          <Typography>
            SANDARU
          </Typography>
          <IconButton >
            <Menu />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Navbar