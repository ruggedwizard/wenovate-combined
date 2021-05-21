import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import Registermodal from './Registermodal'
import Loginmodal from './Loginmodal'
const Navigation = ()=>{
    return(
       <Navbar expand='md' >
           <Navbar.Brand style={{marginRight:60, marginLeft:5}}>
               <div className='cirle-icon'></div>
               <h1>OFR</h1>
           </Navbar.Brand>
           <Navbar.Toggle aria-controls='navbar-content'/>
           <Navbar.Collapse id='navbar-content' >
               <Nav className='mr-auto' style={{marginLeft:200}}>
                   <Nav.Link>
                       <strong style={{marginRight:100}}>Features</strong>
                   </Nav.Link>
                   <Nav.Link>
                       <strong style={{marginRight:100}}>Blog</strong>
                   </Nav.Link>
                   <Nav.Link>
                       <strong style={{marginRight:100}}>Connect</strong>
                   </Nav.Link>
                   <Nav.Link style={{marginRight:100}}>
                       <Registermodal/>
                   </Nav.Link>
                   <Nav.Link style={{marginRight:100}}>
                       <Loginmodal/>
                   </Nav.Link>

               </Nav>
           </Navbar.Collapse>
       </Navbar>
    )
}


export default Navigation