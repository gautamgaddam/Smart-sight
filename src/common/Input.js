import React, { Component } from "react";
const Input = ({ type = "text", name, onChange, errMsg, placeholder }) => {
  return (
    <div className="form-group">
      <label htmlFor="exampleInputEmail1">Email address</label>
      <input
        type={type}
        className="form-control"
        onChange={onChange}
        name={name}
        value={name}
        placeholder={placeholder}
      />
      <small id={name} className="form-text text-muted">
        {errMsg}
      </small>
    </div>
  );
};

export default Input;
