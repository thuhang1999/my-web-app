import React, { Component } from "react";
import { Card, CardGroup } from "react-bootstrap";
import logo from "../../assets/icons/logo.png";
import bg1 from "../../assets/background/bottom-bg-1.jpeg";
import bg2 from "../../assets/background/bottom-bg-2.jpeg";
import bg3 from "../../assets/background/bottom-bg-3.jpeg";
import bg4 from "../../assets/background/bottom-bg-4.jpeg";
import bg5 from "../../assets/background/bottom-bg-5.jpeg";
import bg6 from "../../assets/background/bottom-bg-6.jpeg";
export default class BottomNavigator extends Component {
  render() {
    return (
      <div>
        <CardGroup>
          <Card className="bottom-nav-card">
            <Card.Img variant="top" className="bottom-logo-img" src={logo} />
            <Card.Body>
              <Card.Text className="bottom-restaurant-desc">
                Hệ thống nhà hàng Hiệp Thương, chuyên ẩm thực Định Hóa với các
                món ăn có hương vị đặc trưng, thơm ngon và luôn cập nhật nhiều
                món ăn mới hấp dẫn. Hiệp Thương tự hào: Mỗi nguyên liệu và gia
                vị bạn dùng để nấu ăn tại nhà, nhà hàng Hiệp Thương cũng dùng để
                nấu món tại bếp của nhà hàng. Chúng tôi đảm bảo tiêu chí về độ
                tươi ngon, chất lượng và an toàn từ nguyên liệu tới các loại gia
                vị để bạn hoàn toàn yên tâm trải nghiệm ẩm thực tại chuỗi nhà
                hàng Hiệp Thương.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="bottom-nav-card">
            <Card.Body>
              <Card.Title>Liên kết nhanh website</Card.Title>
              <Card.Body>
                <ul className="bottom-nav-link-wrapper">
                  <a href="/" className="bottom-nav-link">
                    Trang chủ
                  </a>
                  <a href="/collections/all" className="bottom-nav-link">
                    Menu
                  </a>
                  <a href="/pages/gioi-thieu" className="bottom-nav-link">
                    Thông tin nhà hàng
                  </a>
                  <a href="/pages/uu-dai-vip" className="bottom-nav-link">
                    Chính sách hội viên
                  </a>
                  <a
                    href="/blogs/uu-dai?view=khuyenmai"
                    className="bottom-nav-link"
                  >
                    Khuyến mãi
                  </a>
                  <a href="/pages/lien-he" className="bottom-nav-link">
                    Liên hệ
                  </a>
                </ul>
              </Card.Body>
            </Card.Body>
          </Card>
          <Card className="bottom-nav-card">
            <Card.Body>
              <Card.Title>Nhà hàng Hiệp Thương, đặc sản Định Hóa</Card.Title>
              <div className="bottom-nav-card-img-c">
                <Card.Img className="bottom-nav-card-img" src={bg1} />
                <Card.Img className="bottom-nav-card-img" src={bg2} />
                <Card.Img className="bottom-nav-card-img" src={bg3} />
                <Card.Img className="bottom-nav-card-img" src={bg4} />
                <Card.Img className="bottom-nav-card-img" src={bg5} />
                <Card.Img className="bottom-nav-card-img" src={bg6} />
              </div>
            </Card.Body>
          </Card>
        </CardGroup>
        <Card.Footer>
          <small className="text-muted">
            Copyrights © 2021 by NhahangHiepThuong
          </small>
        </Card.Footer>
      </div>
    );
  }
}
