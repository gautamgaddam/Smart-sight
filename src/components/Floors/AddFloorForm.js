import React, { Component } from "react";

import DatePicker from "react-datepicker";


export class AddFloor extends Component {

  constructor(props) {
    super(props);
    this.state = {
      createdAt: new Date(),
      name: "",
      show: props.show,
      id: -1
    };
    this.onSubmit= this.onSubmit.bind(this);
  }
  handleChange = e => {
    const val = e.target.value;
    this.setState({ name: val });
  };
  handleDateChange = createdAt => {
    this.setState({ createdAt });
  };
  componentDidMount(){
    console.log(this.props);
  }
  onSubmit = (e) => {
   debugger
    e.preventDefault();
    if (!this.state.name || !this.state.createdAt) {
      this.setState(() => ({ error: "Please Provide Floor Name" }));
    } else {
      this.setState(() => ({ error: "" }));

      this.props.onSave({
        createdAt: this.state.createdAt,
        name: this.state.name,
        id: this.state.id,
        value: "Floor"
      });
    }
  };
  render() {
    return (
      <div>
        <form className="d-flex justify-content-end" onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="Add Floor"
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
          <button className="btn btn-success">Add Floor</button>
          <input
            type="button"
            className="btn btn-danger ml-2"
            value="Cancel"
            onClick={this.props.onCancel}
          />
        </form>
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
      </div>
    );
  }
}

export default AddFloor;
