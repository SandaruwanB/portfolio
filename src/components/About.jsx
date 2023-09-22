import { useTheme } from '@mui/material/styles'
import React from 'react'
import NavBar from './navbar/NavBar'
import { Box, Container, CssBaseline, Typography, Divider, Grow, Grid, Button } from '@mui/material'

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
          <Box sx={{ width : '100%', background : theme.palette.primary.main, pt : 10, pb : 10}}>
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
                <img src='/images/bg.jpeg' alt='bg' width={'100%'} height={500} style={{objectFit : 'cover'}}/>
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
              <a
                href='/cv/cv.pdf'
                download={'SandaruwanBandara'}
                target='_blank'
                rel='noreferrer'
              >
                <Button variant='contained' sx={{background : theme.components.MuiButton, boxShadow : 'none', color : theme.components.MuiFormHelperText}}>Download CV</Button>
              </a>
            </Container>
            </Grow>
          </Box>
          <Box sx={{pt : 10, pb : 10, background : theme.palette.secondary.main}}>
            <Container maxWidth="lg"  sx={{width : {xl : '70%'}}}>
              <Grid container spacing={6}>
                <Grid item sm={12} xs={12} md={6} lg={6} xl={6}>
                  <Box>
                    <Typography sx={{color : theme.components.MuiListItemText, fontSize : '1.2rem', letterSpacing : 1, fontWeight : 600}} className='textPrimary'>
                      Skills
                    </Typography>
                    <Box sx={{mt : 5}}>
                      <Box sx={{width : '100%', display : 'flex', justifyContent : 'space-between', fontSize : '.8rem'}}>
                        <Typography className='textSecondry'>Programming</Typography>
                        <Typography className='textSecondry'>95%</Typography>
                      </Box>
                      <Box sx={{width : '100%', border : `1px solid ${theme.palette.primary.dark}`, background : theme.palette.primary.dark, mt : 0.5}}>
                        <Box sx={{width : '95%', background : theme.components.MuiListItemText, height : 3}}></Box>
                      </Box>
                    </Box>
                    <Box sx={{mt : 3}}>
                      <Box sx={{width : '100%', display : 'flex', justifyContent : 'space-between', fontSize : '.8rem'}}>
                        <Typography className='textSecondry'>Team Leading</Typography>
                        <Typography className='textSecondry'>85%</Typography>
                      </Box>
                      <Box sx={{width : '100%', border : `1px solid ${theme.palette.primary.dark}`, background : theme.palette.primary.dark, mt : 0.5}}>
                        <Box sx={{width : '85%', background : theme.components.MuiListItemText, height : 3}}></Box>
                      </Box>
                    </Box>
                    <Box sx={{mt : 3}}>
                      <Box sx={{width : '100%', display : 'flex', justifyContent : 'space-between', fontSize : '.8rem'}}>
                        <Typography className='textSecondry'>Content Writing</Typography>
                        <Typography className='textSecondry'>65%</Typography>
                      </Box>
                      <Box sx={{width : '100%', border : `1px solid ${theme.palette.primary.dark}`, background : theme.palette.primary.dark, mt : 0.5}}>
                        <Box sx={{width : '65%', background : theme.components.MuiListItemText, height : 3}}></Box>
                      </Box>
                    </Box>
                  </Box>
                </Grid>
                <Grid item sm={12} xs={12} md={6} lg={6} xl={6}>
                  <Box>
                    <Typography sx={{color : theme.components.MuiListItemText, fontSize : '1.2rem', letterSpacing : 1, fontWeight : 600}} className='textPrimary'>
                      Language Skills
                    </Typography>
                    <Box sx={{mt : 5}}>
                      <Box sx={{width : '100%', display : 'flex', justifyContent : 'space-between', fontSize : '.8rem'}}>
                        <Typography className='textSecondry'>English</Typography>
                        <Typography className='textSecondry'>80%</Typography>
                      </Box>
                      <Box sx={{width : '100%', border : `1px solid ${theme.palette.primary.dark}`, background : theme.palette.primary.dark, mt : 0.5}}>
                        <Box sx={{width : '80%', background : theme.components.MuiListItemText, height : 3}}></Box>
                      </Box>
                    </Box>
                    <Box sx={{mt : 3}}>
                      <Box sx={{width : '100%', display : 'flex', justifyContent : 'space-between', fontSize : '.8rem'}}>
                        <Typography className='textSecondry'>Sinhala</Typography>
                        <Typography className='textSecondry'>90%</Typography>
                      </Box>
                      <Box sx={{width : '100%', border : `1px solid ${theme.palette.primary.dark}`, background : theme.palette.primary.dark, mt : 0.5}}>
                        <Box sx={{width : '90%', background : theme.components.MuiListItemText, height : 3}}></Box>
                      </Box>
                    </Box>
                    <Box sx={{mt : 3}}>
                      <Box sx={{width : '100%', display : 'flex', justifyContent : 'space-between', fontSize : '.8rem'}}>
                        <Typography className='textSecondry'>Tamil</Typography>
                        <Typography className='textSecondry'>55%</Typography>
                      </Box>
                      <Box sx={{width : '100%', border : `1px solid ${theme.palette.primary.dark}`, background : theme.palette.primary.dark, mt : 0.5}}>
                        <Box sx={{width : '55%', background : theme.components.MuiListItemText, height : 3}}></Box>
                      </Box>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Container>
          </Box>
          <Box sx={{pt : 10, pb : 10, background : theme.palette.primary.main}}>
            <Container maxWidth="lg"  sx={{width : {xl : '70%'}}}>
              <Typography sx={{color : theme.components.MuiListItemText, fontSize : '1.2rem', letterSpacing : 1, fontWeight : 600}} className='textPrimary'>
                Testimonials
              </Typography>
            </Container>
          </Box>
        </Box>    
      </Box>
    </Box>
  )
}


export default About