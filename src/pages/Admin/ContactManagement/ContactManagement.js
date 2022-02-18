import React, { Component } from "react";
import moment from "moment";
import { Button, Col, Dropdown, Form } from "react-bootstrap";
import { ApiContact } from "src/apis";

export default class ContactManagement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      page: 1,
      hasViewMore: false,
    };
  }

  componentDidMount() {
    this.fetchData(this.state.page);
  }

  fetchData = async (page) => {
    return ApiContact.getAll().then((res) => {
      let contacts = res.data.data;
      if (Array.isArray(contacts)) {
        this.setState({
          contacts: [...this.state.contacts, ...contacts],
          page: this.state.page + 1,
          hasViewMore: contacts.length === 10,
        });
      }
    });
  };

  render() {
    return (
      <div>
        <h1>Quản lý liên hệ</h1>
        {/* <div>
                <Col sm={10}>
                    <Form.Control type="text" placeholder="Tìm kiếm..." />
                </Col>
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Tìm kiếm theo
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Tên khách hàng</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Số điện thoại</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div><br></br>
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
            </div> */}
        <br></br>
        <div>
          <>
            <Button variant="secondary" href={`/admin/contacts/create`}>
              Thêm liên hệ
            </Button>{" "}
            <Button variant="link" href={`/admin/`}>
              Thoát
            </Button>
          </>
        </div>
        <br></br>
        <div className="tb_admin">
          <table className="tb_admin" border="1">
            <tr>
              <th colspan="7">DANH SÁCH LIÊN HỆ</th>
            </tr>
            <tr>
              <th class="text-center">Mã liên hệ</th>
              <th class="text-center">Tên khách hàng</th>
              <th class="text-center">Số điện thoại</th>
              <th class="text-center">Ngày liên hệ</th>
              <th class="text-center">Xem chi tiết</th>
              <th class="text-center">Tác vụ</th>
            </tr>
            {this.state.contacts.map(this.renderContactItem)}
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

  renderContactItem = (item) => {
    return (
      <tr key={item.contact_id}>
        <td class="text-center">{item.contact_id}</td>
        <td class="text-center">{item.name}</td>
        <td class="text-center">{item.phone_number}</td>
        <td class="text-center">
          {moment(item.created_at).format("DD/MM/YYYY HH:mm")}
        </td>
        <td class="text-center">
          <Button variant="link" href={`/admin/contacts/${item.contact_id}`}>
            Xem chi tiết
          </Button>
        </td>
        <td class="text-center">
          <Button variant="link" href={`/admin/contacts/${item.contact_id}`}>
            Sửa
          </Button>
          <Button variant="link" onClick={this.onClickDelete(item.contact_id)}>
            Xóa
          </Button>
        </td>
      </tr>
    );
  };

  onClickViewMore = () => {
    this.fetchData(this.state.page);
  };

  onClickDelete = (id) => () => {
    ApiContact._delete(id).then((res) => {
      if (res.data.success) {
        this.setState({ page: 1, contacts: [] }, () => {
          this.fetchData(this.state.page);
        });
      }
    });
  };
}
