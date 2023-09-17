import { createTheme } from '@mui/material/styles'

const DarkTheme = createTheme({
  palette : {
    primary : {
      main : '#1976D2',
    },
    secondary : {
      main : '#FFA000',
    },
    mode : 'dark',
  }
})

export default DarkTheme