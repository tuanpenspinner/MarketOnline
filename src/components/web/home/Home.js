import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import { getListProductPage, setProductCart } from "../../../state/actions/webActions";
import { Tabs, Tab } from "react-bootstrap";
import { formatNumber } from "../../../helper/formatNumber";
import { Spin, Space } from "antd";
import "../../../../node_modules/slick-carousel/slick/slick.css";
import "../../../../node_modules/slick-carousel/slick/slick-theme.css";

const Home = () => {
  const dispatch = useDispatch();
  const dataHomepage = useSelector((state) => state.web.listProductPage);
  const isLoading = useSelector((state) => state.web.isLoading);

  useEffect(() => {
    dispatch(getListProductPage({}));
  }, [dispatch]);

  const addCart = (item) => {
    const product = {
      productId: item._id,
      name: item.name,
      price: item.price,
      image: item.image,
      count: 1,
    };
    let listProductCart = localStorage.getItem("listProductCart");
    if (listProductCart) listProductCart = JSON.parse(listProductCart);
    else {
      listProductCart = [];
    }
    const findIndex = listProductCart.findIndex((item) => item.productId === product.productId);
    if (findIndex !== -1) {
      listProductCart[findIndex].count = listProductCart[findIndex].count + 1;
    } else {
      listProductCart.push(product);
    }
    localStorage.setItem("listProductCart", JSON.stringify(listProductCart));
    dispatch(setProductCart(listProductCart));
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  if (isLoading)
    return (
      <div className="loadingData">
        <Space size="middle">
          <Spin size="large" />
        </Space>
      </div>
    );
  return (
    <div>
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
          <div className="multi-slider">
            <Slider {...settings}>
              {dataHomepage?.categories?.map((item, key) => {
                return (
                  <Link to={`/category/${item._id}`} key={key}>
                    <div className="item-category">
                      <img width="100" height="100" src={item.image} alt=""></img>
                      {item.name}
                    </div>
                  </Link>
                );
              })}
            </Slider>
          </div>
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
                      {dataHomepage?.newProducts?.map((item, key) => {
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
                                <button className="btn btn-custom" onClick={() => addCart(item)}>
                                  Thêm vào giỏ
                                </button>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </Tab>
                <Tab eventKey="profile" title="Bán chạy">
                  <div className="text-center">
                    <div className="row wow fadeIn px-3">
                      {dataHomepage?.productsHighLight?.map((item, key) => {
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
                                <button className="btn btn-custom" onClick={() => addCart(item)}>
                                  Thêm vào giỏ
                                </button>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </Tab>
                <Tab eventKey="contact" title="Mới nhất">
                  <div className="text-center">
                    <div className="row wow fadeIn px-3">
                      {dataHomepage?.promotions?.map((item, key) => {
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
                                <button className="btn btn-custom" onClick={() => addCart(item)}>
                                  Thêm vào giỏ
                                </button>
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
              {dataHomepage?.blogs?.map((item, key) => {
                return (
                  <div className="col-lg-4 col-md-6 col-6 mb-4" key={key}>
                    <Link to={`/detail-blog/${item._id}`}>
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
