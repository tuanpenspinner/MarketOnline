import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../footer/Footer";
import axios from "axios";
import { formatNumber } from "../../helper/formatNumber";
const MenuHorizontal = (props) => {
  const [listCategory, setListCategory] = useState([]);
  const [lengthProductCart, setLengthProductCart] = useState(0);
  const [listProductCart, setListProductCart] = useState([]);
  const [totalMoney, setTotalMoney] = useState(0);
  let nowPath = props.path;
  useEffect(() => {
    const list = document.getElementsByClassName("route-menu");
    for (let i = 0; i < list.length; i++) {
      if (list[i].children[0].getAttribute("href") === "#" + nowPath) list[i].classList.add("menu-active");
    }
    axios({
      method: "post",
      url: "https://kadonfarm.herokuapp.com/user/category",
      data: {},
    }).then((response) => {
      let data = response.data;
      setListCategory(data);
    });
  }, [nowPath]);

  useEffect(() => {
    const listProductCart = JSON.parse(localStorage.getItem("listProductCart"));
    let length = 0;
    let price = 0;
    listProductCart?.forEach((item) => {
      length += item.count;
      price += item.price * item.count;
    });
    setLengthProductCart(length);
    setListProductCart(listProductCart);
    setTotalMoney(price);
  }, []);

  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-light white scrolling-navbar header">
        <div className="w-100">
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
          <div></div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item">
                <div className="nav-link ">
                  <Link to="/home">
                    <img src="assets/image/logo.png" width="150" alt="logo"></img>
                  </Link>
                </div>
              </li>

              <div className="menu-button">
                <li className="nav-item">
                  <div className="nav-link ">
                    <button className={`btn btn-transparent route-menu ${nowPath === "/" ? "menu-active" : ""}`}>
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
                        Đi chợ <i class="fas fa-chevron-down"></i>
                      </Link>
                    </button>
                    <div className="dropdown-content">
                      {listCategory.map((item, key) => {
                        return <Link to={`/category/${item._id}`}>{item.name}</Link>;
                      })}
                    </div>
                  </div>
                </li>
                <li className="nav-item">
                  <div className="nav-link ">
                    <button className="btn btn-transparent route-menu ">
                      <Link to="/blog">Bếp Kadon</Link>
                    </button>
                  </div>
                </li>
                <li className="nav-item">
                  <div className="nav-link ">
                    <button className="btn btn-transparent route-menu ">
                      <Link to="/community">Cộng đồng</Link>
                    </button>
                  </div>
                </li>
                <li className="nav-item">
                  <div className="nav-link ">
                    <button className="btn btn-transparent route-menu ">
                      <Link to="/policy">Chính sách</Link>
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
                <li className="nav-item ">
                  <div className="nav-link position-relative d-flex align-items-center mt-2">
                    {/* <div className="nav-link position-relative ">
                    <input type="text" className="form-control" placeholder="Tìm kiếm" />
                    <i className="fas fa-search icon-search-menu"></i>
                  </div> */}
                    <div className="icon-cart-menu">
                      <Link to="/cart">
                        <div className="detail-cart-menu">
                          <i className="fas fa-cart-plus icon-cart"></i>
                          <div className="number-product-cart-menu">{lengthProductCart}</div>

                          <div className="box-detail-product-cart">
                            <div className="w-100 text-center mb-2">Giỏ hàng</div>
                            {listProductCart?.map((item, key) => {
                              return (
                                <div className="detail-product-cart" key={key}>
                                  <img src={item.image} alt=""></img>
                                  <div>
                                    <div className="item-name-product">{item.name}</div>
                                    <div className="item-price-product">
                                      {item.count} x {formatNumber(item.price)} đ
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                            <div className="total-money">Tổng tiền {formatNumber(totalMoney)} đ</div>
                            <div className="group-btn-cart-menu">
                              <Link to="/cart" className="btn btn-info review-cart">
                                Xem giỏ hàng
                              </Link>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </nav>
      <div className="content">{props.children}</div>
      <Footer></Footer>
    </div>
  );
};
export default MenuHorizontal;
