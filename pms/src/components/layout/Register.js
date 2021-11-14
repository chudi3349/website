import React, { Component } from "react";
import JoinForm from "../fragments/passwordForm"
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { TextFieldGroup } from "../common/TextFieldGroup";
import zxcvbn from 'zxcvbn';

class Register extends Component {
  constructor(props){
    super(props);
    this.state = {signupdetails:{
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    username: '',
    birthday: '',
    gender: ''
  },
  errors: {},
  password2: '',
  strength: false
  }

  this.inputChanged = this.inputChanged.bind(this);
  this.signup = this.signup.bind(this);
  this.validate = this.validate.bind(this);
  }

  stateChanged = state => {

    // update the internal state using the updated state from the form field
    this.setState({
      password2: state.value,
      strength: zxcvbn(state.value).score
    });

  };

  inputChanged(event){
    const signupcred = this.state.signupdetails;
    signupcred[event.target.name] = event.target.value;
    this.setState({signupdetails: signupcred});
  }



  signup(event) {
    event.preventDefault();
    console.log(this.state.signupdetails);

    if (this.validate()){

      let input = {};
      input["name"] = "";
      input["email"] = "";
      input["password"] = "";
      input["confirm_password"] = "";
      this.setState({input:input});
      console.log(this.state.signupdetails);

      fetch('http://127.0.0.1:8000/api/register/', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(this.state.signupdetails),
      }).then(
        data => {
          console.log(data);
        }
      ).catch(error => console.error(error))

    }
    
  }


  validate() {
    let input = this.state.signupdetails;
    let password = this.state.password2;
    let errors = {};
    let isValid = true;

    if (!input["first_name"]){
      isValid = false;
      errors["firstname"] = "Please enter your firstname.";
    }

     if (!input["last_name"]){
      isValid = false;
      errors["surname"] = "Please enter your surname.";
    }

    if (!input["email"]){
      isValid = false;
      errors["email"] = "Please enter your email.";
    }

    if (typeof input["email"] !== "undefined") {
          
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(input["email"])) {
          isValid = false;
          errors["email"] = "Please enter valid email address.";
        }
      }

      if (!input["password"]) {
        isValid = false;
        errors["password"] = "Please enter your password.";
      }

      if(!input["password"] < 7){
        isValid = false;
        errors["passWord"] = "Password must be more than 7 characters"
      }
  
      if (!input["password2"]) {
        isValid = false;
        errors["password2"] = "Please enter your confirm password.";
      }

      if (typeof input["password"] !== "undefined" && typeof password !== "undefined") {
        if (input["password"] !== password) {
            isValid = false;
            errors["password"] = "Passwords don't match.";
          } 
      }
      this.setState({
        errors: errors
      });
  
      return isValid;
  }
  

  render() {
    const { first_name, last_name, email, password, password2, birthday } = this.state.signupdetails;
    return (
      <div>
        <Container className="mt-5">
          <Card
            className="col-xs-12 col-md-10 offset-md-1 col-xl-8 offset-xl-2"
            bg="dark"
            style={{ borderRadius: "30px" }}
          >
            <div className="my-4"></div>
            <Form>
              <Row>
                <Col lg>
                  <TextFieldGroup
                    onChange={this.inputChanged}
                    value={first_name}
                    labelStyle={{
                      top: "-10px",
                      left: "30px",
                      zIndex: 4,
                      width: "120px",
                    }}
                    inputStyle={{ borderRadius: "10px" }}
                    name="first_name"
                    placeholder="First Name"
                    icon="fa-user-circle"
                    //labelText="First Name"
                    className="mb-4"
                  />

                  <TextFieldGroup
                    onChange={this.inputChanged}
                    value={last_name}
                    labelStyle={{
                      top: "52px",
                      left: "30px",
                      zIndex: 4,
                      width: "120px",
                    }}
                    inputStyle={{ borderRadius: "10px" }}
                    name="last_name"
                    placeholder="Surname"
                    icon="fa-user-circle"
                    //labelText="Surname"
                    className="mb-4"
                  />

                  <TextFieldGroup
                    onChange={this.inputChanged}
                    value={email}
                    labelStyle={{
                      top: "114px",
                      left: "30px",
                      zIndex: 4,
                      width: "120px",
                    }}
                    inputStyle={{ borderRadius: "10px" }}
                    name="email"
                    placeholder="Email"
                    icon="fa-at"
                    //labelText="Email"
                    className="mb-4"
                  />

                  <TextFieldGroup
                    onChange={this.inputChanged}
                    value={password}
                    labelStyle={{
                      top: "176px",
                      left: "30px",
                      zIndex: 4,
                      width: "120px",
                    }}
                    inputStyle={{ borderRadius: "10px" }}
                    name="password"
                    type="password"
                    placeholder="Password"
                    icon="fa-lock"
                    //labelText="Password"
                    className="mb-4"
                  />
                  
                  <JoinForm
                    passwordChanged={this.stateChanged}
                    strength={this.state.strength}
                    password={this.state.password2}
                    fieldId="password"
                    required
                    name="password2"
                    value={password2}
                  />

                </Col>

                <Col>
                  <TextFieldGroup
                    onChange={this.inputChanged}
                    value={this.props.value}
                    labelStyle={{
                      top: "-10px",
                      left: "30px",
                      zIndex: 4,
                      width: "120px",
                    }}
                    inputStyle={{ borderRadius: "10px" }}
                    name="username"
                    placeholder="Username"
                    icon="fa-user-circle"
                    //labelText="Username"
                    className="mb-4"
                  />

                  <TextFieldGroup
                    onChange={this.inputChanged}
                    value={birthday}
                    labelStyle={{
                      top: "52px",
                      left: "30px",
                      zIndex: 4,
                      width: "120px",
                    }}
                    inputStyle={{ borderRadius: "10px" }}
                    name="birthday"
                    type="date"
                    placeholder="birthday"
                    icon="fa-calendar-alt"
                    //labelText="Birthday"
                    className="mb-4"
                  />

                  <fieldset>
                    <Form.Group as={Row}>
                      <Col sm={10} className="text-light">
                        <Form.Check
                          onChange={this.inputChanged}
                          value="MALE"
                          type="radio"
                          label="Male"
                          name="gender"
                        />

                        <Form.Check
                        onChange={this.inputChanged}
                        value="FEMALE"
                          type="radio"
                          label="Female"
                          name="gender"
                        />

                        <Form.Check
                          onChange={this.inputChanged}
                          defaultChecked
                          value="OTHER"
                          type="radio"
                          label="Other"
                          name="gender"
                        />
                      </Col>
                    </Form.Group>
                  </fieldset>
                </Col>
              </Row>
              <div>
                <div className="text-danger">{this.state.errors.firstname}</div>
                <div className="text-danger">{this.state.errors.surname}</div>
                <div className="text-danger">{this.state.errors.email}</div>
                <div className="text-danger">{this.state.errors.password}</div>
                <div className="text-danger">{this.state.errors.confirm_password}</div>
                <div className="text-danger">{this.state.errors.username}</div>
                <span className="text-danger">{this.state.errors.passwordstregth}</span>
              </div>
              <div className="my-3">
                <Button
                  onClick={this.signup}
                  type="submit"
                  className="bg-gold text-light border-0 rounded-pill col-sm-4 offset-sm-4"
                >
                  Sign Up
                </Button>
              </div>
            </Form>
          </Card>
        </Container>
      </div>
    );
  }
}

export default Register;
