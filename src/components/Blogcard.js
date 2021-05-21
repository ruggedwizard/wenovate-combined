import React from 'react'
import { Card, Button } from 'react-bootstrap'
const Blogcard = ()=>{
    return (
        <>
        <Card style={{width:'25rem'}}>
        <Card.Body>
        <Card.Img variant='top' src='./assets/small.png'/>
        <Card.Title>
        category
        </Card.Title>
        <Card.Text variant='success'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor velit, tenetur facilis ipsum ab dolore.
        </Card.Text>
        <Button variant='outline-primary'>Read more</Button>
        </Card.Body>
        </Card>
        </>
    )
}
export default Blogcard