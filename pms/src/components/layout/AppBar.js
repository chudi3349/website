import React, { useState, useEffect, Fragment } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import HompageNavbar from "./hompage/HompageNavbar";
import './hompage/HomePageButton.css';

function AppBar (props){

  const [button, setButton] = useState(true);

  const showButton  = () => {
    if (window.innerWidth <= 960){
      setButton(false)
    } else{
      setButton(true)
    }
  };

  useEffect(() => {
    showButton();
  }, []);
  
  window.addEventListener('resize', showButton);



    const signUpLoginName = !props.signUpLogin ? "": props.userName ? props.userName : "";
      return (
        <Fragment>
          <Navbar bg="dark">
            <Navbar.Toggle />
            <HompageNavbar/>
            <Navbar.Collapse className="justify-content-end">
              <Nav onClick={props.handleClick}>
              {button &&
                <Link className="text-gold " to={props.signUpLogin ? "/hotel" : props.userName ? "/register" : "/register"}>
                  
                  {signUpLoginName}
                </Link>
              }
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Fragment>
      )
}

/* const signUpLoginName = !props.signUpLogin ? "SignUp": props.userName ? props.userName : "Login"; 


<Link className="text-gold " to={props.signUpLogin ? "/hotel" : props.userName ? "/register" : "/register"}>
<i className="input-group-text fas fa-user-circle bg-transparent text-gold border-0 m-auto"></i>
*/

export default AppBar;
