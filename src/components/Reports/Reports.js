import React, { Component } from "react";
import Base from './../Layout/Base';
import PageWrapper from "../../common/PageWrapper";

export class Reports extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount(props){
    console.log(this.props);
  }
  render() {
    return (
      <Base>
        <PageWrapper pageTitle="Reports" url="Reports">
         
        </PageWrapper>
      </Base>
    );
  }
}

export default Reports;
