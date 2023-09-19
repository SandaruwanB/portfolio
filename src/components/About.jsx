import { useTheme } from '@mui/material/styles'
import React from 'react'
import NavBar from './navbar/NavBar'
import { Box, CssBaseline, } from '@mui/material'

const About = () => {
  const theme = useTheme()
  // <div style={{width : '100%', height : '100vh', background : theme.palette.primary.main}}>
  return (
    <Box sx={{display : 'flex',}}>
      <CssBaseline />
      <NavBar />
      <Box
        component={'main'}
        sx={{flexGrow : 1, width : {sm : 'calc(100% - 600px)'}, height : '100vh', background : theme.palette.primary.main}}
      >
        
      </Box>
    </Box>
  )
}


export default About