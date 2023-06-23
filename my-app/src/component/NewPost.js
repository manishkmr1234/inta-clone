


import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import icon from '../all-image/icon.png';
import camera from '../all-image/camera.png';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button'


import'./NewPost.css';


export default function NewPost() {
 const [formData, setFormData] = useState({
    image:null,
    author: "",
    location:"",
    description:""
 })

function captureForm(e) {
    e.preventDefault();
    const forValues = new FormData(e.target)
}




    return (
       <>
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
            <img src={icon} alt="longo"/>
            <span>Instaclone</span>
            </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
        <img src={camera} alt="cemera-icon"/>
        </Navbar.Collapse>
      </Container>
    </Navbar>

<div className="new-post-container">
<Card >
<Card.Body>
<Form onSubmit={captureForm}>
<Form.Group controlId="formFile" className="mb-3">
        
        <Form.Control name = "Image" type="file" />
</Form.Group>
<InputGroup className="mb-3">
      
      <Form.Control aria-label="author" name="author" placeholder="Author"/>
      <Form.Control aria-label="Location" name = "location" placeholder="Location"/>
</InputGroup>
<Form.Control size="lg" type="text" name = "description" placeholder="Description" />
<div className="button-container">
<Button variant="primary" type="submit">
        Submit
</Button>
</div>
</Form>
  
</Card.Body>
</Card>
</div>

</>
            
)
}