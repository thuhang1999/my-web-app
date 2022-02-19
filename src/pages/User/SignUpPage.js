import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";
import Api from "src/apis";
import BottomNavigator from "src/components/commons/BottomNavigator";
import Navigator from "src/components/commons/Navigator";
import OrderGroupButton from "src/components/commons/OrderGroupButton";
import { withRouter } from "src/utils/commons/withRouter";

class SignUpPage extends Component {
  render() {
    return (
      <div className="sign-up">
        <Navigator />
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
            <Form.Control
              type="text"
              placeholder="Nhập họ tên"
              onChange={this.onChangeUserName}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="text"
              placeholder="Nhập số điện thoại"
              onChange={this.onChangePhone}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Nhập mật khẩu"
              onChange={this.onChangePassword}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Nhập lại mật khẩu"
              onChange={this.onChangePassword2}
            />
          </Form.Group>
          <div className="submit-g-btn">
            <Button
              variant="success"
              type="submit"
              className="submit-btn"
              onClick={this.onClickSignUp}
            >
              Đăng ký
            </Button>
            <Button
              variant="success"
              type="submit"
              className="submit-btn"
              onClick={this.onClickLogin}
            >
              Đăng nhập
            </Button>
          </div>
        </Form>
      </>
    );
  }

  onChangeUserName = (event) => {
    this.userName = event.target.value;
  };

  onChangePhone = (event) => {
    this.phone = event.target.value;
  };

  onChangePassword = (event) => {
    this.password = event.target.value;
  };

  onChangePassword2 = (event) => {
    this.password2 = event.target.value;
  };

  onClickSignUp = (event) => {
    event.preventDefault();
    if (this.password === this.password2) {
      Api.register({
        username: this.userName,
        phone_number: this.phone,
        password: this.password,
      })
        .then((res) => {
          console.log("{RNLog} TCL --> res:", res);
          if (res.data.status === 200) {
            alert("Đăng ký thành công");
            this.props.navigate("/user/login");
          } else {
            alert(res.data?.message);
          }
        })
        .catch((err) => {
          console.log("{RNLog} TCL --> err:", err);
        });
    } else {
      alert("Mật khẩu bạn nhập không khớp");
    }
  };

  onClickLogin = () => {
    this.props.navigate("/user/login");
  };
}

export default withRouter(SignUpPage);
