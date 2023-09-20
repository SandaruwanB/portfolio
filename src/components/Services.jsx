import React from 'react'
import { Box, CssBaseline, Container, useTheme, Typography, Grow, Grid, IconButton } from '@mui/material'
import NavBar from './navbar/NavBar'


const Services = () => {
  const theme = useTheme();

  const services = [
    {
      number : '01',
      title : 'Web Development',
      content : "I'm skilled in web development, which means I design and build websites and web applications for the internet.I also work on making websites interactive and user-friendly.Web development is crucial in today's digital world, helping businesses and individuals reach a wide online audience and offer their content or services",
    },
    {
      number : '02',
      title : 'Android Development',
      content : 'I have experience in Android development, which involves creating mobile applications for Android devices.I also work on ensuring these apps are compatible with various Android devices and versions.Android development is vital in the mobile app industry, allowing businesses and individuals to connect with a vast user base through their smartphones and tablets',
    },
    {
      number : '03',
      title : 'API Integration',
      content : 'I have expertise in API integration, which involves connecting different software systems and services to exchange data and functionality seamlessly. In this role, I work with various programming languages and technologies to enable smooth communication between applications. My responsibilities include designing, implementing, and maintaining these integrations to enhance the functionality of web and mobile applications. API integration is crucial in modern software development, as it allows for the efficient sharing of data and services across platforms, improving user experiences and operational efficiency',
    },
    {
      number : '04',
      title : 'Desktop Application Development',
      content : 'I possess proficiency in desktop application development, which involves creating software applications that run on desktop computers.In this role, I utilize programming languages to design and develop robust and user-friendly desktop applications. My responsibilities include designing graphical user interfaces (GUIs), implementing core functionalities, and ensuring compatibility with various operating systems, such as Windows, macOS, and Linux. Desktop application development is essential for delivering powerful, standalone software solutions tailored to meet specific user needs and business requirements',
    },
    {
      number : '05',
      title : 'Database Design',
      content : 'I excel in database design, a crucial aspect of software development that involves creating efficient and organized data structures. In this role, I design and optimize databases using tools like SQL, NoSQL, or relational database management systems (RDBMS). My expertise includes defining data models, establishing relationships between tables, and ensuring data integrity and security. I also specialize in performance tuning to enhance database responsiveness and scalability. Effective database design is fundamental to the functionality and reliability of software applications, making it an integral part of modern information systems',
    },
    {
      number : '06',
      title : 'System Maintaince',
      content : 'I have a strong background in system maintenance, which involves the ongoing management and upkeep of computer systems, networks, and infrastructure. In this role, my responsibilities include monitoring system performance, applying updates and patches, troubleshooting issues, and ensuring the security and stability of IT environments. I am skilled in identifying and resolving hardware and software issues promptly to minimize downtime and maintain operational efficiency. System maintenance is critical in ensuring the reliability and availability of technology resources, making it an essential component of effective IT management',
    }
  ]

  return (
    <Box>
      <CssBaseline />
      <NavBar />
      <Box sx={{display : 'flex'}}>
        <Box
          component={'main'}
          sx={{flexGrow : 1, minHeight : '100vh', width : '100%', pl : { md : '0', sm : '0', lg : '450px' }}}
        >
          <Box sx={{height : '100%', width : '100%', background : theme.palette.primary.main, pt : 10, pb : 10}}>
            <Grow in={true}>
              <Container maxWidth="lg" sx={{width : {xl : '70%'}}}>
                <Box sx={{display : 'block' }}>                
                  <Typography sx={{pl : 3, pr : 3, pt : 1, pb : 1, background : theme.components.MuiBadge, display : 'inline-block', fontSize : '0.8rem', fontWeight : 'bold'}}>
                    Services
                  </Typography>
                </Box>
                <Typography sx={{mt : 1, letterSpacing : 2, fontSize : '2rem', fontWeight : 'bold'}} className='textSecondry'>
                  My Services
                </Typography>
                <Grid container spacing={4} sx={{mt : 4}}>

                  {services.map((value,index)=>(
                    <Grid item lg={4} xs={12} sm={6} md={6} xl={4} key={index}>
                      <Box sx={{width : '100%', background : theme.palette.secondary.main, p : 3, border : `1px solid ${theme.palette.primary.dark}`, minHeight : 280, cursor : 'pointer'}}>
                        <IconButton sx={{background : 'rgba(0,0,0,0.40)'}}>
                          {value.number}
                        </IconButton>
                        <Typography sx={{mt : 2, fontWeight : '700', letterSpacing : 2}} className='textPrimary'>
                          {value.title}
                        </Typography>
                        <Typography variant='body2' sx={{mt : 2, letterSpacing : 0.5, color  : theme.components.MuiListItem}} className='textSecondry'>
                          {(value.title).length > 20 ? value.content.substring(0, 150) : value.content.substring(0, 200)}...
                        </Typography>
                        <Box sx={{mt : 3, cursor : 'pointer'}}>
                          <Typography variant='body1'>
                            Show More...
                          </Typography>
                        </Box>
                      </Box>
                    </Grid>
                  ))}

                </Grid>
              </Container>
            </Grow>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Services