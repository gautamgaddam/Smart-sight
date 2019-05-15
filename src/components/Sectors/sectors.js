import React, { Component } from "react";
import ImageCoordinates from "./ImageCapture/ImageCoordinates";

import Base from './../Layout/Base';
export class Sectors extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Base>
      <div >
        <h1>Sector</h1>
        <ImageCoordinates/>
        
      </div>
      </Base>
    );
  }
}

export default Sectors;
