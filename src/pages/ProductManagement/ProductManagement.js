import React, { Component } from "react";
import { Button, Col, Dropdown, Form } from "react-bootstrap";

export default class ProductManagement extends Component {
    render() {
        return <div>
            <h1>Quản lý sản phẩm</h1>
            <div>
                <Col sm={10}>
                    <Form.Control type="text" placeholder="Tìm kiếm..." />
                </Col>
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Tìm kiếm theo
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Tên sản phẩm</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Mã sản phẩm</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
            <br></br>
            <div>
                <>

                    <Button variant="secondary">Thêm sản phẩm</Button>{' '}

                    <Button variant="link">Thoát</Button>
                </>
            </div>
            <br></br>
            <div className="tb_1">
                <table className="tb_product_management" border="1">
                    <tr>
                        <th colspan="3">DANH SÁCH SẢN PHẨM</th>
                    </tr>
                    <tr>
                        <th>Mã sản phẩm</th>
                        <th>Tên sản phẩm</th>
                        <th>Hình ảnh sản phẩm</th>
                        <th>Giá sản phẩm</th>
                        <th>Giá sản phẩm</th>
                        <th>Ngày thêm</th>
                        <th>Xem chi tiết</th>

                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Cá chép om dưa</td>
                        <td></td>
                        <td>200000</td>
                        <td></td>
                        <td></td>
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