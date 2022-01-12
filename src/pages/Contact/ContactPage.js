import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";

export default class ContactPage extends Component {
  render() {
    return <div className="contact">
      <div className="h1">
        <h1>Liên hệ</h1>
      </div>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Họ tên</Form.Label>
          <Form.Control type="text" placeholder="Nhập họ tên của bạn" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Số điện thoại</Form.Label>
          <Form.Control type="text" placeholder="Nhập số điện thoại của bạn" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Nội dung</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Gửi
        </Button>
      </Form>
    </div>;
  }
}
