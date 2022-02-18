import React, { Component } from 'react';
import { Button, Col, Form, InputGroup, Row } from 'react-bootstrap';

export default class ContactManagementDetailPage extends Component {
    render() {
        return <div>
            <h1>Chi tiết thông tin liên hệ</h1>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Mã liên hệ</Form.Label>
                    <Form.Control value="1" disabled type="text" placeholder="Nhập họ tên của bạn" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Tên khách hàng</Form.Label>
                    <Form.Control value="Thu Hằng" disabled type="text" placeholder="Nhập họ tên của bạn" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Số điện thoại</Form.Label>
                    <Form.Control type="text" value="0354854221" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Ngày liên hệ</Form.Label>
                    <Form.Control type="date" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Nội dung liên hệ</Form.Label>
                    <Form.Control as="textarea" rows={3} />
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
