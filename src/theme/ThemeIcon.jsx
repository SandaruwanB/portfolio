import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { ThemeProvider } from '@mui/material'
import DarkTheme from './darkTheme'
import LightTheme from './lightTheme'

const ThemeIcon = () => {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeProvider theme={theme === 'light' ? LightTheme : DarkTheme} >
        <p style={{position : 'fixed', top : '50%', right : 10}} onClick={()=>setTheme(theme === 'light' ? 'dark' : 'light')}>{theme} mode</p>
        <Outlet />
    </ThemeProvider>
  )
}

export default ThemeIcon