import { Button, Modal, Form, Container } from 'react-bootstrap'
import React, { useState } from 'react'
import firebase from '../config/config'
const Loginmodal = () => {
    const [show, setShow] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleShow = ()=>{
        setShow(true)
    }
    const handleClose = () =>{
        setShow(false)
    }
    const handelSubmit = (e)=>{
        e.preventDefault()
        if(email.length === 0 || password.length === 6){
            alert("Email or Password too short")

        }else{

            firebase.auth()
            .signInWithEmailAndPassword(email, password)
            .then((cred)=>{
                console.log(cred.user)
            })
            setShow(false)
        }

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
                <Form onSubmit={handelSubmit}>
                <Form.Group>
                    <Form.Label>Email:</Form.Label>
                    <Form.Control value={email} onChange={(e)=>setEmail(e.currentTarget.value)} type='email' placeholder='email@example.com'/>
                        <Form.Text className='text-muted'>
                        we will never share your email with anyone else    
                        </Form.Text>    
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                        <Form.Control value={password} onChange={(e)=>setPassword(e.currentTarget.value)} type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={handelSubmit}>
                Login
                </Button>
                </Form>
            </Modal.Body>
        </Modal>
        </Container>
    )
}
export default Loginmodal 