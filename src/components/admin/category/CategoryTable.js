import { CheckOutlined, CloseOutlined, DeleteOutlined, FormOutlined } from "@ant-design/icons";
import { Space, Switch, Table, Tag, Tooltip } from "antd";
import React from "react";

function CategoryTable({ category, paging, onOpenForm, onShowDetail, onEdit, onDelete, onChangeActive, onChangeTable, ...rest }) {
  const columns = [
    {
      title: "Tên danh mục",
      dataIndex: "name",
      key: "name",
      width: 200,
    },
    {
      title: "Mã danh mục",
      dataIndex: "code",
      key: "code",
      render: (text) => <Tag color="cyan">{text}</Tag>,
    },
    {
      title: "Hình ảnh",
      dataIndex: "image",
      key: "image",
      render: (text) => <img className="img-thumbnail w-50" src={text} alt="" />,
    },
    {
      title: "Trạng thái",
      dataIndex: "isActive",
      key: "isActive",
      align: "center",
      render: (text, row) => {
        return (
          <Switch
            loading={category?.active?.loading}
            onClick={() => onChangeActive(row)}
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
          {/* <Tooltip title="Chi tiết">
            <ExclamationCircleOutlined
              style={{ color: "#ffd32a", fontSize: 22, cursor: "pointer" }}
              onClick={() => onShowDetail(row)}
            />
          </Tooltip> */}
          <Tooltip title="Chỉnh sửa">
            <FormOutlined style={{ color: "#00d8d6", fontSize: 22, cursor: "pointer" }} onClick={() => onEdit(row)} />
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
          <h5>Danh sách danh mục</h5>
          <button className="btn btn-custom" onClick={onOpenForm}>
            Thêm danh mục
          </button>
        </div>
        <Table
          loading={category?.loading}
          dataSource={category?.data?.list.map((item) => ({ ...item, key: item._id })) || []}
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
            total: category.data.total,
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

export default CategoryTable;
