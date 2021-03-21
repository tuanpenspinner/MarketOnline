import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
const AnyReactComponent = ({ text }) => <div>{text}</div>;
export default class Introduce extends Component {
  render() {
    return (
      <div className="box-contract">
        <div className="banner-contract">Liên hệ</div>
        <div className="row container bg-white m-auto">
          <div className="col-lg-6">
            <div style={{ height: "100vh", width: "100%" }}>
              <GoogleMapReact
                bootstrapURLKeys="dfd"
                defaultCenter={this.props.center}
                defaultZoom={this.props.zoom}
              >
                <AnyReactComponent lat={59.955413} lng={30.337844} />
              </GoogleMapReact>
            </div>
          </div>
          <div className="col-lg-6 contract-form mt-5">
            <div>
              <i className="fas fa-map-marked mr-3"></i> 227 Nguyễn Văn Cừ, Quận
              5, Tp HCM.
            </div>
            <div>
              <i className="fas fa-phone mr-3"></i> 0123456789
            </div>
            <div>
              <i className="fas fa-envelope-square mr-3"></i> email@gmail.com
            </div>

            <div div className="text-center mt-5 mb-5">
              <h5>Liên hệ với chúng tôi</h5>
            </div>
            <form>
              <div className="row">
                <div className="col-md-6">
                  <div className="md-form">
                    <input
                      type="text"
                      id="contact-name"
                      className="form-control"
                      placeHolder="Họ tên"
                    />
                    <label htmlFor="contact-name" className></label>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="md-form">
                    <input
                      type="text"
                      id="contact-email"
                      className="form-control"
                      placeHolder="Email"
                    />
                    <label htmlFor="contact-email" className></label>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="md-form">
                    <input
                      type="text"
                      id="contact-name"
                      className="form-control"
                      placeHolder="Số điện thoại"
                    />
                    <label htmlFor="contact-name" className></label>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="md-form">
                    <input
                      type="text"
                      id="contact-email"
                      className="form-control"
                      placeHolder="Địa chỉ"
                    />
                    <label htmlFor="contact-email" className></label>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <div className="md-form">
                    <textarea
                      type="text"
                      id="contact-message"
                      className="md-textarea form-control"
                      rows={3}
                      placeHolder="Lời nhắn"
                    />
                    <label htmlFor="contact-message"></label>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <button className="btn btn-custom w-50">Gửi ngay</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
