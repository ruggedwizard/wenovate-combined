import React ,{ useState }from 'react'
import { Form, Button} from 'react-bootstrap'


const Createblog = () => {
    const [title, setTitle] = useState('Title')
    const [author, setAuthor] = useState('Author')
    const [content, setContent] = useState('Default Content')
    return (
        <Form>
            <Form.Group>
                <Form.Label>
                <strong>Title:</strong>
                </Form.Label>
                <Form.Control type="text" placeholder="Blog Title"></Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>
                <strong>Author:</strong>
                </Form.Label>
                <Form.Control type="text" placeholder="Composed By"></Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>
                <strong>Blog Content:</strong>
                </Form.Label>
                <Form.Control as="textarea" rows={5} placeholder="Blog Content......"></Form.Control>
            </Form.Group>
            <Button variant='outline-warning' type='submit'>Add Post</Button>
        </Form>
    )
}

export default Createblog
