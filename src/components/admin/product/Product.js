/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductForm from "./ProductForm";
import ProductSearch from "./ProductSearch";
import ProductTable from "./ProductTable";
import {
  getProductAction,
  deleteProductAction,
  updateActiveProductAction,
  updateHighLightProductAction,
} from "../../../state/actions/productActions";
import { getCategoryAction } from "../../../state/actions/categoryActions";
import { Modal, notification } from "antd";
import ProductDetail from "./ProductDetail";

function Product(props) {
  const [isOpenForm, setIsOpenForm] = useState(false);
  const [isUpdated, setIsUpdated] = useState(false);
  const [keyword, setKeyword] = useState("");
  const [dataProduct, setDataProduct] = useState({});
  const [isVisibleDetail, setIsVisibleDetail] = useState(false);

  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  const created = useSelector((state) => state.product.created);
  const updated = useSelector((state) => state.product.updated);
  const deleted = useSelector((state) => state.product.deleted);
  const active = useSelector((state) => state.product.active);
  const highlight = useSelector((state) => state.product.highlight);

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
    dispatch(getProductAction(payload));
  };

  const handleShowProductDetail = (data) => {
    setDataProduct(data);
    setIsVisibleDetail(true);
  };

  const handleEditProduct = (data) => {
    handleOpenForm();
    setDataProduct(data);
    setIsUpdated(true);
  };

  const handleDeleteProduct = (data) => {
    Modal.warning({
      title: "Bạn có chắc muốn xoá",
      content: "some messages...some messages...",
      onOk: () => {
        dispatch(deleteProductAction({ id: data._id }));
      },
    });
  };

  const handleChangeProductActive = (data, isHighLight = false) => {
    if (isHighLight) {
      dispatch(updateHighLightProductAction({ id: data._id }));
    } else {
      dispatch(updateActiveProductAction({ id: data._id }));
    }
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
    if (active.httpCode || highlight.httpCode) {
      if (active.httpCode === 200 || highlight.httpCode === 200) {
        handleCloseForm();
        notification.success({
          placement: "topRight",
          message: "Cập nhật trạng thái thành công",
        });
      }
    }
  }, [active.httpCode, highlight.httpCode]);

  useEffect(() => {
    dispatch(getProductAction(payload));
  }, [dispatch, payload]);

  useEffect(() => {
    dispatch(
      getCategoryAction({
        ...payload,
        paging: {
          ...payload.paging,
          limit: 100,
        },
      })
    );
  }, []);

  useEffect(() => {
    if (created.httpCode || updated.httpCode || deleted.httpCode) {
      if (created.httpCode === 200 || updated.httpCode === 200 || deleted.httpCode === 200) {
        handleCloseForm();
        setDataProduct({});
        setIsUpdated(false);
        notification.success({
          placement: "topRight",
          message: updated.httpCode
            ? "Cập nhật sản phẩm thành công !"
            : deleted.httpCode
            ? "Xoá sản phẩm thành công "
            : "Tạo sản phẩm thành công !",
        });
      }
    }
  }, [created.httpCode, updated.httpCode, deleted.httpCode]);

  return (
    <div>
      {isOpenForm ? (
        <ProductForm isUpdated={isUpdated} dataProduct={dataProduct} onCloseForm={handleCloseForm} />
      ) : (
        <>
          <ProductSearch onSearchSubmit={handleSearchSubmit} values={keyword} onSearch={handleSearch} />
          <ProductTable
            product={product}
            paging={payload.payload.paging}
            onOpenForm={handleOpenForm}
            onShowProductDetail={handleShowProductDetail}
            onEditProduct={handleEditProduct}
            onDeleteProduct={handleDeleteProduct}
            onChangeProductActive={handleChangeProductActive}
            onChangeTable={handleChangeTable}
          />
          <ProductDetail dataProduct={dataProduct} isModalVisible={isVisibleDetail} handleCancel={handleCancel} />
        </>
      )}
    </div>
  );
}

export default Product;
