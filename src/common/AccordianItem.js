import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import FloorAccordain from "./FloorAccordain";
import "./common.css";
import Add from "./Add";
import { uuid } from "uuid";

const AccordianItem = ({ name, selectedRowId, id, onCollapse, tempFloors, width, height }) => {

  return (
 
    <div className="accordion__item">
      <div
        aria-selected={id == selectedRowId ? true : false}
        aria-controls="accordion__body-15"
        className="accordion__title"
        role="tab"
        tabIndex="0"
        onClick={() => onCollapse(id, null)}
      >
        <h6 className="u-position-relative">
          <strong>{name}</strong>
          <div className="accordion__arrow" role="presentation" />
        </h6>
      </div>
      <div
        className={
          id == selectedRowId
            ? "accordion__body"
            : "accordion__body accordion__body--hidden"
        }
        aria-hidden="true"
        aria-labelledby="accordion__title-15"
        role="tabpanel"
      >
        {id == selectedRowId ? (
          <div className="floor-main">
            <div className="row justify-content-between  align-itenms-center ml-2 mr-2 mb-3 mt-3">
              <h3 className="">Floors</h3>
              <Add label="Add Floor" />
            </div>
            {tempFloors.length > 0 ? (
              tempFloors.map((floor, i) => (
                <FloorAccordain name={floor.name} id={i+1} width={floor.width} height={floor.height} key={uuid} buildingid={id}/>
              ))
            ) : (
              <h3>No Floors Found</h3>
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
};
const mapStateToProps = state => {
  // console.log(state);
  return {
    selectedRowId: state.buildings.selectedRowId,
    tempFloors: state.buildings.tempFloors
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onCollapse: (id, itemId) => {
      let floors = [];
      axios.get("https://jsonplaceholder.typicode.com/posts").then(data => {
        let i = 10;
        data.data.map(item => {
          if (i >= 10 && i <= 20) {
            floors.push({ name: item.title, id: i, sectors: [] });
          }
          i++;
        });
        dispatch({ type: "COLLAPSE", payload: { id, itemId, floors } });
      });
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AccordianItem);
