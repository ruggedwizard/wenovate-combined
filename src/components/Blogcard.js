import React from 'react'
import small from '../assets/small.png'
import { Card, Button } from 'react-bootstrap'
const Blogcard = ()=>{
    return (
        <>
        <Card className="mb-5">
        <Card.Body>
        <Card.Img variant='top' src={small} style={{height:"300px"}}/>
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