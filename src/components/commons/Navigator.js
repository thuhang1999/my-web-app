import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import logo from "../../assets/icons/logo.png";
import cart from "../../assets/icons/cart.png";
import { ReactComponent as CartSvg } from "../../assets/icons/cart.svg";
export default class Navigator extends Component {
  render() {
    return (
      <Navbar className="topbar" expand="lg" fixed="top">
        <Container fluid>
          <Navbar.Brand href="#">
            <img
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link className="top-nav-link" href="/">
                Trang chủ
              </Nav.Link>
              <Nav.Link className="top-nav-link" href="/menu">
                Menu
              </Nav.Link>
              <Nav.Link className="top-nav-link" href="/info">
                Thông tin nhà hàng
              </Nav.Link>
              <Nav.Link className="top-nav-link" href="/contact">
                Liên hệ
              </Nav.Link>
              <Nav.Link className="top-nav-link" href="/contact">
                Người dùng
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Tìm kiếm"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="light" size="lg">
                Tìm
              </Button>
            </Form>

            <Button variant="link" className="btn-cart">
              <CartSvg
                fill={"#ffffff00"}
                width={24}
                height={24}
                className="cart-svg"
              />
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
