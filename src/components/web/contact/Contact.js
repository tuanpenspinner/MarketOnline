import React, { useState } from "react";
import { Form, Col } from "react-bootstrap";
import Swal from "sweetalert2";
import { sendContact } from "../../../state/actions/webActions";
import { useDispatch } from "react-redux";

const Contact = () => {
  const [contact, setContact] = useState({ name: "", email: "", phone: "", address: "", content: "" });
  const [validated, setValidated] = useState(false);
  const dispatch = useDispatch();

  const sendContactSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity()) {
      const payload = {
        ...contact
      };
      dispatch(
        sendContact(payload, (status) => {
          if (status) {
            resetForm();
            Swal.fire({
              icon: "success",
              title: "Gửi liện hệ thành công",
            });
          } else {
            Swal.fire({
              icon: "error",
              title: "Thất bại",
            });
          }
        })
      );
    }
    setValidated(true);
  }
  const resetForm = () => {
    setContact({ content: "", email: "", name: "", phone: "", content: "" });
    setValidated(false);
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setContact({ ...contact, [name]: value })
  }
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
          <Form noValidate validated={validated} onSubmit={sendContactSubmit} className="mt-3">
            <Form.Row>
              <Form.Group as={Col} md="6">
                <Form.Control
                  required
                  type="text"
                  name="name"
                  pattern="^(?!\s*$).+"
                  placeholder="Họ tên"
                  onChange={onChange}
                  value={contact.name}
                />
                <Form.Control.Feedback type="invalid">Vui lòng nhập tên</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="6">
                <Form.Control
                  required
                  type="text"
                  name="phone"
                  pattern="(84|0[3|5|7|8|9])+([0-9]{8})\b"
                  placeholder="Số điện thoại"
                  onChange={onChange}
                  value={contact.phone}
                />
                <Form.Control.Feedback type="invalid">Số điện thoại không đúng định dạng</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="6">
                <Form.Control
                  required
                  name="email"
                  pattern="^[\w]{1,}[\w.+-]{0,}@[\w-]{2,}([.][a-zA-Z]{2,3}|[.][\w-]{2,3}[.][a-zA-Z]{2,3}|[.][\w-]{2,3}[.][a-zA-Z]{2,3}[.][a-zA-Z]{2,3})$"
                  placeholder="Email"
                  onChange={onChange}
                  value={contact.email}
                />
                <Form.Control.Feedback type="invalid">Email không đúng định dạng</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="6">
                <Form.Control
                  required
                  name="address"
                  pattern="^(?!\s*$).+"
                  placeholder="Địa chỉ"
                  onChange={onChange}
                  value={contact.address}
                />
                <Form.Control.Feedback type="invalid">Địa chỉ không đúng định dạng</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="12">
                <Form.Control
                  required
                  type="text"
                  name="content"
                  pattern="^(?!\s*$).+"
                  placeholder="Lời nhắn"
                  onChange={onChange}
                  value={contact.content}
                />
                <Form.Control.Feedback type="invalid">Vui lòng nhập lời nhắn</Form.Control.Feedback>
              </Form.Group>
              <div className="text-center w-100">
                <button className="btn btn-custom " type="submit">
                  Liên hệ
                </button>
              </div>
            </Form.Row>
          </Form>
        </div>
      </div>
    </div>
  );
}
export default Contact;
