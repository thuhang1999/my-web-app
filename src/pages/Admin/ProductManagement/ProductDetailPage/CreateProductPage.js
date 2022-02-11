import React, { Component } from 'react'
import { Button, Dropdown, Form } from 'react-bootstrap'

export default class CreateProductPage extends Component {
    render() {
        return (
            <div>
                <h1>Thêm sản phẩm mới</h1>
                <div>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Tên sản phẩm</Form.Label>
                        <Form.Control type="text" placeholder="Nhập tên sản phẩm" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Giá bán</Form.Label>
                        <Form.Control type="number" placeholder="Nhập giá bán" />
                    </Form.Group>

                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Tải lên hình ảnh sản phẩm</Form.Label>
                        <Form.Control type="file" />
                    </Form.Group>


                    <div class="form-horizontal text-right">
                        <label for="SortBy">Chọn loại sản phẩm</label>
                        <select name="SortBy" id="SortBy">
                            <option value="manual">Tùy chọn</option>
                            <option value="best-selling">Sản phẩm bán chạy</option>
                            <option value="title-ascending">Theo bảng chữ cái từ A-Z</option>
                            <option value="title-descending">Theo bảng chữ cái từ Z-A</option>
                            <option value="price-ascending">Giá từ thấp tới cao</option>
                            <option value="price-descending">Giá từ cao tới thấp</option>
                            <option value="created-descending">Mới nhất</option>
                            <option value="created-ascending">Cũ nhất</option>
                        </select>
                    </div>

                    <Form>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Mô tả sản phẩm</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                    </Form>

                    <div>
                        <Button variant="primary" type="submit">
                            Thêm
                        </Button>
                        <Button variant="link">Trở về</Button>
                    </div>
                </div>
            </div>
        )
    }
}

