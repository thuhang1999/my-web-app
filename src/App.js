import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigator from "./components/commons/Navigator";
import AdminPage from "./pages/Admin/AdminPage";
import ContactManagement from "./pages/Admin/ContactManagement/ContactManagement";
import ContactManagementDetailPage from "./pages/Admin/ContactManagement/ContactManagementDetailPage/ContactManagementDetailPage";
import CreateContactPage from "./pages/Admin/ContactManagement/ContactManagementDetailPage/CreateContactPage";
import CreateCustomerPage from "./pages/Admin/CustomerManagement/CreateCustomerPage";
import CustomerManagement from "./pages/Admin/CustomerManagement/CustomerManagement";
import CustomerManagementDetail from "./pages/Admin/CustomerManagement/CustomerManagementDetailPage/CustomerManagementDetail";
import BookOrderManagerment from "./pages/Admin/OrderManagement/BookOrderManagerment";
import OrderManagement from "./pages/Admin/OrderManagement/OrderManagement";
import BookOrderManagementDetailPage from "./pages/Admin/OrderManagement/OrderManagementDetailPage/BookOrderManagementDetailPage";
import CreateBookOrderPage from "./pages/Admin/OrderManagement/OrderManagementDetailPage/CreateBookOrderPage";
import OrderManagementDetailPage from "./pages/Admin/OrderManagement/OrderManagementDetailPage/OrderManagementDetailPage";
import CreateProductPage from "./pages/Admin/ProductManagement/ProductDetailPage/CreateProductPage";
import ProductManagerDetailPage from "./pages/Admin/ProductManagement/ProductDetailPage/ProductManagerDetailPage";
import ProductManagement from "./pages/Admin/ProductManagement/ProductManagement";
import CartPage from "./pages/Cart/CartPage";
import BookOrderPage from "./pages/Checkout/BookOrderPage";
import CheckoutPage from "./pages/Checkout/CheckoutPage";
import ContactPage from "./pages/Contact/ContactPage";
import HomePage from "./pages/Home/HomePage";
import MembershipPage from "./pages/Membership/MembershipPage";
import MenuPage from "./pages/Menu/MenuPage";
import SalesPage from "./pages/Sales/SalesPage";
import StoreInfoPage from "./pages/StoreInfo/StoreInfoPage";
import ForgetPassword from "./pages/User/ForgotPassword";
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
        <Route path="admin" element={<AdminPage />} />
        <Route path="admin/users" element={<CustomerManagement />} />
        <Route
          path="admin/users/detail/:id"
          element={<CustomerManagementDetail />}
        />
        <Route path="admin/users/create" element={<CreateCustomerPage />} />

        <Route path="admin/products" element={<ProductManagement />} />
        <Route
          path="admin/products/detail/:id"
          element={<ProductManagerDetailPage />}
        />
        <Route path="admin/products/create" element={<CreateProductPage />} />
        <Route path="admin/orders" element={<OrderManagement />} />
        <Route
          path="admin/orders/detail/:id"
          element={<OrderManagementDetailPage />}
        />
        <Route />
        <Route path="book_orders/create" element={<CreateBookOrderPage />} />
        <Route path="user/forgot-password" element={<ForgetPassword />} />
        <Route
          path="admin/contacts/:id"
          element={<ContactManagementDetailPage />}
        />
        <Route path="admin/contacts" element={<ContactManagement />} />
        <Route path="admin/contacts/create" element={<CreateContactPage />} />
        <Route path="book-order/create" element={<BookOrderPage />} />
        <Route path="user/detail" element={<UserPage />} />
        <Route path="admin/book-orders" element={<BookOrderManagerment />} />
        <Route
          path="admin/book-orders/detail/:id"
          element={<BookOrderManagementDetailPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
