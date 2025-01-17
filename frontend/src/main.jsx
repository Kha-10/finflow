import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Router from "./routes/index";
import { ThemeProvider } from "./components/ui/theme-provider";
import { AuthContextProvider } from "@/contexts/AuthContext";
import CustomToaster from "./components/CustomToaster";

createRoot(document.getElementById("root")).render(
  <AuthContextProvider>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router />
      <CustomToaster/>
    </ThemeProvider>
  </AuthContextProvider>
  
);
