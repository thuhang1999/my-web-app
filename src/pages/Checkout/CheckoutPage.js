import React, { Component } from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Api from "src/apis";
import { ACTION_TYPE } from "src/stores/AppStore";
import { format } from "src/utils/commons/Number";
import { withContext } from "src/utils/commons/withContext";
import { withRouter } from "src/utils/commons/withRouter";

class CheckoutPage extends Component {
  render() {
    return (
      <div className="main-container-c1">
        <div className="left-content">
          <h1>Nhà hàng Hiệp Thương</h1>

          <Breadcrumb>
            <Breadcrumb.Item href="/cart">Giỏ hàng</Breadcrumb.Item>
            <Breadcrumb.Item active>Thông tin đơn hàng</Breadcrumb.Item>
          </Breadcrumb>
          {this.rendeLeftMainContent()}
        </div>
        <div className="right-content">{this.renderRightMainContent()}</div>
      </div>
    );
  }

  rendeLeftMainContent() {
    return (
      <div>
        <h4>Thông tin vận chuyển</h4>
        <div>
          Bạn đã có tài khoản ? <Button variant="link">Đăng nhập</Button>
        </div>
        <Form className="form">
          {/* <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="text"
              placeholder="Họ và tên"
              onChange={this.onChangeUserName}
            />
          </Form.Group> */}
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="text"
              placeholder="Nhập số điện thoại"
              onChange={this.onChangePhone}
            />
          </Form.Group>
          {/* <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Nhập email"
              onChange={this.onChangePassword}
            />
          </Form.Group> */}
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="text"
              placeholder="Nhập địa chỉ"
              onChange={this.onChangeAdress}
            />
          </Form.Group>
        </Form>

        <h4>Chọn phương thức thanh toán</h4>
        <br></br>
        <Form>
          {["radio"].map((type) => (
            <div key={`inline-${type}`} className="mb-3">
              <Form.Check
                inline
                label="Chuyển khoản qua ngân hàng"
                name="group1"
                type={type}
                id={`inline-${type}-1`}
              />
              <Form.Check
                inline
                label="Thanh toán qua giao hàng (COD)"
                name="group1"
                type={type}
                id={`inline-${type}-2`}
              />
            </div>
          ))}
        </Form>
        <div className="center">
          <Button variant="success" onClick={this.onClickSubmit}>
            Đặt hàng
          </Button>
        </div>
      </div>
    );
  }

  renderRightMainContent() {
    const carts = this.props.state.carts;
    let amount = this.props.state.carts.reduce(
      (prev, e) => prev + e.amount * e.price,
      0
    );
    return (
      <div className="right-content-c">
        {carts.map(this.renderOrderItem)}
        <div className="separator" />
        <div className="check-out-right">
          <div className="check-out-right-title">Tạm tính</div>
          <div className="check-out-right-value">{format(amount)} đ</div>
        </div>
        <div className="check-out-right">
          <div className="check-out-right-title">Phí ship</div>
          <div className="check-out-right-value">Free</div>
        </div>
        <div className="check-out-right">
          <div className="check-out-right-title1">Tổng tiền</div>
          <div className="check-out-right-value1">{format(amount)} đ</div>
        </div>
      </div>
    );
  }

  renderOrderItem = (item) => {
    return (
      <div className="checkout-order-item">
        <div className="checkout-order-item-c1">
          <div className="checkout-order-item-img-wrapper">
            <img
              src={item?.image}
              alt={item?.product_name}
              className="checkout-order-item-img"
            />
            <div className="checkout-order-item-amount">{item?.amount}</div>
          </div>
          <div className="checkout-order-item-title">{item?.product_name}</div>
        </div>
        <div className="checkout-order-item-price">
          {format(item?.price * item?.amount)} đ
        </div>
      </div>
    );
  };

  onChangePhone = (event) => {
    this.phone = event.target.value;
  };

  onChangeAdress = (event) => {
    this.address = event.target.value;
  };

  onClickSubmit = () => {
    let amount = this.props.state.carts.reduce(
      (prev, e) => prev + e.amount * e.price,
      0
    );
    Api.createOrderData(
      this.props.state.carts,
      1,
      amount,
      1,
      "2dsaf",
      this.address,
      this.phone
    ).then((res) => {
      if (res.data.success) {
        alert("Đặt hàng thành công");
        this.props.dispatch({ type: ACTION_TYPE.RESET_CART });
        this.props.navigate("/");
      }
    });
  };
}

export default withRouter(withContext(CheckoutPage));
