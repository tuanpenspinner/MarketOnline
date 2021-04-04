import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Checkout from "./Checkout";
import { formatNumber } from "../../../helper/formatNumber";
const Cart = () => {
  const [isCheckOut, setIsCheckout] = useState(false);
  const [listProductCart, setListProductCart] = useState([]);
  const [totalMoney, setTotalMoney] = useState(0);
  const onCheckout = () => {
    setIsCheckout(!isCheckOut);
  };
  useEffect(() => {
    const listProductCart = JSON.parse(localStorage.getItem("listProductCart"));
    let price = 0;
    listProductCart?.forEach((item) => {
      price += item.price * item.count;
    });
    setListProductCart(listProductCart);
    setTotalMoney(price);
  }, []);
  const renderProduct = () => {
    return listProductCart?.map((item, key) => {
      return (
        <tr key={key}>
          <td>
            <img alt="fdsf" src={item.image} width="50" height="50" />
          </td>
          <td>
            <div>{item.name}</div>
          </td>
          <td>
            <input className="form-control" type="number" name="number" defaultValue={item.count} />
          </td>
          <td className="text-right">
            <div>{formatNumber(item.count * item.price)} đ</div>
          </td>
          <td className="text-right">
            <div>
              <i className="fa fa-trash text-danger cursor-pointer" />
            </div>
          </td>
        </tr>
      );
    });
  };

  if (isCheckOut) return <Checkout onCheckout={onCheckout}></Checkout>;
  return (
    <div className="container box-cart">
      <div className="banner-cart">
        <img src="assets/image/cart-banner.jpg" alt="" className="img-cart"></img>
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
            {renderProduct()}
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
                  <strong>{formatNumber(totalMoney)} đ</strong>
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
          <button onClick={onCheckout} className="btn  btn-info text-uppercase m-0">
            <i className="fas fa-money-check-alt"></i>
            &nbsp;Đặt hàng
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
