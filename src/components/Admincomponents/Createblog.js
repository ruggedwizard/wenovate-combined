import React ,{ useState }from 'react'
import { Form, Button} from 'react-bootstrap'


const Createblog = () => {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [content, setContent] = useState('')

    const setSubmit = (e) =>{
        e.preventDefault()
        console.log('Submitted')
        alert('Form Submitted')
    }

    return (
        <Form onSubmit={setSubmit}>
            <Form.Group>
                <Form.Label>
                <strong>Title:</strong>
                </Form.Label>
                <Form.Control
                 type="text"
                 value={title}
                 placeholder="Blog Title"
                 onChange={(e)=>setTitle(e.target.value)}
                 ></Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>
                <strong>Author:</strong>
                </Form.Label>
                <Form.Control
                 type="text"
                 placeholder="Composed By"
                 value={author}
                 onChange={(e)=>setAuthor(e.target.value)}
                 ></Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>
                <strong>Blog Content:</strong>
                </Form.Label>
                <Form.Control as="textarea" rows={5} value={content} 
                onChange={(e)=>setContent(e.target.value)}
                placeholder="Blog Content......"></Form.Control>
            </Form.Group>
            <Button variant='outline-warning' type='submit'>Add Post</Button>
        </Form>
    )
}

export default Createblog
