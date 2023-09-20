import React from 'react'
import {Box, CssBaseline, Container, useTheme} from '@mui/material'
import NavBar from './navbar/NavBar'


const Contact = () => {
  const theme = useTheme();

  return (
    <Box>
      <CssBaseline />
      <NavBar />
      <Box sx={{display : 'flex'}}>
        <Box
          component={'main'}
          sx={{flexGrow : 1, minHeight : '100vh', width : '100%', pl : { md : '0', sm : '0', lg : '450px' }}}
        >
          <Box sx={{height : '100%', width : '100%', background : theme.palette.primary.main, pt : 15}}>
            <Container maxWidth="lg" sx={{width : {xl : '70%'}}}>
            </Container>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Contact