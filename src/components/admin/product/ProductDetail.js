import { Modal } from "antd";
import React from "react";

function ProductDetail({ isModalVisible, handleAccept, handleCancel }) {
  return (
    <Modal title="Basic Modal" visible={isModalVisible} onOk={handleAccept} onCancel={handleCancel}>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Modal>
  );
}

export default ProductDetail;
