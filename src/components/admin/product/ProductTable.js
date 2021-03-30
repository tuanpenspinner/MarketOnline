import React, { useMemo } from "react";
import DataTable from "react-data-table-component";

function ProductTable({ onOpenForm, product }) {
  const cols = useMemo(
    () => [
      {
        name: "Tên hàng hoá",
        selector: "name",
      },
      {
        name: "Giá",
        selector: "price",
      },
      {
        name: "Hình ảnh",
        selector: "image",
        cell: (data) => <img src={data.img} alt="img product" />,
      },
      {
        name: "Mô tả",
        selector: "description",
      },
    ],
    []
  );

  return (
    <div className="card mt-5">
      <div className="card-body">
        <div>
          <div className="header-data-table">
            <h5>Danh sách sản phẩm</h5>
            <button className="btn btn-custom" onClick={onOpenForm}>
              Thêm sản phẩm
            </button>
          </div>
          <DataTable
            data={product?.data?.list || []}
            columns={cols}
            noHeader
            noDataComponent="Chưa có dữ liệu"
            paginationComponentOptions={{
              rowsPerPageText: "Số dòng trên trang:",
              rangeSeparatorText: "của",
              noRowsPerPage: false,
              selectAllRowsItem: false,
              selectAllRowsItemText: "All",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default ProductTable;
