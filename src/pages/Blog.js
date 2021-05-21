import React from 'react';
import { Box, Text } from '@chakra-ui/react'
import BlogGrid from './BlogGrid'

const Blog = () => {
    return (
        <Box mr="20%" ml='15%'>
            <Text mb={20} fontSize={25} fontWeight="bold" color="#070941">Popular</Text>
            
            <BlogGrid/>


        </Box>
    )
}

export default Blog
