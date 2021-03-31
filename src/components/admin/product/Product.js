import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductForm from "./ProductForm";
import ProductSearch from "./ProductSearch";
import ProductTable from "./ProductTable";
import { getProductAction } from "../../../state/actions/productActions";
import { getCategoryAction } from "../../../state/actions/categoryActions";

function Product(props) {
  const [isOpenForm, setIsOpenForm] = useState(false);
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  const [payload, setPayload] = useState({
    payload: {
      filter: {},
      paging: {
        offset: 0,
        limit: 10,
      },
    },
  });

  const handleOpenForm = () => {
    setIsOpenForm(true);
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

  return (
    <div>
      {isOpenForm ? (
        <ProductForm />
      ) : (
        <>
          <ProductSearch />
          <ProductTable product={product} onOpenForm={handleOpenForm} />
        </>
      )}
    </div>
  );
}

export default Product;
