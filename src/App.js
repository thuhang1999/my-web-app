import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigator from "./components/commons/Navigator";
import ContactPage from "./pages/Contact/ContactPage";
import HomePage from "./pages/Home/HomePage";
import MembershipPage from "./pages/Membership/MembershipPage";
import MenuPage from "./pages/Menu/MenuPage";
import SalesPage from "./pages/Sales/SalesPage";
import StoreInfoPage from "./pages/StoreInfo/StoreInfoPage";
import UserPage from "./pages/User/UserPage";

function App() {
  return (
    <BrowserRouter>
      <Navigator />
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route index element={<HomePage />} />
        </Route>
        <Route path="menu" element={<MenuPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="membership" element={<MembershipPage />} />
        <Route path="sales" element={<SalesPage />} />
        <Route path="info" element={<StoreInfoPage />} />
        <Route path="user" element={<UserPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
