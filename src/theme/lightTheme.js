import { colors, createTheme } from '@mui/material'

const LightTheme = createTheme({
  palette : {
    primary : {
      main : colors.grey[50],
    },
    secondary : {
      main : colors.grey[100],
    },
    mode : 'light',
  }
})

export default LightTheme