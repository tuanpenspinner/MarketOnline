import React, { Component } from "react";
import { Link } from "react-router-dom";
import Footer from "../footer/Footer";

export default class MenuHorizontal extends Component {
  componentDidMount() {
    const nowPath = this.props.location.pathname;
    const list = document.getElementsByClassName("route-menu");
    for (let i = 0; i < list.length; i++) {
      if (list[i].children[0].getAttribute("href") === nowPath)
        list[i].classList.add("menu-active");
    }
  }
  render() {
    const nowPath = this.props.location.pathname;

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
                    <Link to="/home">
                      <img
                        src="/assets/image/logo.png"
                        width="150"
                        alt="logo"
                      ></img>
                    </Link>
                  </div>
                </li>
                <div className="d-flex justify-content-center">
                  <li className="nav-item">
                    <div className="nav-link ">
                      <button
                        className={`btn btn-transparent route-menu ${
                          nowPath === "/" ? "menu-active" : ""
                        }`}
                      >
                        <Link to="/home">Trang chủ</Link>
                      </button>
                    </div>
                  </li>
                  <li className="nav-item">
                    <div className="nav-link ">
                      <button className="btn btn-transparent route-menu ">
                        <Link to="/introduce">Giới thiệu</Link>
                      </button>
                    </div>
                  </li>
                  <li className="nav-item">
                    <div className="nav-link dropdown">
                      <button className="btn btn-transparent route-menu  ">
                        <Link to="/category">
                          Cửa hàng <i class="fas fa-chevron-down"></i>
                        </Link>
                      </button>
                      <div className="dropdown-content">
                        <Link to="/category">Trái cây</Link>
                        <Link to="/category">Hoa quả</Link>
                        <Link to="/category">Đồ uống</Link>
                      </div>
                    </div>
                  </li>
                  <li className="nav-item">
                    <div className="nav-link ">
                      <button className="btn btn-transparent route-menu ">
                        <Link to="/blog">Blog</Link>
                      </button>
                    </div>
                  </li>
                  <li className="nav-item">
                    <div className="nav-link ">
                      <button className="btn btn-transparent route-menu ">
                        <Link to="/contract">Liên hệ</Link>
                      </button>
                    </div>
                  </li>
                </div>

                <li className="nav-item">
                  <div className="nav-link position-relative ">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Tìm kiếm"
                    />
                    <i className="fas fa-search icon-search-menu"></i>
                  </div>
                </li>
                <li className="nav-item">
                  <div className="nav-link position-relative  ">
                    <Link to="/cart">
                      <i className="fas fa-cart-plus icon-cart-menu">
                        Giỏ hàng
                      </i>
                    </Link>
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
