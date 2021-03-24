import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Category extends Component {
  render() {
    const listProduct = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    return (
      <div className="category">
        <div className="row pt-4">
          <div className="col-lg-3 pl-4">
            <div className>
              <div className="row">
                <div className="col-md-6 col-lg-12 mb-5">
                  <div className="list-category ">
                    <h5 className="font-weight-bold">Danh mục sản phẩm</h5>
                    <div className="title-category">Trái cây</div>
                    <div className="title-category">Trái cây</div>
                    <div className="title-category">Trái cây</div>
                    <div className="title-category">Trái cây</div>
                    <div className="title-category">Trái cây</div>
                    <div className="title-category">Trái cây</div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 col-lg-12 mb-5">
                  <div className="filter-price"></div>
                  <h5 className="font-weight-bold ">Lọc theo giá</h5>

                  <form className="range-field mt-3">
                    <input
                      className="no-border w-100"
                      type="range"
                      defaultValue={0}
                      min={0}
                      max={300}
                    />
                  </form>
                  <div className="row justify-content-center">
                    <div className="col-md-6 text-left">
                      <p className="dark-grey-text">
                        <strong id="resellerEarnings">0</strong>
                      </p>
                    </div>

                    <div className="col-md-6 text-right">
                      <p className="dark-grey-text">
                        <strong id="clientPrice">10,000,000 đ</strong>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-12 mb-5">
                  <h5 className="font-weight-bold dark-grey-text">
                    <strong>Xếp hạng</strong>
                  </h5>
                  <div className="divider" />
                  <div className="row ml-1">
                    <ul className="rating mb-0">
                      <li>
                        <i className="fas fa-star blue-text" />
                      </li>
                      <li>
                        <i className="fas fa-star blue-text" />
                      </li>
                      <li>
                        <i className="fas fa-star blue-text" />
                      </li>
                      <li>
                        <i className="fas fa-star blue-text" />
                      </li>
                      <li>
                        <i className="fas fa-star blue-text" />
                      </li>
                      <li>
                        <p className="ml-3 dark-grey-text">5 sao</p>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* Filter by rating */}
              </div>
            </div>
          </div>

          <div className="col-lg-9">
            <div className="row justify-content-end mr-3">
              <div className="form-group d-flex flex-row col-md-6 p-0 justify-content-center">
                <p className="col-md-4 mt-2">Sắp xếp theo</p>
                <select className="form-control">
                  <option>Mức độ phổ biến</option>
                  <option>Đánh giá cao</option>
                  <option>Mới nhất</option>
                  <option>Giá từ thấp tới cao</option>
                  <option>Giá từ cao tới thấp</option>
                </select>
              </div>
            </div>
            <div className="row wow fadeIn px-3">
              {listProduct.map((item, key) => {
                return (
                  <div className="col-lg-4 col-md-6 mb-4" key={key}>
                    <div className="card">
                      <Link to="/product">
                        <div className="view overlay">
                          <img
                            src="https://images6.alphacoders.com/368/thumb-1920-368872.jpg"
                            className="card-img-top"
                            alt=""
                          />

                          <div className="mask rgba-white-slight" />
                        </div>
                      </Link>
                      <div className="card-body text-center">
                        <Link to="/product">
                          <strong>Dâu tây Đà Lạt</strong>
                          <h5 className="mt-3">1000,0000 đ</h5>
                        </Link>
                        <button className="btn btn-custom">Thêm vào giỏ</button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
