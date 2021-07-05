import { Button,} from 'react-bootstrap'
import React,{ useEffect, useState} from 'react'
import firebase from '../../config/config'
const Listblog = ()=>{
    const [testimony, setTestimony] = useState([])
    useEffect(()=>{
        

    },[])

    return(
        <div>
            <strong>Blog Title</strong>
            <Button variant='danger'>Delete</Button>
        </div>
    )
}
export default Listblog