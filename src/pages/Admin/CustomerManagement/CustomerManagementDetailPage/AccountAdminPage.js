import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap'

export default class AccountAdminPage extends Component {
    render() {
        return (
            <div>
                <h1>Tài khoản của bạn</h1>
                <div>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Số điện thoại</Form.Label>
                            <Form.Control type="email" placeholder="" />

                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Họ tên</Form.Label>
                            <Form.Control type="email" placeholder="" />

                        </Form.Group>



                        <Button variant="primary" type="submit">
                            Sửa
                        </Button>
                        <Button variant="link" type="submit">
                            Thoát
                        </Button>
                    </Form>
                </div>

                <div className="tb_admin">
                    <table className="tb_admin" border="1">
                        <tr>
                            <th class="text-center">Mã đơn hàng</th>
                            <th class="text-center">Tên khách hàng</th>
                            <th class="text-center">Số điện thoại</th>
                            <th class="text-center">Ngày thêm</th>
                            <th class="text-center">Xem chi tiết</th>
                            <th colSpan={3} class="text-center">
                                Tác vụ
                            </th>
                        </tr>

                    </table>
                </div>


            </div>)
    }
}
