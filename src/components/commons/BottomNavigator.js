import React, { Component } from "react";
import { Card, CardGroup } from "react-bootstrap";

export default class BottomNavigator extends Component {
  render() {
    return <div>
      <CardGroup>
        <Card>
          <Card.Img variant="top" src="" />
          <Card.Body>
            <Card.Title>Nhà hàng Hiệp Thương</Card.Title>
            <Card.Text>
              Hệ thống nhà hàng Hiệp Thương, chuyên ẩm thực Định Hóa với các món ăn có hương vị đặc trưng, thơm ngon và luôn cập nhật nhiều món ăn mới hấp dẫn. Hiệp Thương tự hào: Mỗi nguyên liệu và gia vị bạn dùng để nấu ăn tại nhà, nhà hàng Hiệp Thương cũng dùng để nấu món tại bếp của nhà hàng. Chúng tôi đảm bảo tiêu chí về độ tươi ngon, chất lượng và an toàn từ nguyên liệu tới các loại gia vị để bạn hoàn toàn yên tâm trải nghiệm ẩm thực tại chuỗi nhà hàng Hiệp Thương.
            </Card.Text>
          </Card.Body>

        </Card>
        <Card>
          <Card.Body>
            <Card.Title>Liên kết nhanh website</Card.Title>
            <Card.Body>
              <Card.Link href="#">Trang chủ</Card.Link><br></br>
              <Card.Link href="#">Menu</Card.Link><br></br>
              <Card.Link href="#">Thông tin nhà hàng</Card.Link><br></br>
              <Card.Link href="#">Liên hệ</Card.Link><br></br>
            </Card.Body>

          </Card.Body>

        </Card>
        <Card>

          <Card.Body>
            <Card.Title>Nhà hàng Hiệp Thương, đặc sản Định Hóa</Card.Title>
          </Card.Body>
          <Card.Img variant="bottom" src="holder.js/100px160" />
          <Card.Img variant="bottom" src="holder.js/100px160" />
          <Card.Img variant="bottom" src="holder.js/100px160" />
          <Card.Img variant="bottom" src="holder.js/100px160" />
          <Card.Img variant="bottom" src="holder.js/100px160" />
          <Card.Img variant="bottom" src="holder.js/100px160" />

        </Card>

      </CardGroup>
      <Card.Footer>
        <small className="text-muted">Copyrights © 2021 by NhahangHiepThuong</small>
      </Card.Footer>
    </div>;
  }
}
