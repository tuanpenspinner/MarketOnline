/* eslint-disable react-hooks/exhaustive-deps */
import { Modal, notification } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteBlogAction, getBlogAction, updateActiveBlogAction } from "../../../state/actions/blogActions";
import BlogDetail from "./BlogDetail";
import BlogForm from "./BlogForm";
import BlogSearch from "./BlogSearch";
import BlogTable from "./BlogTable";

function Blog(props) {
  const [isOpenForm, setIsOpenForm] = useState(false);
  const [isUpdated, setIsUpdated] = useState(false);
  const [keyword, setKeyword] = useState("");
  const [dataBlog, setDataBlog] = useState({});
  const [isVisibleDetail, setIsVisibleDetail] = useState(false);

  const dispatch = useDispatch();
  const blog = useSelector((state) => state.blog);

  const [payload, setPayload] = useState({
    payload: {
      filter: {},
      paging: {
        offset: 0,
        limit: 10,
      },
    },
  });

  const handleSearch = (e) => {
    setKeyword(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setPayload({
      ...payload,
      payload: {
        ...payload.payload,
        filter: {
          ...payload.payload.filter,
          keyword,
        },
        paging: {
          ...payload.payload.paging,
          offset: 0,
        },
      },
    });
  };

  const handleOpenForm = () => {
    setIsOpenForm(true);
  };
  const handleCancel = () => {
    setIsVisibleDetail(false);
  };

  const handleCloseForm = () => {
    setIsOpenForm(false);
    dispatch(getBlogAction(payload));
    setIsUpdated(false);
    setDataBlog({});
  };

  const handleShowDetail = (data) => {
    setDataBlog(data);
    setIsVisibleDetail(true);
  };

  const handleEdit = (data) => {
    handleOpenForm();
    setDataBlog(data);
    setIsUpdated(true);
  };

  const handleDelete = (data) => {
    Modal.warning({
      title: "Bạn có chắc muốn xoá",
      content: "some messages...some messages...",
      onOk: () => {
        dispatch(deleteBlogAction({ id: data._id }));
      },
    });
  };

  const handleChangeActive = (data) => {
    dispatch(updateActiveBlogAction({ id: data._id }));
  };

  const handleChangeTable = ({ pageSize, current }) => {
    setPayload({
      ...payload,
      payload: {
        ...payload.payload,
        paging: {
          ...payload.payload.paging,
          limit: pageSize,
          offset: current - 1,
        },
      },
    });
  };

  useEffect(() => {
    const { created, updated, deleted, active } = blog;
    if (created.httpCode || updated.httpCode || deleted.httpCode || active.httpCode) {
      if (created.httpCode === 200 || updated.httpCode === 200 || deleted.httpCode === 200 || active.httpCode === 200) {
        handleCloseForm();
        setDataBlog({});
        setIsUpdated(false);
        notification.success({
          placement: "topRight",
          message: updated.httpCode
            ? "Cập nhật sản phẩm thành công !"
            : deleted.httpCode
            ? "Xoá sản phẩm thành công "
            : active.httpCode
            ? "Thay đổi trạng thái thành công"
            : "Tạo sản phẩm thành công !",
        });
      }
    }
  }, [blog]);

  useEffect(() => {
    dispatch(getBlogAction(payload));
  }, [dispatch, payload]);

  return (
    <div>
      {isOpenForm ? (
        <BlogForm isUpdated={isUpdated} dataBlog={dataBlog} onCloseForm={handleCloseForm} />
      ) : (
        <>
          <BlogSearch onSearchSubmit={handleSearchSubmit} values={keyword} onSearch={handleSearch} />
          <BlogTable
            blog={blog}
            paging={payload.payload.paging}
            onOpenForm={handleOpenForm}
            onShowDetail={handleShowDetail}
            onEdit={handleEdit}
            onDelete={handleDelete}
            onChangeActive={handleChangeActive}
            onChangeTable={handleChangeTable}
          />
          <BlogDetail dataBlog={dataBlog} isModalVisible={isVisibleDetail} handleCancel={handleCancel} />
        </>
      )}
    </div>
  );
}

export default Blog;
