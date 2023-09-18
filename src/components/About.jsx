import { useTheme } from '@mui/material/styles'
import React from 'react'
import NavBar from './navbar/NavBar'
import { Box, CssBaseline, Toolbar, Typography } from '@mui/material'

const About = () => {
  const theme = useTheme()
  // <div style={{width : '100%', height : '100vh', background : theme.palette.primary.main}}>
  return (
    <Box
      sx={{display : 'flex'}}
    >
      <CssBaseline />
      <NavBar />
      <Box
        component={'main'}
        sx={{
          background : theme.palette.secondary.main
        }}
      >
        <Toolbar />
        <Typography>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam vitae, hic placeat ipsum quae dicta! Amet beatae, accusamus accusantium nobis ea atque unde voluptatem esse fugit quae, alias tenetur reiciendis?
        </Typography>
      </Box>
    </Box>
  )
}


export default About