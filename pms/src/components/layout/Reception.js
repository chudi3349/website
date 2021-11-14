import React from "react";
import CalenderDate from "../fragments/CalenderDate";
import CenteredButton from "../fragments/CenteredButton";
import Modal from "../fragments/ModalFragment";
import RoomNumber from "../fragments/RoomNumber";
import RoomType from "../fragments/RoomType";
import "./styles/Reception.css";

function Reception() {
  return (
    <div className="container-fluid">
      <CalenderDate />

      <div className="room__type__container">
        <RoomType title="ROOM TYPE" option="ALL" />
        <RoomType title="BUILDINGS" option="ALL" />
        <RoomType title="FLOOR" option="1" />
        <RoomType title="ROOM STATUS" option="ALL" />
      </div>

      <RoomNumber />
      <Modal />

      <div className="guest__list">
        <h5> Guest List</h5>
        <h5> Email </h5>
        <h5> Occupancy </h5>
        <h5> Shift Report </h5>
      </div>

      <div className=" btn__primary  bg-gold border-0 rounded-pill">
        <CenteredButton />
      </div>
    </div>
  );
}

export default Reception;
