import { createTheme } from '@mui/material'

const LightTheme = createTheme({
  palette : {
    primary : {
      main : '#EDF1F7',
    },
    secondary : {
      main : '#F7F9FC',
    },
    mode : 'light',
  },
  typography : {
    body1 : '#000',
    fontFamily : [
      'Roboto',
      'Arial'
    ]
  }
})

export default LightTheme