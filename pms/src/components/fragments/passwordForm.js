import React, { Component } from 'react';
import "../layout/styles/password.scss";
import PasswordField from './PasswordField';

class JoinForm extends Component {



  render() {
    // validation function for the fullname
    // ensures that fullname contains at least two names separated with a space
 
    return (
        <>
            {/** Render the password field component using thresholdLength of 7 and minStrength of 3 **/}
            <PasswordField 
              fieldId="password2" 
              label="Password" 
              onStateChanged={this.props.passwordChanged} 
              thresholdLength={7} 
              minStrength={3}
              strength={this.props.strength}
              password={this.props.password}
              name={this.props.name} 
              required  
            />
        </>
    );
  }

}

export default JoinForm;