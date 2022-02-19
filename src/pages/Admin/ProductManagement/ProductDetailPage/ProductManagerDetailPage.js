/* eslint-disable no-restricted-globals */
import React, { Component } from "react";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import Api, { ApiProduct } from "src/apis";
import { withParams } from "src/utils/commons/withParams";
import { withRouter } from "src/utils/commons/withRouter";

class ProductManagerDetailPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null,
      productTypes: [],
    };
  }

  componentDidMount() {
    let productId = this.props.eParams?.id;
    ApiProduct.getProductById(productId).then((res) => {
      if (res.data.data) {
        this.setState({
          product: res.data.data,
        });
      }
    });
    ApiProduct.getAllProductTypes().then((res) => {
      if (res.data.success && Array.isArray(res.data.data)) {
        this.setState({
          productTypes: res.data.data,
        });
      }
    });
  }

  render() {
    console.log("{RNLog} TCL --> productType:", this.state.productTypes);
    return (
      <div className="manager-detail-page">
        <h1>Chi tiết sản phẩm</h1>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Mã sản phẩm</Form.Label>
            <Form.Control
              value={this.state.product?.product_id}
              disabled
              type="text"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Tên sản phẩm</Form.Label>
            <Form.Control
              value={this.state.product?.product_name}
              type="text"
              placeholder="Nhập tên sản phẩm"
              onChange={this.onChangeProductName}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Mô tả sản phẩm</Form.Label>
            <Form.Control
              value={this.state.product?.description}
              type="text"
              rows="3"
              as="textarea"
              placeholder="Nhập mô tả sản phẩm"
              onChange={this.onChangeDescription}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Giá sản phẩm (đơn vị: VNĐ)</Form.Label>
            <Form.Control
              value={this.state.product?.price}
              type="text"
              placeholder="Nhập giá sản phẩm"
              onChange={this.onChangePrice}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Loại sản phẩm</Form.Label>
            <Form.Select onChange={this.onChangeProductTypeId}>
              {this.state.productTypes.map((e) => (
                <option
                  value={e.product_type_id}
                  selected={
                    this.state.product?.product_type_id === e.product_type_id
                  }
                >
                  {e.product_type_name}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Đường link hình ảnh sản phẩm</Form.Label>
            <Form.Control
              value={this.state.product?.image}
              type="text"
              placeholder="Nhập đường link hình ảnh sản phẩm"
              onChange={this.onChangeImageUrl}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Hình ảnh sản phẩm</Form.Label>
            <br></br>
            <img
              className="img"
              alt="..."
              src={this.state.product?.image}
            ></img>
          </Form.Group>
        </Form>
        <div>
          <Button variant="primary" type="submit" onClick={this.onClickUpdate}>
            Sửa
          </Button>{" "}
          <Button
            variant="primary"
            type="submit"
            onClick={this.onClickDeleteProduct}
          >
            {" "}
            Xóa
          </Button>
          <Button variant="link" onClick={this.onClickBack}>
            Quay lại
          </Button>
        </div>
        <br></br>
      </div>
    );
  }

  onChangeImageUrl = (e) => {
    this.setState({
      product: {
        ...this.state.product,
        image: e.target.value,
      },
    });
  };

  onChangeProductName = (e) => {
    this.setState({
      product: {
        ...this.state.product,
        product_name: e.target.value,
      },
    });
  };

  onChangeDescription = (e) => {
    this.setState({
      product: {
        ...this.state.product,
        description: e.target.value,
      },
    });
  };

  onChangePrice = (e) => {
    this.setState({
      product: {
        ...this.state.product,
        price: e.target.value,
      },
    });
  };

  onChangeProductTypeId = (e) => {
    this.setState({
      product: {
        ...this.state.product,
        product_type_id: e.target.value,
      },
    });
  };

  onClickUpdate = () => {
    ApiProduct.updateProductById(
      this.state.product?.product_id,
      this.state.product
    ).then((res) => {
      if (res.data.success) {
        alert("Cập nhật thành công");
      } else {
        alert("Cập nhật thất bại");
      }
    });
  };

  onClickDeleteProduct = () => {
    if (confirm("Bạn có chắc chắn muốn xoá sản phẩm này không?")) {
      ApiProduct.deleteProductById(this.state.product?.product_id).then(
        (res) => {
          if (res.data.success) {
            alert("Xóa thành công");
            this.props.navigate("/admin/products");
          } else {
            alert("Xóa thất bại");
          }
        }
      );
    }
  };

  onClickBack = () => {
    this.props.navigate("/admin/products");
  };
}

export default withRouter(withParams(ProductManagerDetailPage));
