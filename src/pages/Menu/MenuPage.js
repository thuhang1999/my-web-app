import React, { Component } from "react";
import { Breadcrumb, Button, Card, Pagination } from "react-bootstrap";

export default class MenuPage extends Component {
  render() {
    return <div className="menu">Menu
      <Card className="text-center">
        <Card.Header>Featured</Card.Header>
        <Card.Body>
          <Card.Title className="header-text">Tất cả sản phẩm</Card.Title>
          <Breadcrumb>
            <Breadcrumb.Item href="#" c>Trang chủ</Breadcrumb.Item>
            <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
              Tất cả sản phẩm
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Data</Breadcrumb.Item>
          </Breadcrumb>

          <div className="btn-group">
            {/* <Button className="btn" href="#">Link</Button> <Button type="submit">Button</Button>{' '} */}
            {/* <Button className="btn" as="input" type="button" value="Input" />{' '} */}
            {/* <Button className="btn" as="input" type="submit" value="Submit" />{' '} */}
            <Button className="btn" as="input" type="reset" value="Reset" />
            <Button className="btn" as="input" type="reset" value="Reset" />

          </div>
          <Card.Text>
            With supporting text below as a natural lead-in to additional content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      <Pagination>
        <Pagination.First />
        {/* <Pagination.Prev /> */}
        <Pagination.Item>{1}</Pagination.Item>


        <Pagination.Item>{2}</Pagination.Item>
        <Pagination.Item>{3}</Pagination.Item>
        <Pagination.Item active>{4}</Pagination.Item>
        <Pagination.Ellipsis />
        <Pagination.Item>{8}</Pagination.Item>
        {/* <Pagination.Item disabled>{14}</Pagination.Item> */}

        {/* <Pagination.Ellipsis />
        <Pagination.Item>{20}</Pagination.Item> */}
        {/* <Pagination.Next /> */}
        <Pagination.Last />
      </Pagination>
    </div>;
  }
}
