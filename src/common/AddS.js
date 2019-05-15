import React, { Component } from "react";
import { AddSector } from "./../components/Sectors/AddSectorForm";
import { connect } from "react-redux";

export class AddS extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: true };
  }
  onShow=()=>{
    this.setState({ show: !this.state.show });
  }
  onAdd = (a) => {

   console.log(this.props);
    this.props.onAddSector({
      name: a.name,
      createdAt: a.createdAt,
      id: a.id
    });
  };

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
      <AddSector onSubmit={this.onAdd} onCancel={this.onCancel} />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onAddSector: function(info) {
    dispatch({ type: "ADD_SECTOR", payload: info });
  }
});
export default connect(
  null,
  mapDispatchToProps
)(AddS);
