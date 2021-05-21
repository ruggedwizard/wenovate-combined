import React from 'react';
import ConnectLinks from "./ConnectLinks"
import {Box, Button, Text} from '@chakra-ui/react'

const Connect = () => {
    return (
        <Box m='auto 20%'>
            <Text marginBottom='20px'marginTop='70px' fontSize="35px" fontWeight="bold" color='#070941' >Introducing <span style={{color:"#68F195"}}>Connect</span>, an easy way to <br/> reach <span style={{color:"#68F195"}}>people</span> across farming <br/> communities.</Text>
            <Button mb="10%" color="#fff" bg="#070941" padding="10px 14px">Learn More</Button>

            <ConnectLinks />
        </Box>
    )
}

export default Connect
