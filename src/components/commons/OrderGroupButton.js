import React, { Component } from "react";
import iconOrderTable from "../../assets/icons/hservice_icon1.png";
import iconOrderShip from "../../assets/icons/hservice_icon2.png";

export default class OrderGroupButton extends Component {
  render() {
    return (
      <div className="order-group">
        <div className="order-group-item">
          <div className="order-group-item-img">
            <a href="/book-order/create" target="">
              <img src={iconOrderTable} alt="Đặt bàn" className="img" />
            </a>
          </div>
          <div className="order-group-item-title">
            <a href="/book-order/create">Đặt bàn</a>
          </div>
        </div>

        <div className="order-group-item">
          <div className="order-group-item-img">
            <a href="/menu" target="">
              <img src={iconOrderShip} alt="Đặt bàn" className="img" />
            </a>
          </div>
          <div className="order-group-item-title">
            <a href="/menu">Đặt ship</a>
          </div>
        </div>
      </div>
    );
  }
}
