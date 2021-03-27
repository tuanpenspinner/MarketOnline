import React, { Component } from "react";

export default class ProductSearch extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-body d-flex">
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Tiêu đề" />
          </div>

          <div>
            <button className="btn btn-custom ml-2">Tìm kiếm</button>
          </div>
        </div>
      </div>
    );
  }
}
