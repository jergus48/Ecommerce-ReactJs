import {Paper,Container,Box,Typography} from '@material-ui/core'
import {Link } from 'react-router-dom'
import React from 'react'

const Footer = () => {
    const link= () => (window.location.replace("https://jergussnahnican.000webhostapp.com/"))
  return (
    <div>
        
        <Paper style={{backgroundColor: '#fafafa',cursor:'pointer'}} onClick={link} square variant="outlined">
        
            <Container maxWidth="lg">
                <Box
                    sx={{
                    flexGrow: 1,
                    justifyContent: "center",
                    display: "flex",
                    my:1
                    }}
                >
                    {/* //  <Link href="/">
                    //    <Image priority src="/Logo.svg" width={75} height={30} alt="Logo" />
                    //  </Link> */}
                </Box>

                <Box
                    sx={{
                    flexGrow: 1,
                    justifyContent: "center",
                    display: "flex",
                    mb: 2,
                    

                    }}
                >
                    <Typography variant="caption" color="initial">
                    Jergus ©2022. 
                    </Typography>
                </Box>
            </Container>
        </Paper>
    </div>
  )
}

export default Footer
