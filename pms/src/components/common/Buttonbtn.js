import React, { Fragment } from "react";
import "../layout/styles/styles.scss";

function Buttonbtn(props) {

    return (
      <Fragment>
        <div className="container d-flex">
            <div>
              <button
                className={`btn bg-gold ${props.adjust} rounded-pill text-light mt-4`}
                style={props.style}
                onClick={props.onClick}
              ><i className={props.icon}></i>
                {props.name}
              </button>
            </div>
        </div>
      </Fragment>
    );
  }

export default Buttonbtn;
