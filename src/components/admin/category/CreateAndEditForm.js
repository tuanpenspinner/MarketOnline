import UploadPreview from "components/common/UploadPreview";
import CloseIcon from "layouts/assets/icons/CloseIcon";
import React, { useState } from "react";
import { Button, Card, Col, Form } from "react-bootstrap";

function CreateAndEditForm({ onToggleForm, ...rest }) {
  const [values, setValues] = useState({
    code: "",
    name: "",
    image: "",
  });

  return (
    <Card>
      <Card.Body>
        <div className="d-flex align-items-center justify-content-between">
          <h5 className="">Tạo danh mục</h5>
          <CloseIcon onClick={onToggleForm} />
        </div>
        <hr />
        <Form>
          <Form.Group controlId="code">
            <Form.Label>Mã danh mục</Form.Label>
            <Form.Control autoComplete="off" />
          </Form.Group>

          <Form.Group controlId="name">
            <Form.Label>Tên danh mục</Form.Label>
            <Form.Control autoComplete="off" />
          </Form.Group>

          <Form.Group controlId="imgUpload">
            <UploadPreview />
          </Form.Group>

          <div className="btn-group d-flex align-items-center justify-content-end">
            <Button variant="primary text-right" type="submit">
              Tạo
            </Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default CreateAndEditForm;
