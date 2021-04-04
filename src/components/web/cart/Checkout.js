import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { formatNumber } from "../../../helper/formatNumber";
import { Form, Col } from "react-bootstrap";
import Swal from "sweetalert2";
const Cart = ({ listProductCart, onCheckout, totalMoney, ...props }) => {
  const [formInfo, setFormInfo] = useState({ name: "", phone: "", email: "", address: "" });
  const [validated, setValidated] = useState(false);
  const onChange = (e) => {
    const { name, value } = e.target;
    setFormInfo({ ...formInfo, [name]: value });
  };
  const checkOut = (e) => {
    console.log("dsfsd");
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity()) {
      Swal.fire({
        icon: "success",
        title: "Đặt hàng thành công",
      });
      localStorage.removeItem("listProductCart");
      props.history.push({
        pathname: "/",
      });
    }
    setValidated(true);
  };
  const renderListProduct = () => {
    return listProductCart?.map((item, key) => {
      return (
        <li className="list-group-item d-flex justify-content-between lh-condensed" key={key}>
          <div>
            <div className="my-0">Tên: {item.name}</div>
            <small className="text-muted">
              Số tiền:{formatNumber(item.count)} x {formatNumber(item.price)} ={formatNumber(item.count * item.price)} đ
            </small>
          </div>
        </li>
      );
    });
  };

  return (
    <div className="container box-cart wow fadeIn position-relative">
      <div className="banner-check-out">
        <i className="fas fa-arrow-left icon-back" onClick={onCheckout}></i>
        <img src="assets/image/checkout-banner.jpg" alt="" className="img-banner-check-out"></img>
        <div className="blur-check-out"></div>
        <h2 className="title-cart">
          Đặt hàng <i className="fas fa-money-check-alt"></i>
        </h2>
      </div>

      <div className="row mt-3">
        <div className="col-md-8 mb-4">
          <div className="card">
            <div className="card-body">
              <h4 className="text-center w-100 mb-3 ">Thông tin cá nhân</h4>
              <Form noValidate validated={validated} onSubmit={checkOut} className="mt-3">
                <Form.Row>
                  <Form.Group as={Col} md="4">
                    <Form.Control
                      required
                      type="text"
                      name="name"
                      pattern="^(?!\s*$).+"
                      placeholder="Họ tên"
                      onChange={onChange}
                      value={formInfo.name}
                    />
                    <Form.Control.Feedback type="invalid">Vui lòng nhập tên</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="4">
                    <Form.Control
                      required
                      type="text"
                      name="phone"
                      pattern="(84|0[3|5|7|8|9])+([0-9]{8})\b"
                      placeholder="Số điện thoại"
                      onChange={onChange}
                      value={formInfo.phone}
                    />
                    <Form.Control.Feedback type="invalid">Số điện thoại không đúng định dạng</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="4">
                    <Form.Control
                      required
                      name="email"
                      pattern="^[\w]{1,}[\w.+-]{0,}@[\w-]{2,}([.][a-zA-Z]{2,3}|[.][\w-]{2,3}[.][a-zA-Z]{2,3}|[.][\w-]{2,3}[.][a-zA-Z]{2,3}[.][a-zA-Z]{2,3})$"
                      placeholder="Email"
                      onChange={onChange}
                      value={formInfo.email}
                    />
                    <Form.Control.Feedback type="invalid">Email không đúng định dạng</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="12">
                    <Form.Control
                      required
                      type="text"
                      name="address"
                      pattern="^(?!\s*$).+"
                      placeholder="Lời nhắn"
                      onChange={onChange}
                      value={formInfo.address}
                    />
                    <Form.Control.Feedback type="invalid">Vui lòng nhập địa chỉ</Form.Control.Feedback>
                  </Form.Group>
                  <div className="text-center w-100">
                    <button className="btn btn-custom " type="submit">
                      <i className="fas fa-money-check-alt"></i>
                      &nbsp; Đặt hàng
                    </button>
                  </div>
                </Form.Row>
              </Form>
            </div>
          </div>
        </div>

        <div className="card  col-md-4 mb-4">
          <h4 className="text-center w-100 my-3">Giỏ của bạn</h4>
          <ul className="list-group mb-3 z-depth-1">
            {renderListProduct()}

            <li className="list-group-item d-flex justify-content-between bg-light">
              <div className="text-success">
                <div className="my-0">Mã giảm giá</div>
                <small>Chưa áp dụng</small>
              </div>
              <span className="text-success">0 đ</span>
            </li>

            <li className="list-group-item d-flex justify-content-between">
              <span>Tổng tiền: </span>
              <strong>{formatNumber(totalMoney)} đ</strong>
            </li>

            <div className="input-group mt-3">
              <input type="text" className="form-control border-right-0" placeholder="Mã giảm giá" />
              <div className="input-group-append">
                <button className="btn btn-custom" type="button">
                  Áp dụng
                </button>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default withRouter(Cart);
