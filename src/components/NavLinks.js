import React from 'react'
import {
    Button,
    Flex,
    Spacer,
    Text
  } from "@chakra-ui/react"
 

const NavLinks = () =>{
    return(
        <>
            <Flex style={{fontSize:"20px", fontWeight:"600", marginTop:"15px"}}>
                    <Spacer />
                    <div style={{padding:'10px', marginTop:'7px', border:"5px solid #070941", height:"35px", width:"35px", borderRadius:'50%', }}></div>
                    <Spacer />
                    <Text padding='10px'><Button >Features</Button></Text>
                    <Spacer />
                    <Text padding='10px'><Button >Blog</Button></Text>
                    <Spacer />
                    <Text padding='10px'><Button >Connect</Button></Text>
                    <Spacer />
                    <Text padding='10px 15px' bg="#68F195" color='#070941'><Button >Sign in</Button></Text>
                    <Spacer />
                    <Text padding='10px 15px' bg="#070941" color="#fff" ml={30}>Register</Text>
                    <Spacer />
                </Flex>
        </>
    )
}

export default NavLinks