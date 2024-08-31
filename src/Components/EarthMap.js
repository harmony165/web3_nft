import React from "react";
import { Box } from "@mui/material";
import { Typography } from "@material-ui/core";
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import stars2 from '../assets/images/stars2.jpg'
import { useEffect, useRef, useState } from "react";
import TimelineObserver from "react-timeline-animation";
import { fireConfetti } from "./confetti";




const Timeline = ({ setObserver, callback }) => {
  const [message1, setMessage1] = useState("");
  const [message2, setMessage2] = useState("");
  const [message3, setMessage3] = useState("");
  const [message4, setMessage4] = useState("");
  const [message5, setMessage5] = useState("");
  const [message6, setMessage6] = useState("");


  const timeline1 = useRef(null);
  const timeline2 = useRef(null);
  const timeline3 = useRef(null);
  const timeline4 = useRef(null);
  const timeline5 = useRef(null);
  const timeline6 = useRef(null);

  const circle1 = useRef(null);
  const circle2 = useRef(null);
  const circle3 = useRef(null);
  const circle4 = useRef(null);
  const circle5 = useRef(null);
  const circle6 = useRef(null);


  const someCallback = () => {
    setMessage1(

    );
    callback();
  };
  const someCallback2 = () => {
    setMessage2(
      <Box p={3} sx={{ textAlign: "center",maxWidth:"900px"}}>
        <h4>Earthereum Crystals Minting Process.</h4><br />
        The Minting Process of all 8,888 Earthereum Crystals will begin.<br />
        Charity First, we will donate a % to Charity on behalf of Earthereum Treasures Community.<br />
      </Box>
    );
  };
  const someCallback3 = () => {
    setMessage3(
      <Box p={3} sx={{ textAlign: "center" ,maxWidth:"900px"}}>
        <h4>Green Initiative.</h4><br />
        At the End of the Public sale , We will be Partnering with Team seas organization to clean more than 50,000 Pounds of trash in the sea.
        Team Seas is run by Mr.Beast (Youtuber) and Our community of Earthereum Treasures will support the cause by Donating and Joining the cause.
        Each Unique Holder of the Earthereum Treasures NFT will be a part of Cleaning 5 Pounds of trash each.<br />


      </Box>
    );
  };
  const someCallback4 = () => {
    setMessage4(
      <Box p={3} sx={{ textAlign: "center",maxWidth:"900px" }}>

        <h4>The Giveaways For the Community will begin.</h4><br />

        We will Have a live Random Selection for our Holders , Each one has a Fair and Square chance to win the Giveaways.<br />

        Free Airdrops to most loyal and active members from our next Launch.<br />

        3 Lucky winners +1 each will be sent on a Vacation to Experience the Nature up close and personal. Fully Accommodated.<br />

        Own Earthereum Crystals NFT and Claim Free + Gas AI generated Landscape NFT.
        Worth .15 ETH Free.<br />

        And Expect more random surprises and events.<br />

      </Box>
    );

  };
  const someCallback5 = () => {
    setMessage5(
      <Box p={3} sx={{ textAlign: "center" ,maxWidth:"900px"}}>
        <h4>Treasure Chest (Community Wallet)</h4><br />
        50% of the Royalties will go into the Treasure Chest of the Community to keep growing the project. We let the Community Vote on the Upcoming Phases of the Project.<br />

        50% Goes for maintaining the Servers and Floor Sweep of the Project to keep the Floor Price moving up substantially.<br />
      </Box>
    );


  };
  const someCallback6 = () => {
    setMessage6("Coming soon...");
    fireConfetti();
  };


  useEffect(() => {
    setObserver(timeline1.current);
    setObserver(timeline2.current);
    setObserver(timeline3.current);
    setObserver(timeline4.current);
    setObserver(timeline5.current);
    setObserver(timeline6.current);

    setObserver(circle1.current, someCallback);
    setObserver(circle2.current, someCallback2);
    setObserver(circle3.current, someCallback3);
    setObserver(circle4.current, someCallback4);
    setObserver(circle5.current, someCallback5);
    setObserver(circle6.current, someCallback6);

  }, []);

  return (
    <div className="wrapper">
      <div id="timeline1" ref={timeline1} className="timeline" />
      <div className="circleWrapper">
        <div id="circle1" ref={circle1} className="circle">
          PHASE 1
        </div>
        <div className="message">{message1}</div>
      </div>
      <div id="timeline2" ref={timeline2} className="timeline" />
      <div className="circleWrapper">
        <div id="circle2" ref={circle2} className="circle">
          1
        </div>
        <div className="message">{message2}</div>
      </div>
      <div id="timeline3" ref={timeline3} className="timeline" />
      <div className="circleWrapper">
        <div id="circle3" ref={circle3} className="circle">
          2
        </div>
        <div className="message">{message3}</div>
      </div>
      <div id="timeline4" ref={timeline4} className="timeline" />
      <div className="circleWrapper">
        <div id="circle4" ref={circle4} className="circle">
          3
        </div>
        <div className="message">{message4}</div>
      </div>
      <div id="timeline5" ref={timeline5} className="timeline" />
      <div className="circleWrapper">
        <div id="circle5" ref={circle5} className="circle">
          4
        </div>
        <div className="message">{message5}</div>
      </div>
      <div id="timeline6" ref={timeline6} className="timeline" />
      <div className="circleWrapper">
        <div id="circle6" ref={circle6} className="circle">
          PHASE 2
        </div>
        <div className="message">{message6}</div>
      </div>
    </div>
  );
};

const EarthMap = () => {


  const onCallback = () => {
    console.log("awesome");
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




      <TimelineObserver
        initialColor="black"
        fillColor="#ffd500"
        handleObserve={(setObserver) => (
          <Timeline
            callback={onCallback}
            className="timeline"
            setObserver={setObserver}
          />
        )}
      />






    </section>
  );
};

export default EarthMap;
