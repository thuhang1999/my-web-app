import React, { Component } from "react";
import { Button, Col, Dropdown, Form } from "react-bootstrap";
import { ApiOrder } from "src/apis";
import { format } from "src/utils/commons/Number";
import { withRouter } from "src/utils/commons/withRouter";

class OrderManagement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      page: 1,
    };
  }
  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    ApiOrder.getAllOrders(this.state.page, 10).then((res) => {
      let orders = res.data.data;
      if (Array.isArray(orders)) {
        this.setState({
          orders: [...this.state.orders, ...orders],
          page: this.state.page + 1,
        });
      }
    });
  };

  render() {
    return (
      <div className="manager-detail-page">
        <h1>Quản lý đơn hàng</h1>
        {/* <div>
          <Col sm={10}>
            <Form.Control type="text" placeholder="Tìm kiếm..." />
          </Col>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Tìm kiếm theo
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Mã đơn ship</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Mã đơn đặt bàn</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Tên khách hàng</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div> */}
        <br></br>
        <div>
          <>
            <Button variant="secondary">Thêm đơn ship</Button>{" "}
            {/* <Button variant="secondary">Thêm đơn đặt bàn</Button>{" "} */}
            <Button variant="link">Thoát</Button>
          </>
        </div>

        <br></br>
        <div className="tb_admin">
          <table className="tb_admin" border="1">
            <tr>
              <th colspan="8">DANH SÁCH ĐƠN ĐẶT SHIP</th>
            </tr>
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

        <br></br>
        <Button className="text-center" onClick={this.onClickViewMore}>
          Xem thêm
        </Button>
      </div>
    );
  }

  renderOrderItem = (item) => {
    return (
      <tr key={item?.order_id}>
        <td class="text-center">{item?.order_id}</td>
        <td class="text-center">{item?.user?.username}</td>
        <td class="text-center">{item?.order_time}</td>
        <td class="text-center">{format(item?.total_price)} đ</td>
        <td class="text-center"></td>
        <td class="text-center">
          <Button variant="link" onClick={this.onClickEditOrderItem(item)}>
            Xem chi tiết
          </Button>
        </td>
        <td class="text-center">
          <Button variant="link" onClick={this.onClickEditOrderItem(item)}>
            Sửa
          </Button>
          <Button variant="link" onClick={this.onClickDeleteOrderItem(item)}>
            Xóa
          </Button>
        </td>
      </tr>
    );
  };

  onClickEditOrderItem = (item) => () => {
    this.props.navigate(`/admin/orders/detail/${item.order_id}`);
  };

  onClickDeleteOrderItem = (item) => () => {
    if (window.confirm("Bạn có chắc chắn muốn xóa đơn hàng này?")) {
      ApiOrder.deleteOrderById(item?.order_id).then((res) => {
        if (res.data.success) {
          alert("Xóa thành công");
          let index = this.state.orders.findIndex(
            (e) => e.order_id === item.order_id
          );
          console.log("{RNLog} TCL --> index:", index);
          if (index > -1) {
            let newOrders = [...this.state.orders];
            newOrders.splice(index, 1);
            this.setState({ orders: newOrders });
          }
        } else {
          alert("Có lỗi xảy ra. Vui lòng thử lại");
        }
      });
    }
  };

  onClickViewMore = () => {
    this.fetchData();
  };
}

export default withRouter(OrderManagement);
