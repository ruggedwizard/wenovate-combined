import React from 'react'
import { Button, Container } from 'react-bootstrap'
import StoryboardMenu from './StoryboardMenu'
const Storyboard = ()=>{
    return(
    <Container>
        <h1>Intorducing <span className='green-text'>connect,</span> an easy way to reach <span className='green-text'>people</span> across farming communities</h1>
        <Button className='button-main'>Learn more</Button>
        <StoryboardMenu/>

    </Container>
    )
}

export default Storyboard