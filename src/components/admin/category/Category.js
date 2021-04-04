import React, { useEffect, useState } from "react";
import CategoryTable from "./CategoryTable";
import CategoryForm from "./CategoryForm";
import SearchForm from "./CategorySearch";
import { Modal } from "react-bootstrap";
import { Modal as ModalAntd, notification } from "antd";
import { getCategoryAction, deleteCategoryAction, updateActiveCategoryAction } from "../../../state/actions/categoryActions";
import { useDispatch, useSelector } from "react-redux";

const Category = () => {
  const [isCreated, setCreated] = useState(false);
  const [isUpdated, setUpdated] = useState(false);
  const [keyword, setKeyword] = useState("");
  const [dataCategory, setDataCategory] = useState({});
  const [payload, setPayload] = useState({
    payload: {
      filter: {},
      paging: {
        offset: 0,
        limit: 10,
      },
    },
  });

  const dispatch = useDispatch();
  const category = useSelector((state) => state?.category);

  const handleSearch = (e) => {
    setKeyword(e.target.value);
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
          keyword,
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
    dispatch(updateActiveCategoryAction({ id: data._id }));
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
        dispatch(deleteCategoryAction({ id: data._id }));
      },
    });
  };

  useEffect(() => {
    dispatch(getCategoryAction(payload));
  }, [payload, dispatch]);

  useEffect(() => {
    const { created, updated, deleted, active } = category;
    console.log({ created, updated, deleted });
    if (created.httpCode || updated.httpCode || deleted.httpCode || active.httpCode) {
      if (created.httpCode === 200 || updated.httpCode === 200 || deleted.httpCode === 200 || active.httpCode === 200) {
        handleCloseForm();
        dispatch(getCategoryAction(payload));
        notification.success({
          placement: "topRight",
          message: updated.httpCode
            ? "Cập nhật danh mục thành công !"
            : deleted.httpCode
            ? "Xoá danh mục thành công"
            : active.httpCode
            ? "Thay đổi trạng thái thành công"
            : "Tạo danh mục thành công !",
        });
      }
    }
  }, [payload, dispatch, category]);

  return (
    <div>
      <SearchForm onSearch={handleSearch} value={keyword} onSearchSubmit={handleSearchSubmit} />
      <CategoryTable
        category={category}
        onOpenForm={handleOpenForm}
        paging={payload.payload.paging}
        onChangeTable={handleChangeTable}
        onChangeActive={handleChangeActive}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
      <Modal show={isCreated} onHide={handleCloseForm}>
        <CategoryForm isUpdated={isUpdated} dataCategory={dataCategory} onCloseForm={handleCloseForm} />
      </Modal>
    </div>
  );
};

export default Category;
