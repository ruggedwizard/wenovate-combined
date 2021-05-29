import React from 'react'
import { Container, ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ConnectNav = () => {
    return (
        <Container className=" mb-5" >
            <ListGroup className="d-flex m-auto" horizontal style={{margin:"auto",width:"100%", border:"none"}}>
                <ListGroup.Item><Link to="/connections">My Connections</Link></ListGroup.Item>
                <ListGroup.Item><Link to="/people">People</Link></ListGroup.Item>
                <ListGroup.Item><Link to="/market">Market Place</Link></ListGroup.Item>
                <ListGroup.Item><Link to="/supply">Supply Chains</Link></ListGroup.Item>
            </ListGroup>
        </Container>
    )
}

export default ConnectNav
