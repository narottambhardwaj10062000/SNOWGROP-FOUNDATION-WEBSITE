import { Box, Typography } from '@mui/material'


const AboutUs = () => {
  return (
    <Box sx={{padding: "3rem"}}>
        <Typography variant='h4' sx={{textAlign: "center", marginBottom: "1rem"}}>
            About Us
        </Typography>

        <Typography variant='body1'>
        
Snowdrop Foundation is a government registered NGO formed by students of Banaras Hindu University, 
Uttar Pradesh, who envision to reconnect and socialize the detached children living in the slum areas of 
Varanasi. Our primary aim is to educate underprivileged children as well as foster their overall development. 
Besides providing regular teaching to 150+ kids in slums, we also conduct drives that not only focus on the growth 
and nurturing of the children but also the betterment of the society (Food and clothes distribution, sports, footwear 
drive etc). These children are the bright stars of the future, so we lend a hand to help them accomplish their goals.

        </Typography>
    </Box>
  )
}

export default AboutUs