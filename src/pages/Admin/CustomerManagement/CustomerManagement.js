import React, { Component } from "react";
import { Button, Col, Dropdown, Form } from "react-bootstrap";
import Api from "src/apis";

export default class CustomerManagement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    Api.getAllUser().then((res) => {
      this.setState({ users: res.data });
    });
  }

  render() {
    return (
      <div>
        <h1>Quản lý khách hàng</h1>
        <div>
          <Col sm={10}>
            <Form.Control type="text" placeholder="Tìm kiếm..." />
          </Col>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Tìm kiếm theo
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-2">Mã khách hàng</Dropdown.Item>

              <Dropdown.Item href="#/action-1">Tên khách hàng</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Số điện thoại</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Sắp xếp theo
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Mới nhất</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Cũ nhất</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <br></br>
        <div>
          <>
            <Button variant="secondary">Thêm khách hàng</Button>{" "}
            <Button variant="link">Thoát</Button>
          </>
        </div>
        <br></br>
        <div className="tb_1">
          <table className="tb_cart" border="1">
            <tr>
              <th>Mã khách hàng</th>
              <th>Tên khách hàng</th>
              <th>Số điện thoại</th>
              <th>Ngày thêm</th>
              <th>Xem chi tiết</th>
              <th colSpan={2}>Tác vụ</th>
            </tr>

            {this.state.users.map(this.renderUserItem)}
          </table>
        </div>
        <br></br>
      </div>
    );
  }
  renderUserItem = (item) => {
    console.log("{RNLog} TCL --> item:", item);
    return (
      <tr>
        <td>{item.id}</td>
        <td>{item.username}</td>
        <td>{item.phone_number}</td>
        <td>{item.created_at}</td>

        <td>
          <Button variant="link">Xem chi tiết</Button>
        </td>
        <td>
          <Button variant="link">Sửa</Button>
        </td>
        <td>
          <Button variant="link">Xóa</Button>
        </td>
      </tr>
    );
  };
}
