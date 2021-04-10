import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Form, Col, Tabs, Tab } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Spin, Space, Rate } from "antd";
import dayjs from "dayjs";
import Swal from "sweetalert2";
import { getDetailProduct, setProductCart, sendProductComment } from "../../../state/actions/webActions";
import { formatNumber } from "../../../helper/formatNumber";

const Product = () => {
  const detailProductReducer = useSelector((state) => state.web.detailProduct);
  const detailProduct = detailProductReducer.items ? detailProductReducer.items[0] : [];
  const isLoading = useSelector((state) => state.web.isLoading);
  const listProductRelate = detailProductReducer.relativeProducts ? detailProductReducer.relativeProducts.slice(0, 4) : [];
  const [comment, setComment] = useState({ content: "", email: "", name: "", phone: "", rating: 5 });
  const [validated, setValidated] = useState(false);
  const [countProduct, setCountProduct] = useState(1);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    getInfoProduct(id);
    window.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
  const getInfoProduct = (id) => {
    const payload = {
      filter: {
        productId: id,
      },
      paging: {
        offset: 0,
        limit: 10,
      },
    };
    dispatch(getDetailProduct(payload));
  };
  const sendComment = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity()) {
      const payload = {
        ...comment,
        productId: id,
      };
      dispatch(
        sendProductComment(payload, (status) => {
          if (status) {
            getInfoProduct(id);
            resetForm();
            Swal.fire({
              icon: "success",
              title: "Thêm đánh giá thành công",
            });
          } else {
            Swal.fire({
              icon: "error",
              title: "Thất bại",
            });
          }
        })
      );
    }
    setValidated(true);
  };
  const onChange = (e) => {
    const { value, name } = e.target;
    setComment({ ...comment, [name]: value });
  };

  const onChangeRating = (value) => {
    setComment({ ...comment, rating: value });
  };
  const onChangeCount = (count) => {
    if (countProduct + count >= 1) setCountProduct(countProduct + count);
  };
  const resetForm = () => {
    setComment({ content: "", email: "", name: "", phone: "", rating: 5 });
    setValidated(false);
  };

  const addCart = (item, count) => {
    console.log(count);
    const product = {
      productId: item._id,
      name: item.name,
      price: item.price,
      image: item.image,
      count,
    };
    let listProductCart = localStorage.getItem("listProductCart");
    if (listProductCart) listProductCart = JSON.parse(listProductCart);
    else {
      listProductCart = [];
    }
    const findIndex = listProductCart.findIndex((item) => item.productId === product.productId);
    if (findIndex !== -1) {
      listProductCart[findIndex].count = listProductCart[findIndex].count + parseInt(count);
    } else {
      listProductCart.push(product);
    }
    localStorage.setItem("listProductCart", JSON.stringify(listProductCart));
    dispatch(setProductCart(listProductCart));
  };

  const renderComment = () => {
    if (detailProduct?.comments?.length > 0) {
      const comments = detailProduct?.comments;
      return comments.map((item, index) => {
        return (
          <div key={index} className="item-comment-product">
            <div className="font-weight-bold">{item.name}</div>
            <div className="d-flex align-items-center">
              <Rate disabled defaultValue={item.rating}></Rate>
              <div className="ml-3">{item.content}</div>
            </div>
            <small className="text-muted"> {dayjs(item.createdAt).locale("vi").fromNow()}</small>
            <hr />
          </div>
        );
      });
    }
    return <p>Chưa có đánh giá</p>;
  };
  if (isLoading)
    return (
      <div className="loadingData">
        <Space size="middle">
          <Spin size="large" />
        </Space>
      </div>
    );
  return (
    <div className="box-detail-product">
      <div className=" detail-product">
        <div className="row">
          <div className="col-md-6 mb-4">
            <img src={detailProduct?.image} className="img-fluid image-product" alt="San pham" />
          </div>
          <div className="col-md-6 mb-4">
            <div className="p-4">
              <div className="mb-2">
                <Link to={`/category/${detailProduct?.categoryId ? detailProduct?.categoryId?._id : ""}`}>
                  <h5 className="badge purple mr-1 name-category bg-success text-white">
                    {detailProduct.categoryId ? detailProduct.categoryId.name : ""}
                  </h5>
                </Link>
              </div>
              <div className="mb-2">
                <span>{formatNumber(detailProduct?.price)}</span>
              </div>
              <div className="font-weight-bold mb-2">{detailProduct?.name}</div>
              {/* <p>{detailProduct.description}</p> */}
              <form className="d-flex justify-content-left">
                <div className="input-custom">
                  <div className="btn-minus-input" onClick={() => onChangeCount(-1)}>
                    <i className="fas fa-minus"></i>
                  </div>
                  <div className="title-count-input">{countProduct}</div>
                  <div className="btn-add-input" onClick={() => onChangeCount(1)}>
                    <i className="fas fa-plus"></i>
                  </div>
                </div>
                <button className="btn btn-custom btn-md my-0 ml-3" onClick={() => addCart(detailProduct, countProduct)}>
                  Thêm vào giỏ
                  <i className="fas fa-shopping-cart ml-1" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="tab-product">
        <Tab.Container id="left-tabs-example" defaultActiveKey="home">
          <Tabs defaultActiveKey="home" transition={false} id="noanim-tab-example">
            <Tab eventKey="home" title="Mô tả">
              <div dangerouslySetInnerHTML={{ __html: detailProduct?.description }} className="ck-content ck-editor__editable"></div>
            </Tab>
            <Tab eventKey="profile" title={`Đánh giá(${detailProduct?.comments ? detailProduct?.comments?.length : "0"})`}>
              <div>
                <div>
                  <h5>Đánh giá của bạn</h5>

                  <Rate defaultValue={comment.rating} onChange={onChangeRating}></Rate>
                  <Form noValidate validated={validated} onSubmit={sendComment} className="mt-3">
                    <Form.Row>
                      <Form.Group as={Col} md="4">
                        <Form.Control
                          required
                          type="text"
                          name="name"
                          pattern="^(?!\s*$).+"
                          placeholder="Họ tên"
                          onChange={onChange}
                          value={comment.name}
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
                          value={comment.phone}
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
                          value={comment.email}
                        />
                        <Form.Control.Feedback type="invalid">Email không đúng định dạng</Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group as={Col} md="12">
                        <Form.Control
                          required
                          type="text"
                          name="content"
                          pattern="^(?!\s*$).+"
                          placeholder="Lời nhắn"
                          onChange={onChange}
                          value={comment.content}
                        />
                        <Form.Control.Feedback type="invalid">Vui lòng nhập nội dung</Form.Control.Feedback>
                      </Form.Group>
                      <div className="text-center w-100">
                        <button className="btn btn-custom " type="submit">
                          Đánh giá
                        </button>
                      </div>
                    </Form.Row>
                  </Form>
                </div>
                <h4 className="mt-3">Đánh giá</h4>
                {renderComment()}
              </div>
            </Tab>
          </Tabs>
        </Tab.Container>
      </div>
      <div className="relation-product">
        <div className="row">
          <div className="w-100 text-center">
            <h4 className="my-4 font-weight-bold">Sản phẩm tương tự</h4>
          </div>
          {listProductRelate?.map((item, key) => {
            return (
              <div className="col-lg-3 col-md-4 col-6 mb-4 mb-4" key={key}>
                <div className="card">
                  <div className="view overlay">
                    <img src={item.image} className="card-img-top" alt="" />
                    <div className="mask rgba-white-slight" />
                  </div>
                  <div className="card-body card-body-product text-center">
                    <h5 className="text-success name-product">{item.name}</h5>
                    <Rate defaultValue={item.rating} disabled></Rate>
                    <h5 className="price-product">1{formatNumber(item.price)}đ</h5>
                    <div className="btn-product">
                      <Link to={`/product/${item._id}`} className="btn btn-see-detail">
                        Xem chi tiết
                      </Link>
                      <button className="btn btn-add-to-cart" onClick={() => addCart(item, 1)}>
                        Thêm vào giỏ
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Product;
