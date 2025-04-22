import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ManagePage from "../pages/ManagePage";
import NotFound from "../pages/NotFound";
import DimeFCD from "../pages/save/DimeFCD";
import DimeSave from "../pages/save/DimeSave";
import FundPage from "../pages/invest/FundPage";
import StockUSPage from "../pages/invest/StockUSPage";
import StockTHPage from "../pages/invest/StockTHPage";
import BondPage from "../pages/invest/Bond";
import GoldPage from "../pages/invest/GoldPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/save">
        <Route path="dime-save" element={<DimeSave />} />
        <Route path="dime-fcd" element={<DimeFCD />} />
      </Route>
      <Route path="/invest">
        <Route path="fund" element={<FundPage />} />
        <Route path="stock-us" element={<StockUSPage />} />
        <Route path="stock-th" element={<StockTHPage />} />
        <Route path="bond" element={<BondPage />} />
        <Route path="gold" element={<GoldPage />} />
      </Route>
      <Route path="/manage" element={<ManagePage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
