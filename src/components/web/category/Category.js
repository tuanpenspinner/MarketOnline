import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Category extends Component {
  render() {
    const listProduct = [
      {
        name: "Cam",
        img: "https://images4.alphacoders.com/100/thumbbig-10054.jpg",
      },
      {
        name: "Bí đỏ",
        img: "https://images4.alphacoders.com/118/thumbbig-11814.jpg",
      },
      {
        name: "Dâu tây",
        img: "https://images6.alphacoders.com/422/thumbbig-422673.jpg",
      },
      {
        name: "Xoài",
        img: "https://images4.alphacoders.com/233/thumbbig-233204.jpg",
      },
      {
        name: "Thịt bò",
        img: "https://images8.alphacoders.com/842/thumbbig-842163.jpg",
      },
      {
        name: "Thịt heo",
        img: "https://images8.alphacoders.com/741/thumbbig-741273.jpg",
      },
      {
        name: "Cánh gà",
        img: "https://images5.alphacoders.com/902/thumbbig-902018.jpg",
      },
      {
        name: "Xúc xích",
        img: "https://images3.alphacoders.com/906/thumbbig-906076.jpg",
      },
      {
        name: "Cà chua",
        img: "https://images3.alphacoders.com/744/thumbbig-744345.jpg",
      },
    ];
    return (
      <div className="category ">
        <div className="row pt-4">
          <div className="col-lg-3 pl-4">
            <div className="mt-2">
              <div className="row ">
                <div className="col-md-6 col-lg-12 mb-3 mt-2">
                  <div className="list-category mt-5">
                    <h5 className="font-weight-bold">Danh mục sản phẩm</h5>
                    <div className="title-category">Trái cây</div>
                    <div className="title-category">Rau củ</div>
                    <div className="title-category">Thịt</div>
                    <div className="title-category">Các loại hạt</div>
                    <div className="title-category">Đồ uống</div>
                  </div>
                </div>
              </div>

              <div className="list-category">
                <div className="">
                  <h5 className="font-weight-bold ">Lọc theo giá</h5>
                  <div className="p-2">
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
                </div>
              </div>
              <div className="list-category mt-3">
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
                      <p className="ml-3 dark-grey-text">4 sao</p>
                    </li>
                  </ul>
                </div>
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
                      <p className="ml-3 dark-grey-text">3 sao</p>
                    </li>
                  </ul>
                </div>
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
                          <img src={item.img} className="card-img-top" alt="" />

                          <div className="mask rgba-white-slight" />
                        </div>
                      </Link>
                      <div className="card-body text-center">
                        <Link to="/product">
                          <h5 className="text-success">{item.name}</h5>
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
