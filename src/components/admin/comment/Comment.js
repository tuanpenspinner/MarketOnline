import React, { useEffect, useState } from "react";
import CommentTable from "./CommentTable";
import CommentForm from "./CommentForm";
import CommentSearch from "./CommentSearch";
import { Modal } from "react-bootstrap";
import { Modal as ModalAntd, notification } from "antd";
import { getCommentAction, deleteCommentAction, updateActiveCommentAction } from "../../../state/actions/commentActions";
import { getProductAction } from "../../../state/actions/productActions";
import { getBlogAction } from "../../../state/actions/blogActions";

import { useDispatch, useSelector } from "react-redux";

const Category = () => {
  const [isCreated, setCreated] = useState(false);
  const [isUpdated, setUpdated] = useState(false);
  const [values, setValues] = useState({
    keyword: "",
    blogId: "",
    productId: "",
  });
  const [dataCategory, setDataCategory] = useState({});
  const [payload, setPayload] = useState({
    payload: {
      filter: {
        isBlog: false,
      },
      paging: {
        offset: 0,
        limit: 10,
      },
    },
  });

  const dispatch = useDispatch();
  const comment = useSelector((state) => state?.comment);
  const products = useSelector((state) => state?.product?.data?.list);
  const blogs = useSelector((state) => state?.blog?.data?.list);

  const handleSearch = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleOpenForm = () => {
    setCreated(true);
  };

  const handleCloseForm = () => {
    setCreated(false);
    setUpdated(false);
    setDataCategory({});
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setPayload({
      ...payload,
      payload: {
        ...payload.payload,
        filter: {
          ...payload.payload.filter,
          ...values,
        },
        paging: {
          ...payload.payload.paging,
          offset: 0,
        },
      },
    });
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

  const handleChangeActive = (data) => {
    dispatch(updateActiveCommentAction({ id: data._id }));
  };

  const handleEdit = (data) => {
    setDataCategory(data);
    setCreated(true);
    setUpdated(true);
  };

  const handleDelete = (data) => {
    ModalAntd.warning({
      title: "Bạn có chắc muốn xoá",
      content: "some messages...some messages...",
      onOk: () => {
        dispatch(deleteCommentAction({ id: data._id }));
      },
    });
  };

  const handleTabsChange = (key) => {
    setPayload({
      ...payload,
      payload: {
        ...payload.payload,
        filter: {
          ...payload.payload.filter,
          isBlog: key === "1" ? false : true,
        },
      },
    });
  };

  useEffect(() => {
    dispatch(getCommentAction(payload));
  }, [payload, dispatch]);

  useEffect(() => {
    const pl = {
      payload: {
        filter: {},
        paging: {},
      },
    };
    dispatch(getBlogAction(pl));
    dispatch(getProductAction(pl));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const { deleted, active } = comment;
    if (deleted.httpCode || active.httpCode) {
      if (deleted.httpCode === 200 || active.httpCode === 200) {
        handleCloseForm();
        dispatch(getCommentAction(payload));
        notification.success({
          placement: "topRight",
          message: deleted.httpCode ? "Xoá danh mục thành công" : "Thay đổi trạng thái thành công",
        });
      }
    }
  }, [comment, dispatch, payload]);

  return (
    <div>
      <CommentSearch
        isBlog={payload.payload.filter.isBlog}
        productData={products}
        blogData={blogs}
        onSearch={handleSearch}
        values={values}
        onSearchSubmit={handleSearchSubmit}
      />
      <CommentTable
        comment={comment}
        onOpenForm={handleOpenForm}
        paging={payload.payload.paging}
        onChangeTable={handleChangeTable}
        onChangeActive={handleChangeActive}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onTabsChange={handleTabsChange}
      />
      <Modal show={isCreated} onHide={handleCloseForm}>
        <CommentForm isUpdated={isUpdated} dataCategory={dataCategory} onCloseForm={handleCloseForm} />
      </Modal>
    </div>
  );
};

export default Category;
