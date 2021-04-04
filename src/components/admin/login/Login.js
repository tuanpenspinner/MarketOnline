import React, { Component } from "react";
import { withRouter } from "react-router";

class Login extends Component {
  onSubmit = () => {
    this.props.history.push("/admin/product");
  };

  render() {
    return (
      <div className="wrapper-login">
        <div className="container-login">
          <div className="col-left">
            <div className="login-text">
              <img src="assets/image/logo-login.png" width="150" alt="logo"></img>
              <p>
                Chúng tôi luôn chào đón Khách hàng tại vườn Kadon, nơi bạn có thể đến tham quan trực tiếp hoặc trãi nghiệm đồng hành cùng vườn canh
                tác theo mô hình thuận tự nhiên.
              </p>
            </div>
          </div>
          <div className="col-right">
            <div className="login-form">
              <h2>Login</h2>
              <form>
                <p>
                  <input type="text" placeholder="Tên đăng nhập" required />
                </p>
                <p>
                  <input type="password" placeholder="Mật khẩu" required />
                </p>
                <p>
                  <input className="btn" type="button" defaultValue="Đăng nhập" onClick={this.onSubmit} />
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(Login);
