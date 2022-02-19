import React, { Component } from "react";
import { Button } from "react-bootstrap";
import moment from "moment";
import { ApiBookOrder } from "src/apis";
import { format } from "src/utils/commons/Number";
import { BOOK_ORDER_STATUS } from "src/types/CommonTypes";
import { withContext } from "src/utils/commons/withContext";
import { withRouter } from "src/utils/commons/withRouter";

class BookOrderManagerment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      orders: [],
      page: 1,
      hasViewMore: false,
    };
  }

  componentDidMount() {
    this.fetchData(this.state.page);
  }

  fetchData = (page) => {
    ApiBookOrder.getAll(page, 10).then((res) => {
      console.log(
        `{RNLog} ~ file: BookOrderManagerment.js ~ line 21 ~ BookOrderManagerment ~ ApiBookOrder.getAll ~ res`,
        res
      );
      if (res.data.success && Array.isArray(res.data.data)) {
        this.setState({
          isLoaded: true,
          orders: res.data.data,
          page: page + 1,
          hasViewMore: res.data.data.length === 10,
        });
      }
    });
  };

  render() {
    return (
      <div>
        <h1>Quản lý đơn đặt bàn</h1>
        <br></br>
        <div>
          <>
            <Button variant="secondary" href={"/book-order/create"}>
              Thêm đơn đặt bàn
            </Button>{" "}
            {/* <Button variant="secondary">Thêm đơn đặt bàn</Button>{" "} */}
            <Button variant="link" href={"/admin"}>
              Thoát
            </Button>
          </>
        </div>
        <br></br>
        <div className="tb_admin">
          <table className="tb_admin" border="1">
            <tr>
              <th colspan="7">DANH SÁCH ĐƠN ĐẶT BÀN</th>
            </tr>
            <tr>
              <th class="text-center">Mã đơn hàng</th>
              <th class="text-center">Tên khách hàng</th>
              <th class="text-center">Thời gian đặt hàng</th>
              <th class="text-center">Số tiền cọc</th>
              <th class="text-center">Trạng thái</th>
              <th class="text-center">Xem chi tiết</th>
              <th colSpan={3} class="text-center">
                Tác vụ
              </th>
            </tr>
            {this.state.orders.map(this.renderOrderItem)}
          </table>
        </div>

        <br></br>
        <Button className="text-center" onClick={this.onClickViewMore}>
          Xem thêm
        </Button>
      </div>
    );
  }

  renderOrderItem = (item) => {
    return (
      <tr key={item?.book_order_id}>
        <td class="text-center">{item?.book_order_id}</td>
        <td class="text-center">{item?.user?.username}</td>
        <td class="text-center">
          {moment(item?.created_at).format("DD/MM/YYYY HH:mm")}
        </td>
        <td class="text-center">{format(item?.deposit)} đ</td>
        <td class="text-center">{BOOK_ORDER_STATUS[item?.status]}</td>
        <td class="text-center">
          <Button variant="link" onClick={this.onClickEditOrderItem(item)}>
            Xem chi tiết
          </Button>
        </td>
        <td class="text-center">
          <Button variant="link" onClick={this.onClickEditOrderItem(item)}>
            Sửa
          </Button>
          {/* <Button variant="link" onClick={this.onClickDeleteOrderItem(item)}>
            Xóa
          </Button> */}
        </td>
      </tr>
    );
  };

  onClickEditOrderItem = (item) => () => {
    this.props.navigate(`/admin/book-orders/detail/${item.book_order_id}`);
  };

  onClickDeleteOrderItem = (item) => () => {
    if (window.confirm("Bạn có chắc chắn muốn xóa đơn hàng này?")) {
      ApiBookOrder._delete(item?.book_order_id).then((res) => {
        if (res.data.success) {
          alert("Xóa thành công");
          let index = this.state.orders.findIndex(
            (e) => e.book_order_id === item.book_order_id
          );
          if (index > -1) {
            let newOrders = [...this.state.orders];
            newOrders.splice(index, 1);
            this.setState({ orders: newOrders });
          }
        } else {
          alert("Có lỗi xảy ra. Vui lòng thử lại");
        }
      });
    }
  };

  onClickViewMore = () => {
    this.fetchData(this.state.page);
  };
}

export default withRouter(BookOrderManagerment);
