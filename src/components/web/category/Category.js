import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { formatNumber } from "../../../helper/formatNumber";
const Category = () => {
  const [listProduct, setListProduct] = useState([]);
  const [listCategory, setListCategory] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    axios({
      method: "post",
      url: "https://kadonfarm.herokuapp.com/user/product",
      data: {
        payload: {
          filter: {
            categoryId: id,
          },
          paging: {
            offset: 0,
            limit: 100,
          },
        },
      },
    }).then((response) => {
      let data = response.data.items;
      setListProduct(data);
    });
    axios({
      method: "post",
      url: "https://kadonfarm.herokuapp.com/user/category",
      data: {},
    }).then((response) => {
      let data = response.data;
      setListCategory(data);
    });
  }, [id]);
  return (
    <div className="category ">
      <div className="row pt-4">
        <div className="col-lg-3 pl-4">
          <div className="mt-2">
            <div className="row ">
              <div className="col-md-6 col-lg-12 mb-3 mt-2">
                <div className="list-category mt-5">
                  <h5 className="font-weight-bold">Danh mục sản phẩm</h5>
                  {listCategory.map((item, key) => {
                    return (
                      <Link key={key} to={`/category/${item._id}`}>
                        <div className="title-category">{item.name}</div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="list-category">
              <div className="">
                <h5 className="font-weight-bold ">Lọc theo giá</h5>
                <div className="p-2">
                  <form className="range-field mt-3">
                    <input className="no-border w-100" type="range" defaultValue={0} min={0} max={300} />
                  </form>
                  <div className="row justify-content-center">
                    <div className="col-md-6 text-left">
                      <p className="dark-grey-text">
                        <strong id="resellerEarnings">0</strong>
                      </p>
                    </div>

                    <div className="col-md-6 text-right">
                      <p className="dark-grey-text">
                        <strong id="clientPrice">10,000,000 đ</strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="list-category mt-3">
              <h5 className="font-weight-bold dark-grey-text">
                <strong>Xếp hạng</strong>
              </h5>
              <div className="divider" />
              <div className="row ml-2 mt-2">
                <ul className="rating mb-0">
                  <li>
                    <i className="fas fa-star blue-text" />
                  </li>
                  <li>
                    <i className="fas fa-star blue-text" />
                  </li>
                  <li>
                    <i className="fas fa-star blue-text" />
                  </li>
                  <li>
                    <i className="fas fa-star blue-text" />
                  </li>
                  <li>
                    <i className="fas fa-star blue-text" />
                  </li>
                  <li>
                    <p className="ml-3 dark-grey-text">5 sao</p>
                  </li>
                </ul>
              </div>
              <div className="row ml-2">
                <ul className="rating mb-0">
                  <li>
                    <i className="fas fa-star blue-text" />
                  </li>
                  <li>
                    <i className="fas fa-star blue-text" />
                  </li>
                  <li>
                    <i className="fas fa-star blue-text" />
                  </li>
                  <li>
                    <i className="fas fa-star blue-text" />
                  </li>

                  <li>
                    <p className="ml-3 dark-grey-text">4 sao</p>
                  </li>
                </ul>
              </div>
              <div className="row ml-2">
                <ul className="rating mb-0">
                  <li>
                    <i className="fas fa-star blue-text" />
                  </li>
                  <li>
                    <i className="fas fa-star blue-text" />
                  </li>
                  <li>
                    <i className="fas fa-star blue-text" />
                  </li>
                  <li>
                    <p className="ml-3 dark-grey-text">3 sao</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-9">
          <div className="row justify-content-end mr-3">
            <div className="form-group d-flex flex-row col-md-6 p-0 justify-content-center">
              <p className="col-md-4 mt-2">Sắp xếp theo</p>
              <select className="form-control">
                <option>Mức độ phổ biến</option>
                <option>Đánh giá cao</option>
                <option>Mới nhất</option>
                <option>Giá từ thấp tới cao</option>
                <option>Giá từ cao tới thấp</option>
              </select>
            </div>
          </div>
          <div className="row wow fadeIn px-3">
            {listProduct.map((item, key) => {
              return (
                <div className="col-lg-4 col-md-6 col-6 mb-4" key={key}>
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
      </div>
    </div>
  );
};

export default Category;
