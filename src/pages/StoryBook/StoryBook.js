import React, { Component } from "react";
import SalesPage from "../Sales/SalesPage";
import LoginPage from "../User/LoginPage";
import SignUpPage from "../User/SignUpPage";
import QuenMK from "../User/QuenMK";
import UserPage from "../User/UserPage";
import ContactPage from "../Contact/ContactPage";
import BottomNavigator from "src/components/commons/BottomNavigator";
import MenuPage from "../Menu/MenuPage";
import StoreInfoPage from "../StoreInfo/StoreInfoPage";
import AdminPage from "../Admin/AdminPage";
import OrderManagement from "../Admin/OrderManagement/OrderManagement";
import ContactManagement from "../Admin/ContactManagement/ContactManagement";
import CustomerManagement from "../Admin/CustomerManagement/CustomerManagement";
import AdProductDetailPage from "../Admin/ProductManagement/ProductDetailPage/ProductManagerDetailPage";
import OrderManagementDetailPage from "../Admin/OrderManagement/OrderManagementDetailPage/OrderManagementDetailPage";
import BookOrderManagementDetailPage from "../Admin/OrderManagement/OrderManagementDetailPage/BookOrderManagementDetailPage";
import CreateOrderPage from "../Admin/OrderManagement/OrderManagementDetailPage/CreateOrderPage";
import CreateCustomerPage from "../Admin/CustomerManagement/CreateCustomerPage";
import CreateBookOrderPage from "../Admin/OrderManagement/OrderManagementDetailPage/CreateBookOrderPage";
import CheckoutPage from "../Checkout/CheckoutPage";
import CreateProductPage from "../Admin/ProductManagement/ProductDetailPage/CreateProductPage";
import CreateContactPage from "../Admin/ContactManagement/ContactManagementDetailPage/CreateContactPage";



export default class StoryBook extends Component {
  render() {
    return <CheckoutPage />;
  }
}
