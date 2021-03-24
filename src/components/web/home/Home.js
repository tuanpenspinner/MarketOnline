import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    const listCategory = [1, 2, 3, 4];
    const listBestSell = [1, 2, 3, 4, 5, 6, 8, 9];
    const listBlog = [1, 2, 3];
    return (
      <div>
        <div className="banner-home">
          <div className="text-banner">
            <div>Tìm mua thực phẩm sạch tại đây</div>
            <Link to="/category">
              <button className="btn btn-buy-now mt-5">
                <div>Mua ngay</div>
              </button>
            </Link>
          </div>
        </div>
        <div className="content-home">
          <div className="category-carousel">
            {listCategory.map((item, key) => {
              return (
                <Link to="/category">
                  <div className="item-category" key={key}>
                    <img
                      width="100"
                      height="100"
                      src="http://mauweb.monamedia.net/vuonrau/wp-content/uploads/2019/05/p1-100x100.jpg"
                      alt=""
                    ></img>
                    Trái cây
                  </div>
                </Link>
              );
            })}
          </div>
          <div className="best-seller ">
            <div className="title-best-seller">SẢN PHẨM NỔI BẬT</div>
            <div className="text-center">
              <div className="row wow fadeIn px-3">
                {listBestSell.map((item, key) => {
                  return (
                    <div className="col-lg-3 col-md-6 mb-4" key={key}>
                      <div className="card">
                        <Link to="/product">
                          <div className="view overlay">
                            <img
                              src="https://images.alphacoders.com/599/thumb-1920-59953.jpg"
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
                          <button className="btn btn-custom">
                            Thêm vào giỏ
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="text-center pb-3">
              <button className="btn btn-custom">Xem thêm</button>
            </div>
          </div>
          <div className="best-seller mb-0">
            <div className="title-best-seller">TIN TỨC</div>
            <div className="text-center">
              <div className="row wow fadeIn px-3">
                {listBlog.map((item, key) => {
                  return (
                    <div className="col-lg-4 col-md-6 mb-4" key={key}>
                      <Link to="/blog">
                        <div className="card">
                          <div className="view overlay">
                            <img
                              src="https://images5.alphacoders.com/416/thumb-1920-416035.png"
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
      </div>
    );
  }
}
