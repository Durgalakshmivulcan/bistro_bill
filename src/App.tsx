import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import PointOfSale from "./pages/PointOfSale";
import Login from "./pages/Login";
import CatalogDashboard from "./pages/CatalogDashboard";

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/catalogdashboard" element={<CatalogDashboard />} />
      <Route path="/" element={<Dashboard />} />
      <Route path="/pos" element={<PointOfSale />} />
    </Routes>
  );
}
