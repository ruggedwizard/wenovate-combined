import { Box, Stack, Container} from "@chakra-ui/react"
import NavLinks from "./NavLinks"


const Navbar = ()=>{
    return(

    <Box h={50} mb={25} >
        <Container>
            <Stack>
                <NavLinks />
            </Stack>
        </Container>
    </Box>
    <div className='nav-bar'>
    <div className='photo-card'></div>  
        <ul className='menu-list'>
            <li>Features</li>
            <li>Blog</li>
            <li>Connect</li>
            <button className='btn-primary'>Sign in</button>
            <button className='btn-secondary'>Register</button>
        </ul>      
    </div>
    )
}


export default Navbar