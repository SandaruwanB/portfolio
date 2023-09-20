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
    MuiBadge : 'rgba(0,0,0,0.40)',
  },
})

export default DarkTheme