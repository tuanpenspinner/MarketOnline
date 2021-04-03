import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductForm from "./ProductForm";
import ProductSearch from "./ProductSearch";
import ProductTable from "./ProductTable";
import { getProductAction } from "../../../state/actions/productActions";
import { getCategoryAction } from "../../../state/actions/categoryActions";
import { notification } from "antd";

function Product(props) {
  const [isOpenForm, setIsOpenForm] = useState(true);
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  const created = useSelector((state) => state.product.created);

  console.log("created", created);

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
    setPayload({
      ...payload,
      payload: {
        ...payload.payload,
        filter: {
          ...payload.payload.filter,
          keyword: e.target.value,
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
  const handleCloseForm = () => {
    setIsOpenForm(false);
    dispatch(getProductAction(payload));
  };

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (created.httpCode) {
      if (created.httpCode === 200) {
        handleCloseForm();
        notification.success({
          placement: "topRight",
          message: "Tạo sản phẩm thành công",
          duration: 2000,
        });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [created.httpCode, dispatch, payload]);

  return (
    <div>
      {isOpenForm ? (
        <ProductForm onCloseForm={handleCloseForm} />
      ) : (
        <>
          <ProductSearch onSearch={handleSearch} />
          <ProductTable product={product} onOpenForm={handleOpenForm} />
        </>
      )}
    </div>
  );
}

export default Product;
