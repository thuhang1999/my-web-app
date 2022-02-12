import React, { Component } from "react";
import { Button, Col, Dropdown, Form } from "react-bootstrap";
import Api from "src/apis";
import { withRouter } from "src/utils/commons/withRouter";

class CustomerManagement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      shouldShowViewMore: false,
    };
  }

  componentDidMount() {
    Api.getAllUser().then((res) => {
      if (Array.isArray(res.data.data)) {
        this.setState({ users: res.data?.data });
      }
    });
  }

  render() {
    return (
      <div>
        <h1>Quản lý khách hàng</h1>
        {/* <div>
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
        </div> */}
        {/* <div>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Sắp xếp theo
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Mới nhất</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Cũ nhất</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div> */}
        <br></br>
        <div>
          <>
            <Button variant="secondary" href="/admin/users/create">
              Thêm khách hàng
            </Button>{" "}
            <Button variant="link" href="/admin">
              Quay lại trang Admin
            </Button>
          </>
        </div>
        <br></br>
        <div className="tb_admin">
          <table className="tb_admin" border="1">
            <tr>
              <th class="text-center">Mã KH</th>
              <th class="text-center">Tên khách hàng</th>
              <th class="text-center">Số điện thoại</th>
              <th class="text-center">Ngày thêm</th>
              <th class="text-center">Xem chi tiết</th>
              <th colSpan={3} class="text-center">
                Tác vụ
              </th>
            </tr>

            {this.state.users.map(this.renderUserItem)}
          </table>
        </div>
        <br></br>
        {this.state.shouldShowViewMore && (
          <Button className="text-center" onClick={this.onClickViewMore}>
            Xem thêm
          </Button>
        )}
      </div>
    );
  }
  renderUserItem = (item) => {
    return (
      <tr key={item.id}>
        <td class="text-center">{item.id}</td>
        <td class="text-center">{item.username}</td>
        <td class="text-center">{item.phone_number}</td>
        <td class="text-center">{item.created_at}</td>

        <td class="text-center">
          <Button variant="link" onClick={this.onClickEditUser(item)}>
            Xem chi tiết
          </Button>
        </td>

        <td class="text-center">
          <Button variant="link" onClick={this.onClickEditUser(item)}>
            Sửa
          </Button>
          <Button variant="link" onClick={this.onClickDeleteUser(item)}>
            Xóa
          </Button>
        </td>
      </tr>
    );
  };

  onClickEditUser = (item) => () => {
    console.log("{RNLog} TCL --> edit user", item);
    this.props.navigate(`/admin/users/detail/${item.id}`);
  };

  onClickDeleteUser = (item) => () => {
    console.log("{RNLog} TCL --> delete item:", item);
  };
}

export default withRouter(CustomerManagement);
