import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Box, IconButton, ThemeProvider } from '@mui/material'
import { Brightness4, Brightness7 } from '@mui/icons-material'
import DarkTheme from './darkTheme'
import LightTheme from './lightTheme'


const ThemeIcon = () => {
  const [themeMod, setThemeMod] = useState('light');

  useEffect(()=>{
    if(window.matchMedia('(prefers-color-scheme : dark)')){
      setThemeMod('dark');
    } 
    else{
      setThemeMod('light');
    }
  },[setThemeMod]);

  return (
    <ThemeProvider theme={themeMod === 'light' ? LightTheme : DarkTheme} >
        <Box sx={{
            position : 'fixed',
            top : '30%',
            right : 5,
            backgroundColor : themeMod === 'light' ? 'rgba(0,0,0,0.2)' : 'rgba(255,255,255,0.2)',
            borderRadius: 5,
            display : 'inline-block',
          }}
        >
          <IconButton onClick={()=>setThemeMod(themeMod === 'light' ? 'dark' : 'light')} > 
            {themeMod === 'light' ? <Brightness4 /> : <Brightness7 /> }
          </IconButton>
        </Box>
        <Outlet/>
    </ThemeProvider>
  )
}

export default ThemeIcon