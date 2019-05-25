import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import ScrollArea from "react-scrollbar";
import { Collapse } from "reactstrap";
import { connect } from "react-redux";
import "./Header";
class Sitebar extends Component {
  constructor(props) {
    super(props);

    this.dashboard = this.dashboard.bind(this);
    this.elements = this.elements.bind(this);
    this.calendarmenu = this.calendarmenu.bind(this);
    this.form = this.form.bind(this);
    this.sidebarnav = this.sidebarnav.bind(this);
    this.table = this.table.bind(this);
    this.custompage = this.custompage.bind(this);
    this.authentication = this.authentication.bind(this);
    this.multilevel = this.multilevel.bind(this);
    this.auth = this.auth.bind(this);
    this.login = this.login.bind(this);
    this.invoice = this.invoice.bind(this);
    this.error = this.error.bind(this);

    this.state = {
      dashboard: false,
      elements: false,
      calendarmenu: false,
      form: false,
      sidebarnav: false,
      table: false,
      custompage: false,
      authentication: false,
      multilevel: false,
      auth: false,
      login: false,
      invoice: false,
      error: false,
      plussignele: false,
      plussignform: false,
      plussigndata: false,
      plussigncustome: false,
      plussignauthentic: false,
      plussignmulti: false,
      plussignauth: false,
      plussignlogin: false,
      plussigninvo: false,
      plussignerror: false
    };
  }

  dashboard() {
    this.setState({
      dashboard: !this.state.dashboard
    });
  }
  elements() {
    this.setState({
      elements: !this.state.elements,
      plussignele: !this.state.plussignele
    });
  }
  calendarmenu() {
    this.setState({
      calendarmenu: !this.state.calendarmenu
    });
  }
  sidebarnav() {
    this.setState({
      sidebarnav: !this.state.sidebarnav
    });
  }
  form() {
    this.setState({
      form: !this.state.form,
      plussignform: !this.state.plussignform
    });
  }
  table() {
    this.setState({
      table: !this.state.table,
      plussigndata: !this.state.plussigndata
    });
  }
  custompage() {
    this.setState({
      custompage: !this.state.custompage,
      plussigncustome: !this.state.plussigncustome
    });
  }
  authentication() {
    this.setState({
      authentication: !this.state.authentication,
      plussignauthentic: !this.state.plussignauthentic
    });
  }
  multilevel() {
    this.setState({
      multilevel: !this.state.multilevel,
      plussignmulti: !this.state.plussignmulti
    });
  }

  auth() {
    this.setState({
      auth: !this.state.auth,
      plussignauth: !this.state.plussignauth
    });
  }
  login() {
    this.setState({
      login: !this.state.login,
      plussignlogin: !this.state.plussignlogin
    });
  }
  invoice() {
    this.setState({
      invoice: !this.state.invoice,
      plussigninvo: !this.state.plussigninvo
    });
  }
  error() {
    this.setState({
      error: !this.state.error,
      plussignerror: !this.state.plussignerror
    });
  }
  render() {
    const { isAuthenticated } = this.props;
    return (
      // <!-- Left Sidebar start-->
      <div className="side-menu-fixed">
        <ScrollArea
          speed={0.8}
          style={{ overflow: "hidden" }}
          className="scrollbar side-menu-bg"
          contentClassName="saidbar"
          horizontal={false}
        >
          <div className="saidbar">
            <ul className="nav navbar-nav side-menu" id="sidebarnav">
              <li >
                <NavLink to="/dashboard" activeClassName="is-active">
                  <i className="ti-home" />
                  <span className="right-nav-text">Dashboard</span>
                </NavLink>
              </li>
            
              <li className="mt-10 mb-10 text-muted pl-4 font-medium menu-title">
                Pages  
              </li>
           
              <li>
                <NavLink activeClassName="is-active" className="active" to="/buildings">
                  <i className="fa fa-building" />
                  <span className="right-nav-text">Buildings</span>
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="is-active" className="active" to="/reports">
                  <i className="fa fa-file" />
                  <span className="right-nav-text">Reports</span>
                </NavLink>
              </li>
              {/* <li>
                <Link to="./floors">
                  <i className="ti-comments" />
                  <span className="right-nav-text">Floors </span>
                </Link>
              </li>
            
              <li>
                <Link to="./sectors">
                  <i className="ti-comments" />
                  <span className="right-nav-text">Sectors </span>
                </Link>
              </li> */}
{/* 
              <li>
                <Link to="./eventcalendar">
                  <i className="ti-calendar" />
                  <span className="right-nav-text">Events Calendar</span>{" "}
                </Link>
              </li> */}
            </ul>
          </div>
        </ScrollArea>
      </div>
      // </Collapse>
    );
  }
}
const mapStateToProps = state => {

  return { isAuthenticated: state.authorizeReducer.isAuthenticated };
};
export default connect(mapStateToProps)(Sitebar);
