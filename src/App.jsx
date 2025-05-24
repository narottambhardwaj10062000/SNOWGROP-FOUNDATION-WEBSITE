import './App.css'
import { Container, createTheme, Typography, Box } from "@mui/material";
import Navbar from './components/Navbar';
import BannerImage from "./assets/HomePageBannerImage.png";

export const theme = createTheme({

  palette: {

    background: {
      default: "#BDDDFC",
    }
  
  },

});

function App() {

 

  

  return (
    <Box sx={{ bgcolor: theme.palette.background.default, width: "100vw" }}>
      
      {/* Navbar */}
      <Navbar />

      {/* Banner */}
      <Box sx={{ position: "relative" }}> 
        
          <img src={BannerImage} alt='banner-image' style={{ width: "100vw", filter: "brightness(69%)" }} />

          <Typography sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)"  }} variant='h4'>
            SNOWDROP FOUNDATION
          </Typography>
       
      </Box>





    </Box>
  )
}

export default App
