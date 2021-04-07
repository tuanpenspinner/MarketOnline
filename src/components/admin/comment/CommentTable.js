import { CheckOutlined, CloseOutlined, DeleteOutlined } from "@ant-design/icons";
import { Space, Switch, Tabs, Tooltip } from "antd";
import TableCommon from "components/common/TableCommon";
import React from "react";
import CommentItem from "./CommentItem";

function CommentTable({ comment, paging, onOpenForm, onEdit, onDelete, onChangeActive, onChangeTable, onTabsChange }) {
  const columns = [
    {
      title: "Bình luận",
      dataIndex: "name",
      key: "name",
      render: (text, row) => <CommentItem author={text} content={row.content} date={row.updatedAt} />,
    },
    {
      title: "Trạng thái",
      dataIndex: "isActive",
      key: "isActive",
      align: "center",
      render: (text, row) => (
        <Switch
          loading={comment?.active?.loading}
          onClick={() => onChangeActive(row)}
          checkedChildren={<CheckOutlined />}
          unCheckedChildren={<CloseOutlined />}
          checked={text}
        />
      ),
    },
    {
      title: "Thao tác",
      key: "action",
      align: "center",
      width: 200,
      render: (row) => (
        <Space size="large">
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
        <div className="d-flex align-items-center justify-content-between">
          <h5 className="m-0">Danh sách bình luận</h5>
          <button className="btn btn-custom" onClick={onOpenForm}>
            Thêm bình luận
          </button>
        </div>
        <hr className="mb-0" />
        <Tabs defaultActiveKey="1" onTabClick={onTabsChange}>
          <Tabs.TabPane tab="Sản phẩm" key="1">
            <TableCommon
              bigData={comment}
              columns={columns}
              onChangeTable={onChangeTable}
              paging={paging}
              totalTitle="bình luận"
            />
          </Tabs.TabPane>
          <Tabs.TabPane tab="Bài viết" key="2">
            <TableCommon
              bigData={comment}
              columns={columns}
              onChangeTable={onChangeTable}
              paging={paging}
              totalTitle="bình luận"
            />
          </Tabs.TabPane>
        </Tabs>
      </div>
    </div>
  );
}

export default CommentTable;
