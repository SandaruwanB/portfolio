import React, { useState } from 'react'
import {Box, CssBaseline, Container, useTheme, Typography, Grow, TextField, Button, CircularProgress, Modal} from '@mui/material'
import {Email} from '@mui/icons-material'
import emailjs from '@emailjs/browser'
import NavBar from './navbar/NavBar'
import Footer from './navbar/Footer'


const Contact = () => {
  const theme = useTheme();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const [heading, setHeading] = useState("");
  const [alertMessage, setAlertMessage] = useState("");

  const sendMail = async ()=>{
    const mailDetails = {
      from_name : name,
      sendermail : email,
      message : message,
      subject : subject,
    }

    if(name === "" || email === "" || subject === "" || message === ""){
      setHeading("Alert");
      setAlertMessage("Oopzz! you missed some fields. please fill all before submit.");
      setModal(true);
    }
    else{
      setLoading(true);
      await emailjs.send("service_w513pof", "template_e21cnmq", mailDetails, "Qp8qYJQ1cXC0C0map").then((res)=>{
        setLoading(false)
        setHeading("Success");
        setAlertMessage("Dear " + name + ", your message successfully sended. please be in touch with your email. Thanks for messaging to Me.");
        setModal(true);
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      });
    }
  }

  const modalBoxStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    maxWidth : 350,
    p: 4,
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
                  <Button variant='contained' sx={{mt : 4, width : 130, background : theme.components.MuiButton, color : theme.components.MuiFormHelperText}} onClick={()=>sendMail()}>{ loading ? <CircularProgress size={25}/> : 'Send' }</Button>
                </Box>
                <Modal
                  open={modal}
                  onClose={()=>setModal(false)}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={modalBoxStyle}>
                    <Typography id="modal-modal-title" variant="h6" component="h2" className='textSecondry'>
                      {heading}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2, fontSize : 15 }} className='textPrimary'>
                      {alertMessage}
                    </Typography>
                  </Box>
                </Modal>
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
                    <Typography><Email /> hjasdajs</Typography>
                    </Box>
                  </Box> 
                </Box>
              </Container>
            </Box>
          </Box>
          <Footer />
        </Box>
      </Box>

    </Box>
  )
}

export default Contact