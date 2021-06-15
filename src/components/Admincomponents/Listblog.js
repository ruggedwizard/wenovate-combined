import { Button } from 'react-bootstrap'
import React from 'react'
import firebase from '../../config/config'
const Listblog = ()=>{
    return(
        <div>
            <strong>Blog Title</strong>
            <Button variant='danger'>Delete</Button>
        </div>
    )
}
export default Listblog