import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Tabs, Tab } from "react-bootstrap";
import Rating from "react-rating";

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
            <img src="https://images4.alphacoders.com/118/thumb-1920-11814.jpg" className="img-fluid" alt="San pham" />
          </div>

          <div className="col-md-6 mb-4">
            <div className="p-4">
              <div className="mb-3">
                <span className="badge purple mr-1 bg-success text-white">Trái cây</span>
              </div>
              <p className="lead">
                <span className="mr-1">
                  <del>150,000đ</del>
                </span>
                <span>100,000đ</span>
              </p>
              <p className="lead font-weight-bold">Dâu tây Đà Lạt</p>
              <p>
                Dây tây được ưa chuộng không chỉ vì nó có vị thơm ngon, mà nó còn là loại trái cây rất có lợi cho sức khỏe, ngoài ra nó còn cung cấp
                nguồn vitamin cho cơ thể khá cao
              </p>
              <form className="d-flex justify-content-left">
                <input type="number" defaultValue={1} aria-label="Search" className="form-control mr-2" style={{ width: "100px" }} />
                <button className="btn btn-custom btn-md my-0 p" type="submit">
                  Thêm vào giỏ
                  <i className="fas fa-shopping-cart ml-1" />
                </button>
              </form>
            </div>
          </div>
        </div>
        <hr />
        <div className="tab-product">
          <Tab.Container id="left-tabs-example" defaultActiveKey="home">
            <Tabs defaultActiveKey="home" transition={false} id="noanim-tab-example">
              <Tab eventKey="home" title="Mô tả">
                <div>
                  <h3>Lorem Ipsum là gì?</h3>
                  <p>
                    <strong>Lorem Ipsum</strong>&nbsp;chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang phục vụ cho in
                    ấn. Lorem Ipsum đã được sử dụng như một văn bản chuẩn cho ngành công nghiệp in ấn từ những năm 1500, khi một họa sĩ vô danh ghép
                    nhiều đoạn văn bản với nhau để tạo thành một bản mẫu văn bản. Đoạn văn bản này không những đã tồn tại năm thế kỉ, mà khi được áp
                    dụng vào tin học văn phòng, nội dung của nó vẫn không hề bị thay đổi. Nó đã được phổ biến trong những năm 1960 nhờ việc bán những
                    bản giấy Letraset in những đoạn Lorem Ipsum, và gần đây hơn, được sử dụng trong các ứng dụng dàn trang, như Aldus PageMaker.
                  </p>
                </div>
                <div>
                  <h3>Tại sao lại sử dụng nó?</h3>
                  <p>
                    Chúng ta vẫn biết rằng, làm việc với một đoạn văn bản dễ đọc và rõ nghĩa dễ gây rối trí và cản trở việc tập trung vào yếu tố trình
                    bày văn bản. Lorem Ipsum có ưu điểm hơn so với đoạn văn bản chỉ gồm nội dung kiểu “Nội dung, nội dung, nội dung” là nó khiến văn
                    bản giống thật hơn, bình thường hơn. Nhiều phần mềm thiết kế giao diện web và dàn trang ngày nay đã sử dụng Lorem Ipsum làm đoạn
                    văn bản giả, và nếu bạn thử tìm các đoạn “Lorem ipsum” trên mạng thì sẽ khám phá ra nhiều trang web hiện vẫn đang trong quá trình
                    xây dựng. Có nhiều phiên bản khác nhau đã xuất hiện, đôi khi do vô tình, nhiều khi do cố ý (xen thêm vào những câu hài hước hay
                    thông tục).
                  </p>
                </div>
                <div>
                  <h3>Nó đến từ đâu?</h3>
                  <p>
                    Trái với quan điểm chung của số đông, Lorem Ipsum không phải chỉ là một đoạn văn bản ngẫu nhiên. Người ta tìm thấy nguồn gốc của
                    nó từ những tác phẩm văn học la-tinh cổ điển xuất hiện từ năm 45 trước Công Nguyên, nghĩa là nó đã có khoảng hơn 2000 tuổi. Một
                    giáo sư của trường Hampden-Sydney College (bang Virginia – Mỹ) quan tâm tới một trong những từ la-tinh khó hiểu nhất,
                    “consectetur”, trích từ một đoạn của Lorem Ipsum, và đã nghiên cứu tất cả các ứng dụng của từ này trong văn học cổ điển, để từ đó
                    tìm ra nguồn gốc không thể chối cãi của Lorem Ipsum. Thật ra, nó được tìm thấy trong các đoạn 1.10.32 và 1.10.33 của “De Finibus
                    Bonorum et Malorum” (Đỉnh tối thượng của Cái Tốt và Cái Xấu) viết bởi Cicero vào năm 45 trước Công Nguyên. Cuốn sách này là một
                    luận thuyết đạo lí rất phổ biến trong thời kì Phục Hưng.
                  </p>
                </div>
              </Tab>
              <Tab eventKey="profile" title="Đánh giá(110)">
                <div>
                  <h3>Đánh giá</h3>
                  <p>Chưa có đánh giá</p>
                  <div className="form-rating">
                    <h5>Đánh giá của bạn</h5>
                    <Rating
                      stop={6}
                      emptySymbol={["far fa-star", "far fa-star", "far fa-star", "far fa-star", "far fa-star", "far fa-star "]}
                      fullSymbol={[
                        "fa fa-star text-danger",
                        "fa fa-star text-danger",
                        "fa fa-star text-warning",
                        "fa fa-star text-info",
                        "fa fa-star text-info",
                        "fa fa-star text-success",
                      ]}
                    />
                    <form className="mt-5">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="md-form">
                            <textarea type="text" id="contact-message" className="md-textarea form-control" rows={3} placeholder="Lời nhắn" />
                            <label htmlFor="contact-message"></label>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="md-form">
                            <input type="text" id="contact-name" className="form-control" placeholder="Họ tên" />
                            <label htmlFor="contact-name" className></label>
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="md-form">
                            <input type="text" id="contact-email" className="form-control" placeholder="Email" />
                            <label htmlFor="contact-email" className></label>
                          </div>
                        </div>
                      </div>

                      <div className="text-center">
                        <button className="btn btn-custom ">Đánh giá</button>
                      </div>
                    </form>
                  </div>
                </div>
              </Tab>
            </Tabs>
          </Tab.Container>
        </div>

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
