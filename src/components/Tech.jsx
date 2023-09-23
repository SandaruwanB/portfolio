import React from 'react'
import {Box, CssBaseline, Grow, Container, Typography, useTheme, Grid} from '@mui/material'
import { FaLaravel, FaReact } from 'react-icons/fa'
import { SiCplusplus, SiCsharp, SiDart, SiDjango, SiDotnet, SiElectron, SiExpo, SiFirebase, SiFlutter, SiMongodb, SiMui, SiMysql, SiPhp, SiPython } from 'react-icons/si'
import { DiJava } from 'react-icons/di'
import { BiLogoBootstrap, BiLogoCss3, BiLogoHtml5, BiLogoJavascript, BiLogoSass } from 'react-icons/bi'
import { TbFileTypeXml } from 'react-icons/tb'
import NavBar from './navbar/NavBar'
import Footer from './navbar/Footer'

const Tech = () => {
    const theme = useTheme();

    const frameworks = [
        {
            name : 'Laravel',
            icon : <FaLaravel fontSize={30}/>
        },
        {
            name : 'Django',
            icon : <SiDjango fontSize={30} />
        },
        {
            name : 'React',
            icon : <FaReact fontSize={30}/>
        },
        {
            name : 'React-Native',
            icon : <FaReact fontSize={30} />
        },
        {
            name : 'Expo',
            icon : <SiExpo fontSize={30} />
        },
        {
            name : 'Flutter',
            icon : <SiFlutter fontSize={30} />
        },
        {
            name : 'Electron',
            icon : <SiElectron fontSize={30} />
        },
        {
            name : 'DotNet',
            icon : <SiDotnet fontSize={30} />
        }
    ];

    const languages = [
        {
            name : 'PHP', 
            icon : <SiPhp fontSize={30}/>
        },
        {
            name : 'Java',
            icon : <DiJava fontSize={30} />
        },
        {
            name : 'Python',
            icon : <SiPython fontSize={30} />
        },
        {
            name : 'CSharp',
            icon : <SiCsharp fontSize={30} />
        },
        {
            name : 'C++',
            icon : <SiCplusplus fontSize={30} />
        },
        {
            name : 'JavaScript',
            icon : <BiLogoJavascript fontSize={30} />
        },
        {
            name : 'Dart',
            icon : <SiDart fontSize={30} />
        }
    ];

    const ui = [
        {
            name : 'HTML5',
            icon : <BiLogoHtml5 fontSize={30} />
        },
        {
            name : 'CSS',
            icon : <BiLogoCss3 fontSize={30} />
        },
        {
            name : 'XML',
            icon : <TbFileTypeXml fontSize={30} />
        },
        {
            name : 'SASS',
            icon : <BiLogoSass fontSize={30} />
        },
        {
            name : 'Bootstrap',
            icon : <BiLogoBootstrap fontSize={30} />
        },
        {
            name : 'MUI',
            icon : <SiMui fontSize={30} />
        }
    ];

    const db = [
        {
            name : 'MySQL',
            icon : <SiMysql fontSize={30} />
        },
        {
            name : 'MongoDB',
            icon : <SiMongodb fontSize={30} />
        },
        {
            name : 'Firebase',
            icon : <SiFirebase fontSize={30} />
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
                                    Technologies & Projects
                                </Typography>
                            </Box>
                            <Typography sx={{mt : 1, letterSpacing : 2, fontSize : '2rem', fontWeight : 'bold'}} className='textSecondry'>
                                My Technologies
                            </Typography>
                            <Box sx={{mt : 5}}>
                                <Typography sx={{fontSize : '1.2rem', fontWeight : 600, letterSpacing : 1}} className='textPrimary'>
                                    Frameworks
                                </Typography>
                                <Grid sx={{ mt :1}} spacing={1} container>
                                    {frameworks.map((item, index)=>(
                                        <Grid item lg={3} xl={3} md={3} sm={4} xs={12} key={index} >
                                            <Box sx={{border : `1px solid ${theme.palette.primary.dark}`, borderRadius : 1, display : 'flex', justifyContent : 'center', alignItems : 'center', flexDirection : 'column-reverse', p : 2}}>
                                                <Box>
                                                    <Typography sx={{color : theme.components.MuiListItem}}>{item.name}</Typography>
                                                </Box>
                                                <Box>
                                                    {item.icon}
                                                </Box>
                                            </Box>
                                        </Grid>
                                    ))}
                                </Grid>
                            </Box>
                            <Box sx={{mt : 8}}>
                                <Typography sx={{fontSize : '1.2rem', fontWeight : 600, letterSpacing : 1}} className='textPrimary'>
                                    Programming Languages
                                </Typography>
                                <Grid sx={{ mt :1}} spacing={1} container>
                                    {languages.map((item, index)=>(
                                        <Grid item lg={3} xl={3} md={3} sm={4} xs={12} key={index} >
                                            <Box sx={{border : `1px solid ${theme.palette.primary.dark}`, borderRadius : 1, display : 'flex', justifyContent : 'center', alignItems : 'center', flexDirection : 'column-reverse', p : 2}}>
                                                <Box>
                                                    <Typography sx={{color : theme.components.MuiListItem}}>{item.name}</Typography>
                                                </Box>
                                                <Box>
                                                    {item.icon}
                                                </Box>
                                            </Box>
                                        </Grid>
                                    ))}
                                </Grid>
                            </Box>
                            <Box sx={{mt : 8}}>
                                <Typography sx={{fontSize : '1.2rem', fontWeight : 600, letterSpacing : 1}} className='textPrimary'>
                                    UI Design
                                </Typography>
                                <Grid sx={{ mt :1}} spacing={1} container>
                                    {ui.map((item, index)=>(
                                        <Grid item lg={3} xl={3} md={3} sm={4} xs={12} key={index} >
                                            <Box sx={{border : `1px solid ${theme.palette.primary.dark}`, borderRadius : 1, display : 'flex', justifyContent : 'center', alignItems : 'center', flexDirection : 'column-reverse', p : 2}}>
                                                <Box>
                                                    <Typography sx={{color : theme.components.MuiListItem}}>{item.name}</Typography>
                                                </Box>
                                                <Box>
                                                    {item.icon}
                                                </Box>
                                            </Box>
                                        </Grid>
                                    ))}
                                </Grid>
                            </Box>
                            <Box sx={{mt : 8}}>
                                <Typography sx={{fontSize : '1.2rem', fontWeight : 600, letterSpacing : 1}} className='textPrimary'>
                                    Database Design
                                </Typography>
                                <Grid sx={{ mt :1}} spacing={1} container>
                                    {db.map((item, index)=>(
                                        <Grid item lg={3} xl={3} md={3} sm={4} xs={12} key={index} >
                                            <Box sx={{border : `1px solid ${theme.palette.primary.dark}`, borderRadius : 1, display : 'flex', justifyContent : 'center', alignItems : 'center', flexDirection : 'column-reverse', p : 2}}>
                                                <Box>
                                                    <Typography sx={{color : theme.components.MuiListItem}}>{item.name}</Typography>
                                                </Box>
                                                <Box>
                                                    {item.icon}
                                                </Box>
                                            </Box>
                                        </Grid>
                                    ))}
                                </Grid>
                            </Box>
                        </Container>
                    </Grow>
                </Box>
                <Footer />
            </Box>
        </Box>
    </Box>
  )
}

export default Tech