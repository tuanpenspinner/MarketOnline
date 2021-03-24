import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCard: "none",
      isCheckOut: "",
    };
  }
  onChange = (e) => {
    const value = e.target.value;
    if (value === "1")
      this.setState({
        isCard: true,
      });
    else
      this.setState({
        isCard: "none",
      });
  };
  checkOut = () => {
    alert("Đặt hàng thành công!");
    this.props.history.push({
      pathname: "/",
    });
  };
  render() {
    const { onCheckout } = this.props;
    return (
      <div className="container cart bg-white wow fadeIn position-relative">
        <i
          className="fas fa-arrow-left icon-back"
          onClick={() => onCheckout()}
        ></i>
        <h2 className="title-cart">Thanh toán</h2>
        <div className="row">
          <div className="col-md-8 mb-4">
            <div className="card">
              <form className="card-body">
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <div className="md-form ">
                      <input
                        type="text"
                        id="firstName"
                        className="form-control"
                        placeholder="Họ tên"
                      />
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    {/*lastName*/}
                    <div className="md-form">
                      <input
                        type="text"
                        id="lastName"
                        className="form-control"
                        placeholder="Số điện thoại"
                      />
                    </div>
                  </div>
                </div>

                <div className="md-form mb-3">
                  <input
                    type="text"
                    id="email"
                    className="form-control"
                    placeholder="Email"
                  />
                </div>
                {/*address*/}
                <div className="md-form mb-3">
                  <input
                    type="text"
                    id="address"
                    className="form-control"
                    placeholder="Địa chỉ"
                  />
                </div>

                <hr className="mb-4" />
                <button
                  className="btn btn-primary btn-lg btn-block"
                  onClick={this.checkOut}
                >
                  <i className="fas fa-money-check-alt"></i>
                  &nbsp; Thanh toán
                </button>
              </form>
            </div>
          </div>

          <div className="card  col-md-4 mb-4">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-muted">Giỏ của bạn</span>
            </h4>
            <ul className="list-group mb-3 z-depth-1">
              <li className="list-group-item d-flex justify-content-between lh-condensed">
                <div>
                  <h6 className="my-0">Name: Dâu tây</h6>
                  <small className="text-muted">Số lượng:10</small>
                </div>
                <span className="text-muted">200,000 VNĐ</span>
              </li>
              <li className="list-group-item d-flex justify-content-between bg-light">
                <div className="text-success">
                  <h6 className="my-0">Mã giảm giá</h6>
                  <small>Code100</small>
                </div>
                <span className="text-success">-100,000 đ</span>
              </li>

              <li className="list-group-item d-flex justify-content-between">
                <span>Tổng tiền: </span>
                <strong>100,000 (VNĐ)</strong>
              </li>

              <div className="input-group mt-3">
                <input
                  type="text"
                  className="form-control border-right-0"
                  placeholder="Mã giảm giá"
                />
                <div className="input-group-append">
                  <button
                    className="btn btn-secondary btn-md waves-effect m-0"
                    type="button"
                  >
                    Áp dụng
                  </button>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(Cart);
