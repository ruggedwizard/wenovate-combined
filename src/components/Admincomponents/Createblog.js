import React ,{ useState, useEffect }from 'react'
import { Form, Button} from 'react-bootstrap'
import firebase from '../../config/config'
import timestamp from '../../config/config'

const Createblog = () => {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [content, setContent] = useState('')
    const [image, setImage] = useState('')
    const [progress, setProgress] = useState(0)
    const [imageUrl, setImageUrl]= useState(null)

  

    const setSubmit = (e) =>{
        e.preventDefault()
        firebase.firestore()
        .collection('blog')
        .add({
            author,
            content,
            title,
            date_added:firebase.firestore.FieldValue.serverTimestamp()
        })
        setTitle('')
        setAuthor('')
        setContent('')
    }
    const imageUpload = (e) =>{
        const image = e.target.files[0]
        console.log(image.name)
        const types = ['image/jpeg', 'image/png']
        
        // uplaoad the image to storage
       
            firebase.storage()
            .ref(image.name)
            .put(image)
            .on('state_changed',(snap)=>{
                let percentage = (snap.bytesTransferred/ snap.totalBytes) * 100
                setProgress(percentage)
            },async ()=>{
                const url = await firebase.storage().ref(image.name).getDownloadURL()
                setImageUrl(url)
            })
       
        
    }
    console.log(progress, imageUrl)
   
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
                <strong>Blog Image:</strong>
                </Form.Label>
                <Form.File value={image} onChange={imageUpload}></Form.File>
            </Form.Group>
            <Form.Group>
                <Form.Label>
                <strong>Blog Content:</strong>
                </Form.Label>
                <Form.Control as="textarea" rows={5} value={content} 
                onChange={(e)=>setContent(e.target.value)}
                placeholder="Blog Content......"></Form.Control>
            </Form.Group>
            <Button variant='outline-warning' type='submit' onClick={setSubmit}>Add Post</Button>
        </Form>
    )
}

export default Createblog
