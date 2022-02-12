import React, { Component } from "react";
import { Button, Col, Dropdown, Form } from "react-bootstrap";
import { ApiOrder } from "src/apis";
import { withRouter } from "src/utils/commons/withRouter";

class OrderManagement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
    };
  }
  componentDidMount() {
    ApiOrder.getAllOrders(1, 10).then((res) => {
      console.log(
        `{RNLog} ~ file: OrderManagement.js ~ line 14 ~ OrderManagement ~ ApiOrder.getAllOrders ~ res`,
        res
      );
      if (Array.isArray(res.data.data)) {
        this.setState({ orders: res.data.data });
      }
    });
  }

  render() {
    return (
      <div>
        <h1>Quản lý đơn hàng</h1>
        <div>
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
        </div>
        <br></br>
        <div>
          <>
            <Button variant="secondary">Thêm đơn ship</Button>{" "}
            <Button variant="secondary">Thêm đơn đặt bàn</Button>{" "}
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
              <th class="text-center">Xem chi tiết</th>
              <th colSpan={3} class="text-center">
                Tác vụ
              </th>
            </tr>
            {this.state.orders.map(this.renderOrderItem)}
          </table>
        </div>
        {/* <div className="tb_1">
          <table className="tb_product_management" border="1">
            <tr>
              <th colspan="3">DANH SÁCH ĐƠN ĐẶT BÀN</th>
            </tr>
            <tr>
              <th>Mã đơn đặt bàn</th>
              <th>Tên khách hàng</th>
              <th>Thời gian đặt bàn</th>
              <th>Tổng giá trị</th>
              <th>Xem chi tiết</th>
            </tr>
            <tr>
              <td>1</td>
              <td>Cá chép om dưa</td>
              <td></td>
              <td>200000</td>

              <td>
                <Button variant="link">Xem chi tiết</Button>
              </td>
            </tr>
          </table>
        </div> */}
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
        <td class="text-center">{item?.customer_id}</td>
        <td class="text-center">{item?.order_time}</td>
        <td class="text-center">{item?.total_price}</td>

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

  onClickDeleteOrderItem = (item) => () => { };
}

export default withRouter(OrderManagement);
