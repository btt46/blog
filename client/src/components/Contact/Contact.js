import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import React, {useState} from "react";
import api from '../api';
import './Contact.css'


function Contact() { 
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    // Change email
    const handleEmailChange = event => {
        setEmail(event.target.value);
    };

    // Change name
    const handleNameChange = event => {
        setName(event.target.value);
    };

    // Change Message
    const handleMessageChange = event => {
        setMessage(event.target.value);
    };

    // send a message from contact form to server
    const sendMessage = event => {
        event.preventDefault();
        // let form_data = new FormData();

        let form_data = {
            name: name,
            email: email,
            message: message,
        }

        console.log(form_data);
        // send form's information to server
         api.post('create_contact/', JSON.stringify(form_data)).then(res => console.log(res.status)) // 
         .catch(errors => console.log(errors)) // 
         
        setName("");
        setEmail("");
        setMessage("");
      
    }

    // contact form
    return (
       <div class="form">
        <div class="contact-form">
            <h3 id="contact-form-title"> Contact me</h3>
            <Form  onSubmit={sendMessage}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Name</Form.Label>
                    <Form.Control as="textarea" rows={1} placeholder="Your full name" 
                    onChange={handleNameChange}
                    value={name}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="What should I reply you back" 
                        onChange={handleEmailChange}
                        value={email}
                    />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows={5} 
                        placeholder="Enter your messages"
                        onChange={handleMessageChange}
                        value={message}
                    />
                </Form.Group>

            
                <Button variant="primary" type="submit" >
                    Submit
                </Button>
            </Form>
         </div>
	</div>
    )
}

export default Contact;
