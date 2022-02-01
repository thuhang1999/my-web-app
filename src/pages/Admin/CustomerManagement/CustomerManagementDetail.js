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
      this.setState({ user: res.data });
    });
  }

  render() {
    const { user } = this.state;
    return (
      <div>
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
              disabled
              type="text"
              placeholder="Nhập số điện thoại của bạn"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Địa chỉ hình ảnh sản phẩm</Form.Label>
            <Form.Control value="Hằng" disabled type="text" placeholder="" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Hình ảnh sản phẩm</Form.Label>
            <br></br>
            <img
              className="img"
              src="https://hoaninh.danang.gov.vn/wp-content/uploads/2019/01/nha-hang-8.jpg"
            ></img>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Mô tả sản phẩm</Form.Label>
            <Form.Control disabled as="textarea" rows={3} />
          </Form.Group>
        </Form>
        <Button variant="primary" type="submit">
          Sửa
        </Button>
        <Button variant="primary" type="submit">
          Xóa
        </Button>
        <Button variant="link">Thoát</Button>
        <br></br>
      </div>
    );
  }
}

export default withParams(CustomerManagementDetail);
