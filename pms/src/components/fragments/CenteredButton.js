import React from "react";
import { Link } from "react-router-dom";

function CenteredButton() {
  return (
    <>
      <Link to="/" className=" text-light">
        {" "}
        BACK{" "}
      </Link>
    </>
  );
}

export default CenteredButton;
