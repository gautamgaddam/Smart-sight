import React, { Component } from "react";
const Form = props => {
  return <form onSubmit={onSubmit}>{props.children}</form>;
};

export default Form;
