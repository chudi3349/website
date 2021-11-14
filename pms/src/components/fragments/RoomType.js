import React from "react";
import Dropdown from "./Dropdown";

function RoomType({ title, option }) {
  return (
    <div className="room__type">
      <h4> {title}: </h4>
      <div className="dropdown">
        <div className="room__type__flex bg-gold">
          <h5> {option} </h5>
          <i className="fa fa-chevron-down fa-size"></i>
        </div>
        {title === "ROOM TYPE" && (
          <Dropdown
            option1="Link 1"
            option2="Link 2"
            option3="Link 3"
            option4="Link 4"
            option5="Link 5"
          />
        )}
        {title === "BUILDINGS" && (
          <Dropdown option1="Link a" option2="Link b" option3="Link c" />
        )}
        {title === "FLOOR" && <Dropdown option1="Link i" option2="Link ii" />}
        {title === "ROOM STATUS" && (
          <Dropdown
            option1="All"
            option2="CLEAN"
            option3="DIRTY"
            option4="OCCUPIED"
            option5="UNAVAILABLE"
          />
        )}
      </div>
    </div>
  );
}

export default RoomType;
