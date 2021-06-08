import React from 'react'
import { Container, Form, Button} from 'react-bootstrap'
const AdminLogin =()=>{
    return(
        <Container className='col-sm-4 jumbotron'>
            <h5 style={{textAlign:'center'}}>OFR Pannel</h5>
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
                <div style={{display:'grid'}}>
                    <Button  style={{marginBottom:4}} variant="primary" type="submit">Login </Button>
                    <Button variant="danger" type="submit"> Reset Password </Button>
                </div>
            </Form>
        </Container>
    )
}
export default AdminLogin