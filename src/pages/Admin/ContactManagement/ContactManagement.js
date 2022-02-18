import React, { Component } from "react";
import { Button, Col, Dropdown, Form } from "react-bootstrap";

export default class ContactManagement extends Component {
    render() {
        return <div>
            <h1>Quản lý liên hệ</h1>
            {/* <div>
                <Col sm={10}>
                    <Form.Control type="text" placeholder="Tìm kiếm..." />
                </Col>
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Tìm kiếm theo
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Tên khách hàng</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Số điện thoại</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div><br></br>
            <div>

                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Sắp xếp theo
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Mới nhất</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Cũ nhất</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div> */}
            <br></br>
            <div>
                <>

                    <Button variant="secondary">Thêm liên hệ</Button>{' '}

                    <Button variant="link">Thoát</Button>
                </>
            </div>
            <br></br>
            <div className="tb_1">
                <table className="tb_product_management" border="1">
                    <tr>
                        <th colspan="3">DANH SÁCH LIÊN HỆ</th>
                    </tr>
                    <tr>
                        <th>Mã liên hệ</th>
                        <th>Tên khách hàng</th>
                        <th>Số điện thoại</th>
                        <th>Ngày liên hệ</th>
                        <th>Xem chi tiết</th>
                        <th>Tác vụ</th>
                    </tr>
                    <tr>
                        <td>1</td>

                        <td>Thu Hằng</td>
                        <td>0354854221</td>
                        <td>20/01/2022</td>

                        <td>
                            <Button variant="link">Xem chi tiết</Button>
                        </td>
                        <td>
                            <Button variant="link">Sửa</Button>
                            <Button variant="link">Xóa</Button>
                        </td>
                    </tr>

                </table>
            </div>
            <br></br>
            <Button className="text-center" onClick={this.onClickViewMore}>
                Xem thêm
            </Button>

        </div>;
    }
}