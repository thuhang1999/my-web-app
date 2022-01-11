import React, { Component } from "react";

export default class SignUpPage extends Component {
  render() {
    return <div className="sign-up">
      <div className="h1">
        <h1>Đăng ký thành viên</h1>
      </div>
      <div className="infor">
        <label>Họ tên </label> <input type="text" /> <br></br>
        <label>Số điện thoại </label><input type="text" /> <br />
        <label>Mật khẩu </label><input type="password" /><br />
        <label>Nhập lại mật khẩu </label><input type="password" /><br />
      </div>
      <div className="button">
        <button>Đăng ký</button>
      </div>

    </div>;
  }
}
