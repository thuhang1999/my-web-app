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


export default class StoryBook extends Component {
  render() {
    return <StoreInfoPage />;
  }
}
