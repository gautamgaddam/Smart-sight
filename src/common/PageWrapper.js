import React, { Component } from "react";
const PageWrapper = props => {
  return (
    <div>
      <div className="page-title">
        <div className="row">
          <div className="col-sm-6">
            <h4 className="mb-0">  {props.pageTitle}</h4>
          </div>
          <div className="col-sm-6">
            <nav className="float-left float-sm-right" aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li className="active breadcrumb-item" aria-current="page">
                  {props.url}
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="mb-30 col-md-12">
          <div className="card-statistics h-100 card">
            <div className="card-body">
              <div>{props.children}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageWrapper;
