import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductForm from "./ProductForm";
import ProductSearch from "./ProductSearch";
import ProductTable from "./ProductTable";
import { getProductAction } from "../../../state/actions/productActions";

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

  console.log(product);

  const handleOpenForm = () => {
    setIsOpenForm(true);
  };

  useEffect(() => {
    dispatch(getProductAction(payload));
  }, [dispatch, payload]);

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
