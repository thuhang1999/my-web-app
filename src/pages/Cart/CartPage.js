import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import BottomNavigator from "src/components/commons/BottomNavigator";
import Navigator from "src/components/commons/Navigator";
import { ACTION_TYPE } from "src/stores/AppStore";
import { format } from "src/utils/commons/Number";
import { withContext } from "src/utils/commons/withContext";
import { withRouter } from "src/utils/commons/withRouter";

class CartPage extends Component {
  render() {
    return (
      <div>
        <Navigator />
        <div className="main-container">{this.renderMainContent()}</div>
        <BottomNavigator />
      </div>
    );
  }

  renderMainContent() {
    const carts = this.props.state.carts;

    return (
      <div>
        <h1>Giỏ hàng</h1>
        <div className="cart-item-container">
          <table className="tb_cart" border="1">
            {this.renderCartHeader()}
            {carts.map(this.renderCartItem)}
            <tr>
              <Button variant="success">Thêm đồ</Button>
            </tr>
          </table>
          {this.renderSumary()}
        </div>
        <div className="cart-bottom">
          <Button
            variant="success"
            className="order-btn"
            onClick={this.onClickOrder}
          >
            Thanh toán
          </Button>
          <Button variant="danger" className="order-btn">
            Đặt bàn
          </Button>
        </div>
      </div>
    );
  }

  /**
   * Dòng tiêu đề của giỏ hàng
   */
  renderCartHeader = () => {
    return (
      <tr>
        <th></th>
        <th></th>
        <th>Đồ ăn</th>
        <th>Đơn giá</th>
        <th colSpan="3">Số lượng</th>

        <th>Thành tiền</th>
      </tr>
    );
  };

  /**
   * Các sản phẩm trong giỏ hàng
   */
  renderCartItem = (item) => {
    return (
      <tr key={item.product_id}>
        <td>
          <Button variant="link">Xóa</Button>
        </td>
        <td>
          <img className="img" alt={item?.product_name} src={item?.image}></img>
        </td>
        <td>{item?.product_name}</td>
        <td>{format(item?.price)}</td>
        <td colSpan="3">
          <Button
            variant="light"
            className="cart-item-btn-inc"
            onClick={this.onDescItemClick(item)}
          >
            -
          </Button>
          {item?.amount}
          <Button
            variant="light"
            className="cart-item-btn-inc"
            onClick={this.onIncItemClick(item)}
          >
            +
          </Button>
        </td>
        <td>{format(item?.price * item?.amount)}</td>
      </tr>
    );
  };

  /**
   * Tổng tiền
   */

  renderSumary() {
    let amount = this.props.state.carts.reduce(
      (prev, e) => prev + e.amount * e.price,
      0
    );
    return (
      <div className="cart-summary">
        <span className="sum-txt">
          Tổng tiền: <span className="sum-txt-value">{format(amount)} đ</span>
        </span>

        <p>Địa chỉ: Bãi Á 1 - TT. Chợ Chu - Định Hóa - Thái Nguyên</p>
      </div>
    );
  }

  onDescItemClick = (item) => () => {
    this.props.dispatch({
      type: ACTION_TYPE.REMOVE_ITEM_TO_CART,
      payload: item,
    });
  };

  onIncItemClick = (item) => () => {
    this.props.dispatch({
      type: ACTION_TYPE.ADD_ITEM_TO_CART,
      payload: item,
    });
  };

  onClickOrder = () => {
    this.props.navigate("/checkout");
  };
}

export default withContext(withRouter(CartPage));
