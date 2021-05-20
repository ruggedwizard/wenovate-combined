import React, {Fragment} from 'react'
import Img from '../image.png'
import {Box, Center, Flex, Image, Spacer, Text} from "@chakra-ui/react"


const Body = () => {
    return (
        <Fragment>
            <Box mt={70} mb={50} ml='20%'>
                <Text fontSize="15px" color='#070941' fontWeight="bold" >Connect, make sales and learn</Text>
                <Text numberOfLines={2} fontSize="35px" fontWeight="bold"  color='#070941'>in the <span style={{color:"#68F195"}}>best</span> online <br/> Community for <span style={{color:"#68F195"}}>farmers</span></Text>
            </Box>    
                <Box>
                    <Flex >
                            
                        <Flex flexDirection="column" mt={25} marginLeft="20%" >
                            <Text fontSize="25px" fontWeight="bold" color='#070941' mb={10}>Access to quality <br/> information</Text>
                            {/* <Spacer/> */}
                            <Text fontSize="20px" fontWeight="bold" color='#ACABB2'>About farming best<br/> practises to boost your<br/> farm production</Text>
                        </Flex>
                        {/* <Spacer/> */}
                        <Image
                            marginLeft="10%"
                            borderRadius="full"
                            boxSize="150px"
                            border="10px"
                            src={Img}
                            height="250px"
                            width="400px"
                            alt="img"
                            />
                    </Flex>
                    <Flex marginTop="50px">
                    {/* <Spacer/>
                    <Spacer/> */}
                        <Image
                            marginLeft="20%"
                            borderRadius="full"
                            boxSize="150px"
                            border="10px"
                            src={Img}
                            height="250px"
                            width="400px"
                            alt="img"
                            />
                            {/* <Spacer/> */}
                            <Flex flexDirection="column" mt={25} marginLeft="10%">
                                <Text  fontSize="25px" fontWeight="bold" color='#070941' mb={10}>A great platform <br/> to make sales</Text>
                            {/* <Spacer/> */}
                                <Text fontSize="20px" fontWeight="bold" color='#ACABB2'>And make valuable <br/> connection with other <br/> farmers and investors</Text>
                            </Flex>
                        {/* <Spacer/>
                        <Spacer/> */}
                    </Flex>
                </Box>

        </Fragment>
    )
}

export default Body
