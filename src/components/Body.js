import React from 'react'
import {Container } from 'react-bootstrap'
import farmers from '../assets/farmerstalk.jpg'
import farmertwo from '../assets/farmer3.jpg'
import {Box, Image, Text} from "@chakra-ui/react"


const Body = () => {
    return (
        <Container className="d-flex flex-column justify-content-center align-items-center m-auto">
            <Box mt={70} ml="0" mb={50}>
                <Text fontSize="15px"  color='#070941' fontWeight="bold" >Connect, make sales and learn</Text>
                <Text fontSize="35px" fontWeight="bold"  color='#070941'>In the <span style={{color:"#68F195"}}>best</span> online Community for <span style={{color:"#68F195"}}>farmers</span></Text>
            </Box>    
                <div>
                    <div className="d-flex justify-content-space-between feature">
                            
                        <div className="d-flex flex-column word" style={{width:"400px", padding:'20px', marginTop:"25px"}} >
                            <p style={{fontSize:"25px", fontWeight:"bold", color:"#070491", marginBottom:"10px"}}>Access to quality information</p>
                            <p style={{fontSize:"20px", fontWeight:"bold", color:"#ACABB2"}}>About farming best practises to boost you farm production</p>
                        </div>
                        <Image
                            className="img"
                            borderRadius="full"
                            boxSize="150px"
                            border="10px"
                            src={farmers}
                            height="250px"
                            width="400px"
                            alt="img"
                            />
                    </div>
                    <div className="d-flex feature" style={{marginTop:"50px"}}>
                        <Image
                            className="img"
                            borderRadius="full"
                            boxSize="150px"
                            border="10px"
                            src={farmertwo}
                            height="250px"
                            width="400px"
                            alt="img"
                            />
                            <div className="word d-flex flex-column" style={{width:"400px", marginTop:"25px", padding:'20px'}}>
                                <p style={{fontSize:"25px", fontWeight:"bold", color:"#070491", marginBottom:"10px"}}>A great platform to make sales</p>
                                <p style={{fontSize:"20px", fontWeight:"bold", color:"#ACABB2"}}>And make valuable connection with other farmers and investors</p>
                            </div>
                    </div>
                </div>

        </Container>
    )
}

export default Body
