import { Box, Stack, Container} from "@chakra-ui/react"
import NavLinks from "./NavLinks"


const Navbar = ()=>{
    return(
    <Box h={50} mb={30} >
        <Container>
            <Stack>
                <NavLinks />
            </Stack>
        </Container>
    </Box>
    )
}


export default Navbar