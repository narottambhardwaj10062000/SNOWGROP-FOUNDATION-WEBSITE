import { useState } from 'react'
import './App.css'
import { Container, createTheme, Typography, Box } from "@mui/material";
import Navbar from './components/Navbar';

function App() {

  const theme = createTheme({

    palette: {

      background: {
        default: "#BDDDFC",
      }
    
  },

  });

  return (
    <Box sx={{ bgcolor: theme.palette.background.default, height: "100vh", width: "100vw" }}>
      
      {/* Navbar */}
      <Navbar />




    </Box>
  )
}

export default App
