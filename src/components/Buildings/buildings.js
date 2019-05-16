import React, { Component } from "react";
import { connect } from "react-redux";
import { Collapse } from "reactstrap";
import AddBuilding from "./AddBuilding";
import Base from '../Layout/Base';
import axios from "axios";
import CustomAccordian from "./../../common/CustomAccordian";
import PageWrapper from "../../common/PageWrapper";
class Building extends Component {
  constructor(props) {
    super(props);
    this.state = { show: false, plussignele: false, elements: false };
  }
  elements = () => {
    this.setState({
      elements: !this.state.elements,
      plussignele: !this.state.plussignele
    });
  };
  toggleAddButton = () => {
    this.setState({ show: !this.state.show });
  };
  componentDidMount() {
    console.log(this.props);
    const stateBuildings = [...this.props.buildings];
    axios.get("https://jsonplaceholder.typicode.com/posts").then(data => {
      let i = 1;
      data.data.map(item => {
        if (i <= 10) {
          stateBuildings.push({ name: item.title, id: i, floors: [] });
        }
        i++;
      });
      const { buildingId, floorId } = this.props.match.params;
      this.props.onLoad(buildingId, floorId, stateBuildings);
    });
  }
componentWillUnmount(){
  const stateBuildings = [];
  
}
  render() {
    const { buildings } = this.props;
    return (
      <Base>
      <PageWrapper pageTitle="Buildings" url="Buildings">
        <AddBuilding toggleButton={this.toggleAddButton} />
        <CustomAccordian data={buildings} />
      </PageWrapper>
      </Base>
    );
  }
}
const mapStateToProps = state => {
  // console.log(state);
  return {
    buildings: state.buildings.buildings
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onCollapse: id => dispatch({ type: "COLLAPSE", value: id }),
    onLoad: (bid, fid, stateBuildings) =>
      dispatch({
        type: "LOAD_BUILDINGS",
        payload: { bid, fid, stateBuildings }
      })
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Building);
