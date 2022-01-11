import React, { Component } from "react";

export default class LoginPage extends Component {
  render() {
    return <div className="login">
      <div className="h1">
        <h1>Đăng nhập</h1>
      </div>
      <div class="infor">
        <label>Số điện thoại </label> <input type="text" /> <br />
        <label>Mật khẩu </label> <input type="password" /> <br />
      </div>
      <div className="button">
        <button>Đăng nhập</button>
      </div>
      <a href="/user/sign-up">Đăng ký</a><br />
      <a href="/user/quen-mk">Quên mật khẩu</a>
    </div>
  }
}
