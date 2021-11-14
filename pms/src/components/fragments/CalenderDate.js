import React from "react";
import { Link } from "react-router-dom";

function CalenderDate() {
  const calenderDate = ["01", "02", "03", "04", "05", "06"];
  return (
    <div className="arrival">
      <div className="arrival__text">
        <div className="calender__pin__one bg-gold"></div>
        <div className="calender__pin__two bg-gold"></div>
        <span>ARRIVALS</span>
      </div>
      <div className="arrival__calendar">
        {calenderDate.map((date) => (
          <Link key={date} to="/" className="calender__date text-gold">
            {date}
          </Link>
        ))}

        <div className="arrival__check bg-gold">
          <i className="fa fa-check fa-2x" aria-hidden="true"></i>
        </div>
      </div>
    </div>
  );
}

export default CalenderDate;
