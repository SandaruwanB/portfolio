import React from 'react'
import { Box, CssBaseline, Grid, Typography, useTheme,} from '@mui/material'
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
          <Grid item xs={12} sm={12} md={5} lg={5} sx={{display : 'flex', justifyContent : 'right', alignItems : 'center'}}>
            <img src='/profile.jpg' alt='bg' width={280} height={280} className='HomeProfile'/>
          </Grid>
          <Grid item xs={12} sm={12} md={7} lg={7}>
            <Box pl={5}>
              <Typography variant='h4'>
                SANDARUWAN BANDARA
              </Typography>
              <Typography sx={{width : '70%', pt : 3}} variant='body2'>
                I'm fullstack web developer with 2+ years of experiences. I have create freatures that are the best suited for your web app
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default Home