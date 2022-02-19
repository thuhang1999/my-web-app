import React, { Component } from "react";
import { Accordion, Button, Col, Form, Row } from "react-bootstrap";
import moment from "moment";
import { withContext } from "src/utils/commons/withContext";
import * as Joi from "joi";
import { ApiBookOrder } from "src/apis";
import { withRouter } from "src/utils/commons/withRouter";
import { format } from "src/utils/commons/Number";

const MIN_DEPOSIT = 500000;

class BookOrderPage extends Component {
  constructor(props) {
    super(props);
    this.customer_id = this.props.state.user?.id;
    this.phone_number = this.props.state.user?.phone_number;
    this.customer_quantity = 1;
    this.order_time = new Date();
    this.content = "";
    this.time_day = moment().format("YYYY-MM-DD");
    this.deposit = MIN_DEPOSIT;
  }

  render() {
    return (
      <div>
        <h1>Đặt bàn</h1>
        <div>
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Họ tên của bạn</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Nhập họ tên của bạn"
                  defaultValue={this.props.state.user?.username}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Số điện thoại của bạn</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Nhập số điện thoại của bạn"
                  defaultValue={this.props.state.user?.phone_number}
                  onChange={this.onChangePhone}
                />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>Số lượng khách</Form.Label>
                <Form.Control
                  type="number"
                  onChange={this.onChangeQuantity}
                  defaultValue={1}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Chọn giờ</Form.Label>
                <Form.Select
                  defaultValue="Choose..."
                  onChange={this.onChangeTimeHour}
                >
                  <option>Chọn giờ</option>
                  <option value={"10:30"}>10h30</option>
                  <option value={"11:30"}>11h30</option>
                  <option value={"12:00"}>12h00</option>
                  <option value={"12:30"}>12h30</option>
                  <option value={"13:00"}>13h00</option>
                  <option value={"13:30"}>13h30</option>
                  <option value={"17:30"}>17h30</option>
                  <option value={"18:00"}>18h00</option>
                  <option value={"18:30"}>18h30</option>
                  <option value={"19:00"}>19h00</option>
                  <option value={"19:30"}>19h30</option>
                  <option value={"20:00"}>20h00</option>
                  <option value={"20:30"}>20h30</option>
                  <option value={"21:00"}>21h00</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Chọn ngày</Form.Label>
                <Form.Control
                  type="date"
                  onChange={this.onChangeTimeDay}
                  defaultValue={new Date().toISOString().split("T")[0]}
                />
              </Form.Group>
            </Row>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Nội dung</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                onChange={this.onChangeContent}
              />
            </Form.Group>

            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  Quý khách vui lòng cọc trước 30% tổng giá trị đơn hàng
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    Sau khi chọn "Đặt bàn", vui lòng ghi nhớ Mã đơn hàng và
                    chuyển khoản vào tài khoản theo thông tin:
                  </p>
                  <p>Ngân hàng: Vietcombank</p>
                  <p>Chi nhánh: Thành phố Thái Nguyên</p>
                  <p>Số tài khoản: 0071001335200</p>
                  <p>Tên tài khoản: NHA HANG HIEP THUONG</p>
                  <p>Ghi chú chuyển khoản: (Mã đơn hàng)</p>
                  <p>
                    Vui lòng sử dụng hình thức chuyển tiền ngay 24/7. Đơn hàng
                    cần được chuyển khoản thanh toán trong vòng 20 phút sau khi
                    Qúy Khách đặt hàng thành công.
                  </p>
                  <p>
                    Sau đó, bạn vui lòng gửi hình ảnh hóa đơn/ giao dịch để
                    chúng tôi xác nhận qua mail: nhahanghiepthuong@gmail.com
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>

            <p>Tổng tiền: 0 đ</p>
            <p>Tiền cọc: {format(this.deposit)} đ</p>

            <Button variant="primary" onClick={this.onSubmit}>
              Đặt bàn
            </Button>
            <Button variant="link" href={"/cart/"}>
              Giỏ hàng
            </Button>
          </Form>
        </div>
      </div>
    );
  }

  onChangePhone = (event) => {
    this.phone_number = event.target.value;
  };

  onChangeQuantity = (event) => {
    this.customer_quantity = event.target.value;
  };

  onChangeTimeHour = (event) => {
    this.time_hour = event.target.value;
  };

  onChangeTimeDay = (event) => {
    this.time_day = event.target.value;
  };

  onChangeContent = (event) => {
    this.content = event.target.value;
  };

  onSubmit = () => {
    let input = {
      customer_id: this.customer_id,
      phone_number: this.phone_number,
      customer_quantity: this.customer_quantity,
      time_hour: this.time_hour,
      time_day: this.time_day,
      content: this.content,
      deposit: this.deposit,
      order_time: moment(
        `${this.time_day} ${this.time_hour}`,
        "YYYY-MM-DD HH:mm"
      ).toDate(),
    };
    console.log("{RNLog} TCL --> inptu:", input);

    const { value: data, error } = Joi.object({
      customer_id: Joi.number().required(),
      phone_number: Joi.string().required(),
      customer_quantity: Joi.number().required(),
      time_hour: Joi.string().required(),
      time_day: Joi.string().required(),
      content: Joi.string().required(),
      deposit: Joi.number().required(),
      order_time: Joi.date().required(),
    }).validate(input);
    if (error) {
      alert(
        `Validation error: ${error.details.map((x) => x.message).join(", ")}`
      );
      return;
    }
    // check is future time...
    let now = moment();
    let diffHours = moment
      .duration(moment(data.order_time).diff(moment()))
      .asHours();
    console.log(
      `{RNLog} ~ file: BookOrderPage.js ~ line 205 ~ BookOrderPage ~ duration`,
      diffHours
    );
    if (diffHours < 0) {
      alert("Vui lòng chọn ngày giờ trong tương lai");
      return;
    }
    ApiBookOrder.create(data).then((res) => {
      if (res.data.success) {
        alert("Đặt bàn thành công");
        this.props.navigate("/");
      }
    });
  };
}

export default withContext(withRouter(BookOrderPage));
