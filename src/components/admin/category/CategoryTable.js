import React from "react";
import { Card } from "react-bootstrap";

function CategoryTable({ onToggleForm, ...rest }) {
  return (
    <Card>
      <Card.Body>
        <div className="d-flex align-items-center justify-content-between">
          <h5 className="">Danh sách danh mục</h5>
          <button onClick={onToggleForm} className="btn btn-primary">
            Thêm danh mục
          </button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default CategoryTable;
