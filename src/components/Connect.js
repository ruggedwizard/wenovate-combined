import { Button, Container } from "react-bootstrap"
import Story from "./Story"


const Connect = ()=>{
    return (
        <Container>
            <div className='connect-text col-sm-6 col-lg-8'>
                <h1>Introducing <span className='green-text'>conncet,</span> an easy way to reach <span className='green-text'>people</span> accross farming communities.</h1>
            </div>
            <Button variant='primary'>Learn more</Button> 
            <Story/>
        </Container>
    )
}
export default Connect