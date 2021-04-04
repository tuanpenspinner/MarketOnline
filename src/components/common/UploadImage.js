import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { message, Upload } from "antd";
import React, { forwardRef, useState } from "react";
import uploadServices from "../../utils/apis/services/UploadService";

function UploadImage({ onChange, value }, ref) {
  const [loading, setLoading] = useState(false);

  const uploadHandler = async ({ file, onSuccess, onError }) => {
    try {
      const newData = new FormData();
      newData.append("img", file);
      const response = await uploadServices.uploadImage(newData);
      onSuccess(response.data, file);
    } catch (error) {
      onError(error);
    }
  };

  const beforeUpload = (file) => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      message.error("You can only upload JPG/PNG file!");
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error("Image must smaller than 2MB!");
    }
    return isJpgOrPng && isLt2M;
  };

  const handleChange = ({ file }) => {
    if (file.status === "uploading") {
      setLoading(true);
    }
    if (file.status === "done") {
      onChange(file?.response?.url);
      setLoading(false);
    }
  };

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  console.log(value);

  return (
    <Upload
      className="upload-container"
      name="img"
      listType="picture-card"
      showUploadList={false}
      multiple={false}
      customRequest={uploadHandler}
      beforeUpload={beforeUpload}
      onChange={handleChange}
      ref={ref}
    >
      {value ? <img src={value} alt="avatar" style={{ width: "100%" }} /> : uploadButton}
    </Upload>
  );
}

export default forwardRef(UploadImage);
