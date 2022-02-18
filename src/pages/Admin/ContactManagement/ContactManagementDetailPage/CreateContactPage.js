/* eslint-disable no-script-url */
import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";
import { ApiContact } from "src/apis";
import { withRouter } from "src/utils/commons/withRouter";

class CreateContactPage extends Component {
  constructor(props) {
    super(props);
    this.name = "";
    this.phone_number = "";
    this.note = "";
  }

  render() {
    return (
      <div>
        <h1>Thêm liên hệ</h1>
        <div>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Tên khách hàng liên hệ</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nhập tên khách hàng liên hệ"
              onChange={this.onChangeName}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Số điện thoại liên hệ</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nhập số điện thoại liên hệ"
              onChange={this.onChangePhone}
            />
          </Form.Group>

          <Form>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Nội dung liên hệ</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                onChange={this.onChangeNote}
              />
            </Form.Group>
          </Form>
        </div>
        <div>
          <Button variant="primary" onClick={this.onClickSubmit}>
            Thêm
          </Button>
          <Button variant="link" href={"javascript:history.back()"}>
            Trở về
          </Button>
        </div>
      </div>
    );
  }

  onChangeName = (event) => {
    this.name = event.target.value;
  };

  onChangePhone = (event) => {
    this.phone_number = event.target.value;
  };

  onChangeNote = (event) => {
    this.note = event.target.value;
  };

  onClickSubmit = () => {
    ApiContact.create({
      name: this.name,
      phone_number: this.phone_number,
      note: this.note,
    }).then((res) => {
      if (res.data.success) {
        alert("Thêm liên hệ thành công");
        this.props.navigate("/admin/contacts");
      }
    });
  };
}

export default withRouter(CreateContactPage);
