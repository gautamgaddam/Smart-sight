import React, { Component } from "react";

import Routers from "./Routers.js";
import { BrowserRouter, Router } from "react-router-dom";
import history from './history'

import "../node_modules/jquery/dist/jquery.min.js";
import "./Vendor.js";
class App extends Component {
  render() {
    return (
        <Router history={history}>
          <Routers />
        </Router>
    );
  }
}

export default App;
