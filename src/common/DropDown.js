import React, { Component } from "react";

const DropDown = ({ data, onItemChange }) => {
  return (
    <div>
      <select onChange={onItemChange} className="form-control">
        {data.map(item => (
          <option>{item.name}</option>
        ))}
      </select>
    </div>
  );
};

export default DropDown;
