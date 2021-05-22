import React from 'react'
import { Card, Button } from 'react-bootstrap'
const Story = () => {
    return (
        <div style={{marginTop:'20px', marginBottom:'20px'}}>
        <Card style={{width:'20rem', marginLeft:10}}>
        <Card.Body>
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
