import React from 'react'
import { Container } from 'react-bootstrap'
import Blogcard from './Blogcard'
const Blog = ()=>{
    return (
        <>
        <Container>
            <h3 className="mb-5">Popular</h3>
            <div className='container blog-card-group blog' >
                <Blogcard/>
                <div className="blogGrid">
                    <Blogcard className="blogGridF" />
                    <Blogcard className="blogGridF" />
                </div>
                <Blogcard/>
            </div>
        </Container>
        </>
    )
}
export default Blog