import React from "react";
import { Card, Col, Form } from "react-bootstrap";

function CommentForm({ value, onSearch, onSearchSubmit, ...rest }) {
  return (
    <Card className="mb-3">
      <Card.Body>
        <h5 className="d-inline-block border-bottom mb-2 pb-2 pr-3">Tìm kiếm danh mục</h5>
        <Form onSubmit={onSearchSubmit} className="py-2">
          <Form.Row className="align-items-end">
            <Form.Group className="mb-0" as={Col} sm="3" controlId="keySearch">
              <Form.Control value={value} onChange={onSearch} placeholder="Nhập từ khoá tìm kiếm..." style={{ width: "100%" }} />
            </Form.Group>
            <Form.Group className="mb-0" as={Col}>
              <button className="btn btn-custom">Tìm kiếm</button>
            </Form.Group>
          </Form.Row>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default CommentForm;
