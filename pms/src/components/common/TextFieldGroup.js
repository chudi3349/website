import React from "react";
import PropTypes from "prop-types";

export const TextFieldGroup = (props) => {
  return (
    <div className={props.className}>
      <div className="bg-white rounded-pill">
        {/* Input Label */}
        <label
          htmlFor={props.name}
          style={props.labelStyle}
          className="rounded-pill bg-gold px-3 position-absolute text-light"
        >
          {props.labelText}
        </label>

        <div className="input-group">
          {/* textField */}
          <input
            onChange={props.onChange}
            type={props.type}
            name={props.name}
            id={props.name} 
            placeholder={props.placeholder}
            className="form-control border-0 py-3"
            style={props.inputStyle}
          />

          {/* Input Group Icon */}
          <div className="input-group-append">
            <i
              className={`input-group-text fas ${props.icon} bg-transparent text-gold border-0 m-auto`}
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
};

TextFieldGroup.propTypes = {
  style: PropTypes.object,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  icon: PropTypes.string,
  labelStyle: PropTypes.object,
  inputStyle: PropTypes.object,
  labelText: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  className: PropTypes.string,
};

TextFieldGroup.defaultProps = {
  type: "text",
};
