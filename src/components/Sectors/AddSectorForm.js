import React, { Component, useEffect } from "react";
import DatePicker from "react-datepicker";
export class AddSector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      createdAt: new Date(),
      name: "",
      id: -1,
      value:"SECTOR"
    };
  }
  handleChange = e => {
    const val = e.target.value;
    this.setState({ name: val });
  };
  handleDateChange = createdAt => {
    this.setState({ createdAt });
  };
  onSubmit = e => {
    e.preventDefault();
    if (!this.state.name || !this.state.createdAt) {
      this.setState(() => ({ error: "Please Provide Sector Name" }));
    } else {
      this.setState(() => ({ error: "" }));
      this.props.onSubmit({
        createdAt: this.state.createdAt,
        name: this.state.name,
        id: this.state.id,
        a: this.state.value
      });
      
    }
  };
  render() {
    return (
      <form className="d-flex justify-content-end" onSubmit={this.onSubmit}>
        <input
          type="text"
          placeholder="Add Sector"
          autoFocus
          className="  col-md-3 mr-3 ml-3 "
          value={this.state.name}
          onChange={this.handleChange}
        />
        <div className="col-md-3">
          <DatePicker
            selected={this.state.createdAt}
            onChange={this.handleDateChange}
            className="form-control"
          />
        </div>
        <button className="btn btn-success">Add Sector</button>
        <input
            type="button"
            className="btn btn-danger ml-2"
            value="Cancel"
            onClick={this.props.onCancel}
          />
        {this.state.error && (
          <p
            style={{
              color: "red",
              textAlign: "center",
              marginLeft: "2.5rem"
            }}
          >
            {this.state.error}
          </p>
        )}
      </form>
    );
  }
}

export default AddSector;
