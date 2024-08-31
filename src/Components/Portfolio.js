import React from "react";
import { Box,Grid } from '@mui/material';
import stars2 from '../assets/images/stars2.jpg';
import diam from '../assets/images/diam.gif';
import eggs from '../assets/images/eggs.gif';
import kryp from '../assets/images/kryp.gif';

import noise from '../assets/images/noise.gif';

import a10 from '../assets/images/10.png';
import a28 from '../assets/images/28.png';
import a30 from '../assets/images/30.png';
import a22 from '../assets/images/22.png';

const Portfolio = ({ data }) => {
  if (data) {
    var projects = data.projects.map(function (projects) {
      var projectImage = "images/portfolio/" + projects.image;
      return (
        <div key={projects.title} className="columns portfolio-item">
          <div className="item-wrap">
            <a href={projects.url} title={projects.title}>
              <img alt={projects.title} src={projectImage} />
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>{projects.title}</h5>
                  <p>{projects.category}</p>
                </div>
              </div>
              <div className="link-icon">
                <i className="fa fa-link"></i>
              </div>
            </a>
          </div>
        </div>
      );
    });
  }

  return (
    <section id="portfolio" style={{
      backgroundImage: `url(${stars2})`, height: "100%", backgroundAttachment: "fixed",
      backgroundPosition: "center",
      backgroundRepeat: "no - repeat",
      backgroundSize: "cover",
    }}>
      <div className="row">
        <div className="twelve columns collapsed" >
        <Box p={2} sx={{textAlign:"center"}}>
            <h2 style={{paddingBottom:"20px",borderBottom:"2px solid yellow",borderStyle:"outset"}}>ABOUT THE ART</h2>
            <ul style={{paddingTop:"20px"}}>
              <li><h3>- Crystals -</h3><br/><p> Earthereum Crystals are made by a very well known Digital artist with the knowledge of Artificial Intelligence to Design and Create Generative Crystal NFTs.</p></li>
              <li><h3>- Background -</h3><br/><p> Backgrounds for these crystals are generative Northern Lights AKA (Aurora) and Infinity sea. These are created randomly and generated uniquely for each and every NFT.</p></li>
              <li><h3>- Comet -</h3><br/><p>  Earthereum Comet is a beautiful bug which has a rare and random appearance in the NFTs in and Around the Crystals. Yet, It only appears in Limited NFTs.</p></li>
             
              <li><h3>- Types of Crystals -</h3><br/>
              <p>1. Diamonds - 10 types of Diamonds.<br/>
                2. Dragon Egg - 3 types of Earthereum Dragon egg Crystals.<br/>
                3. Kryptonite - Multiple random value/shape Generated types of Kryptonites.<br/>
                4. Noise - Multiple random value/shape Generated types of Noise Crystals.<br/></p></li>
                <li>
              <h4> Each and every NFT is Unique and Beautiful, But some are more rare than others.<br/></h4></li>
            </ul>


          </Box>
          <h4 style={{textAlign:"center"}}>CHECK OUT SOME OF OUR ASSETS.</h4>
          
          <Box p={2} sx={{ display: "flex", flexGrow: "1", justifyContent: "center" }}>
            

            <Grid container spacing={2} sx={{backgroundColor:"inherit",textAlign:"center"}}>
            <Grid item xs={12} sm={6} md={3}>
            <img src={diam} height="100%" />
            <h3>DIAMOND</h3>
            </Grid> 
            <Grid item xs={12} sm={6} md={3}>
            <img src={eggs} height="100%" />
            <h3>DRAGON EGG</h3>

            </Grid> 
            <Grid item xs={12} sm={6} md={3}>
            <img src={kryp} height="100%" />
            <h3>KRYPTONITE</h3>

            </Grid> 
            <Grid item xs={12} sm={6} md={3}>
              
            <img src={noise} height="100%" />
            <h3>NOISE</h3>

            </Grid> 
          </Grid>
          </Box>

        </div>
      </div>
    </section>
  );
};

export default Portfolio;
