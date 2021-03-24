import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class MenuVertical extends Component {
  render() {
    return (
      <div>
        <div id="wrapper">
          <div id="sidebar-wrapper">
            <ul className="sidebar-nav">
              <li className="sidebar-brand">
                <Link to="/admin/product">Sản phẩm</Link>
              </li>
              <li className="sidebar-brand">
                <Link to="/admin/category">Danh mục</Link>
              </li>
              <li className="sidebar-brand">
                <Link to="/admin/blog">Blog</Link>
              </li>
            </ul>
          </div>
          <div id="page-content-wrapper">
            <div className="">{this.props.children}</div>
          </div>
        </div>
      </div>
    );
  }
}
