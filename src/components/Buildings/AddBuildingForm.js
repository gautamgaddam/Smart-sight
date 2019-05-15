import React from "react";

import DatePicker from "react-datepicker";

import { connect } from "react-redux";

export class AddBuildingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      createdAt: new Date(),
      calendarFocused: false,
      name: "",
      id: "",
      error: "",
      floors: "",
      show: props.show
    };
  }
  onDatepickerRef(el) {
    if (el && el.input) {
      el.input.inputRef.readOnly = true;
    }
  }
  handleChange = createdAt => {
    this.setState({ createdAt });
  };

  onNameChange = e => {
    const name = e.target.value;
    this.setState({
      name: name
    });
  };

  onFocusChange = ({ focused, ...resst }) => {
    this.setState(() => ({ calendarFocused: focused }));
  };
  onSubmit = e => {
    e.preventDefault();

    if (!this.state.name || !this.state.createdAt) {
      this.setState(() => ({ error: "Please Provide Building Name" }));
    } else {
      this.setState(() => ({ error: "" }));
      this.props.onAddBuilding({
        id: -1,
        name: this.state.name,
        createdAt: this.state.createdAt.valueOf(),
        floors: []
      });
    }
  };

  render() {
    return (
      <div>
        <form className="row pl-5" onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder={this.props.placeholder}
            autoFocus
            className=" col-md-3 mr-3 ml-3 "
            value={this.state.name}
            onChange={this.onNameChange}
          />
          <div className="col-md-3">
            <DatePicker
              selected={this.state.createdAt}
              onChange={this.handleChange}
              className="form-control"
            />
          </div>
          <button className="btn btn-success">Add Build</button>
          <input
            type="button"
            className="btn btn-danger ml-2"
            value="Cancel"
            onClick={this.props.toggleShow}
          />
          <br />
          {this.props.sameBuildingFoundError ? (
            <span className="alert alert-danger">
              a building with same name is already found.
            </span>
          ) : null}
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
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    show: state.buildings.toggleShow,
    sameBuildingFoundError: state.buildings.sameBuildingFoundError
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onAddBuilding: info => dispatch({ type: "ADD_BUILDING", payload: info }),
    toggleShow: show => dispatch({ type: "TOGGLESHOW", payload: show })
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddBuildingForm);
