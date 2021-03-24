import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Product extends Component {
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
    ];
    return (
      <div className="detail-product">
        <div className="row wow fadeIn">
          <div className="col-md-6 mb-4">
            <img
              src="https://images4.alphacoders.com/118/thumb-1920-11814.jpg"
              className="img-fluid"
              alt="San pham"
            />
          </div>

          <div className="col-md-6 mb-4">
            <div className="p-4">
              <div className="mb-3">
                <span className="badge purple mr-1 bg-success text-white">
                  Trái cây
                </span>
              </div>
              <p className="lead">
                <span className="mr-1">
                  <del>150,000đ</del>
                </span>
                <span>100,000đ</span>
              </p>
              <p className="lead font-weight-bold">Dâu tây Đà Lạt</p>
              <p>
                Dây tây được ưa chuộng không chỉ vì nó có vị thơm ngon, mà nó
                còn là loại trái cây rất có lợi cho sức khỏe, ngoài ra nó còn
                cung cấp nguồn vitamin cho cơ thể khá cao
              </p>
              <form className="d-flex justify-content-left">
                <input
                  type="number"
                  defaultValue={1}
                  aria-label="Search"
                  className="form-control mr-2"
                  style={{ width: "100px" }}
                />
                <button className="btn btn-custom btn-md my-0 p" type="submit">
                  Thêm vào giỏ
                  <i className="fas fa-shopping-cart ml-1" />
                </button>
              </form>
            </div>
          </div>
        </div>
        <hr />
        <div className="row d-flex justify-content-center wow fadeIn">
          <div className="col-md-6 text-center">
            <h4 className="my-4 h4">Sản phẩm tương tự</h4>
          </div>
        </div>
        <div className="row wow fadeIn">
          <div className="row wow fadeIn px-3">
            {listProduct.map((item, key) => {
              return (
                <div className="col-lg-3 col-md-6 mb-4" key={key}>
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
    );
  }
}
