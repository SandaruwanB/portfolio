import React from 'react'
import { Box, CssBaseline, Grid, Typography, useTheme} from '@mui/material'
import NavBar from './navbar/NavBar';

const Home = () => {
  const theme = useTheme();

  return (
    <Box sx={{display : 'flex'}}>
      <CssBaseline />
      <NavBar />
      <Box
        component={'main'}
        sx={{flexGrow : 1, width : {sm : 'calc(100% - 600px)'}, height : '100vh',}}
      >
        <Box sx={{width : '100%', height : '100vh', display : 'flex', justifyContent : 'center', alignItems : 'center', background : theme.palette.primary.main}}>
          <Typography>
            Lorem ipsum tempora!
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default Home