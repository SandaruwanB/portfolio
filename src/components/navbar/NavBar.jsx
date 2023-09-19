import { AppBar, Box, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography, useTheme,} from '@mui/material';
import { Menu, Copyright, ArrowRight } from '@mui/icons-material';
import React, { useState } from 'react'

const drawerWidth = 450;
const navBarValues = ['Home','About','Contact'];

const NavBar = (props) => {
  const {window} = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();

  const handleDrawerToggle = ()=>{
    setMobileOpen(!mobileOpen);
  }

  const drawer = (
    <div>
      <List>
        {navBarValues.map((value,index)=>(
          <ListItem key={index}>
            <ListItemButton>
              <ListItemText primary={value}/>
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
        sx={{width : {lg : drawerWidth}, flexShrink : {sm : 0}, background : theme.palette.secondary.main, display : {xs : 'none',sm : 'none', md : 'none', lg : 'flex'}, justifyContent : 'center', pl : 13, flexDirection : 'column'}}
        aria-label='navbar items'
      >
        <Typography variant='h5' sx={{fontWeight : '900', letterSpacing : 3}}>
          SANDARU
        </Typography>
        <Box sx={{display : 'block', pt : 5}}>
          {navBarValues.map((value, id)=>(
            <Typography variant='body1' key={id} sx={{pt : 1, pb : 1}}>
              <ArrowRight fontSize='40'/> {value} 
            </Typography>
          ))}
        </Box>
        <Box sx={{mt : 10}}>
          <Typography variant='body2'>
          <Copyright fontSize='20'/> 2023 SANDARU
          </Typography>
          <Typography variant='body2'>
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