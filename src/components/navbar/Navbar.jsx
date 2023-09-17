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

  const drawerWidth = 250;

  const DrawerContent = ()=>{
    return (
      <div>
        <Toolbar />
        <List>
          {navBarValues.map((val,i)=>(
            <ListItem key={i}>
              <ListItemButton>
                <ListItemText primary={val.name}/>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </div>
    )
  }


  return (
    <>
      <AppBar
        position='fixed'
        sx={{width : `calc(100% - ${drawerWidth})px`, ml : {sm : `${drawerWidth}px`}, boxShadow : 'none'}}
        
      >
        <Toolbar 
          sx={{display : 'flex', justifyContent : 'space-between'}}
        >
          <Typography sx={{letterSpacing : 2}}>
            SANDARU
          </Typography>
          <IconButton>
            <Menu />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Navbar