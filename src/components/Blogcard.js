import React, {useState} from 'react'
import farmer from '../assets/farmer3.jpg'
import { Card, Button } from 'react-bootstrap'
const Blogcard = ({author, content, title, }) => {
    const [readMore, setReadMore] = useState(false)
    return (
        <>
            <Card className="blogCard mb-5">
                <Card.Body>
                    <Card.Img variant='top' src={farmer} style={{height:"200px"}}/>
                        <Card.Title style={{fontSize:"10px", marginTop:"10px"}}>
                            <h5>Title: {title}</h5>
                        </Card.Title>
                        <Card.Title style={{fontSize:"10px", marginTop:"10px"}}>
                            <h6>Author: {author}</h6>
                        </Card.Title>
                        <Card.Text variant='success'>
                            {
                            readMore ? content:`${content.substring(0,100)}.......`
                            }
                        </Card.Text>
                    <Button variant='outline-primary'>Read more</Button>
                </Card.Body>
            </Card>
        </>
    )
}
export default Blogcard