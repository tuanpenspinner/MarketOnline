import React, { useState } from "react";
import CategoryTable from "./CategoryTable";
import CreateAndEditForm from "./CreateAndEditForm";
import SearchForm from "./SearchForm";
import { Modal } from "react-bootstrap";

const Category = () => {
  const [isCreated, setCreated] = useState(false);

  const handleToggleCreateAndEditForm = () => {
    setCreated(!isCreated);
  };

  return (
    <div>
      <SearchForm />
      <CategoryTable onToggleForm={handleToggleCreateAndEditForm} />
      <Modal show={isCreated} onHide={handleToggleCreateAndEditForm}>
        <CreateAndEditForm onToggleForm={handleToggleCreateAndEditForm} />
      </Modal>
    </div>
  );
};

export default Category;
