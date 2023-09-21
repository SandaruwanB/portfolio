import { useTheme } from '@mui/material/styles'
import React from 'react'
import NavBar from './navbar/NavBar'
import { Box, Container, CssBaseline, Typography, Divider, Grid, Grow } from '@mui/material'

const About = () => {
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
                  About
                </Typography>
              </Box>
              <Typography sx={{mt : 1, fontSize : '2rem', fontWeight : 'bold', letterSpacing : 2}} className='textPrimary'>
                About Me
              </Typography>
              <Box sx={{mt : 6}}>
                <img src='/bg.jpg' alt='bg' width={'100%'} height={500} style={{objectFit : 'cover'}}/>
              </Box>
              <Box sx={{mt : 3}}>
                <Typography variant='h6' className='textMain' sx={{fontWeight : '700', letterSpacing : 1, fontSize : '1.6rem'}}>
                  Sandaruwan Bandara
                </Typography>
                <Typography variant='body2' sx={{fontSize : '1rem', color : theme.components.MuiListItem}}>
                  Full-Stack Developer
                </Typography>
              </Box>
              <Divider sx={{mt : 5, mb : 5}}/>
              <Typography variant='body1' sx={{letterSpacing : 0.7, color : theme.components.MuiListItem}}>
                Hello ! I'm Sandaruwan Bandara, a passionate self-taught full stack developer and a freelance software engineer from Sri Lanka. my passion for software lies with dreaming up ideas and making them come true with elegant interfaces. i take great care in the experience, architecture, and code quality of the things I build.
              </Typography>
              <Typography variant='body1' sx={{mt : 3, letterSpacing : 0.7, color : theme.components.MuiListItem}}>
              One of my specialties is taking an idea from scratch and creating a full-fledged platform. I go beyond to produce sites with a unique, outstanding, contemporary look-and-feel. With extensive knowledge of web mechanics, I’m able to optimize complex integrations to require little-to-no maintenance while running on their own for years.
              </Typography>
              <Divider sx={{mt : 5, mb : 5}}/>
              <Box>
                <Grid container spacing={3}>
                  <Grid item md={6} sm={12} xs={12}>

                  </Grid>
                  <Grid item md={6} sm={12} xs={12}>
                  </Grid>
                </Grid>
              </Box>
            </Container>
            </Grow>
          </Box>
        </Box>    
      </Box>
    </Box>
  )
}


export default About