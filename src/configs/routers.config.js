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
              <routeItem.layout
                key={key}
                {...rest}
                {...this.props}
                component={component}
              >
                <RouterCustom
                  component={component}
                  route={routeItem}
                  {...rest}
                  {...this.props}
                ></RouterCustom>
              </routeItem.layout>
            );
          })}
        </Switch>
      </Router>
    );
  }
}
