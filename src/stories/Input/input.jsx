import React from "react";
import PropTypes from "prop-types";
import "./input.scss";

const input = ({
  size,
  placeholder,
  className,
  name,
  onChange,
  type,
  ...rest
}) => {
  return (
    <input
      placeholder={placeholder}
      onChange={onChange}
      name={name}
      type={type}
      className={`input-component ${size} ${className}`}
      {...rest}
    />
  );
};

input.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  name: PropTypes.string,
  className: PropTypes.string,
  type : PropTypes.string
};

input.defaultProps = {
  size: "medium",
  onChange: undefined,
  type : 'text'
};

export default input;
