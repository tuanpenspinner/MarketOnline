import React, { Component } from "react";

export default class Login extends Component {
  render() {
    return <div className="box-login">{this.props.children}</div>;
  }
}
