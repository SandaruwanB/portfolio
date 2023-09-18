import React from 'react'
import { Box, CssBaseline, Grid, Typography, useTheme} from '@mui/material'

const Home = () => {
  const theme = useTheme();

  return (
    <Box>
      <CssBaseline />
      <Box sx={{background : theme.palette.primary.main, width : '100%', minHeight : '100vh', display : 'flex', justifyContent : 'center', alignItems : 'center' }}>
        <Typography>
          Lorem i
        </Typography>
      </Box>
    </Box>
  )
}

export default Home