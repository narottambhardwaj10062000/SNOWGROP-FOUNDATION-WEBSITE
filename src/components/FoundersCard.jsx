import { Box, Card, CardContent, IconButton, Typography } from '@mui/material'
import React, { useState } from 'react'
import profileIcon from "../assets/profileImage.png";
import { TiSocialLinkedin } from "react-icons/ti";
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { SlSocialInstagram } from "react-icons/sl";


const FoundersCard = ({ data }) => {

  let [icons, setIcons] = useState([TiSocialLinkedin, TiSocialFacebook, TiSocialTwitter, SlSocialInstagram]);

  return (
    <Card sx={{ height: "300px", width: "240px", display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>

        {/* image */}
        <Box sx={{ height: "90px", width: "90px", borderRadius: "50%" }}>
            <img src={profileIcon} alt='profile-icon' style={{ height: "100%", width: "100%"}} />
        </Box>

        {/* content */}
        <CardContent sx={{ display: "flex", flexDirection: "column", alignItems: "center", pb: "0px"}} >
          <Typography variant='h5'>
              {data?.name}
          </Typography>

          <Typography>
            {data?.designation}
          </Typography>

          <Box sx={{ mt: "15px" }}>

            {/* social icons  */}
            {
              icons?.map((Icon, index) => (
                <IconButton>
                  <Icon />
                </IconButton>
              ))
            }

          </Box>

          


        </CardContent>

        

    </Card>
  )
}

export default FoundersCard
