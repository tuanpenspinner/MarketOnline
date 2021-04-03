import { Button } from "antd";
import UploadImage from "components/common/UploadImage";
import React, { useState } from "react";
import { Col, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { createProductAction } from "../../../state/actions/productActions";
import { ImageResize } from "quill-image-resize-module";
import ReactQuill, { Quill } from "react-quill";
Quill.register("modules/imageResize", ImageResize);
const ProductForm = ({ onCloseForm, ...rest }) => {
  const category = useSelector((state) => state?.category);
  const dispatch = useDispatch();

  const [formValue, setFormValue] = useState({
    code: "",
    price: "",
    name: "",
    description: "",
    categoryId: "",
    image: "",
  });

  // const handleChangeEditor = (data) => {
  //   setFormValue({ ...formValue, description: data });
  // };

  const handleSubmitCreateProduct = (e) => {
    e.preventDefault();
    console.log(formValue);
    dispatch(createProductAction({ payload: { ...formValue } }));
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
        <div>
          <i className="fas fa-arrow-left mr-3" onClick={onCloseForm}></i>
          <h5>Thêm sản phẩm</h5>
        </div>
        <hr />
        <div className="mt-4">
          <Form noValidate onSubmit={handleSubmitCreateProduct}>
            <Form.Row>
              <Form.Group as={Col} xl="4" className="px-3">
                <Form.Label>Mã sản phẩm</Form.Label>
                <Form.Control
                  name="code"
                  value={formValue.code}
                  type="text"
                  onChange={handleIpChange}
                  placeholder="Mã sản phẩm"
                  required
                  autoComplete="off"
                />
                <Form.Control.Feedback type="invalid">
                  Yêu cầu nhập mã sản phẩm
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} xl="4" className="px-3">
                <Form.Label>Tên sản phẩm</Form.Label>
                <Form.Control
                  name="name"
                  value={formValue.name}
                  type="text"
                  onChange={handleIpChange}
                  placeholder="Tên sản phẩm"
                  required
                  autoComplete="off"
                />
                <Form.Control.Feedback type="invalid">
                  Yêu cầu nhập mã sản phẩm
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group
                as={Col}
                xl="4"
                className="px-3 d-flex align-items-center"
              >
                <Form.Label style={{ flex: "50%" }}>Ảnh sản phẩm</Form.Label>
                <UploadImage onChange={handleUpload} value={formValue.img} />
              </Form.Group>
              <Form.Group as={Col} xl="6" className="px-3">
                <Form.Label>Giá sản phẩm</Form.Label>
                <Form.Control
                  name="price"
                  value={formValue.price}
                  type="text"
                  onChange={handleIpChange}
                  placeholder="Giá của sản phầm"
                  required
                  autoComplete="off"
                />
                <Form.Control.Feedback type="invalid">
                  Yêu cầu nhập mã sản phẩm
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} xl="6" className="px-3">
                <Form.Label>Danh mục</Form.Label>
                <Form.Control
                  name="categoryId"
                  onChange={handleIpChange}
                  as="select"
                  value={formValue.categoryId}
                  autoComplete="off"
                >
                  {category?.data?.list?.map((item) => (
                    <option value={item._id} key={item._id}>
                      {item.name}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>
              <Form.Group as={Col} xl="12" className="px-3">
                <Form.Label>Chi tiết sản phẩm</Form.Label>
                <ReactQuill
                  modules={{
                    toolbar: [
                      ["bold", "italic", "underline", "strike"], // toggled buttons
                      ["blockquote", "code-block"],
                      ["link", "image"],

                      [{ header: 1 }, { header: 2 }], // custom button values
                      [{ list: "ordered" }, { list: "bullet" }],
                      [{ script: "sub" }, { script: "super" }], // superscript/subscript
                      [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
                      [{ direction: "rtl" }], // text direction
                      [{ size: ["small", false, "large", "huge"] }], // custom dropdown
                      [{ header: [1, 2, 3, 4, 5, 6, false] }],

                      [{ color: [] }, { background: [] }], // dropdown with defaults from theme
                      [{ font: [] }],
                      [{ align: [] }],

                      ["clean"],
                    ],
                  }}
                  formats={[
                    "header",
                    "bold",
                    "italic",
                    "underline",
                    "strike",
                    "blockquote",
                    "list",
                    "bullet",
                    "indent",
                    "link",
                    "image",
                  ]}
                />
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

export default ProductForm;
