/* eslint-disable react-hooks/exhaustive-deps */
import { Button } from "antd";
import RichEditor from "components/common/RichEditor";
import UploadImage from "components/common/UploadImage";
import React, { useMemo, useState } from "react";
import { Col, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { createBlogAction, updateBlogAction } from "../../../state/actions/blogActions";

const BlogForm = ({ isUpdated, dataBlog, onCloseForm, ...rest }) => {
  const dispatch = useDispatch();
  const [formValue, setFormValue] = useState({
    title: "",
    image: "",
    content: "",
  });
  useMemo(() => {
    if (isUpdated) {
      setFormValue({
        ...formValue,
        ...dataBlog,
      });
    }
  }, [isUpdated]);

  const handleChangeEditor = (data) => {
    setFormValue({ ...formValue, content: data });
  };

  const handleSubmitCreateProduct = (e) => {
    e.preventDefault();
    if (isUpdated) {
      dispatch(updateBlogAction({ payload: { ...formValue }, id: dataBlog._id }));
    } else {
      dispatch(createBlogAction({ payload: { ...formValue } }));
    }
  };

  const handleIpChange = (e) => {
    const { name, value } = e.target;
    setFormValue({
      ...formValue,
      [name]: value,
    });
  };

  const handleUpload = (url) => {
    setFormValue({
      ...formValue,
      image: url,
    });
  };

  return (
    <div className="card">
      <div className="card-body">
        <div className="d-flex pt-2 align-items-center">
          <i className="fas fa-arrow-left mr-4" onClick={onCloseForm}></i>
          <h4 className="m-0">{`${isUpdated ? "Cập nhật" : "Thêm"}`} bài viết</h4>
        </div>
        <hr />
        <div className="mt-4">
          <Form noValidate onSubmit={handleSubmitCreateProduct}>
            <Form.Row>
              <Form.Group as={Col} xl="9" className="px-3">
                <Form.Label>Tiêu đề</Form.Label>
                <Form.Control
                  name="title"
                  value={formValue.title}
                  type="text"
                  onChange={handleIpChange}
                  placeholder="Mã sản phẩm"
                  required
                  autoComplete="off"
                />
                <Form.Control.Feedback type="invalid">Yêu cầu nhập mã sản phẩm</Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} xl="3" className="px-3 d-flex align-items-center">
                <Form.Label style={{ flex: "50%" }}>Ảnh</Form.Label>
                <UploadImage onChange={handleUpload} value={formValue.image} />
              </Form.Group>

              <Form.Group as={Col} xl="12" className="px-3">
                <Form.Label>Chi tiết sản phẩm</Form.Label>
                <RichEditor onEditorChange={handleChangeEditor} data={formValue.content} />
              </Form.Group>
            </Form.Row>

            <div className="px-3 float-right">
              <Button htmlType="submit" className="mr-3" type="primary">
                Lưu
              </Button>
              <Button danger onClick={onCloseForm}>
                Đóng
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default BlogForm;
