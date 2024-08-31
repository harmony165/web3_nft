import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Roadmap from "./Components/Roadmap";
import EarthMap from "./Components/EarthMap";
import Contact from "./Components/Contact";
import FAQ from "./Components/FAQ";
import Portfolio from "./Components/Portfolio";
import "./App.css";
import { createTheme } from '@mui/material/styles';
import { yellow, purple } from '@mui/material/colors';
import { ThemeProvider } from "@mui/system";
import Specs from "./Components/Specs";
import MintSection from "./Components/MintSection";
import Team from "./Components/Team"
import Countdown from "./Components/Countdown";
import Temp from "./Components/Temp";

const theme = createTheme({
  palette: {
    primary: {
      main: "#aa00ff",
    },
    secondary: {
      main: "#ffd500",
    },   
  },
  
});
const App = () => {
  const [resumeData, setResumeData] = useState({});
  console.log(theme)
  useEffect(() => {
    fetch("/inputData.json")
      .then((res) => res.json())
      .then((data) => {
        setResumeData(data);
      });
  }, []);

  return (
    <Router>
    <ThemeProvider theme={theme}>

      <div className="App">
        <Header data={resumeData.main} />
        <About data={resumeData.main} />   
        <Temp/>
        {/* <MintSection/>     */}
        <Portfolio data={resumeData.portfolio} />
        <Specs/>
        {/* <Countdown/> */}
        {/* <Roadmap /> */}
        <EarthMap/>
        <FAQ data={resumeData.testimonials} />
        {/* <Contact data={resumeData.main} /> */}
        <Team/>
        <Footer data={resumeData.main} />
      </div>
    </ThemeProvider>
    </Router>
  );
};

export default App;
