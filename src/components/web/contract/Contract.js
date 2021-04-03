import React, { Component } from "react";

export default class Introduce extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 11,
  };
  render() {
    return (
      <div className="box-contract">
        <div className="banner-contract">
          <img src="assets/image/contract-banner.jpg" alt="" className="img-contract"></img>
          <div className="blur-banner-contract"></div>
          <div className="title-contract">
            Liên hệ <i className="fas fa-address-card"></i>
          </div>
        </div>
        <div className="row max-width-1300 m-auto">
          <div className="col-lg-6 mt-5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.282319902536!2d106.8007311145205!3d10.86611849226071!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175275bc75f790d%3A0xeff189fa708d0e16!2sSuoi%20Tien%20Theme%20Park!5e0!3m2!1sen!2s!4v1616595340981!5m2!1sen!2s"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="address"
              height="500px"
              width="100%"
            />
          </div>
          <div className="col-lg-6 contract-form mt-5">
            <div className="d-flex flex-colum">
              {/* <img src="assets/image/logo.png" width="150px" height="150px" alt="logo" ></img> */}
              <div>
                <div>
                  <div className="text-info font-weight-bold">&emsp;&emsp;&nbsp;Vườn Kadon</div>
                  <div>
                    <i className="fas fa-map-marked mr-3"></i>Thôn Krango 2 – Ka Đơn – Đơn Dương – Lâm Đồng (cạnh nhà thờ Ka Đơn)
                  </div>
                </div>
                <div className="mt-3">
                  <div className="text-info font-weight-bold">&emsp;&emsp;&nbsp;Của hàng kinh doanh</div>
                  <div>
                    <i className="fas fa-map-marked mr-3"></i>152 Hoa Đào, Phường 1, Quận Phú Nhuận, Thành Phố Hồ Chí Minh
                  </div>
                </div>
                <div className="mt-3">
                  <i className="fas fa-phone mr-3"></i> 0888651198
                </div>
                <div className="mt-3">
                  <i className="fas fa-envelope-square mr-3"></i> kadonfarm@gmail.com
                </div>
              </div>
            </div>

            <div div className="text-center mt-5 mb-5">
              <h3 className="font-weight-bold">Liên hệ với chúng tôi</h3>
            </div>
            <form>
              <div className="row">
                <div className="col-md-6">
                  <div className="md-form">
                    <input type="text" id="contact-name" className="form-control" placeholder="Họ tên" />
                    <label htmlFor="contact-name" className></label>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="md-form">
                    <input type="text" id="contact-email" className="form-control" placeholder="Email" />
                    <label htmlFor="contact-email" className></label>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="md-form">
                    <input type="text" id="contact-name" className="form-control" placeholder="Số điện thoại" />
                    <label htmlFor="contact-name" className></label>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="md-form">
                    <input type="text" id="contact-email" className="form-control" placeholder="Địa chỉ" />
                    <label htmlFor="contact-email" className></label>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <div className="md-form">
                    <textarea type="text" id="contact-message" className="md-textarea form-control" rows={3} placeholder="Lời nhắn" />
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
