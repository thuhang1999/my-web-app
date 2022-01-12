import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";

export default class LoginPage extends Component {
  render() {
    return <div className="login">
      <div className="h1">
        <h1>Đăng nhập</h1>
      </div>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Số điện thoại</Form.Label>
          <Form.Control type="text" placeholder="Nhập số điện thoại" />
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Mật khẩu</Form.Label>
          <Form.Control type="password" placeholder="Nhập mật khẩu" />
        </Form.Group>

      </Form>
      <Button className="btn" >
        Đăng nhập
      </Button>

      <a href="/user/sign-up">Đăng ký</a>

      <a href="/user/quen-mk">Quên mật khẩu</a>

    </div>
  }
}
