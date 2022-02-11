import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';

export default class CreateOrderPage extends Component {
    render() {
        return <div>
            <h1>Thêm đơn đặt ship</h1>
            <div>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Mã khách hàng</Form.Label>
                        <Form.Control type="number" placeholder="Nhập mã khách hàng" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Số điện thoại giao hàng</Form.Label>
                        <Form.Control type="text" placeholder="Nhập số điện thoại giao hàng" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Số lượng khách hàng</Form.Label>
                        <Form.Control type="number" placeholder="Nhập số lượng khách hàng" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Địa chỉ giao hàng</Form.Label>
                        <Form.Control type="text" placeholder='Nhập địa chỉ giao hàng' />
                    </Form.Group>

                    <Form>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Nội dung</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                    </Form>
                    <div>
                        <tr>
                            <th></th>
                            <th></th>
                            <th>Đồ ăn</th>
                            <th>Đơn giá</th>
                            <th colSpan="3">Số lượng</th>

                            <th>Thành tiền</th>
                        </tr>

                        <tr>
                            <td><Button variant="link">Xóa</Button></td>
                            <td>
                                <img className="img" src="https://product.hstatic.net/1000093072/product/do_giang_sinh_cua_hang_ban_le_bai_dang_facebook__3__c27de34b4f454dcd87963a3566344bda_small.png"></img>
                            </td>
                            <td>Tên đồ ăn</td>
                            <td colSpan="3">
                                <Button
                                    variant="light"
                                >
                                    -
                                </Button>
                                2
                                <Button
                                    variant="light"
                                >
                                    +
                                </Button>
                            </td>
                            <div >

                                Tổng tiền: <span className="sum-txt-value">300000 đ</span>



                            </div>
                        </tr>

                    </div>
                    <div>
                        <Button variant="primary" type="submit">
                            Thêm
                        </Button>
                        <Button variant="link">Trở về</Button>
                    </div>
                </Form>
            </div>
        </div>;
    }
}
