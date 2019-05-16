import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Collapse } from "reactstrap";
import "./common.css";
import axios from "axios";
import  Add  from "./Add";
const FloorAccordian = ({
  name,
  selectedFloorId,
  id,
  onCollapse,
  tempSectors,
  width,
  height
}) => {
  return (
    <div className="accordion__item">
      <div
        id="accordion__title-15"
        aria-selected={id == selectedFloorId ? true : false}
        aria-controls="accordion__body-15"
        className="accordion__title"
        role="tab"
        tabIndex="0"
        onClick={() => onCollapse(id, -1)}
      >
        <h6 className="u-position-relative">
          <strong>{name}</strong>
          <div className="accordion__arrow" role="presentation" />
        </h6>
      </div>
      <div
        id="accordion__body-15"
        className={
          id == selectedFloorId
            ? "accordion__body"
            : "accordion__body accordion__body--hidden"
        }
        aria-hidden="true"
        aria-labelledby="accordion__title-15"
        role="tabpanel"
      />
      <div>
        {tempSectors.length > 0 ? (
          <div>
            {id == selectedFloorId ? (

             
              <div className="column">
             {width > 0 && height> 0 ?<div><h3><i>Floor Area</i></h3> <div  style={{width:"100%", height:`${height}px`, backgroundColor:"lightgrey"}}></div></div>: null} 
              <div className="row justify-content-between  align-itenms-center ml-2 mr-2 mb-3 mt-3"> <h3 className="">Sectors</h3><Add label="Add Sector" /></div>
                
              </div>
            ) : null}
            <Collapse isOpen={id == selectedFloorId ? true : false}>
              <ul id="elements">
                {tempSectors.map(sector => (
                  <li key={sector.id}>
                    <Link to={"/sector" + "/cid" + "/camid" + "/floorid"}>
                      {sector.name}
                    </Link>
                    {/* <Link to={"/sector" + "/cid" + "/camid" + "/floorid"}>
                      {sector.name}
                    </Link> */}
                  </li>
                ))}
              </ul>
            </Collapse>
          </div>
        ) : // <h1>No Sectors Found</h1>
        null}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    selectedFloorId: state.buildings.selectedFloorId,
    tempSectors: state.buildings.tempSectors
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onCollapse: (id, itemId) => {
      let sectors = [];
      axios.get("https://jsonplaceholder.typicode.com/posts").then(data => {
        let i = 1;
        data.data.map(item => {
          if (i >= 20 && i <= 30) {
            sectors.push({ name: item.title, id: i, sectors: [] });
          }
          i++;
        });
        dispatch({ type: "COLLAPSE", payload: { id, itemId, sectors } });
      });
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FloorAccordian);
