import React from 'react'
import { Box, Typography, useTheme } from '@mui/material'
import { Copyright } from '@mui/icons-material'


const Footer = () => {
    const theme = useTheme();

    return (
    <Box sx={{ pt : 1, pb : 1, width : '100%', background : theme.components.MuiFormHelperText, textAlign : 'center', display : {lg : 'none', sm : 'block', xs : 'block'}}}>
        <Typography sx={{display : 'inline', color : theme.typography}}>
            <Copyright sx={{pt : 1.4}}/> <span style={{fontSize : '0.8rem'}}>2023 by Sandaruwan Bandara</span>
        </Typography>
    </Box>
  )
}

export default Footer