import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Spin, Space } from "antd";
import { getListProduct, setProductCart } from "../../../state/actions/webActions";
import { formatNumber } from "../../../helper/formatNumber";
import Rating from "react-rating";
const Category = () => {
  const listCategory = useSelector((state) => state.web.listCategory);
  const listProduct = useSelector((state) => state.web.listProduct);
  const isLoading = useSelector((state) => state.web.isLoading);
  const dispatch = useDispatch();
  const [nameCategory, setNameCategory] = useState();
  const [keyword, setKeyWord] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [fromPrice, setFromPrice] = useState(0);
  // eslint-disable-next-line no-unused-vars
  const [toPrice, setToPrice] = useState(0);
  const [sortProductType, setSortProductType] = useState("POPULATE");
  const [rating, setRating] = useState(0);
  const [paging, setPaging] = useState({ offset: 1, limit: 9 });
  const [total, setTotal] = useState(0);
  const { id } = useParams();

  useEffect(() => {
    getNameCategory();
    loadListProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortProductType, id, paging, rating]);

  const onChange = (e) => {
    const { value, name } = e.target;
    if (name === "sortProduct") {
      setSortProductType(value);
    } else if (name === "keyword") {
      setKeyWord(value);
    }
    setPaging({ offset: 1, limit: 9 });
  };

  const onSearchProduct = () => {
    loadListProduct();
    setPaging({ offset: 1, limit: 9 });
  };
  const loadListProduct = () => {
    let filter = {};
    if (id) filter.categoryId = id;
    if (keyword) filter.keyword = keyword;
    if (fromPrice) filter.categoryId = fromPrice;
    if (toPrice) filter.categoryId = toPrice;
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
          <ul className="rating mb-2">
            <Rating
              start={0}
              stop={5}
              initialRating={item}
              className="mt-2"
              fullSymbol={[
                "fa fa-star text-warning",
                "fa fa-star text-warning",
                "fa fa-star text-warning",
                "fa fa-star text-warning",
                "fa fa-star text-warning",
                "fa fa-star text-warning",
              ]}
              emptySymbol={[
                "fa fa-star text-muted",
                "fa fa-star text-muted",
                "fa fa-star text-muted",
                "fa fa-star text-muted",
                "fa fa-star text-muted",
                "fa fa-star text-muted",
              ]}
              readonly
            />
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
    return isLoading ? (
      <div className="loadingData">
        <Space size="middle">
          <Spin size="large" />
        </Space>
      </div>
    ) : listProduct.length > 0 ? (
      listProduct.map((item, key) => {
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
                <button className="btn btn-custom" onClick={() => addCart(item)}>
                  Thêm vào giỏ
                </button>
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
