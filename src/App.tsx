import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import PointOfSale from "./pages/PointOfSale";
import Login from "./pages/Login";
import CatalogDashboard from "./pages/CatalogDashboard";
import MyAccountPage from "./pages/SideBarPage";
import BODashboard from "./pages/BusinessOwnerDashboard";
import KitchenDisplaySystem from "./pages/KitchenDisplaySystem";
import AddProduct from "./pages/AddProduct";
import TakeOrder from "./pages/takeOrderMain";
import OdersPage from "./pages/POSOrdersPage";
import OrderHistory from "./pages/OrderHistory";
import OrderActivity from "./pages/OrderActivity";
import PaymentOptions from "./pages/PaymentOptions";
export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/catalogdashboard" element={<CatalogDashboard />} />
      <Route path="/  " element={<Dashboard />} />
      <Route path="/pos" element={<PointOfSale />} />
      <Route path="/" element={<MyAccountPage />} />
       <Route path="/bodashboard" element={<BODashboard />} />
       <Route path="/kds" element={<KitchenDisplaySystem />} />
       <Route path="/takeorder" element={<TakeOrder />} />
      <Route path="/orderspage" element={<OdersPage />} />
       <Route path="/addproduct" element={<AddProduct/>} />
       <Route path="/orderhistory" element={<OrderHistory/>} />
        <Route path="/orderactivity" element={<OrderActivity/>} />
        <Route path="/paymentoptions" element={<PaymentOptions/>} />
    </Routes>
  );
}

