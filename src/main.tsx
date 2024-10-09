import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { AuthProvider } from "./provider/AuthProvider";
import { ModeProvider } from "./provider/ModeProvider";
import { SettingProvider } from "./provider/SettingProvider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SettingProvider>
      <ModeProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </ModeProvider>
    </SettingProvider>
  </StrictMode>
);
