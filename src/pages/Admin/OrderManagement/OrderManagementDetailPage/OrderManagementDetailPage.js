import React, { Component } from "react";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import { ApiOrder } from "src/apis";
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
                value={order?.customer_id}
                disabled
                type="text"
                placeholder="Nhập họ tên của khách hàng"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Địa chỉ giao hàng</Form.Label>
              <Form.Control
                value={order?.address}
                disabled
                type="text"
                placeholder="Nhập địa chỉ giao hàng"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Ngày giờ đặt hàng</Form.Label>
              <Form.Control
                value={order?.created_at}
                disabled
                type="text"
                placeholder="Chọn ngày giờ đặt hàng"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Tổng giá trị đơn hàng</Form.Label>
              <Form.Control disabled type="text" value={order?.total_price} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Trạng thái đơn hàng</Form.Label>
              <Form.Control
                value="Đang chờ xác nhận"
                disabled
                type="text"
                placeholder=""
              />
            </Form.Group>
          </div>
          <div>
            <table className="tb_order" border="1">
              <tr>
                <th colspan="3">DANH SÁCH SẢN PHẨM</th>
              </tr>
              <tr>
                <th>Mã sản phẩm</th>
                <th>Tên sản phẩm</th>
                <th>Hình ảnh sản phẩm</th>
                <th>Đơn giá</th>
                <th>Số lượng</th>
                <th>Thành tiền</th>
              </tr>
              <tr>
                <td>1</td>
                <td>Cá chép om dưa</td>
                <td>
                  <img
                    className="img"
                    src="https://hoaninh.danang.gov.vn/wp-content/uploads/2019/01/nha-hang-8.jpg"
                  ></img>
                </td>
                <td>200000</td>
                <td>2</td>
                <td>400000</td>
              </tr>
            </table>
          </div>
        </Form>
        <div className="btn">
          <Button variant="secondary">Sửa</Button>{" "}
          <Button variant="secondary" onClick={this.onClickDeleteOrder}>
            Xóa
          </Button>{" "}
          <Button variant="link">Thoát</Button>
        </div>

        <br></br>
      </div>
    );
  }

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
}

export default withRouter(withParams(OrderManagementDetailPage));
