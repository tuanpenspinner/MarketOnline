import { Modal as ModalAntd, notification } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteOrderAction, getOrderAction, updateActiveOrderAction } from "../../../state/actions/orderActions";
import OrderDetail from "./OrderDetail";
import OrderSearch from "./OrderSearch";
import OrderTable from "./OrderTable";

const Category = () => {
  // const [isCreated, setCreated] = useState(false);
  // const [isUpdated, setUpdated] = useState(false);
  const [dataOrder, setDataOrder] = useState({});
  const [isDetail, setIsDetail] = useState(false);
  const [keyword, setKeyword] = useState("");
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
  const order = useSelector((state) => state?.order);

  const handleSearch = (e) => {
    setKeyword(e.target.value);
  };

  // const handleOpenForm = () => {
  //   setCreated(true);
  // };

  // const handleCloseForm = () => {
  //   setCreated(false);
  //   setUpdated(false);
  //   setDataCategory({});
  // };

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

  const handleChangeActive = (op, data) => {
    dispatch(
      updateActiveOrderAction({
        id: data._id,
        payload: {
          status: op,
        },
      })
    );
  };

  // const handleEdit = (data) => {
  //   setDataCategory(data);
  //   setCreated(true);
  //   setUpdated(true);
  // };

  const handleDelete = (data) => {
    ModalAntd.warning({
      title: "Bạn có chắc muốn xoá",
      content: "some messages...some messages...",
      onOk: () => {
        dispatch(deleteOrderAction({ id: data._id }));
      },
    });
  };

  const handleShowDetail = (data) => {
    setDataOrder(data);
    setIsDetail(true);
  };
  const handleCloseDetail = () => {
    setIsDetail(false);
  };

  useEffect(() => {
    dispatch(getOrderAction(payload));
  }, [payload, dispatch]);

  useEffect(() => {
    const { deleted, active } = order;
    if (deleted.httpCode || active.httpCode) {
      if (deleted.httpCode === 200 || active.httpCode === 200) {
        dispatch(getOrderAction(payload));
        notification.success({
          placement: "topRight",
          message: deleted.httpCode ? "Xoá đơn hàng thành công" : "Thay đổi trạng thái thành công",
        });
      } else {
        notification.error({
          placement: "topRight",
          message: deleted.httpCode ? deleted.error.message : active.error.message,
        });
      }
    }
  }, [payload, dispatch, order]);

  return (
    <div>
      <OrderSearch onSearch={handleSearch} value={keyword} onSearchSubmit={handleSearchSubmit} />
      <OrderTable
        order={order}
        paging={payload.payload.paging}
        onChangeTable={handleChangeTable}
        onChangeActive={handleChangeActive}
        onDelete={handleDelete}
        onShowDetail={handleShowDetail}
      />
      <OrderDetail isModalVisible={isDetail} dataOrder={dataOrder} handleCancel={handleCloseDetail} />
    </div>
  );
};

export default Category;
