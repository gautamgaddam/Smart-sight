import React, { Component } from "react";
import AccordianItem from "./AccordianItem";
import uuid from "uuid";

const CustomAccordian = ({ data, columns = "12" }) => {

  return (
    <div className={["mb-30", "col-xl-" + columns].join(" ")}>
      <div className="card-body">
        <div role="tablist" className="accordion">
          {data.map((building, i) => (
            <AccordianItem
              name={building.name}
              id={building.id}
              key={building.id}
              enable={true}
              itemType="BUILDING"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomAccordian;
