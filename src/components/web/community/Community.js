import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Community extends Component {
  render() {
    const listProduct = [
      {
        title: "Thịt heo tốt sức khỏe",
        img: "https://images7.alphacoders.com/681/thumbbig-681542.jpg",
      },
      {
        title: "Thịt cuộn và tác dụng ",
        img: "https://images.alphacoders.com/735/thumbbig-735019.jpg",
      },
      {
        title: "Nướng thịt với bắp ",
        img: "https://images4.alphacoders.com/873/thumbbig-873348.jpg",
      },
      {
        title: "Thịt heo tốt sức khỏe",
        img: "https://images7.alphacoders.com/681/thumbbig-681542.jpg",
      },
      {
        title: "Thịt cuộn và tác dụng ",
        img: "https://images.alphacoders.com/735/thumbbig-735019.jpg",
      },
      {
        title: "Nướng thịt với bắp ",
        img: "https://images4.alphacoders.com/873/thumbbig-873348.jpg",
      },
    ];
    const listNewBlog = [
      {
        title: "Thịt heo tốt sức khỏe",
        img: "https://images7.alphacoders.com/681/thumbbig-681542.jpg",
      },
      {
        title: "Thịt cuộn và tác dụng ",
        img: "https://images.alphacoders.com/735/thumbbig-735019.jpg",
      },
      {
        title: "Nướng thịt với bắp ",
        img: "https://images4.alphacoders.com/873/thumbbig-873348.jpg",
      },
      {
        title: "Thịt heo tốt sức khỏe",
        img: "https://images7.alphacoders.com/681/thumbbig-681542.jpg",
      },
      {
        title: "Thịt cuộn và tác dụng ",
        img: "https://images.alphacoders.com/735/thumbbig-735019.jpg",
      },
      {
        title: "Nướng thịt với bắp ",
        img: "https://images4.alphacoders.com/873/thumbbig-873348.jpg",
      },
    ];
    return (
      <div className="blog">
        <div className="row pt-4">
          <div className="col-lg-3 pl-4">
            <div className="input-group mb-3">
              <input type="text" className="form-control" placeholder="Tìm kiếm" />
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
                    <img src={item.img} alt="" width="40" height="40" className="mr-3 " />
                    <div>{item.title}</div>
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
                  <div className="col-lg-4 col-md-6 col-6 mb-4" key={key}>
                    <Link to="/detail-blog">
                      <div className="card">
                        <div className="view overlay">
                          <img src={item.img} className="card-img-top" alt="" />
                          <div className="mask rgba-white-slight" />
                        </div>
                        <div className="card-body text-left">
                          <h5 className="title-blog">{item.title}</h5>
                          <div className="time-blog">10/10/2021</div>
                          <div className="content-blog">Ăn dâu tây tăng cường sức khỏe</div>
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
