import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default class LargeProductItem extends Component {
  render() {
    const { data: product } = this.props;
    return (
      <div>
        <Card style={{ width: "18rem", margin: "1rem" }}>
          <Card.Img variant="top" src={product.img} />
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>{product.desc}</Card.Text>
            <Card.Text className="lg-product-item-price">
              Giá: {product.price} Đ
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
