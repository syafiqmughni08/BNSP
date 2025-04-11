import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./pages/Dashboard";
import Registrasi from "./pages/dataPSB/Registrasi";
import About from "./pages/About";
import UpdateData from "./pages/dataPSB/UpdateData";
import DataSiswa from "./pages/dataPSB/DataSiswa";
import Home  from "./pages/"
import Login from "./pages/Login";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/registrasi" element={<Registrasi />} />
        <Route path="/about" element={<About />} />
        <Route path="/updatedata/:id" element={<UpdateData />} />
        <Route path="/data" element={<DataSiswa />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
