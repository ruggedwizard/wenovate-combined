import React from 'react'
import profileimage from '../assets/profile.png'
import { Card, Button } from 'react-bootstrap'
const Story = () => {
    return (
        <div>
        <Card style={{width:'20rem', marginLeft:10}}>
        <Card.Body>
        <Card.Img variant='top' src={profileimage} className='rounded-img'/>
        <Card.Title>
        category
        </Card.Title>
        <Card.Text variant='success'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor velit, tenetur facilis ipsum ab dolore.
        </Card.Text>
        <Button variant='outline-primary'>Read more</Button>
        </Card.Body>
        </Card>
        </div>
    )
}

export default Story
