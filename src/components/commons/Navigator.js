import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import Dropdown from "react-bootstrap/Dropdown";

import logo from "../../assets/icons/logo.png";
import cart from "../../assets/icons/cart.png";
import { ReactComponent as CartSvg } from "../../assets/icons/cart.svg";
import { withRouter } from "src/utils/commons/withRouter";

class Navigator extends Component {
  render() {
    return (
      <Navbar className="topbar" expand="lg" fixed="top">
        <div className="topbar-left">
          <img
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
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
          <Dropdown>
            <Dropdown.Toggle className="top-nav-link-user">
              Người dùng
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="/user/login">Đăng nhập</Dropdown.Item>
              <Dropdown.Item href="/user/sign-up">Đăng ký</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>

        <div className="flex-row">
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Tìm kiếm"
              className="me-2"
              aria-label="Search"
              onChange={this.onChangeText}
            />
            <Button variant="light" size="lg" onClick={this.onClickFind}>
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
        </div>
      </Navbar>
    );
  }

  onChangeText = (event) => {
    this.text = event.target.value;
  };

  onClickFind = () => {
    this.props.navigate(`/menu/search?name=${this.text}`);
  };
}

export default withRouter(Navigator);
