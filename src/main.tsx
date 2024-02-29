import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.scss";
import ReduxProvider from "./redux/ReduxProvider.tsx";
import { BrowserRouter } from "react-router-dom";
import CustomProvider from "./components/pages/provider/CustomProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ReduxProvider>
      <BrowserRouter>
        <CustomProvider>
          <App />
        </CustomProvider>
      </BrowserRouter>
    </ReduxProvider>
  </React.StrictMode>
);
