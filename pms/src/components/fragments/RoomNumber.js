import React, { useState } from "react";
import ModalFragment from "./ModalFragment";

function RoomNumber() {
  
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const roomNumber = [
    101,
    102,
    103,
    104,
    105,
    106,
    107,
    108,
    109,
    110,
    201,
    202,
    203,
    204,
    205,
    206,
    207,
    208,
    209,
    210,
  ];
  return (
    <div className="room__number__container" >
      {roomNumber.map((number) => (
        <>
        <p key={number} onClick={handleShow} className="room__number">
          {number}
        </p>
      </>
      ))}
      <ModalFragment show={show} setShow={setShow} />
    </div>
  );
}

export default RoomNumber;
