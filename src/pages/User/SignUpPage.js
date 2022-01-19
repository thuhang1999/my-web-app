import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";
import BottomNavigator from "src/components/commons/BottomNavigator";
import OrderGroupButton from "src/components/commons/OrderGroupButton";

export default class SignUpPage extends Component {
  render() {
    return (
      <div className="sign-up">
        <OrderGroupButton />
        {this.renderMainContent()}
        <BottomNavigator />
      </div>
    );
  }

  renderMainContent() {
    return (
      <>
        <div className="h1">
          <h1>Tạo tài khoản</h1>
        </div>
        <Form className="form">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="text" placeholder="Nhập họ tên" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="text" placeholder="Nhập số điện thoại" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Nhập mật khẩu" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Nhập mật khẩu" />
          </Form.Group>
          <div className="submit-g-btn">
            <Button variant="success" type="submit" className="submit-btn">
              Đăng ký
            </Button>
            <Button variant="success" type="submit" className="submit-btn">
              Đăng nhập
            </Button>
          </div>
        </Form>
      </>
    );
  }
}
