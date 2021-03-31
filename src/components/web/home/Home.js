import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Tabs, Tab } from "react-bootstrap";
import axios from "axios";
import { formatNumber } from "../../../helper/formatNumber";

const Home = () => {
  const [listBestSell, setListBestSell] = useState([]);
  const [listProductNew, setListProductNew] = useState([]);
  const [listProductReduce, setListProductReduce] = useState([]);
  const [listCategory, setListCategory] = useState([]);
  const [listBlog, setListBlog] = useState([]);
  useEffect(() => {
    axios.get("https://kadonfarm.herokuapp.com/user").then((response) => {
      let data = response.data.responseData;
      setListCategory(data.categories);
      setListProductNew(data.newProducts.splice(0, 8));
      setListBestSell(data.productsHighLight.splice(0, 8));
      setListProductReduce(data.newProducts.splice(0, 8));
      setListBlog(data.blogs.splice(0, 3));
    });
  }, []);

  return (
    <div className="bg-white">
      <div id="carouselExampleControls" className="carousel slide banner-home" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block img-carousel" src="assets/image/slide-home-1.jpg" alt="First slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block img-carousel" src="assets/image/slide-home-2.jpg" alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block img-carousel" src="assets/image/slide-home-3.jpg" alt="Third slide" />
          </div>
        </div>
        <div className="blur-banner"></div>
        <div className="text-banner">
          <h5>Nông sản thuận tự nhiên</h5>
          <Link to="/category">
            <button className="btn btn-buy-now mt-5">
              <div>Mua ngay</div>
            </button>
          </Link>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <i className="fas fa-arrow-circle-left fa-2x icon-sideshow"></i>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <i className="fas fa-arrow-circle-right fa-2x icon-sideshow"></i>
          <span className="sr-only">Next</span>
        </a>
        <div className="category-carousel">
          {listCategory.map((item, key) => {
            return (
              <Link to={`/category/${item._id}`}>
                <div className="item-category" key={key}>
                  <img width="120" height="120" src={item.image} alt=""></img>
                  {item.name}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <div className="content-home">
        <div className="best-seller ">
          <div className="title-best-seller">Sản phẩm nổi bật</div>
          <div className="tab-best-seller">
            <Tab.Container id="left-tabs-example" defaultActiveKey="home">
              <Tabs defaultActiveKey="home" transition={false} id="noanim-tab-example">
                <Tab eventKey="home" title="Phổ biến">
                  <div className="text-center">
                    <div className="row wow fadeIn px-3">
                      {listProductNew.map((item, key) => {
                        return (
                          <div className="col-lg-3 col-md-4 col-6 mb-4" key={key}>
                            <div className="card">
                              <Link to={`/product/${item._id}`}>
                                <div className="view overlay">
                                  <img src={item.image} className="card-img-top" alt="" />
                                  <div className="mask rgba-white-slight" />
                                </div>
                              </Link>
                              <div className="card-body text-center">
                                <Link to={`/product/${item._id}`}>
                                  <h5 className="text-success name-product">{item.name}</h5>
                                  <h5 className="mt-3">{formatNumber(item.price)}</h5>
                                </Link>
                                <button className="btn btn-custom">Thêm vào giỏ</button>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </Tab>
                <Tab eventKey="profile" title="Giảm giá">
                  <div className="text-center">
                    <div className="row wow fadeIn px-3">
                      {listProductReduce.map((item, key) => {
                        return (
                          <div className="col-lg-3 col-md-4 col-6 mb-4 mb-4" key={key}>
                            <div className="card">
                              <Link to={`/product/${item._id}`}>
                                <div className="view overlay">
                                  <img src={item.image} className="card-img-top" alt="" />

                                  <div className="mask rgba-white-slight" />
                                </div>
                              </Link>
                              <div className="card-body text-center">
                                <Link to={`/product/:${item._id}`}>
                                  <h5 className="text-success name-product">{item.name}</h5>
                                  <h5 className="mt-3">{formatNumber(item.price)}</h5>
                                </Link>
                                <button className="btn btn-custom">Thêm vào giỏ</button>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </Tab>
                <Tab eventKey="contact" title="Bán chạy">
                  <div className="text-center">
                    <div className="row wow fadeIn px-3">
                      {listBestSell.map((item, key) => {
                        return (
                          <div className="col-lg-3 col-md-6 mb-4" key={key}>
                            <div className="card">
                              <Link to={`/product/${item._id}`}>
                                <div className="view overlay">
                                  <img src={item.image} className="card-img-top" alt="" />

                                  <div className="mask rgba-white-slight" />
                                </div>
                              </Link>
                              <div className="card-body text-center">
                                <Link to={`/product/${item._id}`}>
                                  <h5 className="text-success name-product">{item.name}</h5>
                                  <h5 className="mt-3">{formatNumber(item.price)}</h5>
                                </Link>
                                <button className="btn btn-custom">Thêm vào giỏ</button>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </Tab>
              </Tabs>
            </Tab.Container>
          </div>

          <div className="text-center pb-3">
            <button className="btn btn-custom">
              <Link to="category"> Xem thêm</Link>
            </button>
          </div>
        </div>
        <div className="banner-discount">
          <img src="assets/image/discount.jpg" alt="" className="img-banner-discount"></img>
          <h2 className="text-white font-weight-bold">Khuyến mại trong tuần</h2>
          <div className="blur-banner-discount"> </div>
          <div className="time-discount">
            <span>0 giờ</span>
            <span>0 phút</span>
            <span>0 giây</span>
          </div>
        </div>

        <div className="best-seller mb-0 mt-3">
          <div className="title-best-seller">Bếp Kadon</div>
          <div className="text-center">
            <div className="row wow fadeIn px-3">
              {listBlog.map((item, key) => {
                return (
                  <div className="col-lg-4 col-md-6 col-6 mb-4" key={key}>
                    <Link to="/detail-blog">
                      <div className="card">
                        <div className="view overlay">
                          <img src={item.image} className="card-img-top" alt="" />
                          <div className="mask rgba-white-slight" />
                        </div>

                        <div className="card-body text-left">
                          <h5 className="title-blog">{item.title}</h5>
                          <div className="time-blog">10/10/2021</div>
                          <div className="content-blog">{item.content}</div>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="text-center pb-3">
            <button className="btn btn-custom">
              <Link to="blog"> Xem thêm</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
