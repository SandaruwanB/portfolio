import { useTheme } from '@mui/material/styles'
import React from 'react'
import NavBar from './navbar/NavBar'
import { Box, Container, CssBaseline, Typography, Divider, Grid } from '@mui/material'

const About = () => {
  const theme = useTheme()

  return (
    <Box sx={{display : 'flex',}}>
      <CssBaseline />
      <NavBar />
      <Box sx={{display : 'flex'}}>
        <Box
          component={'main'}
          sx={{flexGrow : 1, minHeight : '100vh', width : '100%', pl : { md : '0', sm : '0', lg : '450px' }}}
        >
          <Box sx={{height : '100%', width : '100%', background : theme.palette.primary.main, pt : 15}}>
            <Container maxWidth="lg" sx={{width : {xl : '70%'}}}>
              <Box sx={{display : 'block' }}>
                <Typography sx={{pl : 3, pr : 3, pt : 1, pb : 1, background : 'rgba(0,0,0,0.4)', display : 'inline-block', fontSize : '0.8rem'}}>
                  About
                </Typography>
              </Box>
              <Typography sx={{mt : 1, fontSize : '1.5rem', fontWeight : 'bold', letterSpacing : 1}} className='textSecondry'>
                About Me
              </Typography>
              <Box sx={{mt : 6}}>
                <img src='/bg.jpg' alt='bg' width={'100%'} height={500} style={{objectFit : 'cover'}}/>
              </Box>
              <Box sx={{mt : 3}}>
                <Typography variant='h6' className='textMain' sx={{fontWeight : '700', letterSpacing : 1, fontSize : '1.4rem'}}>
                  Sandaruwan Bandara
                </Typography>
                <Typography variant='body2' sx={{fontSize : '0.8rem'}}>
                  Full-Stack Developer
                </Typography>
              </Box>
              <Divider sx={{mt : 5, mb : 5}}/>
              <Typography>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum eius laudantium quod consectetur ut reiciendis ea fugit possimus officiis, cum quidem eligendi quis nisi nam deleniti repellendus quibusdam perspiciatis aperiam.
              </Typography>
              <Typography>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum eius laudantium quod consectetur ut reiciendis ea fugit possimus officiis, cum quidem eligendi quis nisi nam deleniti repellendus quibusdam perspiciatis aperiam.
              </Typography>
              <Typography>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum eius laudantium quod consectetur ut reiciendis ea fugit possimus officiis, cum quidem eligendi quis nisi nam deleniti repellendus quibusdam perspiciatis aperiam.
              </Typography>
              <Divider sx={{mt : 5, mb : 5}}/>
              <Box>
                <Grid container>
                  <Grid item md={6} sm={12} xs={12}>
                    <Typography>sdashdasdh</Typography>
                  </Grid>
                  <Grid item md={6} sm={12} xs={12}>
                    <Typography>dasjdajsdgjh</Typography>
                  </Grid>
                </Grid>
              </Box>
            </Container>
          </Box>
        </Box>    
      </Box>
    </Box>
  )
}


export default About