import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Api from "src/apis";
import { withParams } from "src/utils/commons/withParams";
import { withRouter } from "src/utils/commons/withRouter";

class CustomerManagementDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
  }

  componentDidMount() {
    let userId = this.props.eParams?.id;
    Api.getUserById(userId).then((res) => {
      console.log(
        `{RNLog} ~ file: CustomerManagementDetail.js ~ line 19 ~ CustomerManagementDetail ~ Api.getUserById ~ res`,
        res
      );
      this.setState({ user: res.data?.data });
    });
  }

  render() {
    const { user } = this.state;
    return (
      <div className="manager-detail-page">
        <h1>Chi tiết khách hàng</h1>
        {!!this.state.user && (
          <>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Tên khách hàng</Form.Label>
                <Form.Control
                  value={`${user?.username}`}
                  type="text"
                  placeholder="Tên khách hàng"
                  onChange={this.onChangeUserName}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Số điện thoại</Form.Label>
                <Form.Control
                  value={user?.phone_number}
                  type="text"
                  placeholder="Số điện thoại"
                  onChange={this.onChangePhoneNumber}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Địa chỉ</Form.Label>
                <Form.Control
                  value={user?.address}
                  type="text"
                  placeholder="Nhập địa chỉ của bạn"
                  onChange={this.onChangeAddress}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Nghi vấn gian lận ?</Form.Label>
                <Form.Check
                  type="checkbox"
                  checked={user?.fraud}
                  onChange={this.onChangeFraud}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Cấp quyền Admin</Form.Label>
                <Form.Check
                  type="checkbox"
                  checked={user?.is_admin}
                  onChange={this.onChangeAdmin}
                />
              </Form.Group>
            </Form>
            <Button
              variant="primary"
              type="submit"
              onClick={this.onClickResetPassword}
            >
              Đặt lại mặt khẩu
            </Button>
            <br></br>
            <div>
              <Button
                variant="primary"
                type="submit"
                onClick={this.onClickUpdate}
              >
                Cập nhật
              </Button>{" "}
              <Button
                variant="primary"
                type="submit"
                onClick={this.onClickDelete}
              >
                Xóa
              </Button>{" "}
              <Button variant="link" onClick={this.onPressExit}>
                Thoát
              </Button>
            </div>
            <br></br>
          </>
        )}
        {!this.state.user && <div>Không tìm thấy khách hàng</div>}
      </div>
    );
  }

  onPressExit = () => {
    this.props.navigate("/admin/users");
  };

  onChangeUserName = (e) => {
    this.setState({ user: { ...this.state.user, username: e.target.value } });
  };

  onClickResetPassword = (e) => {
    this.setState({ user: { ...this.state.user, password: "123456" } });
    Api.updateUserById(this.state.user.id, this.state.user).then((res) => {
      if (res.data.success) {
        alert("Mật khẩu được đặt lại thành công. Mật khẩu mới là: 123456");
      }
    });
  };

  onChangeAddress = (e) => {
    this.setState({ user: { ...this.state.user, address: e.target.value } });
  };

  onChangePhoneNumber = (e) => {
    this.setState({
      user: { ...this.state.user, phone_number: e.target.value },
    });
  };

  onChangeFraud = (e) => {
    this.setState({ user: { ...this.state.user, fraud: e.target.checked } });
  };

  onClickUpdate = (e) => {
    Api.updateUserById(this.state.user.id, this.state.user).then((res) => {
      if (res.data.success) {
        alert("Cập nhật thành công");
      }
    });
  };

  onChangeAdmin = (e) => {
    this.setState({ user: { ...this.state.user, is_admin: e.target.checked } });
  };

  onClickDelete = (e) => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm("Bạn có chắc chắn muốn xoá tài khoản này không?")) {
      Api._deleteUserById(this.state.user.id).then((res) => {
        if (res.data.success) {
          alert(res.data.data);
          this.props.navigate("/admin/users");
        } else {
          alert("Đã có lỗi xảy ra. Xoá tài khoản thất bại");
        }
      });
    }
  };
}

export default withRouter(withParams(CustomerManagementDetail));
