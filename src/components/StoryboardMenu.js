import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
const Storyboard = ()=>{
    return(
        <Navbar collapseOnSelect='true' className='mr-auto' style={{textAlign:'center',padding:'1em'}}>
            <Nav.Link>
                <strong>My Connections</strong>
            </Nav.Link>
            <Nav.Link>
            <strong>Market place</strong>
            </Nav.Link>
            <Nav.Link>
            <strong>people</strong>
            </Nav.Link>
            <Nav.Link>
            <strong>supply chain</strong>
            </Nav.Link>
        </Navbar>
    )
}
export default Storyboard