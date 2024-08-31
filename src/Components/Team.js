import { Typography } from '@mui/material'
import React from 'react'
import { Box, Grid } from '@mui/material';
import a6 from '../assets/images/6.png'
import a16 from '../assets/images/16.png'
import a12 from '../assets/images/12.png'
import a29 from '../assets/images/29.png'
import a14 from '../assets/images/14.png'
import a9 from '../assets/images/9.png'

import stars2 from '../assets/images/stars2.jpg';




const Team = () => {
    return (
        <section id="promo" style={{
            backgroundImage: `url(${stars2})`, height: "100%", backgroundAttachment: "fixed",
            backgroundPosition: "center",
            backgroundRepeat: "no - repeat",
            backgroundSize: "cover",
        }} >
            <div style={{ paddingTop: "96px" }}>
                <Box p={5} m={3} mb={10} sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", border: "1px solid white" }}>
                    <h1 style={{ paddingBottom: "20px", borderBottom: "2px solid yellow", borderStyle: "outset" }} >OUR TEAM</h1>
                    <Typography pt={3} pb={1} variant="h4" sx={{ maxWidth: "800px", textAlign: "center" }} >
                        A team of dedicated and skilled individuals with a common objective. To see to the future of web3 and the NFT space and make it home to cutting edge innovations and the most sophisticated of artforms.
                    </Typography>

                    <Grid container justifyContent="space-around" spacing={4} py={4} >
                        <Grid item xs={12} sm={6} md={4} >
                            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",textAlign:"center" }}>
                                <img src={a14} width="60%" style={{ border: "5px solid black", borderRadius: "50%" }} />
                                <Typography variant="h3" sx={{ paddingTop: "20px" }}>α (Alpha)-</Typography>
                                <Typography variant="h4" sx={{ paddingBottom: "20px" }}>Mentor and Project Advisor</Typography>
                                <Typography variant="p" sx={{ textAlign: "center" }}>
                                    (Written by the team members out of respect)<br />
                                    α is our Mentor, He guides and motivates the team in the right direction.
                                    His experience in the Stock market since 1991 helps him identify the trends in the crypto markets and block chain technology. He has a clear vision of the Blockchain technology to guide the team to create and develop the apps and projects as the technology advances.
                                    He also owns and manages IT companies.
                                    Investor in potential/promising startups.
                                    He is known for his Humble and Giving nature ,
                                    runs a large scale charity trust for Health, Education and Environment .
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} >
                            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",textAlign:"center" }}>
                                <img src={a6} width="60%" style={{ border: "5px solid black", borderRadius: "50%" }} />
                                <Typography variant="h3" sx={{ paddingTop: "20px" }}>Ken Block-</Typography>
                                <Typography variant="h4" sx={{ paddingBottom: "20px" }}>Co-founder and CEO </Typography>
                                <Typography variant="p" sx={{ textAlign: "center" }}>
                                    I was a Cyber Security Expert, Worked at McAfee Software (Cyber Security and Antivirus).
                                    I am now a Blockchain Developer and I also do Web 3.0 integrations.
                                    I also Trade and invest in Cryptocurrencies since 8yrs.
                                    I play sports, Mainly Cricket (Professional level) and Soccer.
                                    Always have been exploring the Blockchain technology and I am grateful to
                                    create and have a Blockchain NFT project with the team as it was a long
                                    awaited dream.</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",textAlign:"center" }}>
                                <img src={a12} width="60%" style={{ border: "5px solid black", borderRadius: "50%" }} />
                                <Typography variant="h3" sx={{ paddingTop: "20px" }}>Wolff-</Typography>
                                <Typography variant="h4" sx={{ paddingBottom: "20px" }}>Co-founder and Marketing </Typography>
                                <Typography variant="p" sx={{ textAlign: "center" }}>
                                    I have been an investor in primary and secondary markets for over 10yrs and now have a ton of experience in the crypto market as well. I have been an investor since the age of 14 and the age of 16 I started managing family trusts.
                                    Over the years my returns have been phenomenal (not to brag).
                                    Along side this,I am a 6 handicap on the course having received no training or coaching what so ever, I have a hole in one (how many people can say that?).
                                    Serious note - I am investor, Entrepreneur, philanthropist and golfer who plans on expanding my horizon and establishing a strong brand in the world of NFT’s and Blockchain.
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} >
                            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",textAlign:"center" }}>
                                <img src={a9} width="60%" style={{ border: "5px solid black", borderRadius: "50%" }} />
                                <Typography variant="h3" sx={{ paddingTop: "20px" }}>Neo-</Typography>
                                <Typography variant="h4" sx={{ paddingBottom: "20px" }}>Developer  </Typography>
                                <Typography variant="p" sx={{ textAlign: "center" }}>
                                    Web3 is the foundation of next generation internet. To be a part of this transition is truly a humbling experience. I strive to work on the cutting edge of technology and hope to be able to get the most out of the decentralised architecture of web3 to benifit users and creators alike.
                                </Typography>
                            </Box>
                        </Grid>

                        <Grid item xs={12} sm={6} md={4}>
                            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",textAlign:"center" }}>
                                <img src={a16} width="60%" style={{ border: "5px solid black", borderRadius: "50%" }} />
                                <Typography variant="h3" sx={{ paddingTop: "20px" }}>Digital Picaso-</Typography>
                                <Typography variant="h4" sx={{ paddingBottom: "20px" }}>Digital Artist </Typography>
                                <Typography variant="p" sx={{ textAlign: "center" }}>
                                    "Art will only be apriciated when your soul connects with it"
                                    I Create art with science and maths of nature and existence.
                                    To design Artistic software that enables creators tell stories in the medium of space.
                                    I'm an artist who loves to Draw and Paint "HAHA"
                                    Fun fact? I love to combine coding and art to create the next masterpiece.
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} >
                            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",textAlign:"center" }}>
                                <img src={a29} width="60%" style={{ border: "5px solid black", borderRadius: "50%" }} />
                                <Typography variant="h3" sx={{ paddingTop: "20px" }}>Clown Prince-</Typography>
                                <Typography variant="h4" sx={{ paddingBottom: "20px" }}>Co-founder and Marketing / PR</Typography>
                                <Typography variant="p" sx={{ textAlign: "center" }}>
                                    Digital Strategist by heart, Crypto trader by brains. Been in the space since day 1, focused on building and providing value to the community.
                                    I spend a lot of time creating   marketing strategy.
                                    I love producing Quality content and keeping it as simple as possible for everyone to get a better understanding on the topic.
                                    I follow Formula 1 closely and play Golf.
                                    I will aspire marketing in the metaverse.
                                </Typography>

                            </Box>
                        </Grid>


                    </Grid>
                </Box>
            </div>
        </section>
    )
}

export default Team
