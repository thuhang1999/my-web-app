import React, { Component } from "react";
import Navigator from "src/components/commons/Navigator";
import OrderGroupButton from "src/components/commons/OrderGroupButton";
import Carousel from "react-bootstrap/Carousel";
import slider1 from "../../assets/background/ms_banner_img2.jpeg";
import slider2 from "../../assets/background/ms_banner_img1.jpeg";
import BottomNavigator from "src/components/commons/BottomNavigator";
import Button from "react-bootstrap/Button";
import LargeProductItem from "src/components/items/products/LargeProductItem";
import { CardGroup } from "react-bootstrap";

let TEST_DATA = [
  {
    img: "https://product.hstatic.net/1000093072/product/artboard_16ads_pn2332_9b50511f4c6f406b9db85b5d56b3b81b_medium.jpg",
    price: 380000,
    desc: "(1) Cá kèo đang bơi: 16 con(2) Nước dùng: ...",
    title: "LẨU CÁ KÈO LÁ GIANG 16",
  },
  {
    img: "https://product.hstatic.net/1000093072/product/artboard_16ads_pn2332_9b50511f4c6f406b9db85b5d56b3b81b_medium.jpg",
    price: 380000,
    desc: "(1) Cá kèo đang bơi: 16 con(2) Nước dùng: ...",
    title: "LẨU CÁ KÈO LÁ GIANG 16",
  },
  {
    img: "https://product.hstatic.net/1000093072/product/artboard_16ads_pn2332_9b50511f4c6f406b9db85b5d56b3b81b_medium.jpg",
    price: 380000,
    desc: "(1) Cá kèo đang bơi: 16 con(2) Nước dùng: ...",
    title: "LẨU CÁ KÈO LÁ GIANG 16",
  },
  {
    img: "https://product.hstatic.net/1000093072/product/artboard_16ads_pn2332_9b50511f4c6f406b9db85b5d56b3b81b_medium.jpg",
    price: 380000,
    desc: "(1) Cá kèo đang bơi: 16 con(2) Nước dùng: ...",
    title: "LẨU CÁ KÈO LÁ GIANG 16",
  },
  {
    img: "https://product.hstatic.net/1000093072/product/artboard_16ads_pn2332_9b50511f4c6f406b9db85b5d56b3b81b_medium.jpg",
    price: 380000,
    desc: "(1) Cá kèo đang bơi: 16 con(2) Nước dùng: ...",
    title: "LẨU CÁ KÈO LÁ GIANG 16",
  },
  {
    img: "https://product.hstatic.net/1000093072/product/artboard_16ads_pn2332_9b50511f4c6f406b9db85b5d56b3b81b_medium.jpg",
    price: 380000,
    desc: "(1) Cá kèo đang bơi: 16 con(2) Nước dùng: ...",
    title: "LẨU CÁ KÈO LÁ GIANG 16",
  },
  {
    img: "https://product.hstatic.net/1000093072/product/artboard_16ads_pn2332_9b50511f4c6f406b9db85b5d56b3b81b_medium.jpg",
    price: 380000,
    desc: "(1) Cá kèo đang bơi: 16 con(2) Nước dùng: ...",
    title: "LẨU CÁ KÈO LÁ GIANG 16",
  },
  {
    img: "https://product.hstatic.net/1000093072/product/artboard_16ads_pn2332_9b50511f4c6f406b9db85b5d56b3b81b_medium.jpg",
    price: 380000,
    desc: "(1) Cá kèo đang bơi: 16 con(2) Nước dùng: ...",
    title: "LẨU CÁ KÈO LÁ GIANG 16",
  },
  {
    img: "https://product.hstatic.net/1000093072/product/artboard_16ads_pn2332_9b50511f4c6f406b9db85b5d56b3b81b_medium.jpg",
    price: 380000,
    desc: "(1) Cá kèo đang bơi: 16 con(2) Nước dùng: ...",
    title: "LẨU CÁ KÈO LÁ GIANG 16",
  },
];

export default class HomePage extends Component {
  render() {
    return (
      <div className="home-page">
        {this.renderCarousel()}
        <OrderGroupButton />
        <div className="header-text">
          Với thực đơn gần 100 món ăn, đậm chất miền Nam Bộ, nhà hàng Phương Nam
          chắc chắn sẽ chinh phục được vị giác của bạn chỉ sau 1 lần thử!
        </div>
        {this.renderMainContent()}
        <BottomNavigator />
      </div>
    );
  }

  renderMainContent() {
    return (
      <div>
        {/* ------------- chọn loại món ăn------------- */}
        <div className="meal-type-gp-btn">
          <Button className="meal-type-btn" variant="primary">
            Món 1
          </Button>{" "}
          <Button className="meal-type-btn" variant="primary">
            Món 2
          </Button>{" "}
          <Button className="meal-type-btn" variant="primary">
            Món 3
          </Button>{" "}
          <Button className="meal-type-btn" variant="primary">
            Món 4
          </Button>{" "}
          <Button className="meal-type-btn" variant="primary">
            Món 5
          </Button>
        </div>
        <div className="list-product-item">
          <CardGroup>
            {TEST_DATA.map((e) => (
              <LargeProductItem data={e} />
            ))}
          </CardGroup>
        </div>
      </div>
    );
  }

  renderCarousel() {
    return (
      <Carousel>
        <Carousel.Item>
          <img className={"d-block w-100"} src={slider1} alt="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className={"d-block w-100"} src={slider2} alt="Second slide" />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}
