import React from 'react'
import { Box, CssBaseline, Grid, IconButton, Typography, useTheme,} from '@mui/material'
import { LinkedIn, GitHub, Facebook, WhatsApp } from '@mui/icons-material'
import NavBar from './navbar/NavBar';

const Home = () => {
  const theme = useTheme();

  const navigateTo = (url)=>{
    window.location.replace(url);
  }

  return (
    <Box>
      <CssBaseline />
      <NavBar/>
        <Box sx={{display : 'flex'}}>
          <Box
            component={'main'}
            sx={{flexGrow : 1, height : '100vh',width : '100%', pl : { md : '0', sm : '0', lg : '450px' }, background : theme.palette.primary.main}}
          >
            <Grid container sx={{width : '100%', height : '100%'}} direction={'row'} justifyContent={'center'} alignItems={'center'}>
              <Grid item xs={12} sm={12} md={5} lg={5} sx={{display : 'flex', justifyContent : {xs : 'center', sm : 'center', md : 'right'}, alignItems : {xs : 'end'}}}>
                <div className='HomeProfile'>
                </div>
              </Grid>
              <Grid item xs={12} sm={12} md={7} lg={7}>
                <Box sx={{ml : {md : 10, lg : 10}}}>
                  <Typography variant='h4' sx={{ textAlign : {xs : 'center', md : 'left', fontWeight : '900', letterSpacing : 1}}} >
                    <p className='name textMain'>SANDARUWAN BANDARA</p>
                  </Typography>
                  <Typography sx={{width : { sm : '100%', md : '80%'}, mt : 5, textAlign : {xs : 'center', sm : 'center', md : 'left'}, letterSpacing : 0.5}} variant='body1' className='textSecondry'>
                    I'm fullstack developer with 2+ years of experiences. I have create freatures that are the best suited for your web apps and android apps.I'm also develop desktop apps & APIs.
                  </Typography>
                  <Typography sx={{textAlign : {xs : 'center', sm : 'center', md : 'left'}, mt : 3}}>
                    <IconButton sx={{cursor : 'pointer',}} onClick={()=>navigateTo('https://www.linkedin.com/in/sandaruwan-bandara/')}><LinkedIn/></IconButton>   
                    <IconButton sx={{cursor : 'pointer', ml : 0.5}} onClick={()=>navigateTo('https://github.com/SandaruwanB')}><GitHub/></IconButton>
                    <IconButton sx={{cursor : 'pointer', ml : 0.5}} onClick={()=>navigateTo('https://www.facebook.com/profile.php?id=100094931564366&mibextid=ZbWKwL')}><Facebook/></IconButton>
                    <IconButton sx={{cursor : 'pointer', ml : 0.5}} onClick={()=>navigateTo('https://wa.me/94761183372')}><WhatsApp/></IconButton>
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
    </Box>
  )
}

export default Home