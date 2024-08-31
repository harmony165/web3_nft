import React from "react";
import { Box } from "@mui/material";
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';


const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  color: "white",
  backgroundColor: 'black',
  border: `none`,
  borderRadius: "25px",
  margin: "20px 0px",
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
  padding: "20px 10px",
  borderRadius: "25px",

  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderRadius: "25px",

  borderBottom: '1px solid black',
  padding: "0px 40px 40px 40px",
  backgroundColor: 'black',
  color: "white"
}));



const FAQ = ({ data }) => {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };


  return (
    <section id="FAQ">
      <div className="text-container">

        <Box p={2} sx={{ textAlign: "center" }}>
          <h1 style={{ paddingBottom: "20px", borderBottom: "2px solid yellow", borderStyle: "outset" }} >FAQ.</h1>
        </Box>

        <Box p={2}>
          <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
            <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
              <Typography variant="h4" color="white" sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>1. What is Earthereum Treasures NFT? {expanded === 'panel1' ? <ExpandLessIcon sx={{ fontSize: "30px" }} /> : <ExpandMoreIcon sx={{ fontSize: "30px" }} />}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body">
                Earthereum Treasures NFT is an Upcoming NFT Brand, where all the NFTs are designed and created by AI scripts made by Earthereum Treasures.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
            <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
              <Typography variant="h4" color="white" sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>2. How many Earthereum Treasures can I mint ? {expanded === 'panel2' ? <ExpandLessIcon sx={{ fontSize: "30px" }} /> : <ExpandMoreIcon sx={{ fontSize: "30px" }} />}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body">
                Everyone can mint from 1 up to 10 Earthereum Crystals at once so we can reduce the gas fees and increase the number of holders.

              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
            <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
              <Typography variant="h4" color="white" sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>3. How to view my NFTs ? {expanded === 'panel3' ? <ExpandLessIcon sx={{ fontSize: "30px" }} /> : <ExpandMoreIcon sx={{ fontSize: "30px" }} />}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body">
                Once minted, simply go into your OpenSea account to view your NFTs.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
            <AccordionSummary aria-controls="panel4d-content" id="pane4d-header">
              <Typography variant="h4" color="white" sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>4. What are the Benefits of Owning Earthereum Treasures ? {expanded === 'panel4' ? <ExpandLessIcon sx={{ fontSize: "30px" }} /> : <ExpandMoreIcon sx={{ fontSize: "30px" }} />}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body">
                Host Events on Earthereum Treasures Community Hall on the Metaverse.<br/>
                Discounts on Upcoming new Projects and early access.<br/>
                Vote on the Community Treasure chest.<br/>
                Own Earthereum Crystals NFT and Claim Free + Gas AI generated Earthereum Landscape NFT.<br/>
                Propose to your loved ones and use it as a Family Heirloom.<br/>
                NFT Giftable.<br/>
                And Many more utilities to come.<br/>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
            <AccordionSummary aria-controls="panel5d-content" id="pane5d-header">
              <Typography variant="h4" color="white" sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>5. What is Earthereum Treasures Convention Hall ? {expanded === 'panel5' ? <ExpandLessIcon sx={{ fontSize: "30px" }} /> : <ExpandMoreIcon sx={{ fontSize: "30px" }} />}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body">
              Earthereum Treasures NFT will acquire land on the Metaverse and create a convencion hall for Virtual Parties, Weddings, Events, Exhibition and more.<br/>
Our Holders get to use the Land free of cost to Host any events as they please.<br/>
You can use any Avatar that you Own in the Metaverse to access this land provided you own at least 1 Earthereum Crystals NFT.<br/>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
      </div>

    </section>
  );
};

export default FAQ;
