import React, { Component } from "react";
import { Button } from "react-bootstrap";

export default class SalesPage extends Component {
  render() {
    // return (
    //   <div className="test">

    //   </div>
    // )
    return <div>
      <h1>Giỏ hàng</h1>

      <div>
        <table className="tb_cart" border="1">

          <tr>
            <th></th>
            <th></th>
            <th>Đồ ăn</th>
            <th>Đơn giá</th>
            <th colSpan="3">Số lượng</th>


            <th>Thành tiền</th>


          </tr>
          <tr>
            <td>
              <Button variant="link">Xóa</Button>
            </td>
            <td><img
              className="img"
              src="https://hoaninh.danang.gov.vn/wp-content/uploads/2019/01/nha-hang-8.jpg"
            ></img></td>
            <td>Cá chép om dưa</td>
            <td>250000</td>
            <td>-</td>
            <td>2</td>
            <td>+</td>
            <td>500000</td>

          </tr>
          <tr>
            <Button variant="success">Thêm đồ</Button>{' '}
          </tr>
        </table>

      </div>
      <p>
        <span>Tổng tiền </span>
        <span>500000</span>
      </p>
      <p>Địa chỉ: Bãi Á 1 - TT. Chợ Chu - Định Hóa - Thái Nguyên</p>
      <div>

        <Button variant="success">Thanh toán</Button>{' '}
        <Button variant="danger">Đặt bàn</Button>
      </div>
    </div >;
  }
}
