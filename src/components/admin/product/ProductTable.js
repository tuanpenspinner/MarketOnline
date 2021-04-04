import { DeleteOutlined, ExclamationCircleOutlined, FormOutlined, CheckOutlined, CloseOutlined } from "@ant-design/icons";
import { Space, Switch, Table, Tooltip } from "antd";

import React from "react";

function ProductTable({
  product,
  paging,
  onOpenForm,
  onShowProductDetail,
  onEditProduct,
  onDeleteProduct,
  onChangeProductActive,
  onChangeTable,
  ...rest
}) {
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
      render: (text) => <img className="img-thumbnail w-50" src={text} alt="" />,
    },
    {
      title: "SP nổi bật",
      dataIndex: "isHighLight",
      key: "isHighLight",
      align: "center",
      render: (text, row) => {
        return (
          <Switch
            loading={product.highlight.loading}
            onClick={() => onChangeProductActive(row, true)}
            checkedChildren={<CheckOutlined />}
            unCheckedChildren={<CloseOutlined />}
            checked={text}
          />
        );
      },
    },
    {
      title: "Trạng thái",
      dataIndex: "isActive",
      key: "isActive",
      align: "center",
      render: (text, row) => {
        return (
          <Switch
            loading={product.active.loading}
            onClick={() => onChangeProductActive(row)}
            checkedChildren={<CheckOutlined />}
            unCheckedChildren={<CloseOutlined />}
            checked={text}
          />
        );
      },
    },
    {
      title: "Thao tác",
      key: "action",
      align: "center",
      width: 200,
      render: (row) => (
        <Space size="large">
          <Tooltip title="Chi tiết">
            <ExclamationCircleOutlined
              style={{ color: "#ffd32a", fontSize: 22, cursor: "pointer" }}
              onClick={() => onShowProductDetail(row)}
            />
          </Tooltip>
          <Tooltip title="Chỉnh sửa">
            <FormOutlined style={{ color: "#00d8d6", fontSize: 22, cursor: "pointer" }} onClick={() => onEditProduct(row)} />
          </Tooltip>
          <Tooltip title="Xoá">
            <DeleteOutlined style={{ color: "#ff3f34", fontSize: 22, cursor: "pointer" }} onClick={() => onDeleteProduct(row)} />
          </Tooltip>
        </Space>
      ),
    },
  ];

  return (
    <div className="card">
      <div className="card-body">
        <div className="d-flex align-items-center justify-content-between py-3">
          <h5>Danh sách sản phẩm</h5>
          <button className="btn btn-custom" onClick={onOpenForm}>
            Thêm sản phẩm
          </button>
        </div>
        <Table
          loading={product?.loading}
          dataSource={product?.data?.list.map((item) => ({ ...item, key: item._id })) || []}
          size="small"
          columns={columns}
          tableLayout="fixed"
          scroll={{
            x: 900,
          }}
          onChange={onChangeTable}
          pagination={{
            position: "bottomRight",
            defaultCurrent: 1,
            current: paging.offset + 1,
            defaultPageSize: paging.limit,
            total: product.data.total,
            pageSizeOptions: [10, 20, 50],
            showTotal: (total, range) => `${range[0]}-${range[1]} của ${total} sản phẩm`,
            showSizeChanger: true,
            onChange: onChangeTable,
          }}
        />
      </div>
    </div>
  );
}

export default ProductTable;
