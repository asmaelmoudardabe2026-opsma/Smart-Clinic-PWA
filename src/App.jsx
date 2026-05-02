import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/layout/Sidebar";

import Dashboard from "./pages/secretary/Dashboard";
import Patients from "./pages/secretary/Patients";

function App() {
  return (
    <BrowserRouter>
      <div style={{ display: "flex", flexWrap: "wrap" }}>

        <Sidebar />

         <div style={{ flex: 1, padding: "20px" }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/patients" element={<Patients />} />
          </Routes>
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;