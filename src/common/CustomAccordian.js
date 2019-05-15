import React, { Component } from "react";
import AccordianItem from "./AccordianItem";
import uuid from "uuid";

const CustomAccordian = ({ data, columns = "12" }) => {
  return (
    <div className={["mb-30", "col-xl-" + columns].join(" ")}>
      <div className="card-body">
        <div role="tablist" className="accordion">
          {data.map(building => (
            <AccordianItem
              name={building.name}
              id={building.id}
              key={uuid()}
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
