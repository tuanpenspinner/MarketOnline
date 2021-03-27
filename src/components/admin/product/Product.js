import React, { Component } from "react";
import ProductSearch from "./ProductSearch";
import ProductDataTable from "./ProductDatatable";
import ProductForm from "./ProductForm";

export default class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenForm: false,
      typeForm: 1,
    };
  }
  toggleForm = (typeForm) => {
    const { isOpenForm } = this.state;
    this.setState({
      isOpenForm: !isOpenForm,
      typeForm,
    });
  };
  render() {
    const { isOpenForm, typeForm } = this.state;
    if (isOpenForm) return <ProductForm toggleForm={this.toggleForm} typeForm={typeForm}></ProductForm>;
    return (
      <div>
        <ProductSearch></ProductSearch>
        <ProductDataTable toggleForm={this.toggleForm}></ProductDataTable>
      </div>
    );
  }
}
