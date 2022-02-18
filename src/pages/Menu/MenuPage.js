import React, { Component } from "react";
import {
  Breadcrumb,
  Button,
  Card,
  CardGroup,
  Pagination,
} from "react-bootstrap";
import Api, { ApiProduct } from "src/apis";
import BottomNavigator from "src/components/commons/BottomNavigator";
import Navigator from "src/components/commons/Navigator";
import OrderGroupButton from "src/components/commons/OrderGroupButton";
import ExtraLgProductItem from "src/components/items/products/ExtraLgProductItem";
import { ACTION_TYPE } from "src/stores/AppStore";
import PaginationComponent from "react-bootstrap-pagination-logic";
import { withContext } from "src/utils/commons/withContext";
import { withParams } from "src/utils/commons/withParams";

class MenuPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      productTypes: [],
      page: 1,
      product_type_id: null,
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
      ApiProduct.getAllProduct(1, 16).then((res) => {
        let products = res.data?.data;
        if (Array.isArray(products)) {
          this.setState({ products });
        }
      });
    }

    ApiProduct.getAllProductTypes().then((res) => {
      let productTypes = res.data?.data;
      if (Array.isArray(productTypes)) {
        this.setState({ productTypes: productTypes });
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
        <PaginationComponent
          current_page={this.state.page}
          last_page={5}
          position="center"
          handlePageChange={this.handlePageChange}
        />
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
                <ExtraLgProductItem data={e} onClick={this.onOrderClick} />
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

  handlePageChange = (page) => {
    ApiProduct.getAllProduct(page, 16).then((res) => {
      let products = res.data?.data;
      if (Array.isArray(products)) {
        this.setState({ products, page }, () => {
          window.scrollTo(0, 0);
        });
      }
    });
  };

  onOrderClick = (item) => {
    this.props.dispatch({ type: ACTION_TYPE.ADD_ITEM_TO_CART, payload: item });
  };

  onClickChangeType = (product_type_id) => () => {
    this.setState({ page: 1 }, () => {
      ApiProduct.getAllProduct(1, 16, product_type_id).then((res) => {
        let products = res.data?.data;
        if (Array.isArray(products)) {
          this.setState({ products });
        }
      });
    });
  };
}

export default withParams(withContext(MenuPage));
