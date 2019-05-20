import React, { Component } from "react";
import {
  Card,
  CardBody,
  CardTitle,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Breadcrumb,
  BreadcrumbItem
} from "reactstrap";

class Visitors extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
      console.log(this.props);
    return (
      <Col xl={3} lg={6} md={6} className="mb-30">
        <Card className="card-statistics h-100">
          <CardBody>
            <div className="clearfix">
              <div className="float-left">
                <span style={{ color: this.props.color}}>
                  <i
                    className={`fa ${this.props.icon} highlight-icon`}
                    aria-hidden="true"
                  />
                </span>
              </div>
              {this.props.name == "Cars" ? (
                <div className="float-right d-flex">
                  <div className=" text-right pr-2 " style={borders}>
                    <p className="card-text text-dark">Cars</p>
                    <h4>500</h4>
                  </div>
                  <div className="float-right text-right pl-2">
                    <p className="card-text text-dark">Bikes</p>
                    <h4>1000</h4>
                  </div>{" "}
                </div>
              ) : (
                <div className="float-right text-right">
                  <p className="card-text text-dark">{this.props.name}</p>
                  <h4>{this.props.count}</h4>
                </div>
              )}
            </div>
            <p className="text-muted pt-3 mb-0 mt-2 border-top">
              <i
                className={`fa ${this.props.subIcon} mr-1`}
                aria-hidden="true"
              />{" "}
              {this.props.subtitle}
            </p>
          </CardBody>
        </Card>
      </Col>
    );
  }
}
const borders = {
  borderRight: "1px solid lightgray",
  borderStyle: "dotted",
  borderLeft: "0px",
  borderTop: "0px",
  borderBottom: "0px"
};
export default Visitors;
