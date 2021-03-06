import React, { Component } from "react";
import DatePicker from "react-datepicker";


export class AddFloor extends Component {

  constructor(props) {
    super(props);
    this.state = {
      createdAt: new Date(),
      name: "",
      show: props.show,
      id: -1,
      width:"",
      height:""
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
  handleWidth= e=>{
    const val= e.target.value;
    this.setState({width: parseInt(val)});
  };
  handleHeight= e=>{
    const val= e.target.value;
    this.setState({height: parseInt(val)});
   
  };
  componentDidMount(){
    console.log(this.props);
  };
  onSubmit = (e) => {
    
    e.preventDefault();
  
    if (!this.state.name || !this.state.createdAt) {
      this.setState(() => ({ error: "Please Provide Floor Name" }));
    }
    else if(this.state.width==""){
      this.setState(()=>({error: "Please enter width"}))
    }
    else if(this.state.height=="" ){
      this.setState(()=>({error: "Please enter height"}))
    
    }
    else if( this.state.height > this.state.width){
      this.setState(()=>({error: "Height should be less than width"}))
    }
    
    else {
      this.setState(() => ({ error: "" }));
      this.props.onSave({
        createdAt: this.state.createdAt,
        name: this.state.name,
        id: this.state.id,
        width: this.state.width,
        height: this.state.height
      });
    }
    console.log(this.state);
  };
  render() {
    return (
      <div>
        <form className="d-flex justify-content-end" onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="Add Floor"
            autoFocus
            className="col-md-2 mr-3 ml-3 "
            value={this.state.name}
            onChange={this.handleChange}
          />
          <input
            type="number"
            placeholder="Width in meters"
        
            className="col-md-2 mr-3 ml-3 "
            value={this.state.width}
            onChange={this.handleWidth}
          />
          <input
            type="number"
            placeholder="Height in meters"
            className="col-md-2 mr-3 ml-3 "
            value={this.state.height}
            onChange={this.handleHeight}
          />

          <div className="col-md-2">
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
