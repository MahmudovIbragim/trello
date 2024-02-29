import { FC, ReactNode, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface TypeProvider {
  children: ReactNode;
}

const CustomProvider: FC<TypeProvider> = ({ children }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const isUser = localStorage.getItem("isUser");

  useEffect(() => {
    if (isUser && (pathname === "/" || pathname === "/registr")) {
      navigate("/home");
    } else if (!isUser && pathname === "/home") {
      navigate("/");
    }
  }, [isUser, pathname, navigate]);

  return children;
};

export default CustomProvider;
