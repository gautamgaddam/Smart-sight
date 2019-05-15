import React from "react";
import "../Styles/style.css";
import { CanvasElement } from "./CanvasElement";
import { CanvasDiv } from "./CanvasDiv";

import { Button, Row, Col, Modal, ModalHeader, ModalBody, Card, CardBody, CardTitle, ModalFooter,Breadcrumb,BreadcrumbItem } from 'reactstrap';



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
      color: "",
      zone: "",
      toggleClassName:"Add",
      addDetails: false,
      btnClassName: "btn btn-primary",
      details:{
          valueName:'',
          valueId:''
      }
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
  toggle=()=> {
    
    this.setState({
        showModal: !this.state.showModal,
        
    });
  }

  addDetails=()=>{
    this.setState({
      addDetails: true,
      showModal: !this.state.showModal,
    })
  }
  onSelected = rect => {
    this.setState({
      selected: true,
      values: { ...rect },
      ...rect
    });
    
  };

  deleteBox = a => {
  var id=  a.srcElement.parentElement.id;
  this.setState({
    id: id,
    showModal:  true,
    addDetails: false,
  })
  };
  deleteBoxReal=(a)=>{
    document.getElementById(`${this.state.id}`).remove();
    this.setState({showModal: false})
  }

  getSelectionStr() {
    if (this.state.selected) {
      const state = this.state;
      return `x1: ${state.x}, y1: ${state.y}, x2: ${state.w }, y2: ${state.h + state.y}`;
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
    e.preventDefault();
    this.setState({
      newcanvas: true,
      condition: false,
      toggleClassName:"Add",
      btnClassName: "btn btn-primary",
      zone:
        this.state.zone === -1 ? alert("Please select zone") : this.state.zone,
      color: this.state.color
    });
   
    this.child.current.getAlert();
  };
  handleClick = e => {
    e.preventDefault();

    if(this.state.toggleClassName == "Add"){
      this.setState({
        toggleClassName:"Cancel",
        btnClassName: "btn btn-danger"
      })
    }
    else{
      this.setState({
        toggleClassName:"Add",
        btnClassName: "btn btn-primary"
      })
    }
    
    this.setState({
      condition: !this.state.condition
    });
  };

 
  render() {

    return (
      <div style={{ margin: "20px" }}>
        <div className="button-main">
          <button className={this.state.btnClassName}  onClick={this.handleClick}  value={this.state.toggleClassName} >
          {this.state.toggleClassName}
          </button>
          {this.state.condition ? (
            <div className="d-flex">
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
          style={divStyle}
          className={!this.state.condition ? "null" : "cursorPointer"}
        >
          {this.state.condition ? (
            <CanvasElement onSelected={this.onSelected} />
          ) : (
            ""
          )}

         <CanvasDiv
            ref={this.child}
            values={this.state.values}
            color={this.state.color}
            
          />
        </div>

        <div> {this.getSelectionStr()}</div>
             {/* Modal */}
             <Modal isOpen={this.state.showModal} toggle={this.toggle} className={this.props.className}>
                                    <ModalHeader toggle={this.toggle}>{this.state.addDetails? "Add Details":"Delete Box" }
                                 </ModalHeader>
                                    <ModalBody>
                                       {this.state.addDetails? (<div><div className="mb-4"><input placeholder="name"/></div><div><input  placeholder="id" /></div></div>): (<p>Do you want to delete box</p>)} 
                                    </ModalBody>
                                    <ModalFooter>
                                      {!this.state.addDetails ? ( <div><Button color="primary" className="mr-3" onClick={this.deleteBoxReal} >Yes</Button>
                                      <Button color="secondary" onClick={this.toggle}>No</Button></div>) : <Button>Add</Button>}
                                    </ModalFooter>
                                </Modal>

      </div>
    );
  }
}

const divStyle = {
  width: "500px",
  border: "1px solid lightgrey",
  height: "278px",

  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  position: "relative"
};

export default ImageCoordinates;
