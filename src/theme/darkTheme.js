import { createTheme } from '@mui/material/styles'

const DarkTheme = createTheme({
  palette : {
    primary : {
      main : '#1976D2',
    },
    secondary : {
      main : 'rgb(73,75,80)',
    },
    mode : 'dark',
  }
})

export default DarkTheme