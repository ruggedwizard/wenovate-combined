import React from 'react'
import farmer from '../assets/farmer3.jpg'
import { Card, Button } from 'react-bootstrap'
const Blogcard = () => {
    return (
        <>
            <Card className="blogCard mb-5">
                <Card.Body>
                    <Card.Img variant='top' src={farmer} style={{height:"250px"}}/>
                        <Card.Title style={{fontSize:"10px", marginTop:"10px"}}>
                            CONVERSATION
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