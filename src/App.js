import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigator from "./components/commons/Navigator";
import CartPage from "./pages/Cart/CartPage";
import CheckoutPage from "./pages/Checkout/CheckoutPage";
import ContactPage from "./pages/Contact/ContactPage";
import HomePage from "./pages/Home/HomePage";
import MembershipPage from "./pages/Membership/MembershipPage";
import MenuPage from "./pages/Menu/MenuPage";
import SalesPage from "./pages/Sales/SalesPage";
import StoreInfoPage from "./pages/StoreInfo/StoreInfoPage";
import LoginPage from "./pages/User/LoginPage";
import SignUpPage from "./pages/User/SignUpPage";
import UserPage from "./pages/User/UserPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route index element={<HomePage />} />
        </Route>
        <Route path="menu" element={<MenuPage />}>
          <Route path="search" element={<MenuPage />} />
        </Route>
        <Route path="contact" element={<ContactPage />} />
        <Route path="membership" element={<MembershipPage />} />
        <Route path="sales" element={<SalesPage />} />
        <Route path="info" element={<StoreInfoPage />} />
        <Route path="user" element={<UserPage />} />
        <Route path="user/sign-up" element={<SignUpPage />} />
        <Route path="user/login" element={<LoginPage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="checkout" element={<CheckoutPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
