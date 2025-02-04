import { useState, useEffect } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Header from "./Component/header";
import Footer from "./Component/footer";

import Home from "./Pages/home";
import Login from "./Pages/login";
import Detail from "./Pages/detail";
import Admin from "./Pages/admin";
import About from "./Pages/about";

const App = () => {
  const [isHomeLoading, setIsHomeLoading] = useState(true);

  return (
    <Router>
      <AppContent
        isHomeLoading={isHomeLoading}
        setIsHomeLoading={setIsHomeLoading}
      />
    </Router>
  );
};

const AppContent = ({ isHomeLoading, setIsHomeLoading }) => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== "/") {
      setIsHomeLoading(false);
    }
  }, [location.pathname, setIsHomeLoading]);

  return (
    <>
      {!isHomeLoading && <Header />}
      <Routes>
        <Route path="/" element={<Home setLoading={setIsHomeLoading} />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/about" element={<About />} />
      </Routes>
      {!isHomeLoading && <Footer />}
    </>
  );
};

export default App;
