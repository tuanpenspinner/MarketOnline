import React, { Component } from "react";
import DataTable from "react-data-table-component";
import Swal from "sweetalert2";

class ProductDataTable extends Component {
  onDelete = (id, name) => {
    Swal.fire({
      title: "Bạn có muốn xóa sản phẩm?",
      text: name,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Xóa",
      cancelButtonText: "Hủy bỏ",
    }).then((result) => {
      if (result.value) {
        Swal.fire({
          title: "Xóa thành công",
          icon: "success",
          button: "OK!",
          confirmButtonText: "Ok",
        });
      }
    });
  };
  onChangeStatus = (id, name) => {
    Swal.fire({
      title: "Bạn có muốn thay đổi trạng thái?",
      text: name,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Xóa",
      cancelButtonText: "Hủy bỏ",
    }).then((result) => {
      if (result.value) {
        Swal.fire({
          title: "Xóa thành công",
          icon: "success",
          button: "OK!",
          confirmButtonText: "Ok",
        });
      }
    });
  };
  render() {
    const { toggleForm } = this.props;
    const listData = [
      {
        id: 1,
        name: "Dâu tây",
        nameCategory: "Hoa quả",
        img: "https://hatgiongdalat.com/asset/upload/image/hat-giong-dau-tay-do_(2)1.jpg?v=20190410",
      },
      {
        id: 2,
        name: "Dâu tây",
        nameCategory: "Hoa quả",
        img: "https://hatgiongdalat.com/asset/upload/image/hat-giong-dau-tay-do_(2)1.jpg?v=20190410",
      },
      {
        id: 3,
        name: "Dâu tây",
        nameCategory: "Hoa quả",
        img: "https://hatgiongdalat.com/asset/upload/image/hat-giong-dau-tay-do_(2)1.jpg?v=20190410",
      },
      {
        id: 4,
        name: "Dâu tây",
        nameCategory: "Hoa quả",
        img: "https://hatgiongdalat.com/asset/upload/image/hat-giong-dau-tay-do_(2)1.jpg?v=20190410",
      },
    ];
    const columns = [
      {
        name: "STT",
        cell: (data, index) => {
          return index + 1;
        },
        width: "50px",
      },
      {
        name: "Tên sản phẩm",
        selector: "name",
        sortable: true,
        minWidth: "200px",
      },
      {
        name: "Tên danh mục",
        selector: "nameCategory",
        width: "200px",
      },
      {
        name: "Hình ảnh",
        cell: (data) => {
          return (
            <div>
              <img src={data.img} alt="logo" width="50"></img>
            </div>
          );
        },
        sortable: true,
        width: "120px",
      },
      {
        name: "Trạng thái",
        selector: "name",
        cell: (data) => {
          return (
            <div className="form-check mt-1">
              <label className="form-check-label form-check-toggle">
                <input className="form-check-input" type="checkbox" onChange={() => this.onChangeStatus(data.id, data.name)} />
                <span></span>
              </label>
            </div>
          );
        },
        center: true,
        width: "100px",
      },
      {
        name: "Thao tác",
        cell: (data) => {
          return (
            <div className="w-100 d-flex justify-content-around">
              <img className="cursor-pointer" src="assets/image/icon-info.png" alt="" onClick={() => toggleForm(3)}></img>
              <img className="cursor-pointer" src="assets/image/icon-edit.png" alt="" onClick={() => toggleForm(2)}></img>
              <img className="cursor-pointer" src="assets/image/icon-delete.png" alt="" onClick={() => this.onDelete(data.id, data.name)}></img>
            </div>
          );
        },
        width: "150px",
        center: true,
      },
    ];
    const optionsTextDataTable = {
      rowsPerPageText: "Số dòng trên trang:",
      rangeSeparatorText: "của",
      noRowsPerPage: false,
      selectAllRowsItem: false,
      selectAllRowsItemText: "All",
    };
    return (
      <div className="card mt-5">
        <div className="card-body">
          <div>
            <div className="header-data-table">
              <h5>Danh sách sản phẩm</h5>
              <button className="btn btn-custom" onClick={() => toggleForm(1)}>
                Thêm sản phẩm
              </button>
            </div>
            <DataTable
              data={listData}
              columns={columns}
              noHeader
              noDataComponent="Chưa có dữ liệu"
              paginationComponentOptions={optionsTextDataTable}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default ProductDataTable;
