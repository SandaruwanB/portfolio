import React, { useState } from 'react'
import {Box, CssBaseline, Container, useTheme, Typography, Grow, TextField, Button} from '@mui/material'
import {Email} from '@mui/icons-material'
import NavBar from './navbar/NavBar'


const Contact = () => {
  const theme = useTheme();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const sendMail = ()=>{
    alert(name + " " + email + " " + subject + " " + message);
  }

  return (
    <Box>
      <CssBaseline />
      <NavBar />
      <Box sx={{display : 'flex'}}>
        <Box
          component={'main'}
          sx={{flexGrow : 1,width : '100%', pl : { md : '0', sm : '0', lg : '450px' }}}
        >
          <Box sx={{height : '100%', width : '100%', background : theme.palette.primary.main}}>
            <Grow in={true}>
              <Container maxWidth="lg" sx={{width : {xl : '70%'}, pt : 10, pb : 10}}>                
                <Box sx={{display : 'block' }}>                
                  <Typography sx={{pl : 3, pr : 3, pt : 1, pb : 1, background : theme.components.MuiBadge, display : 'inline-block', fontSize : '0.8rem', fontWeight : 'bold'}}>
                    Contact
                  </Typography>
                </Box>
                <Typography sx={{mt : 1, letterSpacing : 2, fontSize : '2rem', fontWeight : 'bold'}} className='textSecondry'>
                  Contact Me
                </Typography>
                <Box sx={{width : '100%', mt : 6}}>
                  <TextField label={'Your Name'} sx={{width : '100%'}} size='small' onChange={(e)=>setName(e.target.value)} value={name}/>
                  <TextField label={'Email Address'} sx={{width : '100%', mt : 4}} size='small' onChange={(e)=>setEmail(e.target.value)} value={email}/>
                  <TextField variant='outlined' label={'Subject'} sx={{width : '100%', mt : 4}} size='small' onChange={(e)=>setSubject(e.target.value)} value={subject}/>
                  <TextField variant='outlined' label={'Message'} multiline rows={5} maxRows={7} sx={{width : '100%', mt : 4}} onChange={(e)=>setMessage(e.target.value)} value={message}/>
                  <Button variant='contained' sx={{mt : 4, width : 130, background : theme.components.MuiButton, color : theme.components.MuiFormHelperText}} onClick={()=>sendMail()}>Send</Button>
                </Box>
              </Container>
            </Grow>
            <Box sx={{width : '100%', background : theme.palette.secondary.main}}>
              <Container maxWidth="lg" sx={{width : {xl : '70%'}, pt : 10, pb : 10}}>
                <Box>
                  <Typography sx={{color : theme.components.MuiListItemText, fontSize : '1.2rem', letterSpacing : 1, fontWeight : 600}} className='textPrimary'>
                    Contact Details
                  </Typography>
                  <Box sx={{mt : 5}}>
                    <Box sx={{display : 'flex', alignItems : 'baseline'}}>
                      <Email /> <Typography>hjasdajs</Typography>
                    </Box>
                  </Box> 
                </Box>
              </Container>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Contact