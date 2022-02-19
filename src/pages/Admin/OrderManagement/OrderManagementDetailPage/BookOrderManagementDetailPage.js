import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";
import moment from "moment";
import { ApiBookOrder } from "src/apis";
import { withContext } from "src/utils/commons/withContext";
import { withParams } from "src/utils/commons/withParams";
import { withRouter } from "src/utils/commons/withRouter";
import { BOOK_ORDER_STATUS } from "src/types/CommonTypes";

class BookOrderManagementDetailPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      order: {},
    };
  }

  componentDidMount() {
    let id = this.props.eParams?.id;
    ApiBookOrder.getById(id).then((res) => {
      if (res.data.success) {
        this.setState({
          order: res.data.data,
        });
      }
    });
  }

  render() {
    return (
      <div>
        <h1 className="admin-h1">Chi tiết đơn đặt bàn</h1>
        <Form>
          <div className="form">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Mã đơn hàng</Form.Label>
              <Form.Control
                value={this.state.order?.book_order_id}
                disabled
                type="text"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Tên khách hàng</Form.Label>
              <Form.Control
                value={this.state.order?.user?.username}
                disabled
                type="text"
                placeholder="Nhập họ tên của bạn"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Số lượng khách tham dự</Form.Label>
              <Form.Control
                value={this.state.order?.customer_quantity}
                type="text"
                placeholder="Nhập số lượng khách tham dự"
                onChange={this.onChangeQuantity}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Ngày giờ đặt bàn</Form.Label>
              <Form.Control
                value={moment(this.state.order?.created_at).format(
                  "YYYY-MM-DDTHH:mm"
                )}
                disabled
                type="datetime-local"
                placeholder="Nhập ngày giờ đặt bàn"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Ngày giờ tham dự</Form.Label>
              <Form.Control
                value={moment(this.state.order?.order_time).format(
                  "YYYY-MM-DDTHH:mm"
                )}
                disabled
                type="datetime-local"
                placeholder="Nhập họ tên của bạn"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Khách hàng trả trước</Form.Label>
              <Form.Control
                type="text"
                value={this.state.order?.deposit}
                onChange={this.onChangeDeposit}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Trạng thái đơn hàng</Form.Label>
              <Form.Select
                onChange={this.onChangeStatus}
                defaultValue={this.state.order?.status}
                as="select"
              >
                {Object.keys(BOOK_ORDER_STATUS).map((key) => (
                  <option selected={this.state.order.status == key} value={key}>
                    {BOOK_ORDER_STATUS[key]}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Nội dung</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={this.state.order?.content}
                onChange={this.onChangeContent}
              />
            </Form.Group>
          </div>
        </Form>
        <div className="btn">
          <Button variant="secondary" onClick={this.onClickUpdate}>
            Cập nhật
          </Button>{" "}
          {/* <Button variant="secondary">Xóa</Button>{" "} */}
          <Button variant="link" href={"/admin/book-orders"}>
            Thoát
          </Button>
        </div>

        <br></br>
      </div>
    );
  }

  onChangeQuantity = (e) => {
    let order = this.state.order;
    order.customer_quantity = e.target.value;
    this.setState({ order });
  };

  onChangeDeposit = (e) => {
    let order = this.state.order;
    order.deposit = e.target.value;
    this.setState({ order });
  };

  onChangeContent = (e) => {
    let order = this.state.order;
    order.content = e.target.value;
    this.setState({ order });
  };

  onChangeStatus = (e) => {
    let order = this.state.order;
    order.status = e.target.value;
    this.setState({ order });
  };

  onClickUpdate = () => {
    let order = this.state.order;
    ApiBookOrder.update(order.book_order_id, order).then((res) => {
      if (res.data.success) {
        alert("Cập nhật thành công");
        window.location.reload();
      } else {
        alert("Cập nhật thất bại");
      }
    });
  };
}

export default withParams(
  withRouter(withContext(BookOrderManagementDetailPage))
);
