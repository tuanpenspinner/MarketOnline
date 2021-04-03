import { Table, Tooltip } from "antd";
import React from "react";

function ProductTable({ onOpenForm, product }) {
  const columns = [
    {
      title: "Tên hàng hoá",
      dataIndex: "name",
      key: "name",
      width: 200,
    },
    {
      title: "Giá",
      dataIndex: "price",
      key: "price",
      render: (text) => (
        <p className="m-0">
          {new Intl.NumberFormat("vi-VN", {
            style: "currency",
            currency: "VND",
          }).format(text)}
        </p>
      ),
    },
    {
      title: "Hình ảnh",
      dataIndex: "image",
      key: "image",
      render: (text) => <img className="img-thumbnail" src={text} alt="" />,
    },
    {
      title: "Mô tả",
      dataIndex: "description",
      key: "description",
      ellipsis: {
        showTitle: true,
      },
      render: (description) => (
        <Tooltip placement="topRight" title={description}>
          {description}
        </Tooltip>
      ),
    },
  ];

  return (
    <div className="card mt-5">
      <div className="card-body">
        <div className="d-flex align-items-center justify-content-between py-3">
          <h5>Danh sách sản phẩm</h5>
          <button className="btn btn-custom" onClick={onOpenForm}>
            Thêm sản phẩm
          </button>
        </div>
        <Table
          bordered
          loading={product?.loading}
          dataSource={
            product?.data?.list.map((item) => ({ ...item, key: item._id })) ||
            []
          }
          size="small"
          columns={columns}
          tableLayout="fixed"
          scroll={{
            x: 900,
          }}
        />
      </div>
    </div>
  );
}

export default ProductTable;
