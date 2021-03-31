import React, { useState } from "react";
import { Col, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import TextEditor from "./TextEditor";
import { createCategoryAction } from "../../../state/actions/categoryActions";

const ProductForm = (props) => {
  const category = useSelector((state) => state?.category);
  const dispatch = useDispatch();
  console.log(category);
  const [formValue, setFormValue] = useState({
    code: "",
    price: "",
    name: "",
    description: "",
    categoryId: "",
  });

  const handleChangeEditor = (data) => {
    setFormValue({ ...formValue, description: data });
  };

  const handleSubmitCreateProduct = (e) => {
    e.preventDefault();
    console.log(formValue);
    dispatch(createCategoryAction(formValue));
  };

  const handleIpChange = (e) => {
    const { name, value } = e.target;
    setFormValue({
      ...formValue,
      [name]: value,
    });
  };

  return (
    <div className="card min-height-100vh">
      <div className="card-body">
        <div>
          <i
            className="fas fa-arrow-left mr-3"
            onClick={() => console.log("ple")}
          ></i>
          <h5>sản phẩm</h5>
        </div>
        <div className="mt-4">
          <Form noValidate onSubmit={handleSubmitCreateProduct}>
            <Form.Row>
              <Form.Group as={Col} xl="4">
                <Form.Label>Mã sản phẩm</Form.Label>
                <Form.Control
                  name="code"
                  value={formValue.code}
                  type="text"
                  onChange={handleIpChange}
                  placeholder="Mã sản phẩm"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Yêu cầu nhập mã sản phẩm
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} xl="4">
                <Form.Label>Tên sản phẩm</Form.Label>
                <Form.Control
                  name="name"
                  value={formValue.name}
                  type="text"
                  onChange={handleIpChange}
                  placeholder="Tên sản phẩm"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Yêu cầu nhập mã sản phẩm
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} xl="4">
                <Form.Label>Giá sản phẩm</Form.Label>
                <Form.Control
                  name="price"
                  value={formValue.price}
                  type="text"
                  onChange={handleIpChange}
                  placeholder="Giá của sản phầm"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Yêu cầu nhập mã sản phẩm
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Danh mục</Form.Label>
                <Form.Control
                  name="categoryId"
                  onChange={handleIpChange}
                  as="select"
                  value={formValue.categoryId}
                >
                  {category?.data?.list?.map((item) => (
                    <option value={item._id} key={item._id}>
                      {item.name}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>
            </Form.Row>
            <span>Chi tiết sản phẩm</span>
            <TextEditor
              value={formValue.description}
              onChange={handleChangeEditor}
            />
            <div>
              <button className="btn btn-primary">TẠO</button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ProductForm;
