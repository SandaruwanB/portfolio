import React from 'react'
import {Box, CssBaseline, Grow, Container, Typography, useTheme} from '@mui/material'
import NavBar from './navbar/NavBar'

const Tech = () => {
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
                <Box sx={{height : '100%', width : '100%', background : theme.palette.primary.main, pt : 10, pb : 10}}>
                    <Grow in={true}>
                        <Container maxWidth="lg" sx={{width : {xl : '70%'}}}>
                            <Box sx={{display : 'block' }}>                
                                <Typography sx={{pl : 3, pr : 3, pt : 1, pb : 1, background : theme.components.MuiBadge, display : 'inline-block', fontSize : '0.8rem', fontWeight : 'bold'}}>
                                    Technologies & Projects
                                </Typography>
                            </Box>
                            <Typography sx={{mt : 1, letterSpacing : 2, fontSize : '2rem', fontWeight : 'bold'}} className='textSecondry'>
                                My Technologies
                            </Typography>
                        </Container>
                    </Grow>
                </Box>
            </Box>
        </Box>
    </Box>
  )
}

export default Tech