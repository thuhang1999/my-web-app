import React, { Component } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

export default class UserPage extends Component {
  render() {
    return <div className="user">
      <div className="h1">
        <h1>Tài khoản của bạn</h1>
      </div>
      <div className="h2">
        <h2>Lịch sử giao dịch</h2>

      </div>
      <p>Bạn chưa có đơn hàng nào</p>
      <div className="h2">
        <h2>Thông tin tài khoản</h2>
      </div>
      <Form>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Họ tên</Form.Label>
            <Form.Control type="Text" placeholder="Họ tên của bạn" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Mật khẩu</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Địa chỉ</Form.Label>
          <Form.Control placeholder="1234 Main St" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Label>Address 2</Form.Label>
          <Form.Control placeholder="Apartment, studio, or floor" />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>State</Form.Label>
            <Form.Select defaultValue="Choose...">
              <option>Choose...</option>
              <option>...</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Zip</Form.Label>
            <Form.Control />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" id="formGridCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Cập nhật
        </Button>
      </Form>
    </div>;
  }
}
