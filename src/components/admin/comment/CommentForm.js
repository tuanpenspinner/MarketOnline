/* eslint-disable react-hooks/exhaustive-deps */
import UploadImage from "components/common/UploadImage";
import CloseIcon from "layouts/assets/icons/CloseIcon";
import React, { useMemo, useState } from "react";
import { Card, Col, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { createCategoryAction, updateCategoryAction } from "state/actions/categoryActions";

function CommentForm({ isUpdated, dataCategory, onCloseForm, ...rest }) {
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    code: "",
    name: "",
    image: "",
  });

  useMemo(() => {
    if (isUpdated) {
      setValues({
        ...values,
        ...dataCategory,
      });
    }
  }, [isUpdated]);

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpload = (url) => {
    setValues({
      ...values,
      image: url,
    });
  };

  const handleSubmitCreateCategory = (e) => {
    e.preventDefault();
    if (isUpdated) {
      dispatch(updateCategoryAction({ payload: { ...values }, id: dataCategory._id }));
    } else {
      dispatch(createCategoryAction({ payload: { ...values } }));
    }
  };

  return (
    <Card>
      <Card.Body>
        <div className="d-flex align-items-center justify-content-between">
          <h5 className="m-0">{`${isUpdated ? "Cập nhật" : "Tạo"}`} danh mục</h5>
          <CloseIcon onClick={onCloseForm} />
        </div>
        <hr />
        <Form onSubmit={handleSubmitCreateCategory}>
          <Form.Row>
            <Form.Group as={Col} sm="9" className="pr-3">
              <Form.Group controlId="code">
                <Form.Label>Mã danh mục</Form.Label>
                <Form.Control disabled={isUpdated} name="code" value={values.code} onChange={handleChange} autoComplete="off" />
              </Form.Group>
              <Form.Group controlId="name">
                <Form.Label>Tên danh mục</Form.Label>
                <Form.Control name="name" value={values.name} onChange={handleChange} autoComplete="off" />
              </Form.Group>
            </Form.Group>
            <Form.Group as={Col} sm="3" className="align-items-center">
              <Form.Label className="mb-3">Ảnh danh mục</Form.Label>
              <UploadImage onChange={handleUpload} value={values.image} />
            </Form.Group>
          </Form.Row>
          <div className="btn-group d-flex align-items-center justify-content-end">
            <button className="btn btn-custom w-100" type="submit">
              Lưu
            </button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default CommentForm;
