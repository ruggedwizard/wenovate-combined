import { Button, Modal, Form, Container } from 'react-bootstrap'
import React, { useState } from 'react'
const Loginmodal = () => {
    const [show, setShow] = useState(false)
    const handleShow = ()=>{
        setShow(true)
    }
    const handleClose = () =>{
        setShow(false)
    }

    return(
        <Container>
        <button className='btn btn-md btn-success green-btn' onClick={handleShow}>Login</button>
        <Modal show={show} onHide={handleClose} >
            <Modal.Header closeButton>
                <Modal.Title>
                    Login
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                <Form.Group>
                    <Form.Label>Email:</Form.Label>
                    <Form.Control type='email' placeholder='email@example.com'/>
                        <Form.Text className='text-muted'>
                        we will never share your email with anyone else    
                        </Form.Text>    
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                Login
                </Button>
                </Form>
            </Modal.Body>
        </Modal>
        </Container>
    )
}
export default Loginmodal 