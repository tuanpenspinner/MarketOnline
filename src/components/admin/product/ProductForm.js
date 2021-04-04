/* eslint-disable react-hooks/exhaustive-deps */
import { Button } from "antd";
import RichEditor from "components/common/RichEditor";
import UploadImage from "components/common/UploadImage";
import React, { useMemo, useState } from "react";
import { Col, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { createProductAction, updateProductAction } from "../../../state/actions/productActions";

const ProductForm = ({ isUpdated, dataProduct, onCloseForm, ...rest }) => {
  const category = useSelector((state) => state?.category);
  const dispatch = useDispatch();
  const [formValue, setFormValue] = useState({
    code: "",
    price: "",
    name: "",
    description: "",
    categoryId: category?.data?.list[0]._id,
    image: "",
    isHighLight: false,
  });
  useMemo(() => {
    if (isUpdated) {
      setFormValue({
        ...formValue,
        ...dataProduct,
      });
    }
  }, [isUpdated]);

  const handleChangeEditor = (data) => {
    setFormValue({ ...formValue, description: data });
  };

  const handleSubmitCreateProduct = (e) => {
    e.preventDefault();
    if (isUpdated) {
      dispatch(updateProductAction({ payload: { ...formValue }, id: dataProduct._id }));
    } else {
      dispatch(createProductAction({ payload: { ...formValue } }));
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
          <h4 className="m-0">{`${isUpdated ? "Cập nhật" : "Thêm"}`} sản phẩm</h4>
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
                <UploadImage onChange={handleUpload} value={formValue.image} />
              </Form.Group>
              <Form.Group as={Col} xl="4" className="px-3">
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
              <Form.Group as={Col} xl="4" className="px-3">
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
              <Form.Group as={Col} xl="4" className="px-3">
                <Form.Label>Sản phẩm nổi bật</Form.Label>
                <Form.Control name="isHighLight" onChange={handleIpChange} as="select" value={formValue.isHighLight}>
                  <option value={true}>Mở</option>
                  <option value={false}>Đóng</option>
                </Form.Control>
              </Form.Group>
              <Form.Group as={Col} xl="12" className="px-3">
                <Form.Label>Chi tiết sản phẩm</Form.Label>
                <RichEditor onEditorChange={handleChangeEditor} data={formValue.description} />
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
