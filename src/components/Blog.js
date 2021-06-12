import React,{useState, useEffect} from 'react'
import { Container } from 'react-bootstrap'
import Blogcard from './Blogcard'
import firebase from '../config/config'
const Blog = ()=>{
    const [blogs, setBlogs] = useState([])
    useEffect(()=>{
    const unsub = firebase.firestore()
                .collection('blog')
                .onSnapshot((snap)=>{
                let blogs = []
                snap.forEach(doc=>{
                blogs.push({...doc.data(), id:doc.id})
                console.log(blogs)
                })
            setBlogs(blogs)
        })
    return ()=> unsub()
    },[])
    

    return (
        <>
        <Container>
            <h3 className="mb-5">Popular</h3>
            <div className='container blog-card-group blog' >
                {blogs.map((blog)=>{
                    return(
                        <Blogcard key={blog.id} {...blog} />
                    )
                })}
            </div>
        </Container>
        </>
    )
}
export default Blog