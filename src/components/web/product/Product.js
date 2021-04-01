import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Form, Col } from "react-bootstrap";
import { Tabs, Tab } from "react-bootstrap";
import Rating from "react-rating";
import axios from "axios";
import Swal from "sweetalert2";
import { formatNumber } from "../../../helper/formatNumber";

const Product = () => {
  const [listProductRelate, setListProductRelate] = useState([]);
  const [detailProduct, setDetailProduct] = useState([]);
  const [comment, setComment] = useState({ content: "", email: "", name: "", phone: "", rating: 5 });
  const [validated, setValidated] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    getInfoProduct(id);
  }, [id]);
  const getInfoProduct = (id) => {
    axios({
      method: "post",
      url: "https://kadonfarm.herokuapp.com/user/product",
      data: {
        payload: {
          filter: {
            productId: id,
          },
          paging: {
            offset: 0,
            limit: 10,
          },
        },
      },
    }).then((response) => {
      let data = response.data;
      setListProductRelate(data.relativeProducts);
      setDetailProduct(data.items[0]);
    });
  };
  const sendComment = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity()) {
      axios({
        method: "post",
        url: "https://kadonfarm.herokuapp.com/api/comment/create",
        data: {
          payload: {
            ...comment,
            productId: id,
          },
        },
      }).then((response) => {
        if (response.data.code === 200) {
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
            text: response.data.message,
          });
        }
      });
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
  const resetForm = () => {
    setComment({ content: "", email: "", name: "", phone: "", rating: 5 });
    setValidated(false);
  };

  const renderComment = () => {
    if (detailProduct.comments && detailProduct.comments.length > 0) {
      const comments = detailProduct.comments;
      return comments.map((item, index) => {
        const color = ["text-danger", "text-danger", "text-warning", "text-info", "text-success"];
        return (
          <div key={index}>
            <div>{item.name}</div>
            <div>{item.content}</div>
            <Rating start={0} stop={item.rating} initialRating={item.rating} fullSymbol={[`fa fa-star ${color[item.rating - 1]}`]} readonly />
            <hr />
          </div>
        );
      });
    }
    return <p>Chưa có đánh giá</p>;
  };

  return (
    <div className="detail-product">
      <div className="row wow fadeIn">
        <div className="col-md-6 mb-4">
          <img src={detailProduct.image} className="img-fluid image-product" alt="San pham" />
        </div>

        <div className="col-md-6 mb-4">
          <div className="p-4">
            <div className="mb-3">
              <span className="badge purple mr-1 bg-success text-white">{detailProduct.name}</span>
            </div>
            <p className="lead">
              <span>{formatNumber(detailProduct.price)}</span>
            </p>
            <p className="lead font-weight-bold">{detailProduct.name}</p>
            {/* <p>{detailProduct.description}</p> */}
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
              {detailProduct.description}
            </Tab>
            <Tab eventKey="profile" title={`Đánh giá(${detailProduct.comments ? detailProduct.comments.length : "0"})`}>
              <div>
                <h3>Đánh giá</h3>
                {renderComment()}
                <div className="form-rating">
                  <h5>Đánh giá của bạn</h5>
                  <Rating
                    stop={5}
                    initialRating={comment.rating}
                    emptySymbol={["far fa-star", "far fa-star", "far fa-star", "far fa-star", "far fa-star"]}
                    fullSymbol={[
                      "fa fa-star text-danger",
                      "fa fa-star text-danger",
                      "fa fa-star text-warning",
                      "fa fa-star text-info",
                      "fa fa-star text-success",
                    ]}
                    onChange={onChangeRating}
                  />
                  <Form noValidate validated={validated} onSubmit={sendComment} className="mt-3">
                    <Form.Row>
                      <Form.Group as={Col} md="4">
                        <Form.Control required type="text" name="name" placeholder="Họ tên" onChange={onChange} value={comment.name} />
                        <Form.Control.Feedback type="invalid">Vui lòng nhập tên</Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group as={Col} md="4">
                        <Form.Control required type="text" name="phone" placeholder="Số điện thoại" onChange={onChange} value={comment.phone} />
                        <Form.Control.Feedback type="invalid">Vui lòng nhập số điện thoại</Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group as={Col} md="4">
                        <Form.Control required type="email" name="email" placeholder="Email" onChange={onChange} value={comment.email} />
                        <Form.Control.Feedback type="invalid">Vui lòng nhập email</Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group as={Col} md="12">
                        <Form.Control required type="text" name="content" placeholder="Lời nhắn" onChange={onChange} value={comment.content} />
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
          {listProductRelate &&
            listProductRelate.map((item, key) => {
              return (
                <div className="col-lg-3 col-md-4 col-6 mb-4 mb-4" key={key}>
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
                        <h5 className="mt-3">1{formatNumber(item.price)}đ</h5>
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
};
export default Product;
