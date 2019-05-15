import React from "react";
import AddBuildingForm from "./AddBuildingForm";
import { connect } from "react-redux";

const AddBuilding = ({ show, addBuilding, toggleShow }) => {
  
  return (
    <div style={{textAlign: "right", marginRight:"2.5rem"}}>
      {show ? null : (
        <button className="btn btn-primary"  onClick={() => toggleShow(show)}>
          Add Building
        </button>
      )}
      {show ? <AddBuildingForm onSubmit={addBuilding} placeholder="Building name"/> : null}
      
    </div>
  );
};

const mapStateToProps = state => {
  return {
    buildings: state.buildings.buildings,
    show:state.buildings.toggleShow
  };
};
const mapDispatchToProps = dispatch => {
  return {
    addBuilding: info => dispatch({ type: "ADD_BUILDING", payload: info }),
    toggleShow:(show)=>dispatch({type:"TOGGLESHOW",payload:show})
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddBuilding);
