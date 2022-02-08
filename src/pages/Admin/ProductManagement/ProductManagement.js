import React, { Component } from "react";
import { Button, Col, Dropdown, Form } from "react-bootstrap";
import { ApiProduct } from "src/apis";
import { withRouter } from "src/utils/commons/withRouter";

class ProductManagement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    ApiProduct.getAllProduct().then((res) => {
      console.log("{RNLog} TCL --> res:", res);
      if (Array.isArray(res.data.data)) {
        this.setState({
          products: res.data.data,
        });
      }
    });
  }

  render() {
    return (
      <div>
        <h1>Quản lý sản phẩm</h1>
        <div>
          <Col sm={10}>
            <Form.Control type="text" placeholder="Tìm kiếm..." />
          </Col>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Tìm kiếm theo
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Tên sản phẩm</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Mã sản phẩm</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Sắp xếp theo
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Mới nhất</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Cũ nhất</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <br></br>
        <div>
          <>
            <Button variant="secondary">Thêm sản phẩm</Button>{" "}
            <Button variant="link">Thoát</Button>
          </>
        </div>
        <br></br>
        <div className="tb_admin">
          <table className="tb_admin" border="1">
            <tr>
              <th class="text-center">Mã sản phẩm</th>
              <th class="text-center">Tên sản phẩm</th>
              <th class="text-center">Hình ảnh sản phẩm</th>
              <th class="text-center">Giá sản phẩm</th>
              <th class="text-center">Loại sản phẩm</th>
              <th class="text-center">Ngày thêm</th>
              <th class="text-center">Xem chi tiết</th>
              <th colSpan={3} class="text-center">
                Tác vụ
              </th>
            </tr>

            {this.state.products.map(this.renderProductItem)}
          </table>
        </div>
        <br></br>
      </div>
    );
  }

  renderProductItem = (item) => {
    return (
      <tr key={item.product_id}>
        <td class="text-center">{item.product_id}</td>
        <td class="text-center">{item.product_name}</td>
        <td class="text-center">
          <img
            alt="..."
            src={item.image}
            style={{ width: "100px", height: "100px" }}
          />
        </td>
        <td class="text-center">{item.price}</td>
        <td class="text-center">{item.product_type_id}</td>
        <td class="text-center">{item.created_at}</td>

        <td class="text-center">
          <Button variant="link" onClick={this.onClickEditProduct(item)}>
            Xem chi tiết
          </Button>
        </td>

        <td class="text-center">
          <Button variant="link" onClick={this.onClickEditProduct(item)}>
            Sửa
          </Button>
          <Button variant="link" onClick={this.onClickDeleteProduct(item)}>
            Xóa
          </Button>
        </td>
      </tr>
    );
  };

  onClickEditProduct = (item) => () => {
    console.log("{RNLog} TCL --> call:", item);
    this.props.navigate(`/admin/products/detail/${item.product_id}`);
  };

  onClickDeleteProduct = (item) => () => {
    console.log(
      `{RNLog} ~ file: ProductManagement.js ~ line 171 ~ ProductManagement ~ onClickDeleteProduct ~ item`,
      item
    );
  };
}

export default withRouter(ProductManagement);
