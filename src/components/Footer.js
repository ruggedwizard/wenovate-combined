import React from 'react';
import { Flex, Spacer, Center,  List, ListItem } from '@chakra-ui/react'
import {Container} from 'react-bootstrap'

const Footer = () =>{
    return(
        <>
            <Container maxw="container.lg" style={{fontSize:"20px"}} mt={50}  padding="10px">
                <Flex >
                <Spacer/>
                    <h1 style={{padding:"20px"}}>A product of team wenovate</h1>
                <Spacer/>
                <Spacer/>
                <Spacer/>
                <Spacer/>
                <Spacer/>
                    <List spacing={3} padding="20px 0px">
                        <ListItem>Community</ListItem>
                        <ListItem>About Us</ListItem>
                        <ListItem>FAQ</ListItem>
                        <ListItem>Mission</ListItem>
                        <ListItem>Testimonies</ListItem>
                    </List>
                <Spacer/>
                </Flex>
                <Center>wenovate 2021</Center>
            </Container>
        </>

    )
}

export default Footer