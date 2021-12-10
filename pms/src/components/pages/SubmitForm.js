import React from 'react'
import {Card, Form, Button} from 'react-bootstrap'

export default function SubmitForm() {
    return (
        <div style={{
            margin:'60px'
        }}>
            <Card>
                <Card.Body>
                    <Form>
                        <h2 style={{
                            textAlign:'center'
                        }}>Contact Us</h2>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control type="text" placeholder="Your Name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control type="email" placeholder="email@example.com" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control type="text" placeholder="Subject" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                        <div className="d-grid gap-2">
                            <Button variant="primary" size="lg">
                                Submit
                            </Button>
                            </div>
                    </Form>
                </Card.Body>
            </Card>    
        </div>
    )
}
