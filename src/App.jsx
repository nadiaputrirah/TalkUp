import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "flowbite-react";
import customTheme from "./theme";
import "./index.css";

import Navbar from "./view/components/layout/Navbar";
import Footer from "./view/components/layout/Footer";
import Home from "./view/pages/Home";
import Login from "./view/pages/Login";

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;