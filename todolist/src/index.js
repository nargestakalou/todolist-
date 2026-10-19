import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// مقداردهی اولیه برای کاربر جدید (وقتی localStorage خالی است)
if (!localStorage.getItem("tasks")) {
  localStorage.setItem("tasks", "[]");
}
if (!localStorage.getItem("categoryCarts")) {
  localStorage.setItem("categoryCarts", "[]");
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <App />
)
