import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ConnectNav = () => {
    return (
        <Container className=" mb-5" >

            <Navbar expand='md' >
                <Navbar.Toggle aria-controls='navbar-content'/>
                <Navbar.Collapse id='navbar-content' >
                    <Nav className='m-auto' style={{fontSize:"20px", }}>
                        <Nav.Link active>
                            <Link to="/connect/connections" style={{ marginRight:'50px' }}>My Connections</Link>
                        </Nav.Link>
                        <Nav.Link>
                        <Link to="/connect/people" style={{ marginRight:'50px' }}>People </Link>
                        </Nav.Link>
                        <Nav.Link>
                        <Link to="/connect/market" style={{ marginRight:'50px' }}>Market Place</Link>
                        </Nav.Link>
                        <Nav.Link>
                        <Link to="/connect/supply" >Supply Chains</Link>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

        </Container>
    )
}

export default ConnectNav
