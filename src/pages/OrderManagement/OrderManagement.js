import React, { Component } from "react";
import { Button, Col, Dropdown, Form } from "react-bootstrap";

export default class OrderManagement extends Component {
    render() {
        return <div>
            <h1>Quản lý đơn hàng</h1>
            <div>
                <Col sm={10}>
                    <Form.Control type="text" placeholder="Tìm kiếm..." />
                </Col>
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Tìm kiếm theo
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Mã đơn ship</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Mã đơn đặt bàn</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Tên khách hàng</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
            <br></br>
            <div>
                <>

                    <Button variant="secondary">Thêm đơn ship</Button>{' '}
                    <Button variant="secondary">Thêm đơn đặt bàn</Button>{' '}
                    <Button variant="link">Thoát</Button>
                </>
            </div>
            <br></br>
            <div className="tb_1">
                <table className="tb_product_management" border="1">
                    <tr>
                        <th colspan="3">DANH SÁCH ĐƠN ĐẶT SHIP</th>
                    </tr>
                    <tr>
                        <th>Mã đơn ship</th>
                        <th>Tên khách hàng</th>
                        <th>Thời gian đặt hàng</th>
                        <th>Tổng giá trị</th>
                        <th>Xem chi tiết</th>

                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Cá chép om dưa</td>
                        <td></td>
                        <td>200000</td>


                        <td>
                            <Button variant="link">Xem chi tiết</Button>
                        </td>
                    </tr>

                </table>
            </div>
            <div className="tb_1">
                <table className="tb_product_management" border="1">
                    <tr>
                        <th colspan="3">DANH SÁCH ĐƠN ĐẶT BÀN</th>
                    </tr>
                    <tr>
                        <th>Mã đơn đặt bàn</th>
                        <th>Tên khách hàng</th>
                        <th>Thời gian đặt bàn</th>
                        <th>Tổng giá trị</th>
                        <th>Xem chi tiết</th>

                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Cá chép om dưa</td>
                        <td></td>
                        <td>200000</td>


                        <td>
                            <Button variant="link">Xem chi tiết</Button>
                        </td>
                    </tr>

                </table>
            </div>
            <br></br>

        </div>;
    }
}