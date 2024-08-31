import React from "react";
import { Box } from "@mui/material";
import { Typography } from "@material-ui/core";
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import stars2 from '../assets/images/stars2.jpg'




const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  color: "#0000",
  borderRadius: "20px",
  border: "1px solid white",
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: 'black',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),

  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(5),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
  backgroundImage: `url(${stars2})`,

  color: "white"
}));

const Roadmap = ({ data }) => {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <section id="Earthmap" style={{
      backgroundImage: `url(${stars2})`, height: "100%", backgroundAttachment: "fixed",
      backgroundPosition: "center",
      backgroundRepeat: "no - repeat",
      backgroundSize: "cover",
    }}>
      <div style={{ textAlign: "center", margin: "20px 20px" }}>
        <h1 style={{ paddingBottom: "20px", borderBottom: "2px solid yellow", borderStyle: "outset" }}>Earth Map</h1>
      </div>

      <div className="nine columns main-col">
        <div className="row item">
          {/* <div className="twelve columns">{education}</div> */}
        </div>
      </div>

      <div className="ten columns flex-container" style={{ paddingBottom: "40px" }}>
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography variant="h1" color="primary" >Phase 1</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body" >
            <ul style={{listStyleType:"circle"}}>
              <li>
              <h4>Earthereum Crystals Minting Process.</h4><br/>

              The Minting Process of all 8,888 Earthereum Crystals will begin.<br/>


              Charity First.<br/>

              We will donate a % to Charity on behalf of Earthereum Treasures Community.<br/>

              </li>
              <li>
              <h4>Green Initiative.</h4><br/>
              At the End of the Public sale , We will be Partnering with Team seas organization to clean more than 50,000 Pounds of trash in the sea.
              Team Seas is run by Mr.Beast (Youtuber) and Our community of Earthereum Treasures will support the cause by Donating and Joining the cause.
              Each Unique Holder of the Earthereum Treasures NFT will be a part of Cleaning 5 Pounds of trash each.<br/>
              </li>

              <li>
              <h4>The Giveaways For the Community will begin.</h4><br/>

              We will Have a live Random Selection for our Holders , Each one has a Fair and Square chance to win the Giveaways.<br/>

              Free Airdrops to most loyal and active members from our next Launch.<br/>

              3 Lucky winners +1 each will be sent on a Vacation to Experience the Nature up close and personal. Fully Accommodated.<br/>

              Own Earthereum Crystals NFT and Claim Free + Gas AI generated Landscape NFT.
              Worth .15 ETH Free.<br/>

              And Expect more random surprises and events.<br/>
              </li>

              <li>
              <h4>Treasure Chest (Community Wallet)</h4><br/>
              50% of the Royalties will go into the Treasure Chest of the Community to keep growing the project. We let the Community Vote on the Upcoming Phases of the Project.<br/>

              50% Goes for maintaining the Servers and Floor Sweep of the Project to keep the Floor Price moving up substantially.<br/>
              </li>
              </ul>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
          <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
            <Typography variant="h1" color="primary">Phase 2</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body" >
              Coming soon...

            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography variant="h1" color="primary">Phase 3</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body">
              Coming soon...
            </Typography>
          </AccordionDetails>
        </Accordion>

      </div>


    </section>
  );
};

export default Roadmap;
