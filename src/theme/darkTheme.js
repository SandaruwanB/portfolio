import { createTheme } from '@mui/material'

const DarkTheme = createTheme({
  palette : {
    primary : {
      main : '#34353a',
      dark : 'rgba(128, 128, 128, 1)',
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
    MuiBadge : 'rgba(0,0,0,0.40)',
    MuiButton : '#FFFFFF',
    MuiFormHelperText : '#000'
  },
})

export default DarkTheme