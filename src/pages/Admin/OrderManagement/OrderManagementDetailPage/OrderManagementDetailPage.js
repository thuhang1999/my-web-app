import React, { Component } from "react";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import { ApiOrder } from "src/apis";
import { ORDER_STATUS } from "src/types/CommonTypes";
import { format } from "src/utils/commons/Number";
import { withParams } from "src/utils/commons/withParams";
import { withRouter } from "src/utils/commons/withRouter";

class OrderManagementDetailPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      order: null,
    };
  }

  componentDidMount() {
    let orderId = this.props.eParams?.id;
    ApiOrder.getOrderById(orderId).then((res) => {
      this.setState({ order: res.data?.data });
    });
  }

  render() {
    const { order } = this.state;
    return (
      <div>
        <h1 className="admin-h1">Chi tiết đơn đặt ship</h1>

        <Form>
          <div className="form">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Mã đơn hàng</Form.Label>
              <Form.Control value={order?.order_id} disabled type="text" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Tên khách hàng</Form.Label>
              <Form.Control
                value={order?.user?.username}
                type="text"
                placeholder="Nhập họ tên của khách hàng"
                disabled
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Địa chỉ giao hàng</Form.Label>
              <Form.Control
                value={order?.address}
                type="text"
                placeholder="Nhập địa chỉ giao hàng"
                onChange={this.onChangeAddress}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Ngày giờ đặt hàng</Form.Label>
              <Form.Control
                value={order?.created_at}
                disabled
                type="datetime"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Tổng giá trị đơn hàng</Form.Label>
              <Form.Control
                type="text"
                value={order?.total_price}
                onChange={this.onChangeTotalPrice}
              />
            </Form.Group>
            <label for="SortBy">Trạng thái đơn hàng</label>
            {"   "}
            <select name="SortBy" id="SortBy" onChange={this.onChangeStatus}>
              {Object.keys(ORDER_STATUS).map((e) => (
                <option value={e} selected={this.state.order?.status == e}>
                  {ORDER_STATUS[e]}
                </option>
              ))}
            </select>
          </div>
          <br />
          <br />
          <div className="tb_admin">
            <table className="tb_admin" border="1">
              <tr>
                <th colspan="8">DANH SÁCH SẢN PHẨM</th>
              </tr>
              <tr>
                <th class="text-center">Mã sản phẩm</th>
                <th class="text-center">Tên sản phẩm</th>
                <th class="text-center">Hình ảnh sản phẩm</th>
                <th class="text-center">Đơn giá</th>
                <th class="text-center">Số lượng</th>
                <th class="text-center">Thành tiền</th>
              </tr>
              {Array.isArray(this.state.order?.order_items) &&
                this.state.order?.order_items.map(this.renderOrderItemDetail)}
            </table>
          </div>
        </Form>
        <div className="btn">
          <Button variant="secondary" onClick={this.onClickUpdate}>
            Sửa
          </Button>{" "}
          <Button variant="secondary" onClick={this.onClickDeleteOrder}>
            Xóa
          </Button>{" "}
          <Button variant="link" href="/admin/orders">
            Quay lại
          </Button>
        </div>

        <br></br>
      </div>
    );
  }

  renderOrderItemDetail = (item) => {
    return (
      <tr>
        <td class="text-center">{item?.product_id}</td>
        <td class="text-center">{item?.product?.product_name}</td>
        <td class="text-center">
          <img
            className="img"
            src={item?.product?.image}
            alt={"..."}
            style={{ width: "100px", height: "100px" }}
          ></img>
        </td>
        <td class="text-center">{format(item?.product?.price)} đ</td>
        <td class="text-center">{item?.amount}</td>
        <td class="text-center">
          {format(item?.product?.price * item?.amount)}
        </td>
      </tr>
    );
  };

  onClickDeleteOrder = () => {
    let orderId = this.props.eParams?.id;
    ApiOrder.deleteOrderById(orderId).then((res) => {
      if (res.data.success) {
        alert("Xóa thành công");
        this.props.navigate("/admin/orders");
      } else {
        alert("Có lỗi xảy ra. Vui lòng thử lại");
      }
    });
  };

  onChangeAddress = (e) => {
    this.setState({
      order: {
        ...this.state.order,
        address: e.target.value,
      },
    });
  };

  onChangeTotalPrice = (e) => {
    this.setState({
      order: {
        ...this.state.order,
        total_price: e.target.value,
      },
    });
  };

  onChangeStatus = (e) => {
    this.setState({
      order: {
        ...this.state.order,
        status: e.target.value,
      },
    });
  };

  onClickUpdate = () => {
    ApiOrder.updateOrderById(this.state.order.order_id, {
      ...this.state.order,
      order_item: this.state.order.order_items,
    }).then((res) => {
      if (res.data.success) {
        alert("Cập nhật thành công");
        window.location.reload();
      } else {
        alert("Có lỗi xảy ra. Vui lòng thử lại");
      }
    });
  };
}

export default withRouter(withParams(OrderManagementDetailPage));
