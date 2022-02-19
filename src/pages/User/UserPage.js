import React, { Component } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import moment from "moment";
import Api, { ApiOrder } from "src/apis";
import { ACTION_TYPE } from "src/stores/AppStore";
import { ORDER_STATUS } from "src/types/CommonTypes";
import { format } from "src/utils/commons/Number";
import { withContext } from "src/utils/commons/withContext";

class UserPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
    };
    const user = this.props.state.user;
    this.username = user?.username;
    this.phone = user?.phone_number;
    this.address = user?.address;
  }

  componentDidMount() {
    const user = this.props.state.user;
    ApiOrder.getAllOrders(1, 20000, {
      customer_id: user?.id,
    }).then((res) => {
      if (res.data.success) {
        if (Array.isArray(res.data.data)) {
          this.setState({
            orders: res.data.data,
          });
        }
      }
    });
  }

  render() {
    const user = this.props.state.user;

    return (
      <div className="user">
        <div className="h1">
          <h1>Tài khoản của bạn</h1>
        </div>
        <div className="h2">
          <h2>Thông tin tài khoản</h2>
        </div>
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Họ tên</Form.Label>
              <Form.Control
                type="Text"
                placeholder="Họ tên của bạn"
                defaultValue={user?.username}
                onChange={this.onChangeUserName}
              />
            </Form.Group>
          </Row>
          <Form.Group className="mb-3" controlId="formGridAddress2">
            <Form.Label>Số điện thoại</Form.Label>
            <Form.Control
              placeholder="Nhập số điện thoại"
              defaultValue={user?.phone_number}
              onChange={this.onChangePhone}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Địa chỉ</Form.Label>
            <Form.Control
              placeholder="Nhập địa chỉ của bạn"
              defaultValue={user?.address}
              onChange={this.onChangeAddress}
            />
          </Form.Group>
          {/* <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <Form.Control />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>State</Form.Label>
              <Form.Select defaultValue="Choose...">
                <option>Choose...</option>
                <option>...</option>
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Zip</Form.Label>
              <Form.Control />
            </Form.Group>
          </Row> */}
          {/* <Form.Group className="mb-3" id="formGridCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group> */}
          <Button
            variant="primary"
            type="submit"
            onClick={this.onClicKResetPassword}
          >
            Đặt lại mật khẩu
          </Button>{" "}
          <Button variant="primary" type="submit" onClick={this.onSubmit}>
            Cập nhật
          </Button>{" "}
          <Button variant="link" type="submit" href={"/"}>
            Thoát
          </Button>
        </Form>

        <div className="h2">
          <h2>Lịch sử giao dịch</h2>
        </div>
        {this.state.orders.length === 0 && <p>Bạn chưa có đơn hàng nào</p>}
        {this.renderOrderHistory()}
      </div>
    );
  }

  renderOrderHistory = () => {
    return (
      <div className="tb_admin">
        <table className="tb_admin" border="1">
          <tr>
            <th class="text-center">Mã đơn hàng</th>
            <th class="text-center">Tên khách hàng</th>
            <th class="text-center">Thời gian đặt hàng</th>
            <th class="text-center">Tổng giá trị</th>
            <th class="text-center">Trạng thái</th>
            <th class="text-center">Xem chi tiết</th>
            <th colSpan={3} class="text-center">
              Tác vụ
            </th>
          </tr>
          {this.state.orders.map(this.renderOrderItem)}
        </table>
      </div>
    );
  };

  renderOrderItem = (item) => {
    return (
      <tr key={item?.order_id}>
        <td class="text-center">{item?.order_id}</td>
        <td class="text-center">{item?.user?.username}</td>
        <td class="text-center">
          {moment(item?.created_at).format("DD/MM/YYYY HH:mm")}
        </td>
        <td class="text-center">{format(item?.total_price)} đ</td>
        <td class="text-center">{ORDER_STATUS[item?.status ?? 0]}</td>
        <td class="text-center">
          <Button
            variant="link"
            href={`/admin/orders/detail/${item?.order_id}`}
          >
            Xem chi tiết
          </Button>
        </td>
        <td class="text-center">
          <Button
            disabled={item?.status >= 1}
            variant="link"
            onClick={this.onClickCancelOrder(item?.order_id)}
          >
            Huỷ đơn hàng
          </Button>
        </td>
      </tr>
    );
  };

  onClicKResetPassword = () => {
    Api.updateUserById(this.props.state.user.id, {
      password: "123456",
    }).then((res) => {
      if (res.data.success) {
        alert("Đặt lại mật khẩu thành công");
      } else {
        alert("Đặt lại mật khẩu thất bại");
      }
    });
  };

  onChangeUserName = (event) => {
    this.username = event.target.value;
  };

  onChangePhone = (event) => {
    this.phone = event.target.value;
  };

  onChangeAddress = (event) => {
    this.address = event.target.value;
  };

  onSubmit = (event) => {
    event.preventDefault();
    const user = this.props.state.user;
    Api.updateUserById(user.id, {
      username: this.username,
      phone_number: this.phone,
      address: this.address,
    }).then((res) => {
      if (res.data.success) {
        let user = res.data.data;
        this.props.dispatch({ type: ACTION_TYPE.SET_USER, payload: user });
        alert("Cập nhật thành công");
        window.location.reload();
      } else {
        alert("Có lỗi xảy ra . Vui lòng thử lại.");
      }
    });
  };

  onClickCancelOrder = (id) => () => {
    ApiOrder.updateOrderById(id, {
      status: 3,
    }).then((res) => {
      if (res.data.success) {
        alert("Huỷ đơn hàng thành công");

        window.location.reload();
      } else {
        alert("Có lỗi xảy ra . Vui lòng thử lại.");
      }
    });
  };
}

export default withContext(UserPage);
