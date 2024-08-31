import React from "react";
import { Typography, Grid } from "@mui/material";

import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import discordLight from "../assets/images/discord-light.svg";
import etherScan from "../assets/images/etherscan.svg";
import etLogo from "../assets/images/etLogo.png";

import openSea from "../assets/images/opensea.svg";
import twit from "../assets/images/twit.png";
import insta from "../assets/images/insta.png";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});




const Footer = ({ data }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <footer>
      <div className="row">
        <div className="twelve columns">
          <Grid container spacing={2} sx={{ display: "flex", flexGrow: "1", alignItems: "center", justifyContent: "space-between" }}>
            <Grid item xs={12} md={4}>
              <Box sx={{ '& > :not(style)': { m: 1 } }}>
                <a target="_blank" href="https://discord.gg/H8j5cSFpdh">
                  <Fab size="small" color="secondary" aria-label="discord">
                    <img src={discordLight} width="30px" />
                  </Fab>
                </a>
                <Fab size="small" color="secondary" aria-label="etherScan">
                  <img src={etherScan} width="30px" />
                </Fab>
                <Fab size="small" color="secondary" aria-label="opensea">
                  <img src={openSea} width="30px" />
                </Fab>
                <a target="_blank" href="https://www.instagram.com/earthereum_nfts/">
                  <Fab size="small" color="secondary" aria-label="instagram">
                    <img src={insta} width="30px" />
                  </Fab>
                </a>
                <a target="_blank" href="https://twitter.com/Earthereum_NFTs">
                  <Fab size="small" color="secondary" aria-label="twitter">
                    <img src={twit} width="30px" />
                  </Fab>
                </a>
              </Box>
            </Grid>
            <Grid item xs={12} md={4} sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
              <div >
                <img src={etLogo} width="80px" height="80px"style={{borderRadius:"50%"}} ></img>
                {/* <Typography variant="h5" color="white" style={{ marginTop: "10px", cursor: "pointer" }} onClick={handleClickOpen}>
                  Terms & Conditions
                </Typography>
                <Dialog
                  open={open}
                  TransitionComponent={Transition}
                  keepMounted
                  onClose={handleClose}
                  aria-describedby="alert-dialog-slide-description"
                >
                  <DialogTitle>{"Terms & Conditions"}</DialogTitle>
                  <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                      <Typography variant="h5" color="black" style={{ marginTop: "10px", cursor: "pointer" }} onClick={handleClickOpen}>
                        Let Google help apps determine location. This means sending anonymous
                        location data to Google, even when no apps are running.Let Google help apps determine location. This means sending anonymous
                        location data to Google, even when no apps are running.
                        Let Google help apps determine location. This means sending anonymous
                        location data to Google, even when no apps are running.
                        Let Google help apps determine location. This means sending anonymous
                        location data to Google, even when no apps are running.
                        Let Google help apps determine location. This means sending anonymous
                        location data to Google, even when no apps are running.
                        Let Google help apps determine location. This means sending anonymous
                        location data to Google, even when no apps are running.
                        Let Google help apps determine location. This means sending anonymous
                        location data to Google, even when no apps are running.
                        Let Google help apps determine location. This means sending anonymous
                        location data to Google, even when no apps are running.
                        Let Google help apps determine location. This means sending anonymous
                        location data to Google, even when no apps are running.
                        Let Google help apps determine location. This means sending anonymous
                        location data to Google, even when no apps are running.
                        Let Google help apps determine location. This means sending anonymous
                        location data to Google, even when no apps are running.
                      </Typography>

                    </DialogContentText>
                  </DialogContent>

                </Dialog> */}
              </div>


            </Grid>
            <Grid item xs={12} md={4} sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}>

              <Typography variant="h5" color="white" sx={{fontSize:"16px", marginTop: "10px" }}> © Earthereum Treasures 2021 </Typography>

            </Grid>
          </Grid>

        </div>
        <div id="go-top">
          <a className="smoothscroll" title="Back to Top" href="#home">
            <i className="icon-up-open"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
