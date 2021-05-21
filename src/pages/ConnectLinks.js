import React from 'react'
import MyConnections from './MyConnections'
import { Box, Button, Flex, Icon, Spacer, Text } from "@chakra-ui/react"

const ConnectLinks = () => {
    return (
        <Box>
            <Flex fontSize={20} fontWeight="bold">
                <Text color="#070941">My Connections</Text>
                <Spacer />
                <Text color="#ACABB2">Market Place</Text>
                 <Spacer />
                <Text color="#ACABB2">People</Text>
                 <Spacer />
                <Text color="#ACABB2">Supply Chains</Text>
                <Spacer />
                <Icon></Icon>
            </Flex>

            <Flex h={500} flexDirection="column" justifyContent="center" alignItems="center">
                <Text textAlign="center" color="#070941" fontSize={18}> Connections keep track of <br/>
                poeple or business you have interacted <br/>
                with in the past or currently interacting with.</Text>
                <span style={{color:"#070941",fontSize:"18px", fontWeight:"bold", margin:"10px 0"}}>You don't have any connections yet.</span> 
                <Button bg="#68F195" w={250} color="#070941" p={10} fontSize={20} fontWeight="bold">How do I connect?</Button>
            </Flex>

            <MyConnections />

        </Box>
    )
}

export default ConnectLinks
