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
                <Blogcard/>
                <Blogcard/>
                <Blogcard/>
                <Blogcard/>
                <Blogcard/>
            </div>
        </Container>
        </>
    )
}
export default Blog