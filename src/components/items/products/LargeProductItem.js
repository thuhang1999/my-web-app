import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default class LargeProductItem extends Component {
  render() {
    const { data: product } = this.props;
    return (
      <div>
        <Card style={{ width: "18rem", margin: "1rem" }}>
          <Card.Img
            variant="top"
            src={product.image}
            style={{ width: "18rem", height: "12rem" }}
          />
          <Card.Body>
            <Card.Title>{product.product_name}</Card.Title>
            <Card.Text className="lg-product-item-desc">
              {product.description}
            </Card.Text>
            <Card.Text className="lg-product-item-price">
              Giá: {Number(product.price).toLocaleString("vi")} đ
            </Card.Text>
            <Button variant="primary" onClick={this.props.onClick}>
              Thêm vào giỏ hàng
            </Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
