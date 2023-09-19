import React from 'react'
import { Box, CssBaseline, Grid, Typography, useTheme,} from '@mui/material'
import { LinkedIn, GitHub, Facebook, WhatsApp, Email } from '@mui/icons-material'
import NavBar from './navbar/NavBar';

const Home = () => {
  const theme = useTheme();

  return (
    <Box sx={{display : 'flex'}}>
      <CssBaseline />
      <NavBar />
      <Box
        component={'main'}
        sx={{flexGrow : 1, width : {sm : 'calc(100% - 600px)'}, height : '100vh', background : theme.palette.primary.main}}
      >
        <Grid container sx={{width : '100%', height : '100%'}} direction={'row'} justifyContent={'center'} alignItems={'center'}>
          <Grid item xs={12} sm={12} md={5} lg={5} sx={{display : 'flex', justifyContent : {xs : 'center', sm : 'center', md : 'right'}, alignItems : {xs : 'end'}}}>
            <div className='HomeProfile'>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={7} lg={7}>
            <Box sx={{ml : {md : 10, lg : 10}}}>
              <Typography variant='h4' sx={{ textAlign : {xs : 'center', md : 'left'}}}>
                SANDARUWAN BANDARA
              </Typography>
              <Typography sx={{width : { sm : '100%', md : '70%'}, mt : 5, textAlign : {xs : 'center', sm : 'center', md : 'left'}}} variant='body2'>
                I'm fullstack web developer with 2+ years of experiences. I have create freatures that are the best suited for your web app
              </Typography>
              <Typography sx={{textAlign : {xs : 'center', sm : 'center', md : 'left'}, mt : 3}}>
                <LinkedIn sx={{cursor : 'pointer',}}/>  <GitHub sx={{cursor : 'pointer', ml : 1}}/> <Facebook sx={{cursor : 'pointer', ml : 1}}/>  <WhatsApp sx={{cursor : 'pointer', ml : 1}}/> <Email sx={{cursor : 'pointer', ml : 1}}/>
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default Home