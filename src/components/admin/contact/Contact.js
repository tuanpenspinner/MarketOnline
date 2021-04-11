import { Modal, notification } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getContactAction, deleteContactAction } from "../../../state/actions/contactActions";
import ContactDetail from "./ContactDetail";
import ContactSearch from "./ContactSearch";
import ContactTable from "./ContactTable";

function Blog(props) {
  const [keyword, setKeyword] = useState("");
  const [dataContact, setDataContact] = useState({});
  const [isVisibleDetail, setIsVisibleDetail] = useState(false);

  const dispatch = useDispatch();
  const contact = useSelector((state) => state.contact);

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

  const handleCancel = () => {
    setIsVisibleDetail(false);
  };

  const handleShowDetail = (data) => {
    setDataContact(data);
    setIsVisibleDetail(true);
  };

  const handleDelete = (data) => {
    Modal.warning({
      title: "Bạn có chắc muốn xoá",
      content: "some messages...some messages...",
      onOk: () => {
        dispatch(deleteContactAction({ id: data._id }));
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

  useEffect(() => {
    if (contact.deleted.httpCode) {
      if (contact.deleted.httpCode === 200) {
        setDataContact({});
        dispatch(getContactAction(payload));
        notification.success({
          placement: "topRight",
          message: "Xoá sản phẩm thành công",
        });
      }
    }
  }, [contact.deleted.httpCode, dispatch, payload]);

  useEffect(() => {
    dispatch(getContactAction(payload));
  }, [dispatch, payload]);

  return (
    <div>
      <ContactSearch onSearchSubmit={handleSearchSubmit} values={keyword} onSearch={handleSearch} />
      <ContactTable
        contact={contact}
        paging={payload.payload.paging}
        onShowDetail={handleShowDetail}
        onDelete={handleDelete}
        onChangeTable={handleChangeTable}
      />
      <ContactDetail dataContact={dataContact} isModalVisible={isVisibleDetail} handleCancel={handleCancel} />
    </div>
  );
}

export default Blog;
