import { createTheme } from '@mui/material'

const DarkTheme = createTheme({
  palette : {
    primary : {
      main : '#34353a',
    },
    secondary : {
      main : 'rgb(73,75,80)',
    },
    mode : 'dark',
  },
  typography : {
    body1 : '#fff',
  },
  components : {
    MuiListItemText : '#FFFFFF',
    MuiListItem : '#BBBBBB',
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