import React from 'react'
import Img1 from '../assets/img1.jpg'
import Img2 from '../assets/img2.jpg'
import {Grid, Box, Image, Text} from "@chakra-ui/react"

const BlogGrid = () => {
    return(
        <>
            <Grid templateColumns="repeat(3, 1fr)" gap= "50px" >
            <Box border="1px solid #68F195" w={300} fontWeight="bold" padding="10px" fontSize={12}>
                <Image
                    borderRadius="full"
                    FlexSize="150px"
                    border="10px"
                    src={Img2}
                    height="200px"
                    width="100%"
                    alt="img"
                    />
                <Text mt={5} mb={5} color="#68F195">FARM LIFE</Text>
                <Text mb={20}>Funding Farmland: Resources to support Land Access Lagos State Commissioner of land, Land use Decree 1999 Decree, Ammendment Contributions</Text>
                <Text>May, 19 2021</Text>
            </Box>
            <Box border="1px solid #68F195" w={300} fontWeight="bold" padding="10px" fontSize={12}>
                <Image
                    borderRadius="full"
                    FlexSize="150px"
                    border="10px"
                    src={Img1}
                    height="200px"
                    width="100%"
                    alt="img"
                    />
                <Text mt={5} mb={5} color="royalblue">CONVERSATION</Text>
                <Text mb={20}>FARM DELIGHT: GROWING BUSINESS THIS PANDEMIC</Text>
                <Text>May, 19 2021</Text>
            </Box>
            <Box border="1px solid #68F195" w={300} fontWeight="bold" padding="10px" fontSize={12}>
                <Image
                    borderRadius="full"
                    FlexSize="150px"
                    border="10px"
                    src={Img2}
                    height="200px"
                    width="100%"
                    alt="img"
                    />
                <Text mt={5} mb={5} color="royalblue">CONVERSATION</Text>
                <Text mb={20}>NEW FARMERS - NGOs FEATURES ENABLES [APPNAME] USERS TO MANAGE CONVERSATION ONLINE </Text>
                <Text>May, 19 2021</Text>
            </Box>
            <Box border="1px solid #68F195" w={300} fontWeight="bold" padding="10px" fontSize={12}>
                <Image
                    borderRadius="full"
                    FlexSize="150px"
                    border="10px"
                    src={Img1}
                    height="200px"
                    width="100%"
                    alt="img"
                    />
                <Text mt={5} mb={5} color="#68F195">FARM LIFE</Text>
                <Text mb={20}>Funding Farmland: Resources to support Land Access Lagos State Commissioner of land, Land use Decree 1999 Decree, Ammendment Contributions</Text>
                <Text>May, 19 2021</Text>
            </Box>
            <Box border="1px solid #68F195" w={300} fontWeight="bold" padding="10px" fontSize={12}>
                <Image
                    borderRadius="full"
                    FlexSize="150px"
                    border="10px"
                    src={Img2}
                    height="200px"
                    width="100%"
                    alt="img"
                    />
                <Text mt={5} mb={5} color="#68F195">FARM LIFE</Text>
                <Text mb={20}>Funding Farmland: Resources to support Land Access Lagos State Commissioner of land, Land use Decree 1999 Decree, Ammendment Contributions</Text>
                <Text>May, 19 2021</Text>
            </Box>
            <Box border="1px solid #68F195" w={300} fontWeight="bold" padding="10px" fontSize={12}>
                <Image
                    borderRadius="full"
                    FlexSize="150px"
                    border="10px"
                    src={Img1}
                    height="200px"
                    width="100%"
                    alt="img"
                    />
                <Text mt={5} mb={5} color="#68F195">FARM LIFE</Text>
                <Text mb={20}>Funding Farmland: Resources to support Land Access Lagos State Commissioner of land, Land use Decree 1999 Decree, Ammendment Contributions</Text>
                <Text>May, 19 2021</Text>
            </Box>
            

            </Grid>
        </>
    )

}

export default BlogGrid