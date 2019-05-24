import React, { Component } from "react";
import { AddFloor } from "../components/Floors/AddFloorForm";

import { connect } from "react-redux";
import { AddSector } from './../components/Sectors/AddSectorForm';

export class Add extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: true };
  }

  onShow=()=>{
    this.setState({ show: !this.state.show });
  }
  onAdd = (a) => {
    console.log(a);

    this.setState({ show: !this.state.show });
    const {label}= this.props;
    if(label=="Add Floor"){
    this.props.onAddFloor({
        name:a.name,
        createdAt: a.createdAt,
        id: a.id,
        height: a.height,
        width: a.width,
    })
  }else{
    this.props.onAddSector({
      name: a.name,
      createdAt: a.createdAt,
      id: a.id,
      height: a.height,
      width: a.width
    });
  }
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
    ) : label=="Add Floor"?(
      <AddFloor onSave={this.onAdd} onCancel={this.onCancel} />
    ): <AddSector onSave={this.onAdd} onCancel={this.onCancel} />;
  }
}


const mapDispatchToProps = dispatch => ({
  onAddFloor: function(info){ dispatch({ type: "ADD_FLOOR", payload: info })},
  onAddSector: function(info) {
    dispatch({ type: "ADD_SECTOR", payload: info })
  }


});
export default connect(
null,
mapDispatchToProps
)(Add);