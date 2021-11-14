import React, { Component, Fragment} from "react";
import ErrorBoundary from './components/layout/ErrorBoundary';
import AppBar from "./components/layout/AppBar";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Register from "./components/layout/Register";
import Login from "./components/layout/Login";
import Dashboard from "./components/layout/Dashboard";
import RestaurantBar from "./components/layout/RestaurantBar";
import HelpPage from "./components/layout/HelpPage"
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";
import Homepage from "./components/layout/hompage/HomPage"
import "./App.css";
import Reception from "./components/layout/Reception";
import About from "./components/pages/About";
import Services from "./components/pages/Services";
import Products from "./components/pages/Products";
import Footer from "./components/layout/hompage/Footer";




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
            <Route path="/hotel" component={Login} exact />
            <Route path="/register" value={this.state.userName} component={Register} exact />
            <Route path="/dashboard" component={Dashboard} exact />
            <Route path="/restaurant" component={RestaurantBar} exact />
            <Route path="/reception" component={Reception} exact />
            <Route path="/help" component={HelpPage} exact />
            <Route path="/about" component={About} exact />
            <Route path="/services" component={Services} exact />
            <Route path="/products" component={Products} exact />
            <Footer />
          </Router>
        </ErrorBoundary>
      </Fragment>
    );
  }
}

export default App;
