import { Table } from "antd";
import React from "react";

function TableCommon({ bigData, paging, columns, totalTitle, onChangeTable }) {
  return (
    <Table
      loading={bigData?.loading}
      dataSource={bigData?.data?.list.map((item) => ({ ...item, key: item._id })) || []}
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
        total: bigData.data.total,
        pageSizeOptions: [10, 20, 50],
        showTotal: (total, range) => `${range[0]}-${range[1]} của ${total} ${totalTitle}`,
        showSizeChanger: true,
        onChange: onChangeTable,
      }}
    />
  );
}

export default TableCommon;
