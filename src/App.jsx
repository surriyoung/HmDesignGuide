import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ColorGuide from "./pages/category1/ColorGuide";
import FontSizeGuide from "./pages/category1/FontSizeGuide";
import GridGuide from "./pages/category2/GridGuide";
import TableGuide from "./pages/category2/TableGuide";
import ButtonGuide from "./pages/category2/ButtonGuide";
import FormGuide from "./pages/category2/FormGuide";
import LayoutGuide from "./pages/category2/LayoutGuide";

const App = () => {
  return (
    <Router>
      <div className="main-wrapper">
        {/* Sidebar (Navbar) */}
        <Navbar />

        {/* Main Content */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/color" element={<ColorGuide />} />
            <Route path="/font-size" element={<FontSizeGuide />} />
            <Route path="/grid" element={<GridGuide />} />
            <Route path="/table" element={<TableGuide />} />
            <Route path="/button" element={<ButtonGuide />} />
            <Route path="/form" element={<FormGuide />} />
            <Route path="/layout" element={<LayoutGuide />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
