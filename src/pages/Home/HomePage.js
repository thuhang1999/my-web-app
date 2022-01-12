import React, { Component } from "react";
import Navigator from "src/components/commons/Navigator";
import OrderGroupButton from "src/components/commons/OrderGroupButton";
import Carousel from "react-bootstrap/Carousel";
import slider1 from "../../assets/background/ms_banner_img2.jpeg";
import slider2 from "../../assets/background/ms_banner_img1.jpeg";
export default class HomePage extends Component {
  render() {
    return (
      <div>
        {this.renderCarousel()}
        <OrderGroupButton />
      </div>
    );
  }

  renderCarousel() {
    return (
      <Carousel>
        <Carousel.Item>
          <img className={"d-block w-100"} src={slider1} alt="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className={"d-block w-100"} src={slider2} alt="Second slide" />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}
