import React, { Component } from "react";
import Footer from "../footer/Footer";

export default class MenuHorizontal extends Component {
  render() {
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-light white scrolling-navbar">
          <div className="container">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <div className="nav-link ">
                    <button className="btn btn-success"> Trang chủ</button>
                  </div>
                </li>
                <li className="nav-item">
                  <div className="nav-link ">
                    <button className="btn btn-success"> Giới thiếu</button>
                  </div>
                </li>
                <li className="nav-item">
                  <div className="nav-link ">
                    <button className="btn btn-success"> Của hàng</button>
                  </div>
                </li>
                <li className="nav-item">
                  <div className="nav-link ">
                    <button className="btn btn-success"> Kiến thức</button>
                  </div>
                </li>
                <li className="nav-item">
                  <div className="nav-link ">
                    <button className="btn btn-success"> Liên hệ</button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="content">{this.props.children}</div>
        <Footer></Footer>
      </div>
    );
  }
}
