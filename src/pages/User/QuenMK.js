import React, { Component } from "react";

export default class UserPage extends Component {
    render() {
        return <div>
            <div>
                <h1>Cài đặt lại mật khẩu</h1>
                <p>Mật khẩu mới sẽ được gửi về số điện thoại của bạn</p>
            </div>
            <div>
                <label>Số điện thoại </label>
                <input type="text"></input>
            </div>
            <div>
                <button>Gửi</button>
            </div>
            <div>
                <a href="/user/logn-in">Bỏ qua</a>
            </div>
        </div>;
    }
}