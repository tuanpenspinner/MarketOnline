import React from "react";
import { Card, Form } from "react-bootstrap";

function SearchForm(props) {
  return (
    <Card className="mb-3">
      <Card.Body>
        <Form>
          <Form.Group controlId="keySearch">
            <Form.Label>Tìm kiếm</Form.Label>
            <Form.Control style={{ width: "40%" }} />
          </Form.Group>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default SearchForm;
