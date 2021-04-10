import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Spin, Space, Rate } from "antd";
import InputRange from "react-input-range";
import { formatNumber } from "../../../helper/formatNumber";
import "../../../../node_modules/react-input-range/lib/css/index.css";
import { getListProduct, setProductCart } from "../../../state/actions/webActions";
const Category = () => {
  const listCategory = useSelector((state) => state.web.listCategory);
  const listProduct = useSelector((state) => state.web.listProduct);
  const isLoading = useSelector((state) => state.web.isLoading);
  const dispatch = useDispatch();
  const [nameCategory, setNameCategory] = useState();
  const [keyword, setKeyWord] = useState("");
  const [rangePrice, setRangePrice] = useState({ min: 1, max: 900 });
  const [sortProductType, setSortProductType] = useState("POPULATE");
  const [rating, setRating] = useState(0);
  const [paging, setPaging] = useState({ offset: 1, limit: 9 });
  const [total, setTotal] = useState(0);
  const { id } = useParams();

  useEffect(() => {
    loadListProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortProductType, id, paging, rating]);
  useEffect(() => {
    getNameCategory();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [listCategory, id]);
  const onChange = (e) => {
    const { value, name } = e.target;
    if (name === "sortProduct") {
      setSortProductType(value);
    } else if (name === "keyword") {
      setKeyWord(value);
    }
  };

  const onSearchProduct = () => {
    loadListProduct();
  };
  const loadListProduct = () => {
    let filter = {
      fromPrice: rangePrice.min * 1000,
      toPrice: rangePrice.max * 1000,
    };
    if (id) filter.categoryId = id;
    if (keyword) filter.keyword = keyword;
    if (rating) filter.rating = rating;
    if (sortProductType) filter.sortProductType = sortProductType;
    const payload = {
      filter,
      paging: {
        offset: 0,
        limit: paging.limit,
      },
    };
    dispatch(
      getListProduct(payload, (status, total) => {
        if (status) {
          setTotal(total);
        }
      })
    );
  };

  const getNameCategory = () => {
    const find = listCategory.find((item) => item._id === id);
    if (find) {
      setNameCategory(find.name);
    }
  };
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
  const onChangeRating = (rating) => {
    setRating(rating);
  };

  const renderRating = () => {
    const arr = [5, 4, 3, 2, 1];
    return arr.map((item, key) => {
      return (
        <div className="row ml-2 mt-2 list-rating" onClick={() => onChangeRating(item)} key={key}>
          <ul className="rating">
            <Rate disabled defaultValue={item}></Rate>
            <p className="ml-3 my-2">{item} sao</p>
          </ul>
        </div>
      );
    });
  };
  const seeMore = () => {
    setPaging({ offset: paging.offset + 1, limit: (paging.offset + 1) * 9 });
  };

  const renderProduct = () => {
    return listProduct.length > 0 ? (
      listProduct.map((item, key) => {
        return (
          <div className="col-lg-4 col-md-6 col-6 mb-4" key={key}>
            <div className="card">
              <div className="view overlay">
                <img src={item.image} className="card-img-top" alt="" />
                <div className="mask rgba-white-slight" />
              </div>
              <div className="card-body card-body-product text-center">
                <h5 className="text-success name-product">{item.name}</h5>
                <Rate defaultValue={item.rating} disabled></Rate>
                <h5 className="price-product">{formatNumber(item.price)}</h5>
                <div className="btn-product">
                  <Link to={`/product/${item._id}`} className="btn btn-see-detail">
                    Xem chi tiết
                  </Link>
                  <button className="btn btn-add-to-cart" onClick={() => addCart(item)}>
                    Thêm vào giỏ
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })
    ) : (
      <small className="text-center w-100 mt-5">Không có sản phẩm </small>
    );
  };
  return (
    <div className="category ">
      <div className="row pt-4">
        <div className="col-lg-3 pl-4">
          <div className="input-group mt-0 ">
            <input type="text" className="form-control" name="keyword" value={keyword} onChange={onChange} placeholder="Tìm kiếm" />
            <div className="input-group-append">
              <button className="btn btn-custom" onClick={onSearchProduct}>
                <i className="fas fa-search"></i>
              </button>
            </div>
          </div>
          <div>
            <div className="row ">
              <div className="col-md-6 col-lg-12 mb-3 mt-3">
                <div className="list-category">
                  <h5 className="font-weight-bold">Danh mục sản phẩm</h5>
                  {listCategory.map((item, key) => {
                    return (
                      <Link key={key} to={`/category/${item._id}`}>
                        <div className={`${id === item._id ? "active" : ""} title-category`}>{item.name}</div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="list-category">
              <div className="">
                <h5 className="font-weight-bold ">Lọc theo giá</h5>
                <div className="input-range-price">
                  <InputRange
                    maxValue={900}
                    minValue={1}
                    formatLabel={(value) => `${formatNumber(value)} 000 đ`}
                    value={rangePrice}
                    onChange={(value) => setRangePrice(value)}
                  />
                </div>
                <div className="w-100 text-center">
                  <button className="btn btn-custom mb-2" onClick={onSearchProduct}>
                    Lọc
                  </button>
                </div>
              </div>
            </div>

            <div className="list-category mt-3">
              <h5 className="font-weight-bold dark-grey-text">
                <strong>Xếp hạng</strong>
              </h5>
              <div className="divider" />
              <div className="pb-2">{renderRating()}</div>
            </div>
          </div>
        </div>

        <div className="col-lg-9">
          <div className="row d-flex justify-content-between mr-3">
            <div className="d-flex align-items-center">
              <h5 className="ml-4 pl-1 pb-1 font-weight-bold">Sản phẩm: {nameCategory ? nameCategory : "Tất cả"}</h5>
            </div>
            <div className="form-group d-flex flex-row col-md-6 p-0 justify-content-center">
              <p className="col-md-4 mt-2">Sắp xếp theo</p>
              <select onChange={onChange} name="sortProduct" value={sortProductType} className="form-control">
                <option value="POPULATE">Mức độ phổ biến</option>
                <option value="HIGH_RATING">Đánh giá cao</option>
                <option value="NEWEST">Mới nhất</option>
                <option value="LOW_TO_HIGH">Giá từ thấp tới cao</option>
                <option value="HIGH_TO_LOW"> Giá từ cao tới thấp</option>
              </select>
            </div>
          </div>
          <div className="row wow fadeIn px-3">
            {renderProduct()}
            {isLoading && (
              <div className="loadingDataProduct">
                <Space size="middle">
                  <Spin size="large" />
                </Space>
              </div>
            )}
            <div className="w-100 text-center">
              {total > paging.offset * 8 && (
                <button className="btn btn-custom " onClick={seeMore}>
                  Xem thêm {total - paging.offset * 8} sản phẩm
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
