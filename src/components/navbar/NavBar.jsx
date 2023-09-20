import { AppBar, Box, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography, useTheme,} from '@mui/material';
import { Menu, Copyright, MenuOpen } from '@mui/icons-material';
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const drawerWidth = 450;
const navBarValues = [
  { 
    name : 'Home',
    url : '/'
  },
  {
    name : 'About',
    url : '/about'
  },
  {
    name : 'Services',
    url : '/services'
  },
  {
    name : 'Contact',
    url : '/contact'
  }
];

const NavBar = (props) => {
  const {window} = props;
  const location = useLocation();
  const current = location.pathname;
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const navigate = useNavigate();

  const handleDrawerToggle = ()=>{
    setMobileOpen(!mobileOpen);
  }

  const drawer = (
    <div style={{background : theme.palette.secondary.main, height : '100%'}}>
      <Box sx={{width : '100%', display : 'flex', justifyContent : 'right'}}>
        <IconButton sx={{p : 2}} onClick={()=>handleDrawerToggle()}>
          <MenuOpen />
        </IconButton>
      </Box>
      <List>
        {navBarValues.map((value,index)=>(
          <ListItem key={index}>
            <ListItemButton>
              <ListItemText primary={value.name} onClick={()=>navigate(value.url)} sx={{color : value.url === current ? theme.components.MuiListItemText : ""}}/>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  )

  const container = window !== undefined ? ()=>window().document.body : undefined;

  return (
    <>
      <AppBar
        position='fixed'
        sx={{
          width : {lg : `calc(100% - ${drawerWidth}px)`},
          ml : {lg : `${drawerWidth}px`},
          boxShadow : 'none',
          background : theme.palette.secondary.main,
          display : {lg : 'none'}
        }}
      >
        <Toolbar sx={{display : 'flex', justifyContent : 'space-between'}}>
          <Typography sx={{letterSpacing : 2}}>
            SANDARU
          </Typography>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge={'start'}
            onClick={handleDrawerToggle}
          >
            
            <Menu />

          </IconButton>
        </Toolbar>
      </AppBar>
      <Box
        component={'nav'}
        sx={{width : {lg : drawerWidth}, flexShrink : {sm : 0}, background : theme.palette.secondary.main, display : {xs : 'none',sm : 'none', md : 'none', lg : 'flex'}, minHeight : '100vh', justifyContent : 'center', pl : 13, flexDirection : 'column', borderRight : `1px solid ${theme.palette.primary.dark}`, position : 'fixed'}}
        aria-label='navbar items'
      >
        <Typography variant='h5' sx={{fontWeight : '900', letterSpacing : 3, fontSize : '2rem'}} className='textMain'>
          SANDARU
        </Typography>
        <Box sx={{display : 'block', pt : 5}}>
          {navBarValues.map((value, id)=>(
            <div onClick={()=>navigate(value.url)} style={{cursor : 'pointer'}} key={id}>
              <Typography variant='body1' sx={{mt : 1, mb : 1, color : value.url === current ? theme.components.MuiListItemText : ""}} className='textPrimary'>
              {value.name} 
              </Typography>
            </div>
          ))}
        </Box>
        <Box sx={{mt : 10}}>
          <Typography variant='body2' className='textPrimary'>
          <Copyright fontSize='20'/> 2023 SANDARU
          </Typography>
          <Typography variant='body2' className='textSecondry'>
            Created by SandaruwanBandara
          </Typography>
        </Box>
      </Box>
      <Drawer
          container={container}
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted : true
          }}
          sx={{
            display : {xs : 'block', lg : 'none'},
            '& .MuiDrawer-paper' : {boxSizing : 'border-box', width : 250},
          }}
        >
          {drawer}
        </Drawer>
    </>
  )
}

export default NavBar