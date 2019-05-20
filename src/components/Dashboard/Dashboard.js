import React, { Component } from "react";
import { Doughnut, Line } from "react-chartjs-2";
import Base from "../Layout/Base";
import Calendar from "react-big-calendar";
import moment from "moment";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import { connect } from "react-redux";
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
import "./Dashboard.css";
import classnames from "classnames";

import Visitors from "./Visitors";
import DropDown from "./../../common/DropDown";

const localizer = Calendar.momentLocalizer(moment);

const data = {
  labels: ["Male", "Female", "Staff"],

  datasets: [
    {
      data: [400, 250, 100],
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"]
    }
  ]
};
var rFactor = function() {
  return Math.round(Math.random() * 10000);
};

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

var barData = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "Apple",
      backgroundColor: "#36a2eb",
      borderColor: "#36a2eb",
      data: [
        rFactor(),
        rFactor(),
        rFactor(),
        rFactor(),
        rFactor(),
        rFactor(),
        rFactor()
      ]
    },
    {
      label: "Google",
      backgroundColor: "#FF6384",
      borderColor: "#FF6384",
      data: [
        rFactor(),
        rFactor(),
        rFactor(),
        rFactor(),
        rFactor(),
        rFactor(),
        rFactor()
      ]
    }
  ]
};
var lineData = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "In",
      backgroundColor: "rgb(56, 182, 202)",
      borderColor: "rgb(56, 182, 202)",
      pointBorderColor: "#fff",
      data: [
        rFactor(),
        rFactor(),
        rFactor(),
        rFactor(),
        rFactor(),
        rFactor(),
        rFactor()
      ]
    },
    {
      label: "Out",
      backgroundColor: "rgb(249, 249, 249)",
      borderColor: "rgb(249, 249, 249)",
      pointBorderColor: "#fff",
      data: [
        rFactor(),
        rFactor(),
        rFactor(),
        rFactor(),
        rFactor(),
        rFactor(),
        rFactor()
      ]
    }
  ]
};

const LinechartState = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      lineTension: 0.1,
      backgroundColor: "rgba(75,192,192,0.4)",
      borderColor: "rgba(75,192,192,1)",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "rgba(75,192,192,1)",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(75,192,192,1)",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};

const BarchartState = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "January",
      backgroundColor: "rgba(255,99,132,0.2)",
      borderColor: "rgba(255,99,132,1)",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(255,99,132,0.4)",
      hoverBorderColor: "rgba(255,99,132,1)",
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};

export class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.dropdownbarOpen = this.dropdownbarOpen.bind(this);
    this.dropdownlineOpen = this.dropdownlineOpen.bind(this);
    this.tabsclick = this.tabsclick.bind(this);
    this.onEventResize = this.onEventResize.bind(this);
    this.onEventDrop = this.onEventDrop.bind(this);
    this.state = {
      events: [
        {
          start: new Date(),
          end: new Date(moment().add(1, "days")),
          title: "BirthDay Party "
        },
        {
          start: new Date("2018-07-10"),
          end: new Date("2018-07-10"),
          title: "Marriage Anniversary"
        },
        {
          start: new Date("2018-07-25"),
          end: new Date("2018-07-25"),
          title: "Conference"
        }
      ],
      dropdownbarOpen: false,
      dropdownlineOpen: false,
      activeTab: "1",
      widths: 150
    };
    this.onEventResize = this.onEventResize.bind(this);
    this.onEventDrop = this.onEventDrop.bind(this);
  }
  dropdownbarOpen() {
    this.setState(prevState => ({
      dropdownbarOpen: !prevState.dropdownbarOpen
    }));
  }
  dropdownlineOpen() {
    this.setState(prevState => ({
      dropdownlineOpen: !prevState.dropdownlineOpen
    }));
  }
  tabsclick(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  onEventResize(type, { event, start, end, allDay }) {
    this.setState(state => {
      state.events[0].start = start;
      state.events[0].end = end;
      return { events: start };
    });
  }
  onEventDrop({ event, start, end, allDay }) {
    console.log(start);
  }
  componentWillMount() {
    this.setState(LinechartState);
    this.setState(BarchartState);
  }
  render() {
    const DnDCalendar = withDragAndDrop(Calendar);
    const { buildings, floors } = { ...this.props };
    return (
      <Base>
        <div>
          <div className="page-title">
            <Row>
              <Col sm={6}>
                <h4 className="mb-0"> Dashboard</h4>
                <div
                  className="delete-button"
                  onClick={() => {
                    if (
                      window.confirm(
                        "Are you sure you wish to delete this item?"
                      )
                    )
                      this.onCancel(item);
                  }}
                />
              </Col>

              <Col sm={6} style={{ display: "flex" }}>
                {/* <Breadcrumb className="float-left float-sm-right">
                  <BreadcrumbItem>
                    <Link to="/dashboard">Home</Link>
                  </BreadcrumbItem>
                  <BreadcrumbItem active>Dashboard</BreadcrumbItem>
                </Breadcrumb> */}
                <DropDown data={buildings} />
                <DropDown data={floors} />
              </Col>
            </Row>
          </div>
          {/* <!-- widgets --> */}
          <Row>
            <Visitors
              name="Visitors"
              count="7676868"
              subtitle="81% growth"
              icon="fa-bar-chart-o"
              subIcon="fa-exclamation-circle"
              color={getRandomColor()}
            />
            <Visitors
              name="Eye Ball Count"
              count="656"
              subtitle="Total eye ball count"
              icon="fa-eye"
              subIcon="fa-bookmark-o"
              color={getRandomColor()}
            />
            <Visitors
              name="Average Duration"
              count="65656 ms"
              subtitle="Average duration"
              icon="fa-clock-o"
              subIcon="fa-calendar"
              color={getRandomColor()}
            />
            <Visitors
              name="Cars"
              name1="Bikes"
              count1="1000"
              count="500"
              subtitle="Total number of cars and bikes"
              icon="fa-car "
              subIcon="fa-car"
              color={getRandomColor()}
            />
          </Row>

          <Row>
            <Col xl={4} className="mb-30">
              <Card className="h-100">
                <CardBody>
                  <CardTitle>Customer Turn around</CardTitle>
                  <Row className="mb-30">
                    <Col md={6}>
                      <div className="clearfix">
                        <p className="mb-10 float-left">Positive</p>
                        <i className="mb-10 text-success float-right fa fa-arrow-up">
                          {" "}
                        </i>
                      </div>
                      <div className="progress progress-small">
                        <div
                          className="skill2-bar bg-success"
                          role="progressbar"
                          style={{ width: "70%" }}
                          aria-valuenow={70}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <h4 className="mt-10 text-success">8501</h4>
                    </Col>
                    <Col md={6}>
                      <div className="clearfix">
                        <p className="mb-10 float-left">Negative</p>
                        <i className="mb-10 text-danger float-right fa fa-arrow-down">
                          {" "}
                        </i>
                      </div>
                      <div className="progress progress-small">
                        <div
                          className="skill2-bar bg-danger"
                          role="progressbar"
                          style={{ width: "30%" }}
                          aria-valuenow={30}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <h4 className="mt-10 text-danger">3251</h4>
                    </Col>
                  </Row>
                  <div className="chart-wrapper" style={{ height: 270 }}>
                    <Doughnut
                      data={data}
                      options={{
                        maintainAspectRatio: false,
                        legend: {
                          display: true,
                          labels: { fontFamily: "Poppins" }
                        }
                      }}
                      width={this.state.widths}
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col xl={8} className="mb-30">
              <Card className="h-100">
                <div className="btn-group info-drop">
                  <Dropdown
                    isOpen={this.state.dropdownlineOpen}
                    toggle={this.dropdownlineOpen}
                  >
                    <DropdownToggle
                      className="dropdown-toggle-split text-muted"
                      id="dropdown-no-caret"
                    >
                      <i className="ti-more" />
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem>
                        <i className="text-primary ti-reload" />
                        Refresh
                      </DropdownItem>
                      <DropdownItem>
                        <i className="text-secondary ti-eye" />
                        View all
                      </DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </div>
                <CardBody>
                  <div className="d-block d-md-flexx justify-content-between">
                    <div className="d-block">
                      <CardTitle>Monthly Foot Fall </CardTitle>
                    </div>
                    <div className="d-flex ">
                      <div className="clearfix mr-30">
                        <h6 className="text-success">In</h6>
                        <p>+584k</p>
                      </div>
                      <div className="clearfix  mr-50">
                        <h6 className="text-danger"> Out</h6>
                        <p>-255k</p>
                      </div>
                    </div>
                  </div>
                  <div className="chart-wrapper" style={{ height: 350 }}>
                    <Line
                      data={lineData}
                      className="scrollbar-x text-center"
                      options={{
                        maintainAspectRatio: false,
                        legend: {
                          display: true,
                          labels: { fontFamily: "Poppins" }
                        },
                        scales: {
                          yAxes: [
                            {
                              gridLines: { display: false },
                              ticks: { fontFamily: "Poppins" }
                            }
                          ],
                          xAxes: [
                            {
                              gridLines: { display: false },
                              ticks: { fontFamily: "Poppins" }
                            }
                          ]
                        }
                      }}
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </Base>
    );
  }
}
const mapStateToProps = state => {
  return {
    buildings: state.buildings.buildings,
    floors: state.buildings.buildings
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onBuildingChange: id =>
      dispatch({ type: "ChangeBuilding", payload: { buildingId: id } }),
    onBuildingChange: id =>
      dispatch({ type: "ChangeFloor", payload: { floorId: id } }),
    loadBuildings: () => dispatch({ type: "LoadData" })
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
