import React from 'react';
import { useState } from 'react';
import { Grid, Box } from '@mui/material';
import stars2 from '../assets/images/stars2.jpg';

import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';
import eth from '../assets/images/ethereum.svg'
import TextField from '@mui/material/TextField';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import FormControl from '@mui/material/FormControl';
import { IconButton } from '@mui/material';
import Slider from 'react-input-slider';
import UnstyledButtonCustom3 from "./StyledButton3";

import {  mintFunc  } from "../utils/interact.js";

const MintSection = () => {
    const [state, setState] = useState(1);
    const [status,setStatus] = useState({});

    const handleSubtract = (e) => {
        let value;
        if (state > 1) {
            value = state - 1;
            setState(value)
        }
    }
    const handleAdd = (e) => {
        let value;
        if (state <= 10) {
            value = state + 1;
            setState(value)

        }
    }
    const onMintPressed = async () => {
        const status  = await mintFunc(state);
        // setStatus(status);
        // console.log(status);
      

        

    };

    return (
        <section id="mint" style={{
            backgroundImage: `url(${stars2})`, height: "100%", backgroundAttachment: "fixed",
            backgroundPosition: "center",
            backgroundRepeat: "no - repeat",
            backgroundSize: "cover",
          }} >
            <Box p={2}>
                <Grid container justifyContent="center" alignItems="center" sx={{ backgroundColor: "#2B2B2B", border: "2px solid #ffd500", borderRadius: "20px", boxShadow: "5px 5px #b59700, 10px 10px #4a3e00, 15px 15px #2e2600" }}>
                    <Grid item xs={12} md={6}>
                        <Box p={5} sx={{borderRadius:"20px"}}>
                            <Typography variant="h1" pl={3} pb={5} color="primary">Mint Earthereum Treasure</Typography>
                            <List sx={{ width: '100%', alignItems: "center", justifyContent: "center" }}>
                                <ListItem>
                                    <ListItemAvatar>
                                        <Box sx={{ backgroundColor: "#aa00ff", borderRadius: "100px", textAlign: "center", mr: "10px" }}>
                                            <Typography variant="h3" color="black">1</Typography>
                                        </Box>
                                    </ListItemAvatar>
                                    <ListItemText primary={<Typography variant="h4">Connect to your metamask wallet. </Typography>} />
                                </ListItem>
                                <ListItem>
                                    <ListItemAvatar>
                                        <Box sx={{ backgroundColor: "#aa00ff", borderRadius: "100px", textAlign: "center", mr: "10px" }}>
                                            <Typography variant="h3" color="black">2</Typography>
                                        </Box>
                                    </ListItemAvatar>
                                    <ListItemText primary={<Typography variant="h4">Enter no. of Treasures you want to mint (Max. 20)</Typography>} />
                                </ListItem>

                                <ListItem>
                                    <ListItemAvatar>
                                        <Box sx={{ backgroundColor: "#aa00ff", borderRadius: "100px", textAlign: "center", mr: "10px" }}>
                                            <Typography variant="h3" color="black">3</Typography>
                                        </Box>
                                    </ListItemAvatar>
                                    <ListItemText primary={<Typography variant="h4">Click on MINT TREASURE! </Typography>} />
                                </ListItem>
                                <ListItem>
                                    <ListItemAvatar>
                                        <Box sx={{ backgroundColor: "#aa00ff", borderRadius: "100px", textAlign: "center", mr: "10px" }}>
                                            <Typography variant="h3" color="black">4</Typography>
                                        </Box>
                                    </ListItemAvatar>
                                    <ListItemText primary={<Typography variant="h4">Confirm transaction on your wallet. </Typography>} />
                                </ListItem>
                                <ListItem>
                                    <ListItemAvatar>
                                        <Box sx={{ backgroundColor: "#aa00ff", borderRadius: "100px", textAlign: "center", mr: "10px" }}>
                                            <Typography variant="h3" color="black">5</Typography>
                                        </Box>
                                    </ListItemAvatar>
                                    <ListItemText primary={<Typography variant="h4">Be a part of the Earthereum Treasure team.</Typography>} />
                                </ListItem>

                            </List>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box py={5} sx={{ display: "flex", flexDirection: "column", flexGrow: "1", justifyContent: "center", alignItems: "center", backgroundColor: "#2B2B2B", borderRadius:"20px"}}>
                            <Card sx={{ mb: "-40px", width: "70%", zIndex: "2", textAlign: "center", backgroundColor: "#aa00ff", padding: "10px 20px", borderRadius: "20px" }}>

                                <Typography variant="h3" >
                                    Mint your Treasure
                                </Typography>
                                <Typography variant="h1" sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                    0.03<img src={eth} width="60px" />
                                </Typography>
                            </Card>
                            <Card sx={{ width: "90%", zIndex: "1", textAlign: "center", backgroundColor: "#191919",borderRadius:"20px" }}>
                                <CardContent>
                                    <Box p={5} sx={{ display: 'flex', alignItems: 'center', justifyContent: "center" }}>
                                        <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", backgroundColor: "#2B2B2B", borderRadius: "20px", mx: "20px" }}>
                                            <img src={eth} width="60px" style={{ color: 'action.active', marginRight: 1, marginTop: 0.5, marginBottom: 0.5 }} />
                                            <Typography variant="p" color="white">No. of Earthereum Treasures</Typography>
                                            <Typography variant="p" color="white">(Max. 20)</Typography>

                                            <FormControl sx={{ m: 1 }} variant="standard">
                                                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: "space-evenly" }}>
                                                    {state <= 1 ?
                                                        <IconButton disabled aria-label="subtract" >
                                                            <RemoveIcon color="secondary" size="large" sx={{ margin: "10px" }} />
                                                        </IconButton>

                                                        :
                                                        <IconButton aria-label="subtract" onClick={handleSubtract} sx={{border:"2px solid #ffd500",margin:"10px"}}>
                                                            <RemoveIcon color="secondary" size="large" />
                                                        </IconButton>}

                                                    <TextField variant="outlined" inputProps={{ inputMode: 'numeric', pattern: '@"^([1-9]|10)$"', style: { textAlign: "center" } }} value={state} onChange={(e) => setState(e.target.value)} />
                                                    {state >= 10 ?

                                                        <IconButton aria-label="add" disabled >
                                                            <AddIcon color="secondary" sx={{ margin: "10px" }} />

                                                        </IconButton>
                                                        :

                                                        <IconButton aria-label="add" onClick={handleAdd} sx={{border:"2px solid #ffd500",margin:"10px"}}>
                                                            <AddIcon color="secondary" />

                                                        </IconButton>
                                                    }
                                                </Box>
                                                <Box p={2}>


                                                    <Slider
                                                        styles={{
                                                            track: {
                                                                backgroundColor: 'black'
                                                            },
                                                            active: {
                                                                backgroundColor: '#ffd500'
                                                            },
                                                            thumb:{
                                                                backgroundColor: '#ffd500',
                                                               

                                                            },

                                                            disabled: {
                                                                opacity: 0.5
                                                            }
                                                        }}
                                                        xmax="10"
                                                        // xmin="1"
                                                        axis="x"
                                                        x={state}
                                                        onChange={({ x }) => setState(x)}
                                                    />
                                                    <Typography variant="h4" style={{ display: "flex", alignItems: "center", justifyContent: "center", paddingTop: "20px" }}>Order value: {(state) * 0.03} <img src={eth} width="30px" style={{ marginRight: 1, marginTop: 1.5 }} /> + Gas </Typography>
                                                    <UnstyledButtonCustom3 txt="MINT TREASURE" click={onMintPressed}/>

                                                </Box>
                                            </FormControl>
                                        </Box>
                                    </Box>
                                </CardContent>

                            </Card>
                        </Box>
                    </Grid>

                </Grid>

            </Box>
        </section>

    )
}

export default MintSection
