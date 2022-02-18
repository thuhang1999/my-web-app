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
import Api, { ApiProduct } from "src/apis";
import { withContext } from "src/utils/commons/withContext";
import { ACTION_TYPE } from "src/stores/AppStore";

// let TEST_DATA = [
//   {
//     img: "https://product.hstatic.net/1000093072/product/artboard_16ads_pn2332_9b50511f4c6f406b9db85b5d56b3b81b_medium.jpg",
//     price: 380000,
//     desc: "(1) Cá kèo đang bơi: 16 con(2) Nước dùng: ...",
//     title: "LẨU CÁ KÈO LÁ GIANG 16",
//   },
//   {
//     img: "https://product.hstatic.net/1000093072/product/artboard_16ads_pn2332_9b50511f4c6f406b9db85b5d56b3b81b_medium.jpg",
//     price: 380000,
//     desc: "(1) Cá kèo đang bơi: 16 con(2) Nước dùng: ...",
//     title: "LẨU CÁ KÈO LÁ GIANG 16",
//   },
//   {
//     img: "https://product.hstatic.net/1000093072/product/artboard_16ads_pn2332_9b50511f4c6f406b9db85b5d56b3b81b_medium.jpg",
//     price: 380000,
//     desc: "(1) Cá kèo đang bơi: 16 con(2) Nước dùng: ...",
//     title: "LẨU CÁ KÈO LÁ GIANG 16",
//   },
//   {
//     img: "https://product.hstatic.net/1000093072/product/artboard_16ads_pn2332_9b50511f4c6f406b9db85b5d56b3b81b_medium.jpg",
//     price: 380000,
//     desc: "(1) Cá kèo đang bơi: 16 con(2) Nước dùng: ...",
//     title: "LẨU CÁ KÈO LÁ GIANG 16",
//   },
//   {
//     img: "https://product.hstatic.net/1000093072/product/artboard_16ads_pn2332_9b50511f4c6f406b9db85b5d56b3b81b_medium.jpg",
//     price: 380000,
//     desc: "(1) Cá kèo đang bơi: 16 con(2) Nước dùng: ...",
//     title: "LẨU CÁ KÈO LÁ GIANG 16",
//   },
//   {
//     img: "https://product.hstatic.net/1000093072/product/artboard_16ads_pn2332_9b50511f4c6f406b9db85b5d56b3b81b_medium.jpg",
//     price: 380000,
//     desc: "(1) Cá kèo đang bơi: 16 con(2) Nước dùng: ...",
//     title: "LẨU CÁ KÈO LÁ GIANG 16",
//   },
//   {
//     img: "https://product.hstatic.net/1000093072/product/artboard_16ads_pn2332_9b50511f4c6f406b9db85b5d56b3b81b_medium.jpg",
//     price: 380000,
//     desc: "(1) Cá kèo đang bơi: 16 con(2) Nước dùng: ...",
//     title: "LẨU CÁ KÈO LÁ GIANG 16",
//   },
//   {
//     img: "https://product.hstatic.net/1000093072/product/artboard_16ads_pn2332_9b50511f4c6f406b9db85b5d56b3b81b_medium.jpg",
//     price: 380000,
//     desc: "(1) Cá kèo đang bơi: 16 con(2) Nước dùng: ...",
//     title: "LẨU CÁ KÈO LÁ GIANG 16",
//   },
//   {
//     img: "https://product.hstatic.net/1000093072/product/artboard_16ads_pn2332_9b50511f4c6f406b9db85b5d56b3b81b_medium.jpg",
//     price: 380000,
//     desc: "(1) Cá kèo đang bơi: 16 con(2) Nước dùng: ...",
//     title: "LẨU CÁ KÈO LÁ GIANG 16",
//   },
// ];

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      productTypes: [],
      page: 1,
      hasViewMore: true,
      product_type_id: null,
    };
  }

  componentDidMount() {
    ApiProduct.getAllProduct().then((res) => {
      if (Array.isArray(res.data.data)) {
        this.setState({
          products: res.data.data,
        });
      }
    });

    ApiProduct.getAllProductTypes().then((res) => {
      let productTypes = res.data?.data;
      if (Array.isArray(productTypes)) {
        this.setState({ productTypes: productTypes });
      }
    });
    // Api.getCurrentUser(this.props.state.user?.token).then((res) => {

    //   if (res.data?.data) {
    //     this.props.dispatch({
    //       type: ACTION_TYPE.SET_USER,
    //       payload: res?.data.data,
    //     });
    //   }
    // });
  }

  render() {
    return (
      <div className="home-page">
        <Navigator />
        {this.renderCarousel()}
        <OrderGroupButton />
        <div className="header-text">
          Với thực đơn gần 100 món ăn, nhà hàng Hiệp Thương chắc chắn sẽ chinh
          phục được vị giác của bạn chỉ sau 1 lần thử!
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
            <div key={e.product_type_id}>
              <Button
                className="meal-type-btn"
                onClick={this.onClickChangeType(e.product_type_id)}
              >
                {e.product_type_name}
              </Button>{" "}
            </div>
          ))}
        </div>
        <div className="list-product-item">
          <CardGroup>
            {products.map((e) => (
              <LargeProductItem
                key={e.product_id}
                data={e}
                onOrderClick={this.onOrderClick}
              />
            ))}
          </CardGroup>
        </div>
        <div className="btn-viewmore">
          {this.state.hasViewMore && (
            <Button variant="success" onClick={this.onViewMore}>
              Xem thêm
            </Button>
          )}
        </div>
      </div>
    );
  }

  renderCarousel() {
    return (
      <Carousel onClick={this.onClickCarousel}>
        <Carousel.Item>
          <img className={"d-block w-100"} src={slider1} alt="First slide" />
          <Carousel.Caption>
            <h1>Ẩm thực Định Hoá</h1>
            <p>
              Với thực đơn gần 100 món ăn, nhà hàng Hiệp Thương chắc chắn sẽ
              chinh phục được vị giác của bạn chỉ sau 1 lần thử!
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className={"d-block w-100"} src={slider2} alt="Second slide" />

          <Carousel.Caption>
            <h1>Ẩm thực Định Hoá</h1>
            <p>
              Với thực đơn gần 100 món ăn, nhà hàng Hiệp Thương chắc chắn sẽ
              chinh phục được vị giác của bạn chỉ sau 1 lần thử!
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }

  onViewMore = () => {
    const { page, products } = this.state;
    ApiProduct.getAllProduct(page + 1, 10, this.state.product_type_id).then(
      (res) => {
        if (Array.isArray(res.data.data)) {
          let newProducts = res.data.data;
          this.setState({
            products: [...products, ...res.data.data],
            page: page + 1,
            hasViewMore: newProducts.length === 10,
          });
        }
      }
    );
  };

  onOrderClick = (item) => {
    console.log("{RNLog} TCL --> this.props:", this.props);
    this.props.dispatch({ type: ACTION_TYPE.ADD_ITEM_TO_CART, payload: item });
  };

  onClickChangeType = (product_type_id) => () => {
    this.setState({ page: 1, product_type_id, hasViewMore: true }, () => {
      ApiProduct.getAllProduct(this.state.page, 10, product_type_id).then(
        (res) => {
          if (Array.isArray(res.data.data)) {
            this.setState({
              products: res.data.data,
            });
          }
        }
      );
    });
  };

  onClickCarousel = () => {
    console.log("{RNLog} TCL --> this.props:", this.props);
  };
}

export default withContext(HomePage);
