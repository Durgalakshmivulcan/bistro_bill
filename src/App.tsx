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
import CatalogProductsPage from "./pages/CatalogProducts";
import CatalogChannelMenu from "./pages/CatalogChannelMenu";
import CatalogConfiguration from "./pages/CatalogConfiguration";
import PaymentOptions from "./pages/businessSettingsTaxesPaymentsPaymentOptions";
import BusinessSettingsTaxesPaymentsTaxOptions from "./pages/businessSettingsTaxesPaymentsTax";
import Taxgroup from "./pages/businessSettingsTaxesPaymentsTaxGroup";
import BusinessProfile from "./pages/businessSettingsGeneralSettingsBusinessProfile.component";
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
       <Route path="/catalogproducts" element={<CatalogProductsPage/>} />
       <Route path="/orderhistory" element={<OrderHistory/>} />
        <Route path="/orderactivity" element={<OrderActivity/>} />
        <Route path="/catalogchannelmenu" element={<CatalogChannelMenu/>} />
        <Route path="/catalogconfiguration" element={<CatalogConfiguration/>} />
        <Route path="/paymentoptions" element={<PaymentOptions />} />
      <Route
        path="/businesstaxoptions"
        element={<BusinessSettingsTaxesPaymentsTaxOptions />}
      />
      <Route path="/businessprofile" element={<BusinessProfile />} />
      <Route path="/taxgroup" element={<Taxgroup />} />
    </Routes>
  );
}
