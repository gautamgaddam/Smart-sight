import React, { Component } from "react";
import { AddFloor } from "../components/Floors/AddFloorForm";

import { connect } from "react-redux";

export class Add extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: true };
  }

  onShow=()=>{
    this.setState({ show: !this.state.show });
  }
  onAdd = (a) => {
    console.log(this.props);
  debugger;
    this.props.onAddFloor({
        name:a.name,
        createdAt: a.createdAt,
        id: a.id
    })
  }
  


  onCancel = () => {
    this.setState({ show: true });
  };

  render() {
    const { label } = this.props;

    return this.state.show ? (
      <input
        type="button"
        className="btn btn-primary"
        value={label || "Add"}
        onClick={this.onShow}
      />
    ) : (
      <AddFloor onSave={this.onAdd} onCancel={this.onCancel} />
    );
  }
}


const mapDispatchToProps = dispatch => ({
  onAddFloor: function(info){ dispatch({ type: "ADD_FLOOR", payload: info })
},

});
export default connect(
null,
mapDispatchToProps
)(Add);