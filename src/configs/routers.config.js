import React, { Component } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import routes from "../routers";
import RouterCustom from "./route";

export default class routers extends Component {
  render() {
    return (
      <Router>
        <Switch>
          {routes.map((routeItem, key) => {
            const { component, ...rest } = routeItem;
            return (
              <routeItem.layout key={key} {...rest} component={component}>
                <RouterCustom component={component}></RouterCustom>
              </routeItem.layout>
            );
          })}
        </Switch>
      </Router>
    );
  }
}
