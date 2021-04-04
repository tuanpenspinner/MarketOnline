import { Button } from "antd";
import UploadImage from "components/common/UploadImage";
import React, { useRef, useState } from "react";
import { Col, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { createProductAction } from "../../../state/actions/productActions";
import ReactQuill, { Quill } from "react-quill";
import ImageResize from "quill-image-resize-module";
import uploadService from "utils/apis/services/UploadService";

Quill.register("modules/imageResize", ImageResize);

const ProductForm = ({ onCloseForm, ...rest }) => {
  const category = useSelector((state) => state?.category);
  const dispatch = useDispatch();
  const reactQuillRef = useRef(null);
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

  const imageHandler = (data) => {
    console.log(data);
    // console.log("work");
    // const input = document.createElement("input");
    // input.setAttribute("type", "file");
    // if (input.type === "file") {
    //   input.setAttribute("accept", "image/*");
    //   input.click();

    //   input.onchange = async () => {
    //     const file = input.files[0];
    //     const formData = new FormData();
    //     formData.append("img", file);
    //     const range = reactQuillRef.current.getEditor().getSelection(true);
    //     reactQuillRef.current.getEditor().insertEmbed(range.index, "image", `${window.location.origin}/assets/image/loading.gif`);
    //     reactQuillRef.current.getEditor().setSelection(range.index + 1);
    //     const res = await uploadService.uploadImage(formData);
    //     reactQuillRef.current.getEditor().deleteText(range.index, 1);
    //     reactQuillRef.current.getEditor().insertEmbed(range.index, "image", res.data.url);
    //   };
    // }
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
                <Form.Control.Feedback type="invalid">Yêu cầu nhập mã sản phẩm</Form.Control.Feedback>
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
                <Form.Control.Feedback type="invalid">Yêu cầu nhập mã sản phẩm</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} xl="4" className="px-3 d-flex align-items-center">
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
                <Form.Control.Feedback type="invalid">Yêu cầu nhập mã sản phẩm</Form.Control.Feedback>
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
                  // onChange={(html) => {
                  //   setFormValue({
                  //     ...formValue,
                  //     description: html,
                  //   });
                  // }}
                  ref={reactQuillRef}
                  modules={{
                    toolbar: {
                      container: [
                        [{ header: [1, 2, false] }],
                        ["bold", "italic", "underline", "strike", "blockquote"],
                        [{ list: "ordered" }, { list: "bullet" }, { indent: "-1" }, { indent: "+1" }],
                        ["link", "image"],
                        ["clean"],
                      ],
                      handlers: {
                        image: imageHandler,
                      },
                    },
                    imageResize: {},
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
