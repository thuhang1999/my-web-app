import React, { Component } from 'react'
import { Button } from 'react-bootstrap'

export default class BookOrderManagerment extends Component {
  render() {
    return (
      <div>
        <h1>Quản lý đơn đặt bàn</h1><br></br>
        <div>
          <>
            <Button variant="secondary">Thêm đơn đặt bàn</Button>{" "}
            {/* <Button variant="secondary">Thêm đơn đặt bàn</Button>{" "} */}
            <Button variant="link">Thoát</Button>
          </>
        </div><br></br>
        <div className="tb_admin">
          <table className="tb_admin" border="1">
            <tr>
              <th colspan="7">DANH SÁCH ĐƠN ĐẶT BÀN</th>
            </tr>
            <tr>
              <th>Mã đơn đặt bàn</th>
              <th>Tên khách hàng</th>
              <th>Thời gian đặt bàn</th>
              <th>Tổng giá trị</th>
              <th>Xem chi tiết</th>
              <th colSpan={3} class="text-center">
                Tác vụ
              </th>
            </tr>
            <tr>
              <td>1</td>
              <td>Cá chép om dưa</td>
              <td></td>
              <td>200000</td>

              <td>
                <Button variant="link">Xem chi tiết</Button>
              </td>
              <td>
                <Button variant="link">Sửa</Button>
              </td>
              <td>
                <Button variant="link">Xóa</Button>
              </td>
            </tr>
          </table>

          <br></br>
          <Button className="text-center" onClick={this.onClickViewMore}>
            Xem thêm
          </Button>
        </div>
      </div>
    )
  }
}
