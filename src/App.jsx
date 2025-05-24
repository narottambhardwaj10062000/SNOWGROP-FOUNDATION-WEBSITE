import './App.css'
import { createTheme, Box, Grid, Typography } from "@mui/material";
import Navbar from './components/Navbar';
import Banner from "./components/Banner";
import AboutUs from "./components/AboutUs"
import FoundersCard from './components/FoundersCard';
import { useState } from 'react';
import ProjectCard from './components/ProjectCard'

export const theme = createTheme({

  palette: {

    background: {
      default: "#BDDDFC",
    }
  
  },

});

function App() {

  let [founders, setFounders] = useState([{name: "Rishikesh Pradhan", designation: "DIRECTOR"}, {name: "Harsh Kant", designation: "CEO"}, {name: "Hatif Khan", designation: "TREASURER"}, {name: "Ankit Singh", designation: "TREASURER" }]);
  let [projects, setProjects] = useState(["MISSION UMMID", "2022", "2023", "2024"]);

  return (
    <Box sx={{ bgcolor: theme.palette.background.default, width: "100vw", paddingBottom: "80px" }}>
      
      {/* Navbar */}
      <Navbar />

      {/* Banner */}
      
    <Banner/>
    <AboutUs/>

          
    {/* all founders */}

    <Box px={2} sx={{display:'flex', justifyContent:'center'}}> 
      <Grid container spacing={6}>
        {
          founders?.map((data, index) => (
            <Grid item >
              <FoundersCard data={data} key={index} />
            </Grid>
          ))
        }

      </Grid>
    </Box>
    
    {/* all project */}
    <Typography variant='h4' sx={{mt:"50px", textAlign: "center"}}>
        Our Impact Areas
    </Typography>
    <Box px={2} sx={{display:'flex', justifyContent:'center'}}> 
      <Grid container spacing={2} sx={{ mt: 4 }} >
      {
        projects?.map((projectName) => (
          <Grid item>
            <ProjectCard name={projectName} key={projectName} />
          </Grid>
        ))
      }
      </Grid>
    </Box>

    {/* all project */}
    <Typography variant='h4' sx={{mt:"50px", textAlign: "center"}}>
        Our Project
    </Typography>
    <Box px={2} sx={{display:'flex', justifyContent:'center'}}> 
      <Grid container spacing={2} sx={{ mt: 4 }} >
      {
        projects?.map((projectName) => (
          <Grid item>
            <ProjectCard name={projectName} key={projectName} />
          </Grid>
        ))
      }
      </Grid>
    </Box>



    </Box>
  )
}

export default App
