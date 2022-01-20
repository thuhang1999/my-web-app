import React, { Component } from 'react';
import { Button, Col, Form, InputGroup, Row } from 'react-bootstrap';

export default class ContactManagementDetailPage extends Component {
    render() {
        return <div>
            <h1>Chi tiết sản phẩm</h1>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Mã sản phẩm</Form.Label>
                    <Form.Control value="Hằng" disabled type="text" placeholder="Nhập họ tên của bạn" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Tên sản phẩm</Form.Label>
                    <Form.Control value="Hằng" disabled type="text" placeholder="Nhập họ tên của bạn" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Giá sản phẩm</Form.Label>
                    <Form.Control disabled
                        type="text"
                        placeholder="Nhập số điện thoại của bạn"
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Địa chỉ hình ảnh sản phẩm</Form.Label>
                    <Form.Control value="Hằng" disabled type="text" placeholder="" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Hình ảnh sản phẩm</Form.Label><br></br>
                    <img
                        className="img"
                        src="https://hoaninh.danang.gov.vn/wp-content/uploads/2019/01/nha-hang-8.jpg"
                    ></img>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Mô tả sản phẩm</Form.Label>
                    <Form.Control disabled as="textarea" rows={3} />
                </Form.Group>
            </Form>
            <Button variant="primary" type="submit">
                Sửa
            </Button>
            <Button variant="primary" type="submit">
                Xóa
            </Button>
            <Button variant="link">Thoát</Button>
            <br></br>
        </div>;
    }
}
