import { colors } from '@mui/material'
import { createTheme } from '@mui/material/styles'

const DarkTheme = createTheme({
  palette : {
    primary : {
      main : colors.grey[500],
    },
    secondary : {
      main : colors.grey[700],
    },
    mode : 'dark',
  },
  transitions : {
    easing : {
      easeInOut : 'cubic-bezier(0.4, 0, 0.2, 1)',
      easeOut : 'cubic-bezier(0.0, 0, 0.2, 1)',
      easeIn : 'cubic-bezier(0.4, 0, 1, 1)',
      sharp : 'cubic-bezier(0.4, 0, 0.6, 1)'
    },
    duration : {
      shortest: 150,
      shorter: 200,
      short: 250,
      standard: 300,
      complex: 375,
      enteringScreen: 225,
      leavingScreen: 195,
    }
  }
})

export default DarkTheme