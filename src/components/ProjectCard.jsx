import React from 'react'
import projectImage from '../assets/projectImage.png'
import { Card, CardContent, Typography } from '@mui/material'


const ProjectCard = ({ name }) => {
  return (
    <Card sx={{height:"400px", width:"300px"}}>

        <img src={projectImage} alt='project-Image' height="75%" width="100%" style={{borderRadius:"3px"}} />

        <CardContent sx={{display:"flex", flexDirection:"column", alignItems:"center"}}>
          <Typography variant='h5'>
              {name}
          </Typography>
        </CardContent>
    </Card>
  )
}

export default ProjectCard