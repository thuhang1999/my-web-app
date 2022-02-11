import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap'

export default class CreateContactPage extends Component {
    render() {
        return (
            <div>
                <h1>Thêm liên hệ</h1>
                <div>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Tên khách hàng liên hệ</Form.Label>
                        <Form.Control type="text" placeholder="Nhập tên khách hàng liên hệ" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Số điện thoại liên hệ</Form.Label>
                        <Form.Control type="text" placeholder="Nhập số điện thoại liên hệ" />
                    </Form.Group>

                    <Form>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Nội dung liên hệ</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                    </Form>

                </div>
                <div>
                    <Button variant="primary" type="submit">
                        Thêm
                    </Button>
                    <Button variant="link">Trở về</Button>
                </div>
            </div>
        )
    }
}
