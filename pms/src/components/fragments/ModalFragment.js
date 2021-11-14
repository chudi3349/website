import React, { useState } from 'react'
import {Modal} from 'react-bootstrap'
import ChangeRoom from './ChangeRoom';
import ModalBody from './ModalBody';
import ModalTitle from './ModalTitle';
import Reservation from './Reservation';
import Transaction from './Transaction';

function ModalFragment({show, setShow, }) {
  const [receptionType, setReceptionType] = useState('checkin')
  return (
    <>
      <Modal size='xl'
      centered show={show} onHide={() => setShow(false) }>
        <Modal.Header >
          <Modal.Title> 
            <ModalTitle  title='Check In' onClick={(e) => setReceptionType('checkin')} active={receptionType === 'checkin'} /> 
            <ModalTitle title='Payments' onClick={(e) => setReceptionType('payments')} active={receptionType === 'payments'} /> 
            <ModalTitle title='Change Room' onClick={(e) => setReceptionType('changeroom')} active={receptionType === 'changeroom'} /> 
            <ModalTitle title='Reservation' onClick={(e) => setReceptionType('reservation')} active={receptionType === 'reservation'} />  
            <ModalTitle title='Check Out'  /> 
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {receptionType === 'checkin' && <ModalBody /> }
          {receptionType === 'payments' && <Transaction /> }
          {receptionType === 'changeroom' && <ChangeRoom /> }
          {receptionType === 'reservation' && <Reservation /> }          
        </Modal.Body>
      </Modal>
    </>
  );


}

export default ModalFragment
