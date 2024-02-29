import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/homePage/HomePage";
import LoginPage from "../pages/loginPage/LoginPage";
import RegistrPage from "../pages/registrPage/RegistrPage";

const Layout = () => {
  return (
    <main>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/registr" element={<RegistrPage />} />
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </main>
  );
};

export default Layout;
