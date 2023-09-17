import { useTheme } from '@mui/material/styles'
import React from 'react'

const About = () => {
  const theme = useTheme()

  return (
    <div style={{width : '100%', height : '100vh', background : theme.palette.secondary.main}}>About 
      <h6>Primary Color : {theme.palette.primary.main}</h6>
    </div>
  )
}


export default About