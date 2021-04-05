import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Checkout from "./Checkout";
import { formatNumber } from "../../../helper/formatNumber";
import { setProductCart } from "state/actions/webActions";
import { useDispatch } from "react-redux";
const Cart = () => {
  const [isCheckOut, setIsCheckout] = useState(false);
  const [listProductCart, setListProductCart] = useState([]);
  const [totalMoney, setTotalMoney] = useState(0);
  const dispatch = useDispatch();
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
  const onChange = (e, data) => {
    const { value } = e.target;
    const index = listProductCart.findIndex((item) => item.productId === data.productId);
    let arr = [...listProductCart];
    arr[index].count = parseInt(value, 10);
    let price = 0;
    arr?.forEach((item) => {
      price += item.price * item.count;
    });
    setTotalMoney(price);
    setListProductCart(arr);
    localStorage.setItem("listProductCart", JSON.stringify(arr));
    dispatch(setProductCart(listProductCart));
  };
  const removeProductCart = (index) => {
    let arr = [...listProductCart];
    arr.splice(index, 1);
    let price = 0;
    arr?.forEach((item) => {
      price += item.price * item.count;
    });
    setTotalMoney(price);
    setListProductCart(arr);
    localStorage.setItem("listProductCart", JSON.stringify(arr));
    dispatch(setProductCart(listProductCart));
  };
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
            <input className="form-control" onChange={(e) => onChange(e, item)} type="number" name="number" defaultValue={item.count} />
          </td>
          <td className="text-right">
            <div>{formatNumber(item.count * item.price)} đ</div>
          </td>
          <td className="text-right">
            <div onClick={() => removeProductCart(key)}>
              <i className="fa fa-trash text-danger cursor-pointer" />
            </div>
          </td>
        </tr>
      );
    });
  };

  if (isCheckOut) return <Checkout onCheckout={onCheckout} listProductCart={listProductCart} totalMoney={totalMoney}></Checkout>;
  return (
    <div className="container box-cart">
      <div className="banner-cart">
        <img src="assets/image/cart-banner.jpg" alt="" className="img-cart"></img>
        <div className="blur-banner-cart"></div>
        <div className="title-cart">
          Giỏ hàng <i className="fas fa-shopping-cart"></i>
        </div>
      </div>

      <div className="table-responsive table-cart mt-5">
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
          <button className="btn btn-custom">
            <Link to="/">
              <i className="fas fa-hand-point-left"></i>
              &nbsp; Tiếp tục mua sắm
            </Link>
          </button>
          <button onClick={onCheckout} className="btn btn-custom m-0">
            <i className="fas fa-money-check-alt"></i>
            &nbsp;Đặt hàng
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
