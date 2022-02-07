import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Api from "src/apis";
import { withParams } from "src/utils/commons/withParams";

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
      this.setState({ user: res.data?.data });
    });
  }

  render() {
    const { user } = this.state;
    return (
      <div className="manager-detail-page">
        <h1>Chi tiết khách hàng</h1>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Tên khách hàng</Form.Label>
            <Form.Control
              value={`${user?.username}`}
              type="text"
              placeholder="Tên khách hàng"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Số điện thoại</Form.Label>
            <Form.Control
              value={user?.phone_number}
              type="text"
              placeholder="Số điện thoại"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Địa chỉ</Form.Label>
            <Form.Control
              value={user?.address}
              type="text"
              placeholder="Nhập địa chỉ của bạn"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Gian lận</Form.Label>
            <Form.Check type="checkbox" checked={user?.fraud} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Cấp quyền Admin</Form.Label>
            <Form.Check type="checkbox" checked={user?.is_admin} />
          </Form.Group>
        </Form>
        <div>
          <Button variant="primary" type="submit">
            Sửa
          </Button>{" "}
          <Button variant="primary" type="submit">
            Xóa
          </Button>{" "}
          <Button variant="link">Thoát</Button>
        </div>
        <br></br>
      </div>
    );
  }
}

export default withParams(CustomerManagementDetail);
