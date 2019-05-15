import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Base from "./components/Layout/Base";
import Basepages from "./components/Layout/Basepages";
import Login from "./components/Authentication/Login/Login";
import Errors from "./components/Custompage/Error/Errors";
import Building from "./components/Buildings/buildings";
import AuthorizeRoute from "../src/common/AuthorizeRoute";
import Dashboard from "./components/Dashboard/Dashboard";
import { Sectors } from "./components/Sectors/sectors";
import Register from './components/Authentication/Register/Register';

const Routers = () => (
  // console.log(location)
  // if (["/login", "/register"].indexOf(location.pathname) > -1) {
  //   return (
  //     <Basepages>
  //       <Route path="/login" component={Login} />
  //     </Basepages>
  //   );
  // } else {
  //   return (
  //     <Base>
  //       <Switch>
  //         <Route path="/notfound" component={Errors} />
  //         <AuthorizeRoute
  //           path="/buildings/:buildingId?/:floorId?"
  //           component={Building}
  //         />
  //         <AuthorizeRoute path="/home" component={Dashboard} />
  //         <AuthorizeRoute path="/dashboard" exact component={Dashboard} />
  //         <AuthorizeRoute path="/" exact component={Dashboard} />
  //         <AuthorizeRoute
  //           path="/sector/:cid/:camid/:floorid"
  //           component={Sectors}
  //         />
  //         <Redirect to="/notfound" />
  //       </Switch>
  //     </Base>
  //   );
  // }

  <Switch>
  <AuthorizeRoute exact path="/" component={Base} />
    <Route path="/login" component={Login} />
    <Route path="/register" component={Register} />
    <AuthorizeRoute path="/dashboard" component={Dashboard} />
    <AuthorizeRoute path="/buildings" component={Building} />
    <Route path="*" component={Errors} />
  
</Switch>
  );
export default Routers;
