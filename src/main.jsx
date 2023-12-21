import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./Providers/AuthProvider";
import { router } from "./Routers/Router";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <RouterProvider router={router} />
        <Toaster />
      </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>
);
