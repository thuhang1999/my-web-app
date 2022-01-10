import React, { Component } from "react";
import iconOrderTable from "../../assets/icons/hservice_icon1.png";
import iconOrderShip from "../../assets/icons/hservice_icon2.png";

export default class OrderGroupButton extends Component {
  render() {
    return (
      <div class="order-group">
        <div class="order-group-item">
          <div class="order-group-item-img">
            <a href="/order/book-table" target="">
              <img src={iconOrderTable} alt="Đặt bàn" class="img" />
            </a>
          </div>
          <div class="order-group-item-title">
            <a href="/order/book-table">Đặt bàn</a>
          </div>
        </div>

        <div class="order-group-item">
          <div class="order-group-item-img">
            <a href="/order/book-table" target="">
              <img src={iconOrderShip} alt="Đặt bàn" class="img" />
            </a>
          </div>
          <div class="order-group-item-title">
            <a href="/order/book-table">Đặt ship</a>
          </div>
        </div>
      </div>
    );
  }
}
