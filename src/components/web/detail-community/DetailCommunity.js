import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Spin, Space } from "antd";
import dayjs from "dayjs";
import { Form, Col } from "react-bootstrap";
import Swal from "sweetalert2";
import { getDetailCommunity, getListCommunity, sendProductComment } from "../../../state/actions/webActions";
import { Link, useParams } from "react-router-dom";

const DetailBlog = () => {
  const detailCommunityReducer = useSelector((state) => state.web.detailCommunity);
  const listNewCommunity = useSelector((state) => state.web.listCommunity);
  const detailCommunity = detailCommunityReducer?.length > 0 ? detailCommunityReducer[0] : "";
  const isLoading = useSelector((state) => state.web.isLoading);
  const [comment, setComment] = useState({ name: "", phone: "", email: "", content: "" });
  const [validated, setValidated] = useState(false);
  const dispatch = useDispatch();

  const { id } = useParams();
  useEffect(() => {
    dispatch(
      getListCommunity({
        filter: {},
        paging: {
          offset: 0,
          limit: 4,
        },
      })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    loadDetailBlog(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
  const onChange = (e) => {
    const { name, value } = e.target;
    setComment({ ...comment, [name]: value });
  };
  const loadDetailBlog = (id) => {
    const payload = {
      filter: {
        id: id,
      },
      paging: {
        offset: 0,
        limit: 10,
      },
    };
    dispatch(getDetailCommunity(payload));
  };
  const sendComment = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity()) {
      const payload = {
        ...comment,
        blogId: id,
      };
      dispatch(
        sendProductComment(payload, (status) => {
          if (status) {
            loadDetailBlog(id);
            resetForm();
            Swal.fire({
              icon: "success",
              title: "Thêm bình luận thành công",
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
  const resetForm = () => {
    setComment({ content: "", email: "", name: "", phone: "" });
    setValidated(false);
  };
  const renderComment = () => {
    if (detailCommunity?.comments?.length > 0) {
      const comments = detailCommunity?.comments;
      return comments.map((item, index) => {
        return (
          <div key={index} className="w-100">
            <div className="font-weight-bold">{item.name}</div>
            <div className="d-flex">
              <div>{item.content}</div>
            </div>
            <small className="text-muted"> {dayjs(item.createdAt).format("DD/MM/YYYY")}</small>
            <hr />
          </div>
        );
      });
    }
    return <p>Chưa có bình luận</p>;
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
    <div className="blog">
      <div className="row pt-4">
        <div className="col-lg-3 pl-4">
          <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Tìm kiếm" />
            <div className="input-group-append">
              <button className="btn btn-custom" type="submit">
                <i className="fas fa-search"></i>
              </button>
            </div>
          </div>
          <div className="list-blog ">
            <h5 className="font-weight-bold">Bài viết mới</h5>
            {listNewCommunity.map((item, key) => {
              return (
                <Link to={`/detail-community/${item._id}`} key={key}>
                  <div className="blog-item">
                    <img src={item.image} alt="" width="40" height="40" className="mr-3 " />
                    <div className="content-blog">{item.title}</div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        <div className="col-lg-9 mt-3 detail-blog ">
          <div className="title-detail-blog">{detailCommunity?.title}</div>
          <div className="time-blog">{dayjs(detailCommunity?.createdAt).format("DD/MM/YYYY")}</div>
          <hr />
          <div dangerouslySetInnerHTML={{ __html: detailCommunity?.content }} className="ck-content ck-editor__editable"></div>
          <hr />
          <div className="comment-blog">
            <h5>Bình luận</h5>
            <Form noValidate validated={validated} onSubmit={sendComment} className="mt-3">
              <Form.Row>
                <Form.Group as={Col} md="12">
                  <Form.Control
                    required
                    type="text"
                    name="content"
                    pattern="^(?!\s*$).+"
                    placeholder="Nội dung"
                    onChange={onChange}
                    value={comment.content}
                  />
                  <Form.Control.Feedback type="invalid">Vui lòng nhập nội dung</Form.Control.Feedback>
                </Form.Group>
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

                <div className="text-center w-100">
                  <button className="btn btn-custom " type="submit">
                    Bình luận
                  </button>
                </div>
                <hr className="w-100" />
                {renderComment()}
              </Form.Row>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailBlog;
