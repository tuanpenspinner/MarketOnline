import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Category extends Component {
  render() {
    const listProduct = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const listNewBlog = [1, 2, 3, 4];
    return (
      <div className="blog">
        <div className="row pt-4">
          <div className="col-lg-3 pl-4">
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Tìm kiếm"
              />
              <div className="input-group-append">
                <button className="btn btn-success" type="submit">
                  <i className="fas fa-search"></i>
                </button>
              </div>
            </div>
            <div className="list-blog ">
              <h5 className="font-weight-bold">Bài viết mới</h5>
              {listNewBlog.map((item, key) => {
                return (
                  <div className="blog-item" key={key}>
                    <img
                      src="https://images6.alphacoders.com/368/thumb-1920-368872.jpg"
                      alt=""
                      width="40"
                      height="40"
                      className="mr-3 "
                    />
                    <div>Ăn trái cây nhiều tốt sức khỏe</div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="col-lg-9">
            <div className="row">
              <div className="col-md-4 mt-3">{/* /.Sort by */}</div>
            </div>
            <div className="row wow fadeIn px-3">
              {listProduct.map((item, key) => {
                return (
                  <div className="col-lg-4 col-md-6 mb-4" key={key}>
                    <Link to="/blog">
                      <div className="card">
                        <div className="view overlay">
                          <img
                            src="https://images7.alphacoders.com/997/thumb-1920-997191.jpg"
                            className="card-img-top"
                            alt=""
                          />

                          <div className="mask rgba-white-slight" />
                        </div>

                        <div className="card-body text-left">
                          <h5 className="title-blog">Tác dụng của dâu tây</h5>
                          <div className="time-blog">10/10/2021</div>
                          <div className="content-blog">
                            Ăn dâu tây tăng cường sức khỏe
                          </div>
                        </div>
                      </div>
                    </Link>
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
