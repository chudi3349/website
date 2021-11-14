import React from "react";
import { Link } from "react-router-dom";

function Dropdown({ option1, option2, option3, option4, option5 }) {
  return (
    <div className="dropdown-content">
      {option1 && <Link to="#"> {option1} </Link>}
      {option2 && <Link to="#"> {option2} </Link>}
      {option3 && <Link to="#"> {option3} </Link>}
      {option4 && <Link to="#"> {option4} </Link>}
      {option5 && <Link to="#"> {option5} </Link>}
    </div>
  );
}

export default Dropdown;
