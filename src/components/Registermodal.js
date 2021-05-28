import { Button, Modal, Form, Container } from 'react-bootstrap'
import React, { useState } from 'react'

const Registermodal = () =>{
    const [show, setShow] = useState(false)
    const handleShow = ()=>{
        setShow(true)
    }
    const handleClose = () =>{
        setShow(false)
    }
    return(
        <Container>
        <Button className='btn-md' onClick={handleShow}>Register</Button>
        <Modal show={show} onHide={handleClose} >
            <Modal.Header closeButton>
                <Modal.Title>
                    Register
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                <Form.Group>
                    <Form.Label>Name:</Form.Label>
                    <Form.Control type='email' placeholder='Damilare David'/>
                        <Form.Text className='text-muted'>
                        This is just your display name   
                        </Form.Text>    
                </Form.Group>
                <Form.Group>
                    <Form.Label>Email:</Form.Label>
                    <Form.Control type='email' placeholder='email@example.com'/>
                        <Form.Text className='text-muted'>
                        We will never share your email with anyone else    
                        </Form.Text>    
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="*********" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" placeholder="*********" />
                </Form.Group>
                <Button variant="primary" type="submit">
                Register
                </Button>
                </Form>
            </Modal.Body>
        </Modal>
        </Container>
    )
}
export default Registermodal