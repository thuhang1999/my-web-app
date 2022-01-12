import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";

export default class UserPage extends Component {
    render() {
        return <div>
            <div className="h1">
                <h1>Cài đặt lại mật khẩu</h1>
            </div>
            <>
                <Form.Label htmlFor="inputPassword5">Số điện thoại</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Nhập số điện thoại của bạn"
                    id="inputPassword5"
                    aria-describedby="passwordHelpBlock"
                />
                <Form.Text id="passwordHelpBlock" muted>
                    Mật khẩu mới sẽ được gửi về số điện thoại của bạn. Số điện thoại phải trùng với số điện thoại bạn đã đăng ký tài khoản.
                </Form.Text><br />
                <Button variant="primary" type="submit">
                    Gửi
                </Button>
                <div>
                    <a href="/user/logn-in">Bỏ qua</a>
                </div>
            </>

        </div>;
    }
}