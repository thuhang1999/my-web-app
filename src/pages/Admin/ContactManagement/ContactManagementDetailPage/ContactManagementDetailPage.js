/* eslint-disable no-script-url */
import React, { Component } from "react";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import { ApiContact } from "src/apis";
import { withParams } from "src/utils/commons/withParams";
import moment from "moment";
import { withRouter } from "src/utils/commons/withRouter";

class ContactManagementDetailPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contact: {},
    };
  }

  componentDidMount() {
    const contactId = this.props.eParams?.id;
    this.fetchData(contactId);
  }

  fetchData = (id) => {
    ApiContact.getById(id).then((res) => {
      if (res.data.success) {
        this.setState({ contact: res.data.data });
      }
    });
  };

  render() {
    const { contact } = this.state;
    return (
      <div>
        <h1>Chi tiết thông tin liên hệ</h1>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Mã liên hệ</Form.Label>
            <Form.Control value={contact.contact_id} disabled type="text" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Tên khách hàng</Form.Label>
            <Form.Control
              value={contact.name}
              onChange={this.onChangeName}
              type="text"
              placeholder="Nhập họ tên của bạn"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Số điện thoại</Form.Label>
            <Form.Control
              type="text"
              value={contact.phone_number}
              onChange={this.onChangePhone}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Ngày tạo</Form.Label>
            <Form.Control
              type="datetime-local"
              value={moment(contact.created_at).format("YYYY-MM-DDTHH:mm")}
              onChange={this.onChangeCreatedAt}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Nội dung liên hệ</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={contact.note}
              onChange={this.onChangeContent}
            />
          </Form.Group>
        </Form>
        <Button variant="primary" onClick={this.onClickEdit}>
          Sửa
        </Button>
        <Button variant="primary" onClick={this.onClickDelete}>
          Xóa
        </Button>
        <Button variant="link" href="javascript:history.back()">
          Thoát
        </Button>
        <br></br>
      </div>
    );
  }

  onChangeName = (event) => {
    this.setState({
      contact: {
        ...this.state.contact,
        name: event.target.value,
      },
    });
  };

  onChangePhone = (event) => {
    this.setState({
      contact: {
        ...this.state.contact,
        phone_number: event.target.value,
      },
    });
  };

  onChangeCreatedAt = (event) => {
    this.setState({
      contact: {
        ...this.state.contact,
        created_at: event.target.value,
      },
    });
  };

  onChangeContent = (event) => {
    this.setState({
      contact: {
        ...this.state.contact,
        note: event.target.value,
      },
    });
  };

  onClickEdit = () => {
    const { contact } = this.state;

    ApiContact.update(contact.contact_id, {
      ...contact,
      created_at: moment(contact.created_at).toDate(),
    }).then((res) => {
      if (res.data.success) {
        alert("Sửa thông tin liên hệ thành công");
        this.props.navigate("/admin/contacts");
      }
    });
  };

  onClickDelete = () => {
    const { contact } = this.state;
    ApiContact._delete(contact.contact_id).then((res) => {
      if (res.data.success) {
        alert("Xóa liên hệ thành công");
        this.props.navigate("/admin/contacts");
      }
    });
  };
}

export default withRouter(withParams(ContactManagementDetailPage));
