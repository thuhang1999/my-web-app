/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import BottomNavigator from "src/components/commons/BottomNavigator";
import Navigator from "src/components/commons/Navigator";
import OrderGroupButton from "src/components/commons/OrderGroupButton";

export default class StoreInfoPage extends Component {
  render() {
    return (
      <div className="store-infor">
        <Navigator />
        <OrderGroupButton />
        {this.renderMainContent()}
        <BottomNavigator />
      </div>
    );
  }

  renderMainContent() {
    return (
      <>
        <h1 className="h1">NHÀ HÀNG HIỆP THƯƠNG - MÓN NGON ĐỊNH HÓA</h1>
        <div className="p">
          <p>
            Được thành lập từ tình yêu, niềm đam mê bất tận với các món ăn và
            nếp văn hóa của người dân Định Hóa, Nhà hàng Hiệp Thương đã chính
            thức đi vào hoạt động tháng 12/2020 (tại địa chỉ Bãi Á 1 - TT. Chợ
            Chu - Định Hóa – Thái Nguyên).
          </p>
          <img
            className="img"
            src="https://s3-ap-southeast-1.amazonaws.com/viettrip/Hotels/90/C30%20-%20Glory%20Hotel%20(4).jpg"
          ></img>
          <p>
            Chỉ sau 2 năm hoạt động, với tiêu chí, luôn nỗ lực không ngừng để có
            những món ăn ngon, nhân viên phục vụ thân thiện và dịch vụ tốt làm
            hài lòng mọi quý khách hàng (ngay cả những thực khách khó tính
            nhất), Nhà hàng Hiệp Thương đã mở rộng quy mô hoạt động, giúp thỏa
            mãn “cơn nghiện” của nhiều tín đồ mê đồ ăn Nam Bộ hơn nữa.
          </p>
          <p>
            Liên tục cải tiến về chất lượng và đa dạng hóa món ăn, đến nay,
            trong thực đơn Nhà hàng Hiệp Thương đã có hơn 50 món ăn mang bản
            sắc, dấu ấn riêng của người Định Hóa. Không chỉ vậy, với tiêu chí,
            mang đúng “hơi thở và linh hồn” của món ăn người dân bản xứ, cùng
            với sự chỉn chu trong nấu nướng của bếp trưởng, tất cả các nguyên
            liệu chế biến món ăn tại Nhà hàng Hiệp Thương luôn phải giữ được sự
            tươi ngon. Đây chính là một trong số những lý do, giúp Nhà hàng Hiệp
            Thương chinh phục được cả những thực khách khó tính, rất sành về ẩm
            thực.
          </p>
          <img
            className="img"
            src="https://hoaninh.danang.gov.vn/wp-content/uploads/2019/01/nha-hang-8.jpg"
          ></img>

          <p>
            Đến với Nhà hàng Hiệp Thương, quý khách hàng không chỉ được thỏa mãn
            vị giác, thị giác, xúc giác với Menu hơn 50 món ăn tự chọn mà còn
            được phục vụ kiểu chuẩn chất người Định Hóa, gần gũi, thân thiện mà
            ấm áp. Một số món ăn khi đến với Nhà hàng Hiệp Thương, bạn không thể
            không thử: Lẩu cá linh – Bông điên điển, Lẩu cá kèo lá giang, Cá
            linh chiên giòn, Lẩu mắm…
          </p>
          <p>
            Bởi vậy, nếu bạn chưa có cơ hội thử nét đặc sắc của ẩm thực Định Hóa
            lần nào hoặc vị giác đã “trót nghiện” với món ăn Định HÓa và bạn
            đang “lên cơn thèm”… còn chờ gì nữa, hãy liên hệ ngay với chúng tôi
            qua Tổng đài 18002028 để đặt bàn và được tư vấn chu đáo nhất nhé!
          </p>
          <p className="p1">Thông tin liên hệ</p>
          <p className="p2">Nhà hàng Hiệp Thương - Món ngon Định Hóa</p>
          <p>
            <span>
              <strong>Địa chỉ: </strong>
              Bãi Á 1 - TT. Chợ Chu - Định Hóa - Thái Nguyên.
            </span>
          </p>
          <p className="p4">
            Số điện thoại liên hệ: 0974 816 870 - 0989 910 479
          </p>
          <p className="p5">
            Một số hình ảnh không gian và các món ăn được yêu thích nhất tại nhà
            hàng Hiệp Thương
          </p>
          <img
            className="img"
            src="https://hoaninh.danang.gov.vn/wp-content/uploads/2019/01/nha-hang-8.jpg"
          ></img>
          <img
            className="img"
            src="https://hoaninh.danang.gov.vn/wp-content/uploads/2019/01/nha-hang-8.jpg"
          ></img>
          <img
            className="img"
            src="https://hoaninh.danang.gov.vn/wp-content/uploads/2019/01/nha-hang-8.jpg"
          ></img>
          <img
            className="img"
            src="https://hoaninh.danang.gov.vn/wp-content/uploads/2019/01/nha-hang-8.jpg"
          ></img>
        </div>
      </>
    );
  }
}
