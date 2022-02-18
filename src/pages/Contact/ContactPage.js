import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";
import { ApiContact } from "src/apis";
import BottomNavigator from "src/components/commons/BottomNavigator";
import Navigator from "src/components/commons/Navigator";
import OrderGroupButton from "src/components/commons/OrderGroupButton";
import { withContext } from "src/utils/commons/withContext";

class ContactPage extends Component {
  constructor(props) {
    super(props);
    this.username = "";
    this.phone = "";
    this.content = "";
  }

  render() {
    return (
      <div className="contact">
        <Navigator />
        <OrderGroupButton />
        {this.renderMainContent()}
        <BottomNavigator />
      </div>
    );
  }

  renderMainContent() {
    return (
      <>
        <div className="h1">
          <h1>Liên hệ</h1>
        </div>
        <h2>Liên hệ nhà hàng: 0974 816 870 - 0989 910 479</h2>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Họ tên</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nhập họ tên của bạn"
              onChange={this.onChangeUsername}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Số điện thoại</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nhập số điện thoại của bạn"
              onChange={this.onChangePhone}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Nội dung</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              onChange={this.onChangeContent}
            />
          </Form.Group>
        </Form>
        <Button variant="primary" type="submit" onClick={this.onSubmitClick}>
          Gửi
        </Button>
        <br></br>
      </>
    );
  }

  onChangeUsername = (event) => {
    this.username = event.target.value;
  };

  onChangePhone = (event) => {
    this.phone = event.target.value;
  };

  onChangeContent = (event) => {
    this.content = event.target.value;
  };

  onSubmitClick = (e) => {
    e.preventDefault();
    console.log(this.username, this.phone, this.content);
    ApiContact.create({
      name: this.username,
      phone_number: this.phone,
      note: this.content,
      customer_id: this.props.state.user?.id,
    }).then((res) => {
      if (res.data.success) {
        alert("Gửi liên hệ thành công");
        window.location.reload();
      }
    });
  };
}

export default withContext(ContactPage);
