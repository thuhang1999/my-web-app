import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default class ExtraLgProductItem extends Component {
  render() {
    const { data: product } = this.props;
    return (
      <div className="extra-lg-product-item">
        <Card
          style={{
            width: "100%",
            margin: "1rem",
            height: "100%",
            flexDirection: "row",
          }}
        >
          <Card.Img
            variant="top"
            src={product.image}
            style={{ width: "300px", height: "300px", aspectRatio: 1 }}
          />
          <Card.Body className="extra-lg-product-item-content">
            <div className="extra-lg-product-item-top">
              <Card.Title className="extra-lg-product-item-title">
                {product.product_name}
              </Card.Title>
              <Card.Text className="extra-lg-product-item-desc">
                {product.description}
              </Card.Text>
            </div>
            <div className="extra-lg-product-item-bottom">
              <Card.Text className="extra-lg-product-item-price">
                Giá: {Number(product.price).toLocaleString("vi")} đ
              </Card.Text>
              <Button variant="success" onClick={this.props.onClick}>
                Thêm vào giỏ hàng
              </Button>
            </div>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
