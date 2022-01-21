import React, { Component } from "react";
import {
  Breadcrumb,
  Button,
  Card,
  CardGroup,
  Pagination,
} from "react-bootstrap";
import Api from "src/apis";
import BottomNavigator from "src/components/commons/BottomNavigator";
import Navigator from "src/components/commons/Navigator";
import OrderGroupButton from "src/components/commons/OrderGroupButton";
import ExtraLgProductItem from "src/components/items/products/ExtraLgProductItem";
import { withParams } from "src/utils/commons/withParams";

class MenuPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      productTypes: [],
    };
  }

  componentDidMount() {
    let searchName = this.props.params.get("name");
    if (searchName) {
      Api.searchProducts(searchName).then((res) => {
        let products = res.data?.data;
        if (Array.isArray(products)) {
          this.setState({ products });
        }
      });
    } else {
      Api.fetchProducts({
        per_page: 16,
      }).then((res) => {
        let products = res.data?.data;
        if (Array.isArray(products)) {
          this.setState({ products });
        }
      });
    }

    Api.fetchProductTypes().then((res) => {
      let productTypes = res.data?.data;
      if (Array.isArray(productTypes)) {
        this.setState({ productTypes: productTypes.slice(0, 6) });
      }
    });
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    let name = this.props.params.get("name");
    let searchName = nextProps.params.get("name");
    if (name !== searchName && searchName) {
      Api.searchProducts(searchName).then((res) => {
        let products = res.data?.data;
        if (Array.isArray(products)) {
          this.setState({ products });
        }
      });
    }
  }

  render() {
    return (
      <div className="menu">
        <Navigator />
        <OrderGroupButton />
        {this.renderMealType()}
        {this.renderMainContent()}
        <Pagination className="pagination-container">
          {/* <Pagination.First /> */}
          {/* <Pagination.Prev /> */}
          <Pagination.Item active>{1}</Pagination.Item>

          <Pagination.Item>{2}</Pagination.Item>
          <Pagination.Item>{3}</Pagination.Item>
          <Pagination.Item>{4}</Pagination.Item>
          <Pagination.Ellipsis />
          <Pagination.Item>{8}</Pagination.Item>
          {/* <Pagination.Item disabled>{14}</Pagination.Item> */}

          {/* <Pagination.Ellipsis />
        <Pagination.Item>{20}</Pagination.Item> */}
          {/* <Pagination.Next /> */}
          <Pagination.Last />
        </Pagination>
        <BottomNavigator />
      </div>
    );
  }

  renderMainContent() {
    const { products, productTypes } = this.state;

    return (
      <Card className="list">
        <Card.Body>
          <Breadcrumb>
            <Breadcrumb.Item href="#" c>
              Trang chủ
            </Breadcrumb.Item>
            <Breadcrumb.Item href="/menu">Tất cả sản phẩm</Breadcrumb.Item>
            <Breadcrumb.Item active>Sản phẩm bán chạy</Breadcrumb.Item>
          </Breadcrumb>
          <div className="list-product-item">
            <CardGroup>
              {products.map((e) => (
                <ExtraLgProductItem data={e} />
              ))}
            </CardGroup>
          </div>
        </Card.Body>
      </Card>
    );
  }

  renderMealType() {
    const { products, productTypes } = this.state;
    console.log(
      `{RNLog} ~ file: MenuPage.js ~ line 98 ~ MenuPage ~ renderMealType ~ productTypes`,
      productTypes
    );
    return (
      <div className="meal-type-gp-btn">
        {productTypes.map((e) => (
          <>
            <Button
              className="meal-type-btn"
              onClick={this.onClickChangeType(e.product_type_id)}
            >
              {e.product_type_name}
            </Button>{" "}
          </>
        ))}
      </div>
    );
  }

  onClickChangeType = (product_type_id) => () => {
    console.log("{RNLog} TCL --> product type id:", product_type_id);
  };
}

export default withParams(MenuPage);
