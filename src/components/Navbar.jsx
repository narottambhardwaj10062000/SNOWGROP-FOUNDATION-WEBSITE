import { AppBar, IconButton, Toolbar, Box, Typography, List, ListItem,  } from '@mui/material'
import React, { useState } from 'react'
import NavBarLogo from "../assets/logo.png";
import {theme} from "../App";

const Navbar = () => {


  let [links, setLinks] = useState(["About Us", "Our Team", "Our Campaigns", "Be a Volunteer", "Support Us"])


  return (

    <>
    
      <AppBar position='static' sx={{ bgcolor: theme.palette.background.default, height: "100px" }} >
          <Toolbar>

              <IconButton >
                  <Box>
                    <img src={NavBarLogo} style={{ width: "80px", height: "80px" }} />
                  </Box>
              </IconButton>

              <Typography variant="h3" sx={{ ml: "24px", color: "#384959" }}>
                SNOWDROP FOUNDATION
              </Typography>

          </Toolbar>
      </AppBar>

      <Box sx={{ width: "100vw", bgcolor: "#88BDF2" }}>

        <Toolbar>
        

          {
             links.map((link) => (
                <ListItem key={link} sx={{ color: "black" }}>
                  
                    {link}
                  
                </ListItem>
             ))
          }

        </Toolbar>
        

      </Box>

    </>

  )
}

export default Navbar