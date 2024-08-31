import React from "react";

import stars2 from '../assets/images/stars2.jpg'

import Typography from '@mui/material/Typography';
import { Grid, Box } from '@mui/material';



const Specs = ({ data }) => {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };


  return (
    <section id="testimonials" style={{
      backgroundImage: `url(${stars2})`, height: "100%", backgroundAttachment: "fixed",
      backgroundPosition: "center",
      backgroundRepeat: "no - repeat",
      backgroundSize: "cover",
    }}>
      <div className="text-container">

        <div style={{ textAlign: "center", margin: "20px 20px" }}>
          <Typography variant="h1" sx={{paddingBottom:"20px",borderBottom:"2px solid yellow",borderStyle:"outset"}}>SPECS</Typography>
        </div>

        <Grid container justifyContent="space-around" p={3}>

          <Grid item m={1} py={10} px={2} xs={12} md={3} sx={{ display: "flex", flexDirection: "column", textAlign: "center", justifyContent: "center", border: "1px solid white " ,backgroundColor:"black"}}>
            <h2>UNIQUE</h2>
            <Typography variant="body">
            The Earthereum Crystals are 3D, generated by a custom-built algorithm and rendered via unbiased rendering with AI. Each NFT is Unique and Beautiful in its own ways.

            </Typography>
          </Grid>
          <Grid item m={1} py={10} px={2} xs={12} md={3} sx={{ display: "flex", flexDirection: "column", textAlign: "center", justifyContent: "center", border: "1px solid white ",backgroundColor:"black" }}>
            <h2 style={{color:"light-green"}}>GREEN INITIATIVE</h2>
            <Typography variant="body">
            
            </Typography>

          </Grid>
          <Grid item m={1} py={10} px={2} xs={12} md={3} sx={{ display: "flex", flexDirection: "column", textAlign: "center", justifyContent: "center", border: "1px solid white ",backgroundColor:"black" }}>
            <h2>COMMITTED</h2>
            <Typography variant="body">
            Our team is committed to remaining at the cutting edge of innovation while being transparent and active with the Community.
            </Typography>

          </Grid>
          <Grid item m={1} py={10} px={2} xs={12} md={3} sx={{ display: "flex", flexDirection: "column", textAlign: "center", justifyContent: "center", border: "1px solid white ",backgroundColor:"black"}}>
            <h2>BELIEF</h2>
            <Typography variant="body" align="center">
            "Trading Jpegs?"<br/>
            Well, We're Taking it up a notch. AI Generated , Family heirloom Jpegs that will be stored on the Ethereum Blockchain forever!
            </Typography>
          </Grid>
          <Grid item m={1} py={10} px={2} xs={12} md={3} sx={{ display: "flex", flexDirection: "column", textAlign: "center", justifyContent: "center", border: "1px solid white ",backgroundColor:"black" }}>
            <h2>GOAL</h2>
            <Typography variant="body" align="center">     
            Our goal is to create value to the NFTs and the Community. Sentimental as well as Financial Value.
            </Typography>
          </Grid>
          <Grid item m={1} py={10} px={2} xs={12} md={3} sx={{ display: "flex", flexDirection: "column", textAlign: "center", justifyContent: "center", border: "1px solid white " ,backgroundColor:"black"}}>
            <h2>METAVERSE</h2>
            <Typography variant="body" align="center">
            Free access to our Holders to host events on our Community's space on Sandbox Metaverse.
            </Typography>
          </Grid>

        </Grid>
      </div>

    </section>
  );
};

export default Specs;