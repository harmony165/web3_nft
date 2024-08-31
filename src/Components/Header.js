import { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import React from "react";
import TypeWriter from "react-typewriter";
import { Grid } from '@mui/material';
import UnstyledButtonCustom from "./StyledButton";
import UnstyledButtonCustom2 from "./StyledButton2";
import discordLight from "../assets/images/discord-light.svg";
import etherScan from "../assets/images/etherscan.svg";
import openSea from "../assets/images/opensea.svg";
import twit from "../assets/images/twit.png";
import insta from "../assets/images/insta.png";
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import earthereum from "../assets/Video/earthereum.mp4"
import { connectWallet, getCurrentWalletConnected, tokenPrice } from "../utils/interact";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



const Header = ({ data }) => {


  const [walletAddress, setWallet] = useState("");
  const [status, setStatus] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [url, setURL] = useState("");

  useEffect(async () => {
    const { address, status } = await getCurrentWalletConnected();
    setWallet(address)
    setStatus(status);
    addWalletListener();
  }, []);

  const connectWalletPressed = async () => {
    const walletResponse = await connectWallet();
    setStatus(walletResponse.status);
    setWallet(walletResponse.address);

  };

  //  const handleTokenPriceClicked = async() => {
  //   const response = await tokenPrice();
  //   await console.log(response);
  // }

  function addWalletListener() {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", (accounts) => {
        if (accounts.length > 0) {
          setWallet(accounts[0]);
          setStatus("👆🏽 Write a message in the text-field above.");
        } else {
          setWallet("");
          setStatus("🦊 Connect to Metamask using the top right button.");
        }
      });
    } else {
      setStatus(
        <p>
          {" "}
          🦊{" "}
          <a target="_blank" href={`https://metamask.io/download.html`}>
            You must install Metamask, a virtual Ethereum wallet, in your
            browser.
          </a>
        </p>
      );
    }
  }


  return (

    <header id="home">
      <nav id="nav-wrap">
        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
          Show navigation
        </a>
        <a className="mobile-btn" href="#home" title="Hide navigation">
          Hide navigation
        </a>

        <ul id="nav" className="nav">
          <li className="current">
            <a className="smoothscroll" href="#home">
              Home
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#mint">
              Mint
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#portfolio">
              Projects
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#testimonials">
              Specs
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#Earthmap">
              Earthmap
            </a>
          </li>

          <li>
            <a className="smoothscroll" href="#FAQ">
              FAQ
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#promo">
              Team
            </a>
          </li>
        </ul>
      </nav>

      <video src={earthereum} autoPlay muted
        style={{
          position: "absolute",
          width: "100%",
          left: "50%",
          top: "50%",
          height: "100%",
          objectFit: "cover",
          transform: "translate(-50%,-50%)",
          zIndex: "-1"
        }}></video>
      <div className="row banner">

        <div className="banner-text">

          {/* <TypeWriter typing={0.5} >
                <Typography variant="h1" fontWeight="regular">
                  Earthereum Treasures
                </Typography></TypeWriter> */}



          <div className="banner-buttons">


            <Grid container sx={{ display: "flex", paddingTop: "30px", justifyContent: "center", alignItems: "center" }}>
              <Grid item xs={12} sm={4} md={3}>
                <UnstyledButtonCustom click={connectWalletPressed} txt=
                  {walletAddress.length > 0 ? (

                    "Connected: " +
                    String(walletAddress).substring(0, 6) +
                    "..." +
                    String(walletAddress).substring(38)

                  ) : (
                    "Connect Metamask"
                  )} />

              </Grid>
              <Grid item xs={12} sm={4} md={6} pb={1}>
                {/* <Typography variant="h4" color="secondary">
                Earth's Treasures on the Ethereum blockchain.
              </Typography> */}

              </Grid>
              <Grid item xs={12} sm={4} md={3}>
    

                  <a target="_blank" href="https://discord.gg/H8j5cSFpdh">
                    <UnstyledButtonCustom2 txt="Join Our Discord" />
                  </a>
                  {/* <Link to={{ pathname: "https://discord.gg/H8j5cSFpdh" }} target="_blank" >
                </Link> */}
              </Grid>
            </Grid>
            <hr />
          </div>


          {/* <Box sx={{ '& > :not(style)': { m: 1 } }}>
            <Fab size="small" color="primary" aria-label="discord">
              <img src={discordLight} width="30px" />

            </Fab>
            <Fab size="small" color="primary" aria-label="etherScan">
              <img src={etherScan} width="30px" />

            </Fab>
            <Fab size="small" color="primary" aria-label="opensea">
              <img src={openSea} width="30px" />
            </Fab>
            <Fab size="small" color="primary" aria-label="instagram">
              <img src={insta} width="30px" />
            </Fab>
            <Fab size="small" color="primary" aria-label="twitter">
              <img src={twit} width="30px" />

            </Fab>
          </Box>

          <Typography variant="h5" color="white" style={{ marginTop: "80px" }}>Verified smart contract:</Typography><br />
          <Typography variant="body" color="white" >0xE016B097dca5BC590d4489B25e25307eaD01C17C </Typography> */}


        </div>
      </div>

      <p className="scrolldown">

        <a className="smoothscroll" href="#about">
          <i className="icon-down-circle"></i>
        </a>
      </p>
    </header>
  );
};

export default Header;
