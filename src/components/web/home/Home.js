import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Tabs, Tab } from "react-bootstrap";

export default class Home extends Component {
  render() {
    const listCategory = [
      {
        name: "Rau củ",
        img: "http://mauweb.monamedia.net/vuonrau/wp-content/uploads/2019/05/p9-100x100-1.jpg",
      },
      {
        name: "Trái cây",
        img: "http://mauweb.monamedia.net/vuonrau/wp-content/uploads/2019/05/p1-100x100.jpg",
      },
      {
        name: "Thịt",
        img: "http://mauweb.monamedia.net/vuonrau/wp-content/uploads/2019/05/4-zalm-loin-white-100x100.png",
      },
      {
        name: "Rau củ",
        img: "http://mauweb.monamedia.net/vuonrau/wp-content/uploads/2019/05/p5-100x100-1.jpg",
      },
    ];
    const listBestSell = [
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
    ];
    const listProductNew = [
      {
        name: "Cam",
        img: "https://images4.alphacoders.com/100/thumbbig-10054.jpg",
      },
      {
        name: "Sửa",
        img: "https://images7.alphacoders.com/447/thumbbig-447791.jpg",
      },
      {
        name: "Mực",
        img: "https://images6.alphacoders.com/422/thumbbig-422673.jpg",
      },
      {
        name: "Măng",
        img: "https://images4.alphacoders.com/233/thumbbig-233204.jpg",
      },
      {
        name: "Ớt",
        img: "https://images6.alphacoders.com/365/thumbbig-365496.jpg",
      },
      {
        name: "Dưa hấu",
        img: "https://images4.alphacoders.com/988/thumbbig-988128.jpg",
      },
      {
        name: "Tỏi",
        img: "https://images8.alphacoders.com/571/thumbbig-571670.jpg",
      },
      {
        name: "Cà chua",
        img: "https://images3.alphacoders.com/906/thumbbig-906076.jpg",
      },
    ];
    const listProductReduce = [
      {
        name: "Xướng",
        img: "https://images8.alphacoders.com/462/thumbbig-462312.jpg",
      },
      {
        name: "Cá",
        img: "https://images3.alphacoders.com/223/thumbbig-22335.jpg",
      },
      {
        name: "Thịt heo",
        img: "https://images3.alphacoders.com/906/thumbbig-906076.jpg",
      },
      {
        name: "Ớt chuông",
        img: "https://images4.alphacoders.com/196/thumbbig-19614.jpg",
      },
      {
        name: "Măng tây",
        img: "https://images4.alphacoders.com/233/thumbbig-233204.jpg",
      },
      {
        name: "Chân giò",
        img: "https://images8.alphacoders.com/741/thumbbig-741273.jpg",
      },
      {
        name: "Rau cải",
        img: "https://images4.alphacoders.com/959/thumbbig-95954.jpg",
      },
      {
        name: "Rau muống",
        img: "https://images4.alphacoders.com/118/thumbbig-11814.jpg",
      },
    ];

    const listBlog = [
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
      <div className="bg-white">
        <div id="carouselExampleControls" className="carousel slide banner-home" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100" src="https://images6.alphacoders.com/383/thumb-1920-383146.jpg" alt="First slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src="https://images8.alphacoders.com/837/thumb-1920-837364.jpg" alt="Second slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src="https://images6.alphacoders.com/919/thumb-1920-919655.jpg" alt="Third slide" />
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
                <Link to="/category">
                  <div className="item-category" key={key}>
                    <img width="120" height="120" src={item.img} alt=""></img>
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
                  <Tab eventKey="home" title="Mới nhất">
                    <div className="text-center">
                      <div className="row wow fadeIn px-3">
                        {listProductNew.map((item, key) => {
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
                  </Tab>
                  <Tab eventKey="profile" title="Giảm giá">
                    <div className="text-center">
                      <div className="row wow fadeIn px-3">
                        {listProductReduce.map((item, key) => {
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
                  </Tab>
                  <Tab eventKey="contact" title="Bán chạy">
                    <div className="text-center">
                      <div className="row wow fadeIn px-3">
                        {listBestSell.map((item, key) => {
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
                  </Tab>
                </Tabs>
              </Tab.Container>
            </div>

            <div className="text-center pb-3">
              <button className="btn btn-custom">Xem thêm</button>
            </div>
          </div>
          <div className="banner-discount">
            <img src="https://images7.alphacoders.com/328/thumb-1920-328672.jpg" alt="" className="img-banner-discount"></img>
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
                    <div className="col-lg-4 col-md-6 mb-4" key={key}>
                      <Link to="/blog">
                        <div className="card">
                          <div className="view overlay">
                            <img src={item.img} className="card-img-top" alt="" />

                            <div className="mask rgba-white-slight" />
                          </div>

                          <div className="card-body text-left">
                            <h5 className="title-blog">{item.title}</h5>
                            <div className="time-blog">10/10/2021</div>
                            <div className="content-blog">Ra đời làm ắn bươn trải,có làm ....</div>
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
