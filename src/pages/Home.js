import React from 'react'
import Img1 from "../assets/img1.jpg"
import Img2 from "../assets/img2.jpg"
import {Box, Flex, Image, Text} from '@chakra-ui/react'

const Home = () => {
    return (
        <Box ml="20%" marginRight="20%"   >
             <Box bg="red" p={20}>
                <Box mt={70} mb={50} ml={30}>
                    <Text fontSize="15px" color='#070941' fontWeight="bold" >Connect, make sales and learn</Text>
                    <Text numberOfLines={2} fontSize="35px" fontWeight="bold"  color='#070941'>in the <span style={{color:"#68F195"}}>best</span> online <br/> Community for <span style={{color:"#68F195"}}>farmers</span></Text>
                </Box>  
                <Box mt={25} ml={30}  >
                    <Text fontSize="25px" fontWeight="bold" color='#070941' mb={10}>Access to quality <br/> information</Text>
                    <Text fontSize="20px" fontWeight="bold" color='#ACABB2'>About farming best<br/> practises to boost your<br/> farm production</Text>
                </Box>
            </Box>
            <Text color='#070941'  fontSize="20px" margin="10px 0">#OnTheFarm</Text>
            <Flex>
                <Box padding={10} flexDirection="column" mt={25} mb={45} height="auto" borderLeft="10px solid #68F195" >
                    <Text  fontSize="25px" fontWeight="bold" color='#070941' mb={10}>A great platform <br/> to make sales</Text>
                    <Text fontSize="20px" fontWeight="bold" color='#ACABB2'>And make valuable <br/> connection with other <br/> farmers and investors</Text>
                </Box>
                <Image
                    marginLeft="20%"
                    borderRadius="full"
                    boxSize="150px"
                    border="10px"
                    src={Img1}
                    height="250px"
                    width="auto"
                    alt="img"
                    />
            </Flex>

            <Box border="1px solid #000" mt={20} padding='15px 20px'>
                <Text textAlign="center" fontWeight="bold" fontSize={20} mb={10}>How to make sales</Text>
                <Text>The eagle stands for _________ a. Power b. Strength c. Speed d. Grace</Text>
                <Text>The green and white band shows that Nigeria is a ________ a. Rich land b. Poor land c. Dry land d. Water land</Text>
                <Text>The above coat of arms is for which country? a. Holland b. Ghana c. Nigeria d. Mali</Text>
                <Text mt={20} >Continue</Text>
            </Box>
        </Box>
    )
}

export default Home
