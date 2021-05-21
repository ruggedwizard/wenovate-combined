import React from 'react'
import { Flex, Spacer, Text, useDisclosure } from "@chakra-ui/react"
import {Button} from 'react-bootstrap' 
import Loginmodal from './Loginmodal'
import Registermodal  from './Registermodal'

const NavLinks = () =>{
   
    const { isOpen, onOpen, onClose } = useDisclosure()
    const finalRef = React.useRef();
    return(
        <>
            <Flex style={{fontSize:"20px", fontWeight:"600", marginTop:"15px"}}>
                    <Spacer />
                    <div style={{padding:'10px', marginTop:'7px', border:"5px solid #070941", height:"35px", width:"35px", borderRadius:'50%', }}></div>
                    <Spacer />
                    <Text padding='10px'>Features</Text>
                    <Spacer />
                    <Text padding='10px'>Blog</Text>
                    <Spacer />
                    <Text padding='10px'>Connect</Text>
                    <Spacer />
                    <Text  ><Loginmodal/></Text>
                    <Spacer />
                    <Text   ml={30}><Registermodal/></Text>
                    <Spacer />
                </Flex>
          
     </>
    )
}

export default NavLinks