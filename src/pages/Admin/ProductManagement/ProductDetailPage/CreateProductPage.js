import React, { Component } from "react";
import { Button, Dropdown, Form } from "react-bootstrap";
import Api, { ApiProduct } from "src/apis";

export default class CreateProductPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productTypes: [],
    };
    this.product_name = "";
    this.product_type_id = "ca";
    this.product_description = "";
    this.product_image_url = "";
    this.product_price = 0;
  }

  componentDidMount() {
    ApiProduct.getAllProductTypes().then((res) => {
      if (Array.isArray(res.data.data)) {
        this.setState({ productTypes: res.data.data });
      }
    });
  }

  render() {
    const { productTypes } = this.state;
    return (
      <div className="manager-detail-page">
        <h1>Thêm sản phẩm mới</h1>
        <div>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Tên sản phẩm</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nhập tên sản phẩm"
              onChange={this.onChangeProductName}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Giá bán</Form.Label>
            <Form.Control
              type="number"
              placeholder="Nhập giá bán"
              onChange={this.onChangeProductPrice}
            />
          </Form.Group>

          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Tải lên hình ảnh sản phẩm</Form.Label>
            <Form.Control type="file" onChange={this.onChangeProductImage} />
          </Form.Group>

          <div class="form-horizontal text-right">
            <label for="SortBy">Chọn loại sản phẩm</label>
            <select
              name="SortBy"
              id="SortBy"
              onChange={this.onChangeProductType}
            >
              {productTypes.map(this.renderProductTypeItem)}
            </select>
          </div>

          <Form>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Mô tả sản phẩm</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                onChange={this.onChangeProductDescription}
              />
            </Form.Group>
          </Form>

          <div>
            <Button variant="primary" type="submit" onClick={this.addProduct}>
              Thêm
            </Button>
            <Button variant="link" href="/admin/products">
              Trở về
            </Button>
          </div>
        </div>
      </div>
    );
  }

  renderProductTypeItem = (item) => {
    return (
      <option value={item.product_type_id}>{item.product_type_name}</option>
    );
  };

  onChangeProductName = (event) => {
    this.product_name = event.target.value;
  };

  onChangeProductPrice = (event) => {
    this.product_price = event.target.value;
  };

  onChangeProductDescription = (event) => {
    this.product_description = event.target.value;
  };

  onChangeProductImage = (event) => {
    console.log(
      `{RNLog} ~ file: CreateProductPage.js ~ line 99 ~ CreateProductPage ~ event`,
      event
    );
  };

  onChangeProductType = (event) => {
    this.product_type_id = event.target.value;
  };

  addProduct = (e) => {
    e.preventDefault();
    ApiProduct.createProduct({
      product_name: this.product_name,
      price: this.product_price,
      description: this.product_description,
      product_type_id: this.product_type_id,
      image: this.product_image_url,
    }).then((res) => {
      console.log(
        `{RNLog} ~ file: CreateProductPage.js ~ line 75 ~ CreateProductPage ~ res`,
        res
      );
    });
  };
}
