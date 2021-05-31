import React from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap'
import Registermodal from './Registermodal'
import Loginmodal from './Loginmodal'
import { Link } from 'react-router-dom';
// import Body from './Bodynew'
// import Body from './Bodynew'
// import Connect from './Connect'
// import Blog from './Blog'


const Navigation = () => {
    return(
        <Container>
            <Navbar expand='md' sticky="top" style={{backgroundColor:"white"}}>
                <Navbar.Brand style={{marginRight:60, marginLeft:5}}>
                    <Link to="/" >
                        <div className='cirle-icon'></div>
                        <h1>OFR</h1>
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='navbar-content'/>
                <Navbar.Collapse id='navbar-content' >
                    <Nav className='m-auto' style={{marginLeft:200}}>
                        <Nav.Link>
                            <Link to="/body"  ><strong style={{fontSize:"20px", marginRight:100}}>Features</strong></Link>
                        </Nav.Link>
                        <Nav.Link>
                        <Link to="/blog"><strong style={{fontSize:"20px", marginRight:100}}>Blog</strong> </Link>
                        </Nav.Link>
                        <Nav.Link>
                        <Link to="/connect" ><strong style={{fontSize:"20px", marginRight:100}}>Connect</strong></Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Registermodal/>
                        </Nav.Link>
                        <Nav.Link>
                            <Loginmodal/>
                        </Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    )
}


export default Navigation