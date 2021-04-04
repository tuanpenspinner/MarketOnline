import { Divider, Modal } from "antd";
import dayjs from "dayjs";
import React from "react";

function BlogDetail({ dataBlog, isModalVisible, handleAccept, handleCancel }) {
  return (
    <Modal
      width="90%"
      style={{ top: 10 }}
      title={<h4 className="m-0">Chi tiết bài viết</h4>}
      visible={isModalVisible}
      onOk={handleAccept}
      onCancel={handleCancel}
      footer={false}
    >
      <h3>{dataBlog.title}</h3>
      <div className="row align-items-center">
        <div className="col-3">
          <img src={dataBlog.image} className="img-thumbnails w-50" alt="" />
        </div>
        <div className="col-9">
          <p>
            <i>Lượt xem: </i>
            {dataBlog.count}
          </p>
          <p>
            <strong>Ngày viết: </strong> {dayjs(dataBlog.createdAt).format("DD/MM/YYYY")}
          </p>
        </div>
      </div>
      <Divider />
      <div
        className="ck-content ck-editor__editable"
        dangerouslySetInnerHTML={{
          __html: dataBlog.content,
        }}
      />
    </Modal>
  );
}

export default BlogDetail;
