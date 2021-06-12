import { Button, Modal, Form, Container } from 'react-bootstrap'
import React, { useState } from 'react'
import firebase from '../config/config'

const Registermodal = () =>{
    const [email,setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [show, setShow] = useState(false)
    const handleShow = ()=>{
        setShow(true)
    }
    const handleClose = () =>{
        setShow(false)
    }

    const handleSubmit=(e)=>{
       e.preventDefault()
       firebase.auth()
       .createUserWithEmailAndPassword(email, password)
       .then((cred)=>{
        console.log(cred.user)
       })
       setEmail('')
       setPassword('')
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
                <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Email:</Form.Label>
                    <Form.Control
                     type='email'
                      value={email}
                      onChange={e=>setEmail(e.currentTarget.value)}
                      placeholder='email@example.com'/>
                        <Form.Text className='text-muted'>
                        We will never share your email with anyone else    
                        </Form.Text>    
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                        <Form.Control 
                        value={password}
                        onChange={e=>{setPassword(e.currentTarget.value)}}
                         type="password"
                          placeholder="*********" />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={handleSubmit}>
                Register
                </Button>
                </Form>
            </Modal.Body>
        </Modal>
        </Container>
    )
}
export default Registermodal