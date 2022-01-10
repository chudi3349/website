import React, {useRef} from 'react';
import emailjs from 'emailjs-com';
import {Card, Form, Button} from 'react-bootstrap';

export const ContactUs = () => {

    const form = useRef();

    function sendEmail(e){
        e.preventDefault();
        console.log(e);

    emailjs.sendForm('service_a9rez6w', 'template_4d635db', form.current, 'user_QDREpLKy4kzWb1CfMcgdE')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
      alert('Sent thanks for contacting us')
    };
    return (
        <div style={{
            margin:'60px'
        }}>
            <Card>
                <Card.Body>
                    <Form  ref={form} onSubmit={sendEmail}>
                        <h2 style={{
                            textAlign:'center'
                        }}>Contact Us</h2>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control type="text" placeholder="Your Name" name='from_name'/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control type="email" placeholder="email@example.com" name='email' />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control type="text" placeholder="Subject" name='subject' />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" rows={3} name='message' />
                        </Form.Group>
                        <div className="d-grid gap-2">
                            <Button variant="primary" size="lg" type='submit' >
                                Submit
                            </Button>
                            </div>
                    </Form>
                </Card.Body>
            </Card>    
        </div>
    )
} 


