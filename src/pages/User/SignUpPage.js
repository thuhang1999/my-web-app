import React, { Component } from "react";

export default class SignUpPage extends Component {
  render() {
    return (
      <div id="CustomerLoginForm" class="form-vertical">
        <form
          accept-charset="UTF-8"
          action="/account/login"
          id="customer_login"
          method="post"
        >
          <h1>Đăng nhập</h1>

          <label for="CustomerEmail" class="hidden-label">
            Email
          </label>
          <input
            type="email"
            name="customer[email]"
            id="CustomerEmail"
            class="input-full"
            placeholder="Email"
            autocorrect="off"
            autocapitalize="off"
            autofocus=""
          />

          <label for="CustomerPassword" class="hidden-label">
            Mật khẩu
          </label>
          <input
            type="password"
            value=""
            name="customer[password]"
            id="CustomerPassword"
            class="input-full"
            placeholder="Mật khẩu"
          />
          <p>
            <input type="submit" class="btn btn--full" value="Đăng nhập" />
          </p>
          <p>
            <a href="/">Trở về</a>
          </p>
          <p>
            <a href="/account/register" id="customer_register_link">
              Đăng kí
            </a>
          </p>
          <p>
            <a href="#recover" id="RecoverPassword">
              Quên mật khẩu?
            </a>
          </p>
        </form>
      </div>
    );
  }
}
