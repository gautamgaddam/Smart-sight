import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Dashboard from "../components/Dashboard/Dashboard";
import Login from "../components/Authentication/Login/Login";

// const AuthorizeRoute = ({ path, component, isAuthenticated, ...rest }) => {
//   return isAuthenticated ? (
//     <Route path={path} component={component} {...rest} />
//   ) : (
//     <Redirect to="/login" from={path} />
//   );
// };

// const mapStateToProps = state => {
//   console.log(state);
//   return {
//     isAuthenticated: state.authorizeReducer.isAuthenticated
//   };
// };

// const AuthorizeRoute = ({ isAuthenticated, component: Component, ...rest }) =>
//   isAuthenticated ? (
//     <Route component={Component} {...rest} />
//   ) : (
//     <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
//   );

export const AuthorizeRoute = ({
  component: Component,
  isAuthenticated,
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: "/login", state: { from: props.location } }}
        />
      )
    }
  />
);

const mapStateToProps = state => {
  // console.log(state);
  return {
    isAuthenticated: state.authorizeReducer.isAuthenticated
  };
};
export default connect(
  mapStateToProps,
  null
)(AuthorizeRoute);
