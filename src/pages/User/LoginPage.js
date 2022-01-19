import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";
import BottomNavigator from "src/components/commons/BottomNavigator";
import OrderGroupButton from "src/components/commons/OrderGroupButton";

export default class LoginPage extends Component {
  render() {
    return (
      <div className="login">
        <div className="h1">
          <h1>Đăng nhập</h1>
        </div>
        <OrderGroupButton />
        {this.renderMainContent()}
        <BottomNavigator />
      </div>
    );
  }

  renderMainContent() {
    return (
      <>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="text" placeholder="Nhập số điện thoại" />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Nhập mật khẩu" />
          </Form.Group>
        </Form>
        <Button className="btn">Đăng nhập</Button>

        <a href="/user/sign-up">Đăng ký</a>

        <a href="/user/forgot-password">Quên mật khẩu</a>
        <br></br>
      </>
    );
  }
}
