import { DeleteOutlined, ExclamationCircleOutlined } from "@ant-design/icons";
import { Space, Table, Tooltip } from "antd";
import React from "react";

function BlogTable({ contact, paging, onShowDetail, onDelete, onChangeTable }) {
  const columns = [
    {
      title: "Khách hàng",
      dataIndex: "name",
      key: "name",
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
          <h5>Danh sách thông tin khách hàng</h5>
        </div>
        <Table
          loading={contact?.loading}
          dataSource={contact?.data?.list.map((item) => ({ ...item, key: item._id })) || []}
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
            total: contact.data.total,
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

export default BlogTable;
