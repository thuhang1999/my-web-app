import React, { Component } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  Nav,
  Navbar,
  NavDropdown,
  Row,
} from "react-bootstrap";
import Api from "src/apis";
import { ACTION_TYPE } from "src/stores/AppStore";
import { withContext } from "src/utils/commons/withContext";

class AdminPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      user: null,
      phone: "",
      password: "",
    };
  }

  componentDidMount() {
    Api.getCurrentUser(this.props.state.user?.token)
      .then((res) => {
        if (res.data.success) {
          let user = res.data.data;
          this.setState({
            isLoaded: true,
            user,
          });
        } else {
          this.setState({
            isLoaded: true,
          });
        }
      })
      .catch((err) => {
        console.log(
          `AdminPage.js ~ line 41 ~ AdminPage ~ Api.getCurrentUser ~ err`,
          err
        );
        this.setState({ isLoaded: true });
      });
  }

  render() {
    return (
      <div>
        {!this.state.isLoaded && this.renderLoadingContent()}
        {!!this.state.isLoaded &&
          !!this.state.user &&
          !this.state.user?.is_admin &&
          this.renderNotMOD()}
        <Navbar bg="light" expand="lg">
          {!!this.state.isLoaded && !!this.state.user?.is_admin && (
            <>
              <h1> Trang chủ Admin</h1>
              <Container>
                <Navbar.Brand href="/admin">Trang chủ Admin</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    <Nav.Link href="/admin/products">
                      Quản trị sản phẩm
                    </Nav.Link>
                    <Nav.Link href="/admin/orders">Quản trị đơn hàng</Nav.Link>
                    <Nav.Link href="/admin/contacts">Quản trị liên hệ</Nav.Link>
                    <NavDropdown
                      title="Quản trị người dùng"
                      id="basic-nav-dropdown"
                    >
                      <NavDropdown.Item href="/admin/users">
                        Quản lý khách hàng
                      </NavDropdown.Item>
                      <NavDropdown.Item href="/admin/users">
                        Cấu hình User
                      </NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </>
          )}
        </Navbar>
        {!!this.state.isLoaded && !this.state.user && this.renderLoginForm()}
      </div>
    );
  }

  renderLoginForm = () => {
    return (
      <Form>
        <Form.Label as="h1">
          Vui lòng đăng nhập tài khoản quản trị viên
        </Form.Label>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            Số điện thoại
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              placeholder="Số điện thoại"
              onChange={this.onChangePhone}
            />
          </Col>
        </Form.Group>

        <Form.Group
          as={Row}
          className="mb-3"
          controlId="formHorizontalPassword"
        >
          <Form.Label column sm={2}>
            Password
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={this.onChangePassword}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Col sm={{ span: 10, offset: 2 }}>
            <Button type="submit" onClick={this.onClickLogin}>
              Đăng nhập
            </Button>
          </Col>
        </Form.Group>
      </Form>
    );
  };

  renderLoadingContent = () => {
    return (
      <div className="loading-container">
        <div className="loading-content">
          Đang kiểm tra thông tin. Vui lòng chờ trong giây lát...
        </div>
      </div>
    );
  };

  onChangePhone = (e) => {
    this.setState({ phone: e.target.value });
  };

  onChangePassword = (e) => {
    this.setState({ password: e.target.value });
  };

  renderNotMOD = () => {
    return (
      <div className="loading-container">
        <div>
          Tài khoản của bạn không phải tài khoản quản trị viên. Vui lòng quay
          lại trang chủ
        </div>
        <Button variant={"link"} href={"/"}>
          Quay lại trang chủ
        </Button>
        <Button variant={"link"} onClick={this.onClickSignOut}>
          Đăng xuất
        </Button>
      </div>
    );
  };

  onClickSignOut = () => {
    this.props.dispatch({ type: ACTION_TYPE.REMOVE_USER });
    this.setState({ user: null });
  };

  onClickLogin = (e) => {
    e.preventDefault();
    Api.login(this.state.phone, this.state.password)
      .then((res) => {
        if (res.data.success) {
          this.setState({ user: res.data?.data });
          this.props.dispatch({
            type: ACTION_TYPE.SET_USER,
            payload: res.data?.data,
          });
        } else {
          alert("Sai tài khoản hoặc mật khẩu");
        }
      })
      .catch((err) => {
        console.log(
          `AdminPage.js ~ line 194 ~ AdminPage ~ Api.login ~ err`,
          err
        );

        alert("Đã xảy ra lỗi. Vui lòng thử lại");
      });
  };
}

export default withContext(AdminPage);
