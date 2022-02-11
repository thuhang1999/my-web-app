import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';

export default class CreateCustomerPage extends Component {
    render() {
        return <div>CreateCustomerPage

            <h1>Thêm khách hàng</h1>
            <div>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Họ tên khách hàng</Form.Label>
                        <Form.Control type="text" placeholder="Nhập họ tên khách hàng" />
                        {/* <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text> */}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Số điện thoại khách hàng</Form.Label>
                        <Form.Control type="text" placeholder="Nhập số điện thoại khách hàng" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Địa chỉ khách hàng</Form.Label>
                        <Form.Control type="text" placeholder="Nhập địa chỉ khách hàng" />
                    </Form.Group>


                    <Button variant="primary" type="submit">
                        Thêm
                    </Button>
                </Form>
            </div>
        </div>;
    }
}
