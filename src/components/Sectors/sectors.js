import React, { Component } from "react";
import ImageCoordinates from "./ImageCapture/ImageCoordinates";
export class Sectors extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div >
        <h1>Sector</h1>
        <ImageCoordinates/>
        
      </div>
    );
  }
}

export default Sectors;
