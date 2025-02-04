import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./Component/header";
import Footer from "./Component/footer";

import Home from "./Pages/home";
import Login from "./Pages/login";
import Detail from "./Pages/detail";
import Admin from "./Pages/admin";
import About from "./Pages/about";

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
