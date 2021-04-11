import { Descriptions, Modal } from "antd";
import React from "react";

function OrderDetail({ dataContact, isModalVisible, handleCancel }) {
  return (
    <Modal
      width="60%"
      style={{ top: 10 }}
      title={<h4 className="m-0">Thông tin chi tiết</h4>}
      visible={isModalVisible}
      onCancel={handleCancel}
      footer={false}
    >
      <Descriptions title="Thông tin khách hàng" layout="vertical">
        <Descriptions.Item labelStyle={{ fontWeight: 600 }} label="Tên khách hàng">
          {dataContact?.name}
        </Descriptions.Item>
        <Descriptions.Item labelStyle={{ fontWeight: 600 }} label="Email">
          {dataContact?.email}
        </Descriptions.Item>
        <Descriptions.Item labelStyle={{ fontWeight: 600 }} label="Số điện thoại">
          {dataContact?.phone}
        </Descriptions.Item>
      </Descriptions>
      <Descriptions title="Nội dung">
        <Descriptions.Item label="">{dataContact?.content}</Descriptions.Item>
      </Descriptions>
    </Modal>
  );
}

export default OrderDetail;
