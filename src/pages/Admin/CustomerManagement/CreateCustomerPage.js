import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";
import Api from "src/apis";
import { withRouter } from "src/utils/commons/withRouter";

class CreateCustomerPage extends Component {
  constructor(props) {
    super(props);
    this.username = "";
    this.phone_number = "";
    this.password = "";
    this.password2 = "";
    this.address = "";
    this.is_admin = false;
    this.fraud = false;
  }

  render() {
    return (
      <div className="manager-detail-page">
        <h1>Thêm khách hàng</h1>
        <div>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Họ tên khách hàng</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nhập họ tên khách hàng"
                onChange={this.onChangeUserName}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Số điện thoại khách hàng</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nhập số điện thoại khách hàng"
                onChange={this.onChangePhoneNumber}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Mật khẩu</Form.Label>
              <Form.Control
                type="password"
                placeholder="Nhập mật khẩu khách hàng"
                onChange={this.onChangePassword}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Xác nhận mật khẩu</Form.Label>
              <Form.Control
                type="password"
                placeholder="Nhập lại mật khẩu khách hàng"
                onChange={this.onChangeConfirmPassword}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Địa chỉ khách hàng</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nhập địa chỉ khách hàng"
                onChange={this.onChangeAddress}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Gian lận</Form.Label>
              <Form.Check type="checkbox" onChange={this.onChangeFraud} />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Cấp quyền Admin</Form.Label>
              <Form.Check type="checkbox" onChange={this.onChangeAdmin} />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              onClick={this.onClickSubmit}
            >
              Thêm
            </Button>
          </Form>
        </div>
      </div>
    );
  }

  onClickSubmit = (e) => {
    e.preventDefault();

    Api.register({
      username: this.username,
      phone_number: this.phone_number,
      password: this.password,
      address: this.address,
      is_admin: this.is_admin,
      fraud: this.fraud,
    })
      .then((res) => {
        if (res.data.success) {
          alert("Thêm khách hàng thành công");
          this.props.navigate("/admin/users");
        } else {
          alert(`Thêm khách hàng thất bại. Lỗi ${res.data.message}`);
        }
      })
      .catch((err) => {
        alert("Đã xảy ra lỗi.");
      });
  };

  onChangeUserName = (e) => {
    this.username = e.target.value;
  };

  onChangePassword = (e) => {
    this.password = e.target.value;
  };

  onChangePassword2 = (e) => {
    this.password2 = e.target.value;
  };

  onChangePhoneNumber = (e) => {
    this.phone_number = e.target.value;
  };

  onChangeAddress = (e) => {
    this.address = e.target.value;
  };

  onChangeAdmin = (e) => {
    this.is_admin = e.target.checked;
  };

  onChangeFraud = (e) => {
    this.fraud = e.target.checked;
  };
}

export default withRouter(CreateCustomerPage);
