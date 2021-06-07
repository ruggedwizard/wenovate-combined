import React from 'react'
import {Button} from 'react-bootstrap'
const Viewfeedback = ()=>{
    return(
        <div className="col-sm-10">
            <h6>FeedBack Title</h6>
            <Button variant='danger' size='sm'>Delete</Button>
            <span style={{width:'5em'}}></span>       
            <Button variant='warning' size='sm'>Edit</Button>         
        </div>
    )
}
export default Viewfeedback