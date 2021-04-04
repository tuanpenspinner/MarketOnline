import { Divider, Modal, Rate } from "antd";
import dayjs from "dayjs";
import React from "react";

function ProductDetail({ dataProduct, isModalVisible, handleAccept, handleCancel }) {
  return (
    <Modal
      width="90%"
      style={{ top: 10 }}
      title={<h4 className="m-0">Chi tiết sản phẩm</h4>}
      visible={isModalVisible}
      onOk={handleAccept}
      onCancel={handleCancel}
      footer={false}
    >
      <div className="d-flex align-items-center  pb-3">
        <div className="w-50">
          <img className="img-thumbnail w-75" src={dataProduct.image} alt="" />
        </div>

        <div className="w-50">
          <h4 className="border-bottom pb-2">{dataProduct.name}</h4>
          <Rate className="mb-1" allowHalf count={5} value={dataProduct.rating} />
          <p>
            <strong>Mã Sản Phẩm:</strong> {dataProduct.code}
          </p>
          <p>
            <strong>Giá:</strong>
            {new Intl.NumberFormat("vi-VN", {
              style: "currency",
              currency: "VND",
            }).format(dataProduct.price)}
          </p>
          <p>
            <strong>Số lượt xem: </strong> {dataProduct.count} lượt
          </p>
          <p>
            <strong>Ngày tạo: </strong> {dayjs(dataProduct.createdAt).format("DD/MM/YYYY")}
          </p>
        </div>
      </div>
      <Divider />
      <div
        className="ck-content ck-editor__editable"
        dangerouslySetInnerHTML={{
          __html: dataProduct.description,
        }}
      />
    </Modal>
  );
}

export default ProductDetail;
