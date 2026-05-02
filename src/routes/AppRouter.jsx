import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "../pages/secretary/Dashboard";
import Patients from "../pages/secretary/Patients";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Dashboard />} />
        <Route path="/patients" element={<Patients />} />

      </Routes>
    </BrowserRouter>
  );
}