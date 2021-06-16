import React ,{useState}from 'react'
import {Form, Button} from 'react-bootstrap'
import firebase from '../../config/config'
const Createfeedback = () => {
    const [feedbackTitle, setFeedbackTitle] = useState('')
    const [feedbackAuthor, setFeedbackAuthor] = useState('')
    const [feedbackContent, setFeedbackContent] = useState('')


    const handleSubmit = (e)=>{
        e.preventDefault()
        firebase.firestore()
        .collection('feedbacks')
        .add({
            feedbackTitle,
            feedbackAuthor,
            feedbackContent,
            date_added:firebase.firestore.FieldValue.serverTimestamp()
        })
        setFeedbackTitle('')
        setFeedbackAuthor('')
        setFeedbackContent('')

    }
    return (
        <Form>
            <Form.Group>
                <Form.Label>
                <strong>Testimony:</strong>
                </Form.Label>
                <Form.Control
                 type="text"
                 placeholder="Testimony Title"
                 value={feedbackTitle}
                 onChange={(e)=>setFeedbackTitle(e.target.value)}
                 ></Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>
                <strong>Author:</strong>
                </Form.Label>
                <Form.Control
                 type="text"
                 placeholder="Testimony Author"
                 value={feedbackAuthor}
                 onChange={(e)=>setFeedbackAuthor(e.target.value)}
                 ></Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>
                <strong>Feedback: </strong>
                </Form.Label>
                <Form.Control as="textarea"
                value={feedbackContent} 
                onChange={(e)=>setFeedbackContent(e.target.value)} 
                rows={5} 
                placeholder="Feedback Content......"></Form.Control>
            </Form.Group>
           
            <Button variant="outline-success" onClick={handleSubmit}> Add Testimony</Button>
        </Form>
    )
}

export default Createfeedback
