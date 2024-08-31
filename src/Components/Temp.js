import { Typography } from '@mui/material'
import React from 'react'
import { Box } from '@mui/material';
import stars2 from '../assets/images/stars2.jpg';
import a26 from '../assets/images/26.png'
import aboutUs from "../assets/images/aboutUs.gif"

const Temp = () => {
    return (
        <section id="mint" style={{
            backgroundImage: `url(${stars2})`, height: "100%", backgroundAttachment: "fixed",
            backgroundPosition: "center",
            backgroundRepeat: "no - repeat",
            backgroundSize: "cover",
        }} >
            <Box m={2} sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", backgroundColor: "none", border: "2px solid #ffd500", borderRadius: "20px", boxShadow: "5px 5px #b59700, 10px 10px #4a3e00, 15px 15px #2e2600" }}>

                <Typography variant="h1"   py={5} sx={{textAlign:"center"}}>Mint Earthereum Treasure</Typography>
                <img src={aboutUs} width="300px" style={{border:"5px solid black",borderRadius:"50%"}} />
                <Typography variant="h3" color="primary" p={6}>Coming soon...</Typography>


            </Box>
        </section>
    )
}

export default Temp
