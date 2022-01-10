import React, { Component, Fragment} from "react";
import ErrorBoundary from './components/layout/ErrorBoundary';
import AppBar from "./components/layout/AppBar";
import { Route, BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";
import Homepage from "./components/layout/hompage/HomPage"
import "./App.css";
import About from "./components/pages/About";
import Services from "./components/pages/Services";
import Products from "./components/pages/Products";
import Footer from "./components/layout/hompage/Footer";
import {ContactUs} from "./components/pages/ContactUs";
import ActionButton from "./components/pages/ActionButton";




class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      signUpLogin: false,
      userName: ''
    };
    this.handleClick = this.handleClick.bind(this);
  }


  handleClick(){
    const currentState = this.state.userName !== '' ? this.state.userName : !this.state.signUpLogin; 
    this.setState(() => ({
      signUpLogin: currentState
    }));
  }

  render() {
    const upDateUsername = this.state.userName !== '' ? this.state.userName : this.state.signUpLogin;
    return (
      <Fragment>
        <ErrorBoundary>
          <Router>
            <AppBar signUpLogin={ upDateUsername } userName={ this.state.userName } handleClick={this.handleClick} />
            <Route path="/" component={Homepage} exact />
            <Route path="/about" component={About} exact />
            <Route path="/services" component={Services} exact />
            <Route path="/products" component={Products} exact />
            <Route path="/form" component={ContactUs} exact />
            <ActionButton />
            <Footer />
          </Router>
        </ErrorBoundary>
      </Fragment>
    );
  }
}

export default App;
