import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";
import Api from "src/apis";
import BottomNavigator from "src/components/commons/BottomNavigator";
import Navigator from "src/components/commons/Navigator";
import OrderGroupButton from "src/components/commons/OrderGroupButton";
import { ACTION_TYPE } from "src/stores/AppStore";
import { withContext } from "src/utils/commons/withContext";
import { withRouter } from "src/utils/commons/withRouter";

class LoginPage extends Component {
  render() {
    return (
      <div className="login">
        <Navigator />
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
            <Form.Control
              type="text"
              placeholder="Nhập số điện thoại"
              onChange={this.onChangePhone}
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Nhập mật khẩu"
              onChange={this.onChangePassword}
            />
          </Form.Group>
        </Form>
        <Button className="btn" onClick={this.onSignIn}>
          Đăng nhập
        </Button>

        <a href="/user/sign-up">Đăng ký</a>

        <a href="/user/forgot-password">Quên mật khẩu</a>
        <br></br>
      </>
    );
  }

  onChangePhone = (event) => {
    this.phone = event.target.value;
  };

  onChangePassword = (event) => {
    this.password = event.target.value;
  };

  onSignIn = (event) => {
    event.preventDefault();
    Api.login(this.phone, this.password).then((res) => {
      if (res.data?.status === 200) {
        this.props.dispatch({
          type: ACTION_TYPE.SET_USER,
          payload: res.data?.data,
        });
        alert("Đăng nhập thành công");
        let user = res.data.data;
        if (user.is_admin) {
          this.props.navigate("/admin");
        } else {
          this.props.navigate("/");
        }
      } else {
        alert(res.data?.message);
      }
    });
  };
}

export default withContext(withRouter(LoginPage));
