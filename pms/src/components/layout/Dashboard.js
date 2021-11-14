import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Settingbtn from "../common/settingButton";
import Hotel from "./images/Hotel-Reception.jpg";
import Restaurant from "./images/Restaurant.jpeg";
import Buttonbtn from "../common/Buttonbtn"
import "./styles/styles.scss";


function Dashboard() {

    return (
      <Fragment>
        <div
          className="container d-flex"
          style={{
            position: "relative",
            left: "14px",
            top: "300px",
          }}
        >
          <div>
            <div>
              <div>
                <Link to="reception">
                  <img
                    id="reception"
                    src={Hotel}
                    alt="hotel reception"
                    className="mt-4"
                    style={{
                      position: "absolute",
                      width: "330.889px",
                      height: "198px",
                      left: "0%",
                      top: "0%",
                      borderRadius: "10em",
                      cursor: "pointer",
                    }}
                  />
                </Link>
              </div>
            </div>
          </div>

          {/* Checkin button */}
          <Link to="reception">
            <div id="chResize">
              <Buttonbtn
                name="Checkin/Reservation"
                style={{
                  position: "absolute",
                  width: "171px",
                  height: "60px",
                  left: "345px",
                  top: "80px",
                  boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.1)",
                }}
              />
              
            </div>
          </Link>

          {/* Restaurant button */}
          <Link to="/restaurant">
            <div id="resResize">
              <Buttonbtn
                name="Restaurant/Bar"
                style={{
                  position: "absolute",
                  width: "171px",
                  height: "60px",
                  left: "590px",
                  top: "80px",
                  boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.1)",
                }}
              />
            </div>
          </Link>

          {/* Restaurant image */}
          <div>
            <div>
              <div>
                <Link to="/restaurant">
                  <img
                  id="restaurant"
                    src={Restaurant}
                    alt="restaurant"
                    className="mt-4"
                    style={{
                      position: "absolute",
                      width: "348px",
                      height: "199px",
                      left: "775px",
                      top: "2px",
                      borderRadius: "10em",
                      cursor: "pointer",
                    }}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Link to="/">
        <Settingbtn icon="fas fa-cog" name="Settings"></Settingbtn>
        </Link>
        <Link to="/help">
        <Settingbtn icon="far fa-life-ring" name="Help" />
        </Link>
      </Fragment>
    );
  }


export default Dashboard;
