import { DeleteOutlined, ExclamationCircleOutlined } from "@ant-design/icons";
import { Select, Space, Table, Tooltip } from "antd";
import React from "react";

const STATUS_OPTION = [
  {
    label: "Chờ xử lý",
    value: "PENDING",
  },
  {
    label: "Đã nhận",
    value: "RECEIVED",
  },
  {
    label: "Đã hoàn thành",
    value: "DONE",
  },
  {
    label: "Đã huỷ",
    value: "CANCEL",
  },
];

function CategoryTable({ order, paging, onOpenForm, onShowDetail, onEdit, onDelete, onChangeActive, onChangeTable, ...rest }) {
  const columns = [
    {
      title: "Khách hàng",
      dataIndex: "name",
      key: "name",
      width: 200,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Điện thoại",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Tổng tiền",
      dataIndex: "total",
      key: "total",
      render: (text) => (
        <span>
          {new Intl.NumberFormat("vi-VN", {
            style: "currency",
            currency: "VND",
          }).format(text)}
        </span>
      ),
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
      align: "center",
      render: (text, row) => (
        <Select
          disabled={text?.includes("CANCEL")}
          value={text}
          style={{ width: "100%" }}
          onChange={(op) => onChangeActive(op, row)}
        >
          {STATUS_OPTION.map((item) => (
            <Select.Option key={item.value} value={item.value}>
              {item.label}
            </Select.Option>
          ))}
        </Select>
      ),
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
              onClick={() => onShowDetail(row)}
            />
          </Tooltip>
          <Tooltip title="Xoá">
            <DeleteOutlined style={{ color: "#ff3f34", fontSize: 22, cursor: "pointer" }} onClick={() => onDelete(row)} />
          </Tooltip>
        </Space>
      ),
    },
  ];

  return (
    <div className="card">
      <div className="card-body">
        <div className="d-flex align-items-center justify-content-between py-3">
          <h5>Danh sách đơn hàng</h5>
          {/* <button className="btn btn-custom" onClick={onOpenForm}>
            Thêm danh mục
          </button> */}
        </div>
        <Table
          loading={order?.loading}
          dataSource={order?.data?.list.map((item) => ({ ...item, key: item._id })) || []}
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
            total: order.data.total,
            pageSizeOptions: [10, 20, 50],
            showTotal: (total, range) => `${range[0]}-${range[1]} của ${total} sản phẩm`,
            showSizeChanger: true,
            onChange: onChangeTable,
            hideOnSinglePage: true,
          }}
        />
      </div>
    </div>
  );
}

export default CategoryTable;
