import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";

export default class SignUpPage extends Component {
  render() {
    return <div className="sign-up">
      <div className="h1">
        <h1>Tạo tài khoản</h1>
      </div>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Họ tên</Form.Label>
          <Form.Control type="text" placeholder="Nhập họ tên" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Số điện thoại</Form.Label>
          <Form.Control type="text" placeholder="Nhập số điện thoại" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Mật khẩu</Form.Label>
          <Form.Control type="password" placeholder="Nhập mật khẩu" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Nhập lại mật khẩu</Form.Label>
          <Form.Control type="password" placeholder="Nhập mật khẩu" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Đăng ký
        </Button>
      </Form>

    </div>;
  }
}
