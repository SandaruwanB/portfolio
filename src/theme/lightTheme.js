import { createTheme } from '@mui/material'

const LightTheme = createTheme({
  palette : {
    primary : {
      main : '#EDF1F7',
      dark : '#D4D4D4'
    },
    secondary : {
      main : '#F7F9FC',
    },
    mode : 'light',
  },
  typography : {
    body1 : '#000',
  }
})

export default LightTheme