import React, { Component } from "react";
import { Link } from "react-router-dom";
import Checkout from "./Checkout";

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCheckOut: false,
    };
  }
  onCheckout = () => {
    const { isCheckOut } = this.state;
    this.setState({
      isCheckOut: !isCheckOut,
    });
  };
  render() {
    const { isCheckOut } = this.state;
    if (isCheckOut) return <Checkout onCheckout={this.onCheckout}></Checkout>;
    return (
      <div className="container box-cart bg-white">
        <div className="banner-cart">
          <img src="https://images6.alphacoders.com/399/thumb-1920-399097.jpg" alt="" className="img-cart"></img>
          <div className="blur-banner-cart"></div>
          <div className="title-cart">
            Giỏ hàng <i className="fas fa-shopping-cart"></i>
          </div>
        </div>

        <div className="table-responsive mt-5">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col"> Hình ảnh</th>
                <th scope="col">Tên sản phẩm</th>
                <th scope="col" className="text-center">
                  Số lượng
                </th>
                <th scope="col" className="text-right">
                  Giá
                </th>
                <th style={{ width: "20px" }}> </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <img alt="fdsf" src="https://images6.alphacoders.com/652/thumb-1920-652742.jpg" width="50" height="50" />
                </td>
                <td>
                  <div>Dâu tây</div>
                </td>
                <td>
                  <input className="form-control" type="number" name="number" defaultValue="1" />
                </td>
                <td className="text-right">
                  <div>100,000 VNĐ</div>
                </td>
                <td className="text-right">
                  <div>
                    <i className="fa fa-trash text-danger cursor-pointer" />
                  </div>
                </td>
              </tr>
              <tr>
                <td />
                <td />
                <td className="text-right">
                  <div>
                    <strong>Tổng:</strong>
                  </div>
                </td>
                <td className="text-right">
                  <div>
                    <strong>100,000 VNĐ</strong>
                  </div>
                </td>
                <td></td>
              </tr>
            </tbody>
          </table>

          <div className="group-btn">
            <button className="btn  btn-success text-uppercase">
              <Link to="/">
                <i className="fas fa-hand-point-left"></i>
                &nbsp; Tiếp tục mua sắm
              </Link>
            </button>
            <button onClick={this.onCheckout} className="btn  btn-info text-uppercase m-0">
              <i className="fas fa-money-check-alt"></i>
              &nbsp;Đặt hàng
            </button>
          </div>
        </div>
      </div>
    );
  }
}
