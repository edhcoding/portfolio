import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ErrorBoundary } from "react-error-boundary";
import App from "./App.tsx";
import "./index.css";
import ErrorPage from "@/pages/ErrorPage.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ErrorBoundary fallbackRender={({ error }) => <ErrorPage error={error} />}>
      <App />
    </ErrorBoundary>
  </StrictMode>
);
