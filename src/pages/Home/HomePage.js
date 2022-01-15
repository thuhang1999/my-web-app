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
import Api from "src/apis";

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
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      productTypes: [],
    };
  }

  componentDidMount() {
    Api.fetchProducts({
      per_page: 12,
    }).then((res) => {
      let products = res.data?.data;
      if (Array.isArray(products)) {
        this.setState({ products });
      }
    });

    Api.fetchProductTypes().then((res) => {
      let productTypes = res.data?.data;
      if (Array.isArray(productTypes)) {
        this.setState({ productTypes: productTypes.slice(0, 6) });
      }
    });
  }

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
    const { products, productTypes } = this.state;
    return (
      <div>
        {/* ------------- chọn loại món ăn------------- */}
        <div className="meal-type-gp-btn">
          {productTypes.map((e) => (
            <>
              <Button className="meal-type-btn" variant="primary">
                {e.product_type_name}
              </Button>{" "}
            </>
          ))}
        </div>
        <div className="list-product-item">
          <CardGroup>
            {products.map((e) => (
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
