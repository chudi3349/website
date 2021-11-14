import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

class FormField extends Component {

  // initialize state
  state = { value: '', dirty: false, errors: [] }

  hasChanged = e => {
    e.preventDefault();

    // destructure props - assign default dummy functions to validator and onStateChanged props
    const { label, required = false, validator = f => f, onStateChanged = f => f } = this.props;

    const value = e.target.value;
    const isEmpty = value.length === 0;
    const requiredMissing = this.state.dirty && required && isEmpty;

    let errors = [];

    if (requiredMissing) {
      // if required and is empty, add required error to state
      errors = [ ...errors, `${label} is required` ];
    } else if ('function' === typeof validator) {
      try {
        validator(value);
      } catch (e) {
        // if validator throws error, add validation error to state
        errors = [ ...errors, e.message ];
      }
    }

    // update state and call the onStateChanged callback fn after the update
    // dirty is only changed to true and remains true on and after the first state update
    this.setState(({ dirty = false }) => ({ value, errors, dirty: !dirty || dirty }), () => onStateChanged(this.state));
  }

  render() {
    const { value, dirty, errors } = this.state;
    const { type, fieldId, placeholder, children, name } = this.props;

    const hasErrors = errors.length > 0;
    const controlClass = ['form-control border-0 py-3', dirty ? hasErrors ? 'is-invalid' : 'is-valid' : '' ].join(' ').trim();

    return (
      <Fragment>
      <div className={this.props.className}>
        <div>
            {/* Input Label */}
            <label
              htmlFor={this.props.name}
              style={this.props.labelStyle}
              className="rounded-pill bg-gold px-3 position-absolute text-light"
            >
              {this.props.labelText}
            </label>
            </div>
          <div className="bg-white rounded-pill">
          <div className="input-group">
            {/** Render the children nodes passed to component **/}
            {children}
            <input 
              style={{borderRadius: "10px"}} 
              type={type} 
              className={controlClass} 
              id={fieldId} 
              placeholder={placeholder} 
              name={name} 
              value={value} 
              onChange={this.hasChanged} 
            />
            <div className="input-group-append">
            <i
              className={`input-group-text fas ${this.props.icon} bg-transparent text-gold border-0 m-auto`}
            >
            </i>
          </div>
          </div>
        </div>
      </div>
        
      </Fragment>
    );
  }

}

FormField.propTypes = {
  type: PropTypes.oneOf(["text", "password"]).isRequired,
  fieldId: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  required: PropTypes.bool,
  children: PropTypes.node,
  validator: PropTypes.func,
  onStateChanged: PropTypes.func
};

export default FormField;