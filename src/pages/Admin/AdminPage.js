import React, { Component } from "react";
import { Button, Col, Container, Form, Nav, Navbar, NavDropdown, Row } from "react-bootstrap";

export default class AdminPage extends Component {
  render() {
    return <div>Trang chủ Admin
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Trang chủ Admin</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Quản trị sản phẩm</Nav.Link>
              <Nav.Link href="#link">Quản trị đơn hàng</Nav.Link>
              <Nav.Link href="#link">Quản trị liên hệ</Nav.Link>
              <NavDropdown title="Quản trị người dùng" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Quản lý khách hàng</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Cấu hình User</NavDropdown.Item>

              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <>
        <Form.Group className="mb-3">
          <Form.Label>Disabled input</Form.Label>
          <Form.Control placeholder="Disabled input" disabled />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Disabled select menu</Form.Label>
          <Form.Select disabled>
            <option>Disabled select</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Check type="checkbox" label="Can't check this" disabled />
        </Form.Group>
      </>

      <Form>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            Họ tên
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="text" placeholder="Họ tên" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            Số điện thoại
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="text" placeholder="Số điện thoại" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
          <Form.Label column sm={2}>
            Password
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="password" placeholder="Password" />
          </Col>
        </Form.Group>
        {/* <fieldset>
          <Form.Group as={Row} className="mb-3">
            <Form.Label as="legend" column sm={2}>
              Radios
            </Form.Label>
            <Col sm={10}>
              <Form.Check
                type="radio"
                label="first radio"
                name="formHorizontalRadios"
                id="formHorizontalRadios1"
              />
              <Form.Check
                type="radio"
                label="second radio"
                name="formHorizontalRadios"
                id="formHorizontalRadios2"
              />
              <Form.Check
                type="radio"
                label="third radio"
                name="formHorizontalRadios"
                id="formHorizontalRadios3"
              />
            </Col>
          </Form.Group>
        </fieldset>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
          <Col sm={{ span: 10, offset: 2 }}>
            <Form.Check label="Remember me" />
          </Col>
        </Form.Group> */}

        <Form.Group as={Row} className="mb-3">
          <Col sm={{ span: 10, offset: 2 }}>
            <Button type="submit">Sửa thông tin</Button>
          </Col>
        </Form.Group>
      </Form>
    </div>
  }
}
