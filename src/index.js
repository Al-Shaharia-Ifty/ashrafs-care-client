import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import AuthProvider from "./Contexts/AuthProvider";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <QueryClientProvider client={queryClient}>
    <React.StrictMode>
      <AuthProvider>
        <App />
      </AuthProvider>
    </React.StrictMode>
  </QueryClientProvider>
);
