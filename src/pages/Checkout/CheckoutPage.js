import React, { Component } from "react";
import { Accordion } from "react-bootstrap";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Api, { ApiOrder } from "src/apis";
import { ACTION_TYPE } from "src/stores/AppStore";
import { format } from "src/utils/commons/Number";
import { withContext } from "src/utils/commons/withContext";
import { withRouter } from "src/utils/commons/withRouter";
const PAYMENT_METHOD = {
  COD: 1,
  BANK_TRANSFER: 2,
};

class CheckoutPage extends Component {
  constructor(props) {
    super(props);
    this.payment_method = PAYMENT_METHOD.COD;
    this.state = {
      phone: this.props.state.user?.phone_number,
      address: this.props.state.user?.address,
    };
  }
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
        {!this.props.state.user && (
          <div>
            Bạn đã có tài khoản ?{" "}
            <Button variant="link" href="/user/login">
              Đăng nhập
            </Button>
          </div>
        )}
        {!!this.props.state.user && (
          <>
            <br />
            <div>Người đặt: {this.props.state.user.username}</div>
            <br />
          </>
        )}
        <Form className="form">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="text"
              placeholder="Nhập số điện thoại"
              onChange={this.onChangePhone}
              value={this.state.phone}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="text"
              placeholder="Nhập địa chỉ"
              onChange={this.onChangeAdress}
              value={this.state.address}
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
                onChange={this.onChangePaymentMethodBankTransfer}
              ></Form.Check>
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Thông tin chuyển khoản</Accordion.Header>
                  <Accordion.Body>
                    <p>
                      Sau khi chọn "Đặt hàng", vui lòng ghi nhớ Mã đơn hàng và
                      chuyển khoản vào tài khoản theo thông tin:
                    </p>
                    <p>Ngân hàng: Vietcombank</p>
                    <p>Chi nhánh: Thành phố Thái Nguyên</p>
                    <p>Số tài khoản: 0071001335200</p>
                    <p>Tên tài khoản: NHA HANG HIEP THUONG</p>
                    <p>Ghi chú chuyển khoản: (Mã đơn hàng)</p>
                    <p>
                      Vui lòng sử dụng hình thức chuyển tiền ngay 24/7. Đơn hàng
                      cần được chuyển khoản thanh toán trong vòng 20 phút sau
                      khi Qúy Khách đặt hàng thành công.
                    </p>
                    <p>
                      Sau đó, bạn vui lòng gửi hình ảnh hóa đơn/ giao dịch để
                      chúng tôi xác nhận qua mail: nhahanghiepthuong@gmail.com
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              <Form.Check
                checked
                inline
                label="Thanh toán qua giao hàng (COD)"
                name="group1"
                onChange={this.onChangePaymentMethodCOD}
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
          <Button variant="link" href="/cart">
            Giỏ hàng
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

  onChangePaymentMethodBankTransfer = (e) => {
    if (e.target.checked) {
      this.payment_method = PAYMENT_METHOD.BANK_TRANSFER;
    }
  };

  onChangePaymentMethodCOD = (e) => {
    if (e.target.checked) {
      this.payment_method = PAYMENT_METHOD.COD;
    }
  };

  onChangePhone = (event) => {
    this.setState({
      phone: event.target.value,
    });
  };

  onChangeAdress = (event) => {
    this.setState({
      address: event.target.value,
    });
  };

  onClickSubmit = () => {
    const Joi = require("joi");
    const schema = Joi.object().keys({
      phone: Joi.string().required().min(10).max(11),
      address: Joi.string().required(),
    });

    const { error } = schema.validate(this.state);
    if (error) {
      alert(error.message);
      return;
    }
    let amount = this.props.state.carts.reduce(
      (prev, e) => prev + e.amount * e.price,
      0
    );
    ApiOrder.createOrder({
      customer_id: this.props.state.user?.id,
      carts: this.props.state.carts,
      total_price: amount,
      payment_method: this.payment_method,
      address: this.state.address,
      phone: this.state.phone,
    }).then((res) => {
      if (res.data.success) {
        let order = res.data.data;
        if (this.payment_method === PAYMENT_METHOD.BANK_TRANSFER) {
          alert(
            `Vui lòng ghi nhớ Mã đơn hàng và chuyển khoản vào tài khoản theo thông tin:\nNgân hàng: Vietcombank\nChi nhánh: Thành phố Thái Nguyên\nSố tài khoản: 0071001335200\nTên tài khoản: NHA HANG HIEP THUONG\nGhi chú chuyển khoản: HIEPTHUONGDH${order.order_id}`
          );
        } else {
          alert("Đặt hàng thành công");
        }
        this.props.dispatch({ type: ACTION_TYPE.RESET_CART });
        this.props.navigate("/");
      }
    });
  };
}

export default withRouter(withContext(CheckoutPage));
