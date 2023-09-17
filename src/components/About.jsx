import { useTheme } from '@mui/material/styles'
import React from 'react'
import Navbar from './navbar/Navbar'
import { Box, CssBaseline } from '@mui/material'

const About = () => {
  const theme = useTheme()
  // <div style={{width : '100%', height : '100vh', background : theme.palette.primary.main}}>
  return (
    <Box
      sx={{display : 'flex'}}
    >
      <CssBaseline />
      <Navbar />
      <Box
        sx={{
          background : theme.palette.primary.main
        }}
      >

      </Box>
    </Box>
  )
}


export default About