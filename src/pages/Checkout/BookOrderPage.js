
import React, { Component } from 'react'
import { Accordion, Button, Col, Form, Row } from 'react-bootstrap'

export default class BookOrderPage extends Component {
    render() {
        return (
            <div>
                <h1>Đặt bàn</h1>
                <div>
                    <Form>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Họ tên của bạn</Form.Label>
                                <Form.Control type="text" placeholder="Nhập họ tên của bạn" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Số điện thoại của bạn</Form.Label>
                                <Form.Control type="text" placeholder="Nhập số điện thoại của bạn" />
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label>Số lượng khách</Form.Label>
                                <Form.Control type="number" />

                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridState">
                                <Form.Label>Chọn giờ</Form.Label>
                                <Form.Select defaultValue="Choose...">
                                    <option>10h30</option>
                                    <option>11h30</option>
                                    <option>12h00</option>
                                    <option>12h30</option>
                                    <option>13h00</option>
                                    <option>13h30</option>
                                    <option>17h30</option>
                                    <option>18h00</option>
                                    <option>18h30</option>
                                    <option>19h00</option>
                                    <option>19h30</option>
                                    <option>20h00</option>
                                    <option>20h30</option>
                                    <option>21h00</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridZip">
                                <Form.Label>Chọn ngày</Form.Label>
                                <Form.Control type="date" />

                            </Form.Group>
                        </Row>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Nội dung</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>

                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Quý khách vui lòng cọc trước 30% tổng giá trị đơn hàng</Accordion.Header>
                                <Accordion.Body>
                                    <p>Sau khi chọn "Đặt bàn", vui lòng ghi nhớ Mã đơn hàng và chuyển khoản vào tài khoản theo thông tin:</p>
                                    <p>Ngân hàng: Vietcombank</p>
                                    <p>Chi nhánh: Thành phố Thái Nguyên</p>
                                    <p>Số tài khoản: 0071001335200</p>
                                    <p>Tên tài khoản: NHA HANG HIEP THUONG</p>
                                    <p>Ghi chú chuyển khoản: (Mã đơn hàng)</p>
                                    <p>Vui lòng sử dụng hình thức chuyển tiền ngay 24/7. Đơn hàng cần được chuyển khoản thanh toán trong vòng 20 phút sau khi Qúy Khách đặt hàng thành công.</p>
                                    <p>Sau đó, bạn vui lòng gửi hình ảnh hóa đơn/ giao dịch để chúng tôi xác nhận qua mail: nhahanghiepthuong@gmail.com</p>
                                </Accordion.Body>
                            </Accordion.Item>

                        </Accordion>

                        <p>Tổng tiền: 300000 đ</p>
                        <p>Tiền cọc: 90000 đ</p>

                        <Button variant="primary" type="submit">
                            Đặt bàn
                        </Button>
                        <Button variant='link'>
                            Giỏ hàng
                        </Button>
                    </Form>

                </div>
            </div>
        )
    }
}
