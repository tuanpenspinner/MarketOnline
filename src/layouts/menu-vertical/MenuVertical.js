import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class MenuVertical extends Component {
  render() {
    return (
      <div>
        <div id="wrapper">
          <div id="sidebar-wrapper">
            <div className="text-center">
              <img src="assets/image/logo-login.png" alt="" width="100"></img>
            </div>

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
              <li className="sidebar-brand">
                <Link to="/admin/order">Đơn đặt hàng</Link>
              </li>
              <li className="sidebar-brand">
                <Link to="/admin/comment">Bình luận</Link>
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
