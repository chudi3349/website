import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { TextFieldGroup } from "../common/TextFieldGroup";

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
    credentials: {username: '', password: ''}
  };
  this.login = this.login.bind(this);
  }

  

  login (event) {
    console.log(this.state.credentials)
        fetch('http://127.0.0.1:8000/api/token/', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(this.state.credentials),
      }).then(
        data => {
          console.log(data);
        }
      ).catch(error => console.error(error))
  };

  inputChanged = event => {
    const cred = this.state.credentials;
    cred[event.target.name] = event.target.value;
    this.setState({credentials: cred});
  }
  render() {
    return (
      <Fragment>
        <div className="container mt-5">
          <div
            className="card col-xs-8 col-md-6 col-xl-4 offset-xl-4 offset-md-3 bg-dark"
            style={{ borderRadius: "30px" }}
          >
            <div style={{ height: "150px" }}></div>
            <div className="container">
              <div className="card-body text-center">
                {/* Login Form */}
                <form className="form-group text-light">
                  <TextFieldGroup
                    onChange={this.inputChanged}
                    value={this.state.credentials.username}
                    labelStyle={{ top: "158px", left: "60px", zIndex: 4 }}
                    inputStyle={{ borderRadius: "10px" }}
                    name="username"
                    placeholder="Username"
                    icon="fa-user-circle"
                    //labelText="Username"
                  />

                  <TextFieldGroup
                    onChange={this.inputChanged}
                    value={this.state.credentials.password}
                    labelStyle={{ top: "244px", left: "60px", zIndex: 4 }}
                    inputStyle={{ borderRadius: "10px" }}
                    name="password"
                    type="password"
                    className="mt-5"
                    placeholder="Password"
                    icon="fa-fingerprint"
                    //labelText="Password"
                  />
                  <Link to="/dashboard">
                    <div className="mt-4">
                      <button 
                      className="btn bg-gold btn-block rounded-pill text-light"
                      onClick={this.login}
                      >
                        Login
                      </button>
                    </div>
                  </Link>
                </form>
                <a href="/reset-password" className="text-gold">
                  Forgot Password?
                </a>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Login;
