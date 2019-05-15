import React from "react";
import "../Styles/style.css";
import { Modal, Button } from "react-bootstrap";


export class MyVerticallyCenteredModal extends React.Component {

  constructor(props) {
  
    super(props);
    this.state = {
        valueName: this.props.details.valueName,
        valueId: this.props.details.valueId,
        show:this.props.modalShow
      
    };

    this.updateInputName = this.updateInputName.bind(this);
    this.updateInputId = this.updateInputId.bind(this);
  }
// componentDidUpdate(){
//   console.log(this.props);
// }
  updateInputId = e => {
    this.setState({
        valueId: e.target.value,
      
    });
  };

  updateInputName = e => {
    this.setState({
        valueName: e.target.value,
    });
  };

  onSave = e => {
   
  this.setState({
      valueName: this.state.valueName,
      valueId: this.state.valueId,
      show:!this.props.modalShow
   
     
  });
  // const details={
  //   valueName: this.state.valueName,
  //   valueId: this.state.valueId,
  // }
   this.props.details.valueId= this.state.valueId;
   this.props.details.valueName= this.state.valueName;
   this.props.onHide();
   console.log(this.props);

 
  };

  render() {
    return (
      <Modal
        size="sm"
        {...this.props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Box Details
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-4">
          <div className="row mb-3">
            {" "}
            <label className="col-md-3">Name</label>
            <input
              placeholder="name"
              className="form-control col-md-9"
              name="name"
              value={this.state.valueName}
              onChange={this.updateInputName}
            />
          </div>
          <div className="row">
            {" "}
            <label className="col-md-3">Id</label>
            <input
              placeholder="id"
              type="text"
              className="form-control col-md-9"
              name="id"
              value={this.state.valueId}
              onChange={this.updateInputId}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button className="btn-success" onClick={this.onSave}>
            Save
          </Button>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default MyVerticallyCenteredModal;
