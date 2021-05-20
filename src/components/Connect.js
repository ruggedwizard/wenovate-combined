import { Button, Container } from "react-bootstrap"

const Connect = ()=>{
    return (
        <Container>
            <div style={{textAlign:'center'}} className='connect-text'>
                <p>Connections keep track of people or businesses you have interacted with in the past or currently interacting with presently</p>
                <storng>You dont have any connections yet</storng>
                <br/>
                <Button variant='success'>How do i Connect?</Button>
            </div>
        </Container>
    )
}
export default Connect