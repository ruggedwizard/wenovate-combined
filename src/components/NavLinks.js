import React from 'react'
import {
    Box,
    Button,
    Flex,
    Spacer,
    Text,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Lorem
  } from "@chakra-ui/react"
 

const NavLinks = () =>{
    // const { isOpen, onOpen, onClose } = useDisclosure()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const finalRef = React.useRef();
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
                    <Text padding='10px 15px' bg="#68F195" color='#070941'><Button onClick={onOpen}>Sign in</Button></Text>
                    <Spacer />
                    <Text padding='10px 15px' bg="#070941" color="#fff" ml={30}><Button onClick={onOpen}>Register</Button></Text>
                    <Spacer />
                </Flex>


                
 
      {/* <Button onClick={onOpen}>Open Modal</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Lorem count={2} />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal> */}
        </>
    )
}

export default NavLinks