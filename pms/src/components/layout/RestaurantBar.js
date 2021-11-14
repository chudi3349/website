import React from "react";
import Buttonbtn from "../common/Buttonbtn";
import RoomNumber from "../fragments/RoomNumber";
import { Modal, Button } from "react-bootstrap";
import AppBar from "./AppBar";
//import {TextFieldGroup} from "../common/TextFieldGroup"


function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <AppBar></AppBar>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <>
         {
          <div>
            <RoomNumber/>
          </div>
          }
        </>
      </Modal.Body>
      <Modal.Footer>
        <input type="text" placeholder="GRAND TOTAL"></input>
        <Button className="bg-gold" onClick={props.onHide}>Cancel</Button>
        <Button className="bg-gold" onClick={props.onSave}>Save</Button>
        <Button className="bg-gold" onClick={props.onGuestCheck}>Guest Check</Button>
      </Modal.Footer>
    </Modal>
  );
}



function RestaurantBar() {
 const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <div className="container d-flex">
        <div>
          <Buttonbtn variant="primary" onClick={() => setModalShow(true)}
            icon= "fas fa-border-all"
            name= " New Order"
              style={{
                width: "200px",
                hiegth: "60px",
                left: "600px",
                top: "100px",
                boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.1)",
              }}
          />
          <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        </div>

          <div>
            <Buttonbtn
              icon="fas fa-utensils"
              name= " Menu"
              style={{
                width: "200px",
                hiegth: "100px",
                left: "590px",
                top: "80px",
                boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.1)",
              }}
            />
          </div>
      </div>

    </>
  );
}


export default RestaurantBar;
