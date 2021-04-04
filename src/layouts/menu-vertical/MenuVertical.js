import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class MenuVertical extends Component {
  componentDidMount() {
    console.log("workkkk");
  }
  render() {
    return (
      <div className="admin-sidebar">
        <div id="wrapper">
          <div id="sidebar-wrapper">
            <div className="text-center logo-title">
              <img src="assets/image/logo-login.png" alt="" />
            </div>

            <ul className="sidebar-nav">
              <li className="sidebar-brand">
                <NavLink to="/admin/product">Sản phẩm</NavLink>
              </li>
              <li className="sidebar-brand">
                <NavLink to="/admin/category">Danh mục</NavLink>
              </li>
              <li className="sidebar-brand">
                <NavLink to="/admin/blog">Blog</NavLink>
              </li>
              <li className="sidebar-brand">
                <NavLink to="/admin/order">Đơn đặt hàng</NavLink>
              </li>
              <li className="sidebar-brand">
                <NavLink to="/admin/comment">Bình luận</NavLink>
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
