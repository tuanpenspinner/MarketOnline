import React from "react";
import { Card, Col, Form } from "react-bootstrap";

function CommentForm({ isBlog, productData, blogData, values, onSearch, onSearchSubmit, ...rest }) {
  return (
    <Card className="mb-3">
      <Card.Body>
        <h5 className="d-inline-block border-bottom mb-2 pb-2 pr-3">Tìm kiếm danh mục</h5>
        <Form onSubmit={onSearchSubmit} className="py-2">
          <Form.Row className="align-items-end">
            <Form.Group className="mb-0" as={Col} sm="3" controlId="keySearch">
              <Form.Control
                value={values.keyword}
                onChange={onSearch}
                name="keyword"
                placeholder="Nhập từ khoá tìm kiếm..."
                style={{ width: "100%" }}
              />
            </Form.Group>
            {isBlog ? (
              <Form.Group className="mb-0" as={Col} sm="3" controlId="keySearch">
                <Form.Control name="blogId" as="select" value={values.blogId} onChange={onSearch}>
                  <option value="">Chọn bài viết</option>
                  {blogData?.map((item) => (
                    <option key={item._id} value={item._id}>
                      {item?.title}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>
            ) : (
              <Form.Group className="mb-0" as={Col} sm="3" controlId="keySearch">
                <Form.Control name="productId" value={values.productId} onChange={onSearch} as="select">
                  <option value="">Chọn sản phẩm</option>
                  {productData?.map((item) => (
                    <option key={item._id} value={item._id}>
                      {item?.name}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>
            )}

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
