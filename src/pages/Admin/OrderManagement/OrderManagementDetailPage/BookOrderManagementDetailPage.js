import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';

export default class BookOrderManagementDetailPage extends Component {
    render() {
        return <div>
            <h1 className='admin-h1'>Chi tiết đơn đặt bàn</h1>
            <Form>
                <div className='form'>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Mã đơn hàng</Form.Label>
                        <Form.Control value="1" disabled type="text" placeholder="Nhập họ tên của bạn" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Tên khách hàng</Form.Label>
                        <Form.Control value="Hằng" disabled type="text" placeholder="Nhập họ tên của bạn" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Số lượng khách tham dự</Form.Label>
                        <Form.Control value="30" disabled type="text" placeholder="Nhập họ tên của bạn" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Ngày giờ đặt bàn</Form.Label>
                        <Form.Control value="" disabled type="text" placeholder="Nhập họ tên của bạn" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Ngày giờ tham dự</Form.Label>
                        <Form.Control value="" disabled type="text" placeholder="Nhập họ tên của bạn" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Tổng giá trị đơn hàng</Form.Label>
                        <Form.Control disabled
                            type="text"
                            value="1000000"
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Khách hàng trả trước</Form.Label>
                        <Form.Control disabled
                            type="text"
                            value="300000"
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Trạng thái đơn hàng</Form.Label>
                        <Form.Control value="Đã xác nhận" disabled type="text" placeholder="" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Nội dung</Form.Label>
                        <Form.Control disabled as="textarea" rows={3} />
                    </Form.Group>
                </div>
                <div>
                    <table className="tb_order" border="1">
                        <tr>
                            <th colspan="3">DANH SÁCH SẢN PHẨM</th>
                        </tr>
                        <tr>
                            <th>Mã sản phẩm</th>
                            <th>Tên sản phẩm</th>
                            <th>Hình ảnh sản phẩm</th>
                            <th>Đơn giá</th>
                            <th>Số lượng</th>
                            <th>Thành tiền</th>

                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Cá chép om dưa</td>
                            <td>
                                <img
                                    className="img"
                                    src="https://hoaninh.danang.gov.vn/wp-content/uploads/2019/01/nha-hang-8.jpg"
                                ></img>
                            </td>
                            <td>200000</td>
                            <td>2</td>
                            <td>400000</td>

                        </tr>

                    </table>
                </div>
                {/* <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Hình ảnh sản phẩm</Form.Label><br></br>
                    <img
                        className="img"
                        src="https://hoaninh.danang.gov.vn/wp-content/uploads/2019/01/nha-hang-8.jpg"
                    ></img>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Mô tả sản phẩm</Form.Label>
                    <Form.Control disabled as="textarea" rows={3} />
                </Form.Group> */}
            </Form>
            <div className='btn'>
                <Button variant="secondary">Sửa</Button>{' '}
                <Button variant="secondary">Xóa</Button>{' '}

                <Button variant="link">Thoát</Button>
            </div>

            <br></br>
        </div>;
    }
}
