import { Descriptions, Divider, Modal } from "antd";
import React from "react";

function OrderDetail({ dataOrder, isModalVisible, handleAccept, handleCancel }) {
  return (
    <Modal
      width="70%"
      style={{ top: 10 }}
      title={<h4 className="m-0">Chi tiết đơn hàng</h4>}
      visible={isModalVisible}
      onCancel={handleCancel}
      footer={false}
    >
      <Descriptions title="Thông tin khách hàng">
        <Descriptions.Item labelStyle={{ fontWeight: 600 }} label="Tên khách hàng">
          {dataOrder.name}
        </Descriptions.Item>
        <Descriptions.Item labelStyle={{ fontWeight: 600 }} label="Email">
          {dataOrder.email}
        </Descriptions.Item>
        <Descriptions.Item labelStyle={{ fontWeight: 600 }} label="Số điện thoại">
          {dataOrder.phone}
        </Descriptions.Item>
      </Descriptions>
      <br />
      <Divider orientation="center">
        <strong>SẢN PHẨM ĐÃ MUA</strong>
      </Divider>
      {dataOrder?.orderDetail?.map((item) => (
        <Descriptions>
          <Descriptions.Item labelStyle={{ fontWeight: 600 }} label="Sản phẩm">
            {item.product.name}
          </Descriptions.Item>
          <Descriptions.Item labelStyle={{ fontWeight: 600 }} label="Số lượng">
            {item.amount}
          </Descriptions.Item>
          <Descriptions.Item labelStyle={{ fontWeight: 600 }} label="Đơn giá">
            {new Intl.NumberFormat("vi-VN", {
              style: "currency",
              currency: "VND",
            }).format(item.price)}
          </Descriptions.Item>
        </Descriptions>
      ))}
      <hr />
      <Descriptions>
        <Descriptions.Item labelStyle={{ fontWeight: 600 }} />
        <Descriptions.Item labelStyle={{ fontWeight: 600 }} label="Tổng số lượng"></Descriptions.Item>
        <Descriptions.Item labelStyle={{ fontWeight: 600 }} label="Tổng tiền">
          {new Intl.NumberFormat("vi-VN", {
            style: "currency",
            currency: "VND",
          }).format(dataOrder.total)}
        </Descriptions.Item>
      </Descriptions>
    </Modal>
  );
}

export default OrderDetail;
