import React, { Component } from "react";

export default class Login extends Component {
  onSubmit = () => {};

  render() {
    return (
      <div className="wrapper-login">
        <div className="container-login">
          <div className="col-left">
            <div className="login-text">
              <h2>Logo</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                eget eros dapibus, ultricies tellus vitae, consectetur tortor.
                Etiam rutrum placerat
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
                  <input
                    className="btn"
                    type="button"
                    defaultValue="Đăng nhập"
                    onClick={this.onSubmit}
                  />
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
