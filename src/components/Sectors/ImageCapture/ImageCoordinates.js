import React from "react";
import "../Styles/style.css";
import { CanvasElement } from "./CanvasElement";
import { CanvasDiv } from "./CanvasDiv";
import { connect } from "react-redux";
import uuid from "uuid";

import {
  Button,
  Row,
  Col,
  Modal,
  ModalHeader,
  ModalBody,
  Card,
  CardBody,
  CardTitle,
  ModalFooter,
  Breadcrumb,
  BreadcrumbItem
} from "reactstrap";

export class ImageCoordinates extends React.Component {
  constructor(props) {
    super(props);
    this.child = React.createRef();
    this.saveRect = this.saveRect.bind(this);
    this.toggle = this.toggle.bind(this);
    this.state = {
      condition: false,
      newcanvas: false,
      values: {},
      showModal: false,
      color: "grey",
      zone: "",
      toggleClassName: "Add",
      addDetails: false,
      btnClassName: "btn btn-primary",
      sectorName: "",
      id: 1
    };
  }

  componentDidUpdate(props) {
    this.addMouseEvents();
  }

  addMouseEvents() {
    const close = document.getElementsByClassName("fa-times");
    const add = document.getElementsByClassName("fa-edit");

    for (let i = 0; i < close.length; i++) {
      close[i].addEventListener("click", this.deleteBox);
    }
    for (let i = 0; i < add.length; i++) {
      add[i].addEventListener("click", this.addDetails);
    }
  }
  toggle = () => {
    this.setState({
      showModal: !this.state.showModal
    });
  };

  addDetails = () => {
    this.setState({
      addDetails: true,
      showModal: !this.state.showModal
    });
  };

  onSelected = rect => {
    this.setState({
      selected: true,
      values: { ...rect },
      ...rect
    });
  };
  handleChange = e => {
    const val = e.target.value;
    this.setState({ sectorName: val });
  };
  deleteBox = a => {
    var id = a.srcElement.parentElement.id;
    this.setState({
      id: id,
      showModal: true,
      addDetails: false
    });
  };
  deleteBoxReal = a => {
    document.getElementById(`${this.state.id}`).remove();
    this.setState({ showModal: false });
  };

  getSelectionStr() {
    if (this.state.selected) {
      const state = this.state;
      return `x1: ${state.x}, y1: ${state.y}, x2: ${state.w}, y2: ${state.h +
        state.y}`;
    }
    return "No Selection";
  }

  zoneValue = e => {
    const element = e.target.value;

    this.setState({
      zone: element,
      color: element === "deadzone" ? "grey" : "green"
    });
  };
  saveRect = e => {
    debugger;
    e.preventDefault();
    if (this.state.sectorName == "") {
      alert("Please enter sector name");
    } else if (this.state.zone == "-1") {
      alert("please select zone");
    } else {
      this.child.current.getSectorArea();
      this.setState({
        newcanvas: true,
        condition: false,
        toggleClassName: "Add",
        btnClassName: "btn btn-primary"
      });

      this.props.onAddSector({
        name: this.state.sectorName,
        zone: this.state.zone,
        values: this.state.values,
        id: uuid()
      });
    }
  };
  handleClick = e => {
    e.preventDefault();

    if (this.state.toggleClassName == "Add") {
      this.setState({
        toggleClassName: "Cancel",
        btnClassName: "btn btn-danger"
      });
    } else {
      this.setState({
        toggleClassName: "Add",
        btnClassName: "btn btn-primary"
      });
    }

    this.setState({
      condition: !this.state.condition
    });
  };
  componentDidMount() {
    debugger;
    this.child.current.getSectorArea();
  }
  render() {
    const { id: floorId, onLoadSectors, elements } = { ...this.props };
    return (
      <div style={{ margin: "20px" }}>
        <div className="button-main">
          <button
            className={this.state.btnClassName}
            onClick={this.handleClick}
            value={this.state.toggleClassName}
          >
            {this.state.toggleClassName}
          </button>
          {this.state.condition ? (
            <div className="d-flex">
              <input
                type="text"
                placeholder="Sector Name"
                autoFocus
                className="col-md-2 mr-3 ml-3 "
                value={this.state.sectorName}
                onChange={this.handleChange}
              />
              <select
                onChange={this.zoneValue}
                value={this.state.zone}
                className=""
              >
                <option value="-1" defaultValue>
                  Select Zone
                </option>
                <option value="deadzone">Deadzone</option>
                <option value="sector">Sector</option>
              </select>
              <button className="btn btn-success ml-3" onClick={this.saveRect}>
                Save
              </button>
            </div>
          ) : (
            ""
          )}
        </div>
        <div
          id="main-div"
          style={{
            width: `${this.props.width > 0 ? this.props.width : "500"}px`,
            height: `${this.props.height > 0 ? this.props.height : "278"}px`
          }}
          className={!this.state.condition ? "null" : "cursorPointer"}
        >
          {this.state.condition ? (
            <CanvasElement
              onSelected={this.onSelected}
              width={this.props.width}
              height={this.props.height}
            />
          ) : (
            ""
          )}

          <CanvasDiv
            ref={this.child}
            values={this.state.values}
            color={this.state.color}
            height={this.props.height}
            sectorName={this.state.sectorName}
            zone={this.state.zone}
          />
        </div>

        <div> {this.getSelectionStr()}</div>
        <Modal
          isOpen={this.state.showModal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>
            {this.state.addDetails ? "Add Details" : "Delete Box"}
          </ModalHeader>
          <ModalBody>
            {this.state.addDetails ? (
              <div>
                <div className="mb-4">
                  <input placeholder="name" />
                </div>
                <div>
                  <input placeholder="id" />
                </div>
              </div>
            ) : (
              <p>Do you want to delete box</p>
            )}
          </ModalBody>
          <ModalFooter>
            {!this.state.addDetails ? (
              <div>
                <Button
                  color="primary"
                  className="mr-3"
                  onClick={this.deleteBoxReal}
                >
                  Yes
                </Button>
                <Button color="secondary" onClick={this.toggle}>
                  No
                </Button>
              </div>
            ) : (
              <Button>Add</Button>
            )}
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    values: { x: 20, y: 40, w: 400, h: 100 },
    id: 1,
    color: "grey"
  };
};

const mapDispatchToProps = dispatch => ({
  onAddSector: function(info) {
    dispatch({ type: "ADD_SECTOR", payload: info });
  },
  onLoadSectors: id => dispatch({ type: "LOAD_SECTOR", payload: id })
});
export default connect(
  null,
  mapDispatchToProps
)(ImageCoordinates);
