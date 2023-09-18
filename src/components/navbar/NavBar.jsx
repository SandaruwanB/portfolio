import { Divider, List, Toolbar } from '@mui/material';
import React, { useState } from 'react'

const drawerWidth = 400;
const navBarValues = ['Home', 'About', 'Contact'];

const NavBar = (props) => {
  const {window} = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = ()=>{
    setMobileOpen(!mobileOpen);
  }

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        
      </List>
    </div>
  )

  return (
    <>
    </>
  )
}

export default NavBar