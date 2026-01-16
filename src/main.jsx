import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router/dom";

import "./index.css";
import { router } from "./Router/Routes.jsx";
import { ToastContainer } from "react-toastify";

import AuthProvider from "./Contexts/AuthProvider.jsx";
import { SkillProvider } from "./Contexts/SkillContext.jsx";
import { ProfileProvider } from "./Contexts/ProfileContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <SkillProvider>
        <ProfileProvider>
        <RouterProvider router={router} />
        <ToastContainer />
        </ProfileProvider>
      </SkillProvider>
    </AuthProvider>
  </StrictMode>
);
