import React from 'react'
import { Container } from 'react-bootstrap'
import Blogcard from './Blogcard'
const Blog = ()=>{
    return (
        <>
        <Container>
            <h3>Popular</h3>
            <div className='container blog-card-group' >
                <Blogcard/>
            </div>
        </Container>
        </>
    )
}
export default Blog