import { Typography, Box } from "@mui/material";
import BannerImage from "../assets/HomePageBannerImage.png";


const Banner = () => {
  return (
    <Box sx={{ position: "relative" }}> 
        
          <img src={BannerImage} alt='banner-image' style={{ width: "100vw", filter: "brightness(69%)" }} />

          <Typography sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)"  }} variant='h4'>
            SNOWDROP FOUNDATION
          </Typography>
       
      </Box>
  )
}

export default Banner