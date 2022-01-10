import React, { useState } from 'react'
import { Card, Button, Modal } from 'react-bootstrap'
import "./ServiceBox.css"




function MyModal(props) {
  return (
    <div className="modal">
      <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.header}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>{props.centered}</h4>
        <p>
          {props.content}
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
    </div>
    
  );
}



const  ServiceBox = props => {
    const [services, setServices] = useState(props)
    const [modalShow, setModalShow] = useState(false);
    const {content, centered, head}  = props;

    return (
        <div
            style={{
                marginTop: '20px'
            }}
        >
            <Card style={{ 
                width: '18rem',
                textAlign: 'center'
                }}
            >
                <Card.Img variant="top" src={props.pic} />
                <Card.Body>
                    <Card.Title>{services.cardTitle}</Card.Title>
                    <Card.Text>
                        {services.textValue}
                    </Card.Text>
                    <Button variant="primary" onClick={() => setModalShow(true)}> {services.textButton} </Button>
                    <MyModal
                        {...props}
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />
                </Card.Body>
            </Card>
        </div>
          
    )
}

export default ServiceBox;

